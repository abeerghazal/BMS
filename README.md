# Building management System ![](https://i.imgur.com/mhUt79q.png):
<br />

## **The Problem** :no_entry_sign: :-

- Building owners and managers face hardships to manage users' services, their payment schedules, and their history manually. That would cause huge problems like wasting some time and effort. Managers encounter these problems to track the users' histories, and all of these operations are done with paperwork that is not durable.

- They find it hard to advertise available apartments, they would put a paper on the building to announce the available apartment or advertise it on Facebook

## **The solution** :bulb: :-

- Building owners and managers should harness technology to help them better manage their properties, also employing its advantages in durability by creating a web application to provide the specific requirements including a services list and database history for every user.

- A building management system helps property owners do just that. The software solution we’ll introduce you to today not only streamlines previously tedious administrative tasks, but the software also better engages residents and helps create a stronger sense of community. 

## **User Stories** :books: 

### **User who is an apartment owner** :house:
- As an apartment owner, I can view all services, With the ability to subscribe and unsubscribe to the service.
- As an apartment owner, I can view all bill details, and the ability to pay them.
- As an apartment owner, I can add, and view the complaint.
- As an apartment owner, I can all view all advertisements.
- As an apartment owner, I can add reviews



### **User who is a building owner & managers** :house:

- As a building owner & manager, I can view all services and have the ability to add, update or delete services.
- As a building owner & manager, I can add new users and view all users, and ability to disable some user
- As a building owner & manager, I can view user details when clicking on the user’s record
- As a building owner & manager, I can view all user's bills, mark a bill as paid, and filter bills by status(paid or not), date and user.
- As a building owner & manager, I can view all users' complaints filtered by (user, data) and mark a complaint as solved.
- As a building owner & manager, I can add edit(disable, edit content) and delete advertisements.
- As a building owner & manager, I can view all contact messages and reply to them(SMS, email).
- As a building owner & manager, I can view all reviews with the ability to disable a review.


## **User Journey**  :pencil2:

### **User who is As an apartment owner or a public user** :house:

- As a public user or an apartment owner, I can see the main page with a login button he can log in, Also there is some basic info about the building, advertisement, the building services, and available apartments, also I can see a video about the building, also there is a section to contact, the user can send messages to the admin owner. Then I can see a footer with a location map.
- As an apartment owner, I can see the main page with a login button, I can log in, then I can see the dashboard with many options, and personal info with the user transactions. if I click on bills a table of bills ordered by date will be shown with the ability to filter them. If I click on complaint I can see a form with two inputs and a button to submit the complaint. If I click on an advertisement I can see the available advertisement. If I click on contact I can see a form with three inputs and a button to submit the contact. Finally, log out by clicking on the logout button.

### **User who is an apartment owner** :house:

- As an apartment owner, I can log into my account, and I can see the dashboard with many options and some statistics of the site and tables. If I click on the services tab, it shows the services that the tower provides, and a button to move him to the “Add new services” page. If I click on the announcements tab, it shows the announcements of the site with buttons to edit or delete them, and a button to move him to the “Add new announcement” page. When the admin clicks on apartments he will go to the apartments page that shows a table with the username and apartments id and the phone of the user, when he clicks on add a new user I will go to a new page that has a form to add a new user with all details, when I click on bills tab, I can see a table that has apartments id and username and all services and the total price, when I click on complaints I will show the username of the user and the date and title of the complaints, when I click on advertisement tab, I can see the advertisement and the bio, the start date, end date, and two icons for delete and edit when I click on the contact tab, I will show a table that has a username of the users and his email and the messages and the phone number.

## **Design** :recycle:

[View Design](https://www.figma.com/design/4wyCkzIUAvSMcwpVkKeJ3i/BMS?node-id=0-1&node-type=canvas)
[View Documentation](https://docs.google.com/document/d/1aXlo1j7gs1-2OnGikyDRACQjDWBx8ujZe8uQtWl5oWg/edit?usp=sharing)


------------------------

## :pushpin: **How to Launch App Locally** :- 

*  clone this repo by typing this command in the terminal:  
`git clone https://github.com/abeerghazal/BMS.git`

*  Run `npm i` to install the packages for the app as general.

*  Run `cd client` and `npm i` to install the packages for the client- React Js.

### Database Setup  :clipboard: 

make sure you have installed PostgreSQL and pgcli 

```sql=
CREATE DATABASE {database name};
CREATE USER {user name} WITH superuser password {password}
ALTER DATABASE {database name} OWNER TO {user name};
```
- Test DB:
- Do the same as before but make sure to change the names.

* Run the following command in the database pgcli terminal  
`\i server/database/build.sql`
and the command 
`\i server/database/fakeData.sql`
to add fake Data

### **Environment variables:**
Environment variables are one of the ways we keep our product safe. If you want to access our app locally you will need to add your own.
- create .env file
- add your Environment variables
```sh
DEV_DB_URL= # Your development PostgreSQL connect
DATABASE_URL= # Your production PostgreSQL connect
SECRET_TOKEN= # Your token Secret key
```

### Start the App :electric_plug:

To start the App Locally you can start the server First then start client-side or vice versa!
> To run Server, In your terminal Type: 

    `npm run dev` then you should be able to go to [localhost](http://localhost:5000/) 
> To run client-side, In your terminal Type:    

    `cd client` => `npm start` then you will be able to run [localhost](http://localhost:3000/) 

Now you can view the app live in the Browser!:fire: 

You can use this phone number and password for Admin testing only :arrow_down: 
:iphone: Phone:`0591000100` 
:lock: Password:`password`

You can use this phone number and password for User testing only

:iphone: Phone:`0591000200` 
:lock: Password:`password`

Note: You need to install our technologies like React and Node and so on...

## **Technologies** :computer: :-
- FrontEnd: **React JS**
- BackEnd: **Node JS & Express JS**
- Database: **PostgreSQL**
- Styling: **CSS3**
- Libraries: **AntDesign**
- Others: **TypeScript**

## **Doctor of Project** :sunglasses::-

:round_pushpin:[Dr.Hatem Hammad]

## **Team Members** 👥 :- 
1. [Abeer Ghazal](https://github.com/abeerghazal) University ID: 220190504
2. [Lina Turban] University ID: 220190180
 
## **Resources** :-

- [Node.js](https://nodejs.org/en/)
- [Express.js](http://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [React.js](https://reactjs.org/)
- [Ant Design](https://ant.design/)