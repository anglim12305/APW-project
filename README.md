Global Survey Web Application README

Due to the time constraints, I was forced upon, I decided to create my own web application. Note: some of my functionality is not fully operational

The first portion of development was to design a model of what the team planned to implement. This was documented by the team leader.

•	In the planning stage I outlined a conceptual model, with collections and route functions and multiple statements on how to retrieve the data.  (See Anglim-OriginalTeamConceptual_Design README). This document was my own version of “gathering information”.  I have created another New_Conceptual_Design README.

•	The second stage was to design the database. This is the database that is associated with my web app. (See Anglim-DB_Design. README). 

•	The third stage was to define your Routes. (See Anglim-Routes.README)

•	The fourth stage Code and Implement web application pushed to Github/repository. 

OVERVIEW
I have a web application (Global Survey) that allows you to post, delete, view information by utilizing Express Node.js web application framework. The global survey web app is a message board to post information about a class survey. Express provides features to be used in designing a web application.  My application passes to and from MongoDB from an Express handler (EJS) template to generate HTML page. 
Go back to Login button, lets you Login. 
The register button will insert into the user collection. 
Login button to sign into web page authenticating user collection data. (this is not fully operational) It should register a user and post. 
Take your survey today button will redirect to a new page to enter questions related to the survey then update the articles collection.

INSTALLATION PROCESS 
I used Visual Studio and downloaded the specific requirements to implement Express. within Visual Studio I created a directory on my C:/ to install Express for my app to reside.  When you bring up Visual Studio you need to point to the directory to see all the required software installed by Express (Package. Lock.jsn, Package.jsn and server.js).
 
I installed locally Express Node.js to access and create my app: 
1.	npm init –y – This creates the package.json file and prompts you with specific information. I selected the defaults, so it created a server.js.  The server.js runs the node.
2.	 npm install express –save – This command saves all the information necessary to create a node server.
3.	npm i express mongoose ejs
4.	npm install mongoose –save --- This will allow me to connect to the database.
5.	npm i -save-dev nodemon (refresh auto) 
$ node server.js (name of my application/default server file) is a command that starts the app. 
6.	If you get missing dependencies, you need to install. (express, ejs, mongoose body-parser, bcrypt, password) you might need more depending your existing environment.
7.	It will prompt you to put in information to start the node server.
$npm run devStart (whatever you called the app server when installing or modify in server.js) 
 

DATABASE
Database Collections were created within my application by using mongoose. Mongoose is used to manage data relationships with NodeJS and MongoDB. When defining a connection to MongoDB it will allow you to connect to the database. Mongoose references Schemas, I created an ArticleSchema to add collection (articles), UserSchema to add user collection) to my blog database.  In Mongo Express you can see the database and the Collections defined within the web application.  

APPLICATION FUNCTIONALITY 
Server.js – This starts the web page on a defined port (this could be any port you want to reference). Start the server and enter in the URL 
It will prompt you to register a user click register and add container information. 
It will prompt you to login to app. Click Login and it will direct you to the article/home page.
The home page displays ALL articles. It calls a res/render () function to get all data in the articles database that has been posted. Since all the data is the same on each page, I store all the functionality within the /articles folder. Articles are all routed the together because the data is the same on every page displayed.  When adding a post, it will bring you to and new article page to add the container information. Every time you post, delete, edit a new article it will be refreshed to home page. If you do not want to post, you would cancel.



In Visual Studio I have multiple Directories/files ejs, json  

In Visual Studio structure:
/views
•	Login.ejs 
•	Register.ejs
        /articles
•	Formfields.ejs – container from group
•	Index.ejs – renders a new page and deletes or posts new articles. 
•	Views.ejs – renders article selected 
•	New.ejs – Posts new articles.
•	Show.ejs – shows article 

/routes
•	article.js- get new article, get edit by _id,

•	router put (find article)
•	router post (new article)
/subscription
/models
•	articles.js – calls mongoose schema to create new article data 
•	users.js – calls mongoose schema to create new user.
Server.js: 	Add: all const are required for app to run. Connect to mongoose and /app directory for URL to connect. App get finds all the articles. App.use defines my articles router. Listening port is what port you want this to run on. 
Package..json: script nodemon server.js (when running cmd npm -run (this is where the name of your server.js resides and any other information you want to add)
Package.lock.json – contains all the dependencies installed by Express



Containers:
Survey
Survey Containers:  
•	Title This is a required field about the post
•	Description- this container you can add additional info about your post but is not required.
•	Markdown – this container is required and contains detail about your post. It will continuously get updated every time you add to the post. 
Register  
Register Container:
•	User – name of user
•	UserEmail – Email sign on
•	UserPassword – password 



