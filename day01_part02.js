/// js env. ---> wiredTiger ///

let name= "noha"


print(name)



/// insert student 
db.students.insertOne({name:"ahmed", track:"ui", branch:"assuit"})// json object 

/// select * from students 
db.students.find()


/// create collection ---> instructors 



let instructorsArray=[{_id:6,firstName:"noha",lastName:"hesham",
                age:21,salary:3500,
                address:{city:"cairo",street:10,building:8},
                courses:["js","mvc","signalR","expressjs"]},
                
                {_id:7,firstName:"mona",lastName:"ahmed",
                age:21,salary:3600,
                address:{city:"cairo",street:20,building:8},
                courses:["es6","mvc","signalR","expressjs"]},
                
                {_id:8,firstName:"mazen",lastName:"mohammed",
                age:21,salary:7040,
                address:{city:"Ismailia",street:10,building:8},
                courses:["asp.net","mvc","EF"]},
                
                {_id:9,firstName:"ebtesam",lastName:"hesham",
                age:21,salary:7500,
                address:{city:"mansoura",street:14,building:3},
                courses:["js","html5","signalR","expressjs","bootstrap"]}
				
                ,{
	"_id": 10,
	"firstName": "badr",
	"lastName": "ahmed",
	"age": 22.0,
	"salary": 5550.0,
	"address": {
		"city": "cairo",
		"street": 10.0,
		"building": 8.0
	},
	"courses": [
		"sqlserver",
		"mvc",
		"signalR",
		"asp.net"
	]
},
{
	"_id": 2,
	"firstName": "mona",
	"lastName": "mohammed",
	"age": 21.0,
	"salary": 3600.0,
	"address": {
		"city": "mansoura",
		"street": 20.0,
		"building": 18.0
	},
	"courses": [
		"es6",
		"js",
		"mongodb",
		"expressjs"
	]
},
{
	"_id": 3,
	"firstName": "mazen",
	"lastName": "ali",
	"age": 30.0,
	"salary": 7010.0,
	"address": {
		"city": "cairo",
		"street": 10.0,
		"building": 5.0
	},
	"courses": [
		"asp.net",
		"mvc",
		"EF"
	]
},
{
	"_id":4,
	"firstName": "ebtesam",
	"lastName": "ahmed",
	"age": 28.0,
	"salary": 6200.0,
	"address": {
		"city": "mansoura",
		"street": 14.0,
		"building": 7.0
	},
	"courses": [
		"js",
		"html5",
		"signalR",
		"expressjs",
		"bootstrap",
		"es6"
	]
}];


/// insert many objects in instructors 

db.createCollection("instructors")

db.instructors.insertMany(instructorsArray) /// accept array of objects 



/// get all documents // select * from instructors 

db.instructors.find()


// list all collections 
show collections

// get collection names 
mycollections=db.getCollectionNames()
print(mycollections)



///  get info about collection 
db.getCollectionInfos({name:"instructors"})  // object 


/// 
db.instructors.drop()

db.instructors.insertMany(instructorsArray)




/// crud ? 


/// select  --> retrieve 

// select * from instructors 
db.instructors.find()   // select * from instructors 

/// select instructors id == 6 

db.instructors.find(
    {
        _id : 6
    }//  condition
    
   )  /// js object 
 
 /// select firstName , lastName from instructors where id = 6;



db.instructors.find(
    { _id : 6}, //  condition
   
    {   firstName:1 , lastName:1 } // projection 
    )  /// js object 



db.instructors.find(
    { _id : 6}, //  condition
   
    { firstName:1 , lastName:1 , _id:0} // projection 
    )  /// js object 



db.instructors.find(  /// find  ---> function in mongo --> get data from db
    {
     
        },  /// condition
    {
        firstName:0 , lastName:0
    
    }  /// projection
    
    
    )




db.instructors.find(
    {}, // condition 
    
    {} /// projection  ---> fields  ---> you want to display
    
    )







/// insert 
db.instructors.insertOne({
 
    name:"noha", track:"ui", branch:"assuit"
    })


db.instructors.insertOne({
    _id:50,
    name:"test", track:"ui", branch:"assuit"
    })

// update 



/// delete 























