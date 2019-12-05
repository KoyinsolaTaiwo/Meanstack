const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')


const PORT = 3000
const api = require('./routes/api')
const app = express()

//app.use(bodyParser.urlencoded({extended: true}))
//app.use(bodyParser.json())
const cors = require('cors');
app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});


app.use('/api', api)

app.get('/', function(req, res){
    res.send('Hello from server')
})

//app.get('*',(req, res) => {
//    res.sendFile(path.join(__dirname, 'dist/mean-secure/index.html'));
//});

    app.get('/serverhtml/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
    });

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());


    app.post('/name', (req, res) => {
    console.log("post method");
    console.log(req.body.email);
    res.send('The artist '+ " " + req.query.artistname +' sang the song' + " " + req.query.songname  + "<br /> " +'Thank you '  + " " + req.query.username + "<br />"+ 'We will email ' + " " + req.query.email +" "+ ' shortly' );
    })


    app.get('/name', (req, res) => {
        console.log("get method");
        console.log(req.query.email);
        res.send('The artist '+ " " + req.query.artistname +' sang the song' + " " + req.query.songname  + "<br />" +'Thank you '  + " " + req.query.username + "/<br />"+ 'We will email ' + " " + req.query.email +" "+ ' shortly' );
        })
        


app.get('/api/artists', (req,res,next) =>{
    const artists = [
    {
        "Artist Name":"T-Pain",
        "Top Song":"I'm Sprung",
        "Artist":"https://peopledotcom.files.wordpress.com/2019/10/tpain.jpg"
    },
    {
        "Artist Name":"Trey Songz",
        "Top Song":"Slow Motion",
        "Artist":"http://static1.dallasblack.com/Articles/TreySongz08_article.jpgg"
    }
    ];
    res.status(200).json({
    message: 'Posts fetched succesfully!',
    artists: artists
    });
    })
    
app.listen(PORT, function(){
    console.log('Server running on localhost: ' + PORT)
})