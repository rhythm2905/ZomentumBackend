
# Movie Ticket Booth Interface
Movie Ticket Booth is a REST Interface for buying, updating, deleting tickets to movie shows. This Application is designed in Node Js and database is managed using MongoDB. 
![](https://www.ticketonlinebooking.com/wp-content/uploads/2018/11/movie.jpg)

## Prerequisite Stack
1. NodeJs
2. MongoDB
3. Express
## Installation
Node Package manager is responsible tool to install and use all libraries and frameworks used in application.
#### Libraries/Framework to install:
- Express
- Mongoose    
- Body-parser    
- MongoDb     
- Mongoose-ttl
## Schema of Database
Database made by MongoDB consist of database named Zomentum with single collections named users.
- id : default
- Name : String format
- Phone Number : String format
- Timing : Number 2400Hrs Format
![](https://github.com/rhythm2905/ZomentumBackend/blob/master/ss/Captureschema.PNG)
## Checklist

  - [x] An endpoint to book a ticket using a user’s name, phone number, and timings.
  - [x] An endpoint to update a ticket timing.
  - [x] An endpoint to view all the tickets for a particular time.
  - [x] An endpoint to delete a particular ticket.
  - [x] An endpoint to view the user’s details based on the ticket id. 
  - [x] Delete ticket after 8 hours of ticket timing : Used Time to Live(TTL) feature of mongoose to delete documents after 8 hours of their timings.
## Running the code locally

To run the code locally please follow the given commands:
```

https://github.com/rhythm2905/ZomentumBackend.gitnpm install 
npm run start
```

To run the code for developing please follow the given commands:
```
https://github.com/rhythm2905/ZomentumBackend.git
npm install 
npm run dev
```

To test the code:
```
npm run test
```


## Postman Screenshots of Endpoints:
- Buying a Ticket
![](https://github.com/rhythm2905/ZomentumBackend/blob/master/ss/Capturepost.PNG)
- Delete a Ticket
![](https://github.com/rhythm2905/ZomentumBackend/blob/master/ss/Capturedelete.PNG)
- Show details of All Users of Same slot
![](https://github.com/rhythm2905/ZomentumBackend/blob/master/ss/Captureshow.PNG)
- Update timing 
![](https://github.com/rhythm2905/ZomentumBackend/blob/master/ss/Captureput.PNG)
-Get all buyer details
![](https://github.com/rhythm2905/ZomentumBackend/blob/master/ss/Captureget.PNG)
