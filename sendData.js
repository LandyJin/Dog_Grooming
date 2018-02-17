var express = require('express')
var bodyParser = require("body-parser");
var app = express()

//now any files in public are routed
app.use(express.static('public_html'))

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));

// REST endpoint for posting a new user
app.post('/survey', function (req, res, next) {
    let yearofbirth = req.body.yearofbirth;
    let dogs = req.body.dogs;
    let gender = req.body.gender;
    let desex = req.body.desex;
    let microchip = req.body.microchip;
    let myName = req.body.myName;
    let myEmail = req.body.myEmail;
    let phone =req.body.phone;
    let subject =req.body.subject;
    let myComments =req.body.myComments;

    //console.log(`Data includes: ${dayofbirth}, ${yearofbirth}, ${gender} and ${postcode}`);
    
    res.send(`
        <body style="color:#ff7733; background-color: #f2f2f2;">
        <h2>Dear ${myName}, Thank you for completing Dog Grooming feedback survey</h2>
        1. Your dog was born in <b>${yearofbirth}</b> <br><br>
        2. You dog called <b>${dogs}</b> <br><br>
        3. Your dog is a <b>${gender}</b> <br><br>
        4. Your dog have <b>${desex}</b> <br><br>
        5. Your dog <b>${microchip}</b> <br><br>
        7. Your email address is: <b>${myEmail}</b> <br><br>
        8. Your phone number is: <b>${phone}</b> <br><br>
        9. Your Comments: <br><br>
        <b>Subject: </b> ${subject}<br><br>
        <b>Comment: </b> ${myComments}<br><br>

        <h1>Feedback Success!</h1>
        </body>
    `);
});

app.post('/contact', function (req, res, next) {
    let myName = req.body.myName;
    let myEmail = req.body.myEmail;
    let phone =req.body.phone;
    let subject =req.body.subject;
    let myComments =req.body.myComments;

    //console.log(`Data includes: ${dayofbirth}, ${yearofbirth}, ${gender} and ${postcode}`);
    
    res.send(`
        <body style="color:#ff7733; background-color: #f2f2f2;">
        <h2>Dear ${myName}, Thank you for contact Dog Grooming</h2>
        1. Your email address is: <b>${myEmail}</b> <br><br>
        2. Your phone number is: <b>${phone}</b> <br><br>
        3. Your Comments: <br><br>
        <b>Subject: </b> ${subject}<br><br>
        <b>Comment: </b> ${myComments}<br><br>

        <h1>Email Success Send!</h1>
        </body>
    `);
});

app.post('/loginform', function (req, res, next) {
    
        let userName = req.body.username;
        let passWord = req.body.password;
        db.all('SELECT * FROM Login WHERE username ="'+userName+'" AND password = "'+passWord + '"', function(err, rows){
            
            if (rows.length == 0)
            {
                res.write('<html><body>');
                res.write('<h3>Sorry, your username and password are incorrect. Try again! </h3>');
                res.write('</body></html>');
                res.send();
            }
            else{

                res.status(200).redirect('/home.html');
            }
        });
    });


app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})