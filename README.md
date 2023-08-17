 
 # node and npm versions 
 node version is 18.16.1 and the npm version is 9.5.1
 # How to create the react project 
 you need to run the command npx create-react-app your-project-name
 # git repository link 
 this is main repository link https://github.com/umersaeed98/json-integration
 # How to clone the git repository 
 git clone git@github.com:umersaeed98/json-integration.git
 # first step after cloning the clone the repo 
 open the project in the VS Code but you can't be able to start because the project didn't have the node_modules 
 you need to install the node_modules by using npm i command it will take some time after somethime node_modules install successfully and then you can start your project . 
 # How to start the project 
 just run the command npm start to start the project .
 # What is the working of that Application 
 The Appliction  have a table of comments data that i fetch from the Fake Api this is a large data that's why ill use pagination for that .
 # How the Pagination Working 
 I have used the react-paginate library of React for that . 
 # How many components i have created in the application?
 There are two components i have created to do that i  have created a folder named component in the src file and inside that main component folder i have created two inner folders filterInput and commentsTable in which i have placed the two components CommentsTable and FilterInput .
 # What are the working of Components 
 The CommentsTable is creating a table of Data which is i am fetching from the FakeApi and the FilterInput is filtering the data on the press of "Enter" Key 