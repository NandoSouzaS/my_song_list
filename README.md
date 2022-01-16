# My music List.

## Description.

This project is all about music. The intention is to build a simple interface to let the user search all songs available on Deezer api. From this, the user can mark as Favorite any music he want and navigate through them clicking on the favorite button.

## Objective of the project.

I first started this project trying to understand about how to comunicate to a real api. But, instead of using the Deezer api itself, i used a RapidApi which is conected to the Deezer, excluding the need to host my application on a real server. So i use the data from this api and persist them in a JSON-server running locally. So, to make it clear, my idea is not to make a real site, but to learn how to deal with data coming from a api and transform them into interactable components which is the tracks displayed as cards-like content.

## Visual demonstration 

This is the search engine. it get the data from Deezer and map it as song cards

![search](https://user-images.githubusercontent.com/87328452/149673856-398b7644-3766-470b-b1bf-06c8f1506b23.gif)


Favorite tracks

![favorites](https://user-images.githubusercontent.com/87328452/149673642-2bfb289e-9507-435b-8f30-1a70d41fa4c0.gif)

marking and unmarking a track as favorite and exposing it on favorite menu

![changing fav](https://user-images.githubusercontent.com/87328452/149673672-ad8ffb36-0478-4a5f-9f05-fde5fe6906e2.gif)


## Tecnologies used.

to develop this project I used React.JS with the following libraries: 

### JSON-Server
 Used to make a fake rest-api who persist the deezer data in a .JSON file locally.
 
### Styled-Components
 Used to make the CSS of all components.
 
### Axios
 Used as an HTTP Client to deal with RapidApi and the JSON-server.
 


## How to boot the application on your browser.

After downloading this repository, you have to open it on a code editor, then open two terminals, one to run the JSON-server and another to run the react aplication.

### Running the JSON-Server
 To do this, you need to go into my_song_list/data, then run the comand `npm start`, so it can start watching the db.JSON and display it on http://localhost:3001.
 
### Running the React App
For this, you need to be at the project main folder and run the `npm start`, so it can open the app on http://localhost:3000, displaying it on your browser 


# About the dev

I'm a 20 years old Front-end dev passionated about Javascript and its ecosistem. Enjoy your time testing, experiencing, and even making changes in my other repositories.
For personal info, check LinkedIn: [https://www.linkedin.com/in/jos%C3%A9-fernando-de-andrade-souza-059323215/](https://www.linkedin.com/in/jos%C3%A9-fernando-de-andrade-souza-059323215/)



See ya o/
