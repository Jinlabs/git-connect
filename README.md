<h1 align="center">Git Connect </h1>

<p align="center">
    <img width="700" height="350" src="images/logo.png" alt="App Logo" />
</p>

<h2>Table of Contents</h2>

- [Introduction](#introduction)
- [Features](#features)
- [Theme](#theme)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Contributors](#contributors)


## Introduction

A Github App for posting the open source contributions on Linkedin for every pull request. The main goal of this project is to boost the motivation of the contributors. It will also help in creating awareness among students regarding the Open source software development.  

## Features

- Provides the diff of the pull requests opened.
- Provides the Organization Url, where the PR was opened.
- Response time for publishing post is negligible. 

## Theme
Online Educational System and it's Advancements

## Technology Stack
- NodeJS
- Python3
- HTML/CSS
- EJS
- Probot

## Installation
1. Clone this Repository.
2. Setup the NodeJS environment for  Linkedin Sign in page by moving to its directory (git-connect/linkedin-signin) and then running the following instructions:-
    ```bash
    npm i
    ```
3. Create the linkedin app for your profile and get client the id and secret from the Auth section and enter it in the config.js (git-connect/linkedin-signin/config.js) 
   ```bash
    node index
    ```
4. Open localhost:3000 on your browser. 
5. Sign in with your linkedin account and get the access token from the terminal.
6. Put the value of the access token in API.js (git-connect/linkedin-signin/lib/API.js) and then click on sign in to get the profile id from the terminal. 
7. Put the values of access token and profile id in the server.py (git-connect/Post-to-Linkedin/server.py)
8. Install the requests from Pypi:-
    ```bash
    pip install requests
    ```
9. Run the probot app locally by using :-
    ```bash
    npm start
    ```
10. Install the github [app](https://github.com/apps/post2linkedin) and choose all repositories option when prompted.
11. Make a PR and then check the linkedin post on your profile.  


## Contributors:

Team Name: Teleporters
* [Ashish Malik](https://github.com/ashish493)
* [Aniket Prakash](https://github.com/anik31)
