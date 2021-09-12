import subprocess

from pandas.core.algorithms import take
import wolframalpha
import pyttsx3
import tkinter
import json
import random
import operator
import speech_recognition as sr
import datetime
import wikipedia
import webbrowser
import os
# import winshell
import feedparser
import smtplib
import ctypes
import time
import requests
import shutil
from twilio.rest import Client
from clint.textui import progress
from ecapture import ecapture as ec
from bs4 import BeautifulSoup
# import win32com.client as wincl
from urllib.request import urlopen
import pandas as pd

df = pd.read_csv("./Desktop/info.csv")


class User:
    def __init__(self, name, code, disability, cheq, sav, cred):
        self.name = str(name)
        self.passcode = str(code)
        self.disability = str(disability)
        self.chequing = cheq
        self.saving = sav
        self.credit = cred


engine = pyttsx3.init('nsss')
voices = engine.getProperty('voices')
engine.setProperty('voice', voices[0].id)


def speak(audio):
    engine.say(audio)
    engine.runAndWait()


def takeCommand():
    r = sr.Recognizer()
    with sr.Microphone() as source:

        print("Listening...")
        r.pause_threshold = 1
        audio = r.listen(source)

    try:
        print("Recognizing...")
        query = r.recognize_google(audio, language='en-in')
        print(f"User said: {query}\n")

    except Exception as e:
        print(e)
        print("Unable to Recognize your voice.")
        return "None"

    return query


def wishMe():
    hour = int(datetime.datetime.now().hour)
    if hour >= 0 and hour < 12:
        speak("Good Morning, Welcome to Scotia Lite!")

    elif hour >= 12 and hour < 18:
        speak("Good Afternoon, Welcome to Scotia Lite!")

    else:
        speak("Good Evening, Welcome to Scotia Lite!")


def usrname():
    global current_user
    global df

    speak("What is your username?")
    uname = takeCommand().lower().strip()
    gotName = False

    i = 3
    while i > 0:
        if uname in list(df['Name']):
            df = df[df.Name == uname]

            # Make user class
            current_user = User(
                df['Name'][0],
                df['passcode'][0],
                df['Disability'][0],
                df['chequing'][0],
                df['saving'][0],
                df['credit'][0]
            )
            gotName = True
            break
        else:
            speak("That name hasn't registered with Scotia Lite. Can you repeat your name?")
            uname = takeCommand().lower().strip()
        i = i - 1

        if i == 0:
            speak("Wrong username entered 3 times. We're connecting you to one of our employees to provide better support.")
            return False

    if gotName:
        speak("Welcome "+(current_user.name))
        return True


def security():
    speak("Make sure there is no one around you, if you need a moment say moment, otherwise say continue")
    moment_response = takeCommand()

    while moment_response == "moment":
        speak("okay take your time, I will ask you again in 10 seconds")
        time.sleep(10)
        speak("Make sure there is no one around you, if you need a moment say moment, otherwise say continue")
        moment_response = takeCommand()
    
    if moment_response == "continue":
        speak("Please tell me your four digit mobile banking pin code?")
        access_code = takeCommand()
        if access_code == current_user.passcode:
            speak("Security Activation Passed.")
            return True
        else:
            speak("Security Activation Failed.")
            return False


def bankingActivities():
    firstTime = True
    while True:
        if firstTime:
            speak("Hello, "+current_user.name + \
                  "We are ready to help you. Would you like a list of options for your banking needs. Reply with yes or no.")
            option_response = takeCommand().lower()
            firstTime = False
        else:
            speak("What would you like to do?")
            user_command = takeCommand().lower()

        if option_response == 'yes':
            speak("Here are your options!")
            option_response = ""
        else:
            if user_command == "send money":
                speak("Sending money, do you know who you want to send money to?")
                contact = takeCommand().lower()
                speak("Please tell the amount in dollars that you would like to send")
                amount = takeCommand().lower()
                
                # if contact in list(df['Name']):
                #     print("siuuuuuu")
                speak("Sending {0} dollars to {1}".format(amount,contact))
            elif user_command == "check balance":
                speak("Which account do you want to check balance of?")
                account = takeCommand.lower()

                if account == "checking":
                    money = current_user.chequing
                elif account == "saving":
                    money = current_user.saving
                else:
                    money = current_user.credit
                
                speak("Your {0} account has {1} dollars".format(account, money))
            elif user_command == "pay bill":
                speak("Which bill would you like to pay?")
                bill_name = takeCommand.lower()
                speak("How much would you like to pay?")
                amount = takeCommand.lower()

                speak("Paying {0} dollars to {1}".format(amount,bill_name))
            elif user_command == "contact":
                speak("Connecting you with a ScotiaBank employee right now!")
                break
            elif user_command == "quit":
                speak("Quitting the application. See you again!")
                break


def clear(): return os.system('clear')

def run():
    r_code = True

    clear()

    # Wish the user in the beginning.
    r_code = wishMe()

    # Ask username
    r_code = usrname()
    
    # Authenticates user by asking and checking the passcode
    if r_code:
        r_code = security()
    else:
        return

    # Provide banking services through voice control
    if r_code:
        r_code = bankingActivities()
    else:
        return


if __name__ == '__main__':
    run()

    