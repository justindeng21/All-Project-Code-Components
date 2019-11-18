
//server stuff
const express = require('express');
const bodyParser = require('body-parser');
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//

////////////////////////////////////////////////
/*
	Database connection to a mySQL database
*/

const mysql = require('mysql');  //mysql node driver
var connection = mysql.createConnection({	
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'CUThere',
})
connection.connect()
////////////////////////////////////////////////

app.use(express.static('public'))


////////////////////////////////////////////////
/*
	request to home page
*/
app.get('/',function(req,res)
{
	res.sendFile(__dirname + "/home.html")
})

app.get('/home',function(req,res)
{
	res.sendFile(__dirname + '/home.html')
	connection.query('select * from eventDetails', function(err,rows, fields){
		if(err) 
		throw err
	
		//console.log(rows[0])
	})
})
////////////////////////////////////////////////



////////////////////////////////////////////////
/*
	request to application
*/
app.get('/application',function(req,res)
{
	res.sendFile(__dirname + '/application.html')
})


app.post('/application/done',function(req, res){
	const title = req.body.title
	const building = req.body.building
	const roomNumber = req.body.roomNumber
	const month = req.body.month
	const day = req.body.day
	const hour = req.body.hour
	const min = req.body.min
	const timeOfDay = req.body.timeOfDay
	console.log(title)
	console.log(building)
	console.log(roomNumber)
	console.log(month)
	console.log(day)
	console.log(hour)
	console.log(min)
	console.log(timeOfDay)
	res.end()
})
////////////////////////////////////////////////

app.listen(3000)
console.log('Server is being hosted on port 3000')
