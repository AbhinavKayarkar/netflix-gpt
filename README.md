# Netflix + GPT

- It is a netflix clone app with superpower of the gpt for suggesting the movies.

# Features

    - Login/signup
        - sign in form
        - redirect to browser page

    - browser page
        - Header
        - Main Movie
            - Tailer in Background
            - Title and Description
            - Movie Suggestion
                - MovieList * n

    - GPT
        - search bar
        - Movie Suggestion

# Steps

1.  Create a React app using

    - npx create-react-app netflix-gpt

2.  Downgrade to react 18 version for compatibility by command

    - npm install react@18 react-dom@18

3.  Remove all unnessay code and install the Tailwaind CSS for design by reading documentation.

4.  Create folder and file structure

5.  Inregrate routing in project by using react-router-dom library

    - npm install react-router-dom

6.  Make the router in Body component and get the links for logo and bg image from official website.

7.  Position all images and form in login page properly by using the "abolute" posiiton.

8.  using a gradient in login for styling

9.  Create the validate function in utils folder for form validation using regex expression

10. using a useRef() hook for the reference the input element in form & conditional rendering in the form fields

11. set-up the firebase for backend

    # firebase

        1. login to the firebase
        2. create new project
        3. chosse web app option
        4. follow step over firebase and below to set-up and deploy

        - npm install firebase
        - npm i -g firebase-tools
            -above command won't work then use below command:
            -   sudo chown -R $(whoami) /usr/local/lib/node_modules
                sudo chown -R $(whoami) /usr/local/bin
                npm i -g firebase-tools
        -firebase login    =={do the login procedure}
        -firebase init
            - Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys.
        -configuration of firebase
            - What do you want to use as your public directory? *build*
            - Configure as a single-page app (rewrite all urls to /index.html)? *No*
            - Set up automatic builds and deploys with GitHub? *No*
                   - Writing configuration info to firebase.json...
                    -Writing project information to .firebaserc...
        - build the project by
            - npm run build
        -to deploy web app on firebase
            - firebase deploy
                - it will Hoisting URL for app  like : { https://netflix-gpt-9e6d4.web.app}

12. Now create a user - sign-up && sign-in functionality in our webapp

13. --> Authenticate with Firebase using Password-Based Accounts using Javascript

    - Understand Sign-in && Sign-up API for the firebase. And check whether it is available in authenticate tab or not.

14. Integrate Redux Toolkit and React-Redux in our project

    - npm install @reduxjs/toolkit
    - npm install react-redux

15. Get the currently signed-in user to add/remove user data

    - onAuthStateChanged API

16. navigate the to user /browse if successful sign-up/sign-in , else show error

17. Update a user's profile (photo, displayName), fixing the bugs if any
    - updateProfile API in firebase

18. Bug fix : 
    - without login the user can acess the /browse, so we have to implement the navigation logic inside the *onAuthStateChage API* in header.js component
    - clean up function called unsubscribe to be called in useEffect for unMounting the component 
19. Make the constant file in project to store all the constatnt, url, string in centeral place 
