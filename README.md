# Project Two - Dapper Tipples

## Description

Project Two was the creation of a webpage that displays information from an API in a multi page format using React.


## Deployment Link

https://dapper-tipples.netlify.app/


## Instructions 

Click and explore, no packages need to be installed. Link above will take you straight there and you can browse at your heart's content, you can use the Menu in the navbar. This code is hosted on Netifly. Have fun!


## Timeframe & Working Team
THe timeframe of this code was 2 days. Wednesday afternoon 22nd of November to Friday midday on the 24th. 
This was was a pair-coded project between Benedict Norton and Alfred Shaw

## Technologies used
### Technologies used:
VS Code
Photoshop
Netifly
Opera browser (Chromatic)

### Packages for VS Code used: 
React
React Router Dom
React Bootstrap
Sass

### Languages used:
HTML
JavaScript
CSS (with Sass)

## Brief
This project was set to demonstrate our skill in using React framework and extract information from a foreign API; combining those to create a functioning website that displays said information.

## Requirements:
Create a working application hosted on Netifly.
The application must make use of an API and process the data in some way.

## Planning
We had a lengthy discussion about what kind of API we wanted to use and finally settled on a cocktail database (This API has a free to use setting which gave us 100 recipes. But with the condition that it could not be used to monetise our application, OR be hosted online). I gave the admin of the API a quick email to inform them of our use and that the site will be hosted online for educational purposes; which they gladly agreed to.

We worked together on some parts, then split the load to make better use of the time. At this point Alfred focused more on logic handling and site navigation; as a few things were interconnected. I handled styling and site/ individual page layout.

### Wireframe
The first step in planning was generating a wireframe for the front end of the website. The wireframe consists of the different pages that were represented by layers on photoshop.

![layout](https://github.com/player1xs/Space-Invaders/assets/148089820/21b32967-b154-411a-b0ab-53f7bf2d4129)

![wire1](https://github.com/player1xs/Space-Invaders/assets/148089820/4b3d9bf6-0f00-4b68-9483-4d74e80ceab0)
![wire2](https://github.com/player1xs/Space-Invaders/assets/148089820/52e3879f-6084-455c-96ae-f719265f3a93)
![wire3](https://github.com/player1xs/Space-Invaders/assets/148089820/2ebf5fce-dc66-4917-bde4-15f92beb5b7a)


### Pseudocode
Due to minimal time and the simple nature of our application, the pseudocode is more of a to-do list; as most of the structures used in this project are known modules and functions already built into the framework being used.

![pseudo](https://github.com/player1xs/Space-Invaders/assets/148089820/898da61a-888a-4d14-b16c-a7b0b7e5e816)

## Build/Code Process
THE BELOW PARTS ARE ONLY WHAT I HAVE WORKED ON MYSELF, OR COLLABORATIVELY WITH ALFRED. TO SEE ALFRED’S SOLO INPUTS PLEASE REFER TO HIS README.

### The Backbone
First we set out to create the backbone of the page; this included creating several component pages along with the main loader and path system. The main loader is used for navigating the page and loading the required content when requested. The React-router-dom allows us to use this and create paths for the site to follow, as shown in the function.

![react path](https://github.com/player1xs/Space-Invaders/assets/148089820/8b15d06f-18d3-46df-a5ae-d9318c4c2b7c)

For the API information extraction, we used the following code:

![loaders](https://github.com/player1xs/Space-Invaders/assets/148089820/3683f472-d897-45e6-8914-1368b931171b)


### Design and Layout
Due to the short nature of the project, Alfred and myself split up the next few tasks. Him focusing on working on logic, functionality, and navigation of the page; along with a fun 404 page and random button for the index.

I worked on setting up a navigation bar first; once all the logic and paths were set up. The idea here was to have a static header navigation bar on fullscreen. I added a dynamic function in that when the window is reduced in size the navigation links would disappear and turn into a burger menu, which when clicked will open a panel on the left of the screen with a menu in column styling. (there is a small bug here at times; sometimes the headers not disappearing and sometimes the burger menu not opening; part of my upcoming improvements)

  ![page code](https://github.com/player1xs/Space-Invaders/assets/148089820/c4afb701-d28a-4b22-8a12-bd68a3bcff28)


![home](https://github.com/player1xs/Space-Invaders/assets/148089820/fe328a9c-5e5d-41b9-ae82-2e5a8fc013a5)




Next, I moved onto finding a general theme for the page: Colour palette, imagery, etc..
To ensure there was a solid cohesiveness through the entire page; from landing page (seen above) through the index and single item page.

### INDEX PAGE:

Using a fair bit of Bootstrap and Sass wizardry to get the layout in place. I created an overflow container which would hold all 100 cocktails. In this container, you can scroll without the page moving; which reduced any conflicts with scrolling for header or footer, or having to scroll endlessly to return to the filter options

Using a well spaced flexbox design, we managed to get a clean layout; with each cocktail being its own <div> container to manipulate. 
To keep the page nice and clean we decided to only show the images of the drinks on the index page; but, when hovered over, would reveal the cocktail name.

In the example below you can see the filter option in line with layout and style of the index page. (hovering over the second image, revealed a translucent layer.

![index](https://github.com/player1xs/Space-Invaders/assets/148089820/f5232914-ae39-47e8-a469-d64d929bda4b)

![style code](https://github.com/player1xs/Space-Invaders/assets/148089820/c3224288-2cab-4f92-b13f-d584b3ef0a3c)

As seen above, we also kept the styling separated by page equal to the .jsx files for a cleanliness if anything needed changed. And if any deeper look at styling code is needed, please refer to the .sass files as needed.

### SINGLE PAGE

Next was setting an elegant design of the individual cocktail page. Pulling more information from the API, I settled on below. Again, using several containers, and <divs> to get the best look. Additional information from API now included an ingredients list and how-to description.

![single](https://github.com/player1xs/Space-Invaders/assets/148089820/41ae3ca1-7c57-4cfd-9e05-9f85f7d7b976)

Hit the back button and we return to the index page.




## Challenges
The biggest challenge of this project was how the information was stored on the API, which Alfred found a fantastic roundabout way of accessing, after we banged our heads together for some time. Also using the React framework for the first time without support proved a little challenging.
The tight time-frame was overly bad; but some of the work was a bit rushed; and we wanted to polish some of the code and functionality and fix some bugs. After separating the work well between us; some parts needed to be finished by one person before the other could continue. With the short time-window, this ended in a few stop-and-gos. And didn’t allow for us both to fully work aspects; so we worked on our strengths instead.

## Wins
Getting more comfortable with React Bootstrap and Sass made this much more dynamic and fun than using vanilla CSS. And between the two of us we managed to figure out any issues that popped up that may have stumped us; and therefore not asking for help from our lecturers.


## Takeaways
After coding along in class and then going away writing the React Framework with no support was fantastic. It gave me a much deeper understanding rather than just typing along. Things really clicked. 
Also learned that I have only scratched the surface of Bootstrap and Sass. There is a lot more to play with; which I am sure I will tackle going forward.


## Bugs
Not a bug per se; when filtering by spirit category there is a huge disparity between how many callbacks one gets (for example under whiskies; there are only 3). This also messes up the styling a little. But, this comes down to using a free version of the API, which only gave us the first 100 drinks from their list.
Some single drink containers aren’t super dynamic if the how-to description is extremely long. And appears the spill over the container.
As mentioned, the burger menu for the nav bar is a little buggy when the screen size shrinks.

## Future Improvements
Fixing bugs above.
Making the page more dynamic when switching to phone or tablet size.
Adding a search bar function.
Add additional pages with information on ingredients or history of drink etc.
