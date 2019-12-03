//server stuff
const express = require('express');
const bodyParser = require('body-parser');
let app = express();
app.use(bodyParser.json());
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }));
//

console.log('Directory name: '+__dirname)

////////////////////////////////////////////////
/*
	Database connection to a mySQL database
*/

const mysql = require('mysql');  //mysql node driver
var connection /*This variable will be used in every query*/ = mysql.createConnection({	
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'CUThere',
})
connection.connect() 

////////////////////////////////////////////////

function getMonth(month)
{
	if(month == 'January')
		return '1'
	if(month == 'Febuary')
		return '2'
	if(month == 'March')
		return '3'
	if(month == 'April')
		return '4'
	if(month == 'May')
		return '5'
	if(month == 'June')
		return '6'
	if(month == 'July')
		return '7'
	if(month == 'August')
		return '8'
	if(month == 'September')
		return '9'
	if(month == 'October')
		return '10'
	if(month == 'November')
		return '11'
	if(month == 'December')
		return '12'
}

function getMilitaryTime(time, timeOfDay)
{
	if(timeOfDay == 'PM' && time != 12)
		return parseInt(time) + 12
	else return parseInt(time)
}


app.use(express.static('public')) // forces external files to be inside /public


////////////////////////////////////////////////
/*
	request to home page
*/
app.get('/',function(req,res)
{
	connection.query('select * from eventDetails', function(err,rows)
	{
			if(err)
				throw err
			else
			res.render('home', { stringifedObject : JSON.stringify(rows)})
				console.log(rows[0])
	})
})

app.get('/home',function(req,res)
{
	connection.query('select * from eventDetails', function(err,rows)
	{
			if(err)
				throw err
			else
			res.render('home', { stringifedObject : JSON.stringify(rows)})
				//console.log(JSON.stringify(rows[0]))
	})
})
////////////////////////////////////////////////


////////////////////////////////////////////////

app.get('/events',function(req,res)
{
	connection.query('select * from eventDetails', function(err,rows)
	{
			if(err)
				throw err
			else
			res.render('events', { stringifedObject : JSON.stringify(rows)})
				//console.log(JSON.stringify(rows[0]))
	})
})

////////////////////////////////////////////////


////////////////////////////////////////////////
/*
	request to application html
*/
app.get('/application',function(req,res)
{
	res.sendFile(__dirname + '/public/html/application.html')
})



app.post('/application/done',function(req, res){

	const month = req.body.month
	const day = req.body.day

	var hourStart = req.body.hourStart
	const minStart = req.body.minStart
	const timeOfDayStart = req.body.timeOfDayStart

	var hourEnd = req.body.hourEnd
	var minEnd = req.body.minEnd
	const timeOfDayEnd = req.body.timeOfDayEnd

	var timeHourStart = getMilitaryTime(hourStart,timeOfDayStart)
	var timeHourEnd = getMilitaryTime(hourEnd, timeOfDayEnd)
	

	var timeStart = timeHourStart.toString() + ':' + minStart + ':00'
	var timeEnd = timeHourEnd.toString() + ':' + minEnd + ':00'
	var date  = '2019-' + getMonth(month) + '-' + day
	
	var eventID_ = Math.floor(Math.random()*100000+1)
	var eventID = eventID_.toString()

	var dbQuery = 'INSERT INTO eventDetails (eventID, eventName, dateOfEvent, timeStart, timeEnd, eventDescription,organizerID, location, rsvp)' +
	' VALUES (' +eventID+",'"+ req.body.title+"','"+ date + "','" + timeStart + "','" + timeEnd+ "','" + req.body.description +"'," + '1' + ",'" + req.body.building + "'," + "FALSE" + ");"

	connection.query(dbQuery, function(err,rows)
	{
		if(err)
			throw(err)
	})
	res.end()
})
////////////////////////////////////////////////

app.listen(3000)
console.log('Server is being hosted on port 3000')


////////////////////////////////////////////////
/*
	request to images
*/
app.get('/cutherelogo',function(req,res)
{
	res.sendFile(__dirname + '/public/images/cutherelogo.png')
})

app.get('/koelbel',function(req,res)
{
	res.sendFile(__dirname + '/public/images/koelbel.png')
})

app.get('/ticket',function(req,res)
{
	res.sendFile(__dirname + '/public/images/ticket.png')
})

app.get('/umc',function(req,res)
{
	res.sendFile(__dirname + '/public/images/umc.png')
})

app.get('/eccr',function(req,res)
{
	res.sendFile(__dirname + '/public/images/eccr.png')
})

app.get('/university_logo',function(req,res)
{
	res.sendFile(__dirname + '/public/images/university_logo.png')
})

app.get('/duane',function(req,res)
{
	res.sendFile(__dirname + '/public/images/duane.png')
})

app.get('/farrand',function(req,res)
{
	res.sendFile(__dirname + '/public/images/farrand.png')
})

app.get('/hellems',function(req,res)
{
	res.sendFile(__dirname + '/public/images/hellems.png')
})

app.get('/humanities',function(req,res)
{
	res.sendFile(__dirname + '/public/images/humanities.png')
})

app.get('/math',function(req,res)
{
	res.sendFile(__dirname + '/public/images/math.png')
})

app.get('/norlin',function(req,res)
{
	res.sendFile(__dirname + '/public/images/norlin.png')
})

app.get('/rec',function(req,res)
{
	res.sendFile(__dirname + '/public/images/rec.png')
})
////////////////////////////////////////////////