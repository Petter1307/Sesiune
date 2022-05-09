const express = require('express');
const fileUpload = require('express-fileupload');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const piexif = require('piexifjs');
const fs = require('fs')

const app = express();
console.log("1")

// default options
app.use(fileUpload());

app.get('/',(req,res) =>{
    res.sendFile(__dirname + '/index.html');
})


app.post('/', function(req, res) {
  let sampleFile;

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  sampleFile = req.files.sampleFile;  // variabila in care se afla fisierul.
  sampleFile.mv(__dirname + '/uploads/' + 'in.jpg',(err)=>{
    res.send(err);
  })
  var file1 = "uploads/in.jpg";
var file2 = "/uplodas/out.jpg";

var jpeg1 = fs.readFileSync(file1);
var data = jpeg1.toString("binary");

var exifobj = piexif.load(data);

console.log(exifobj);

});











app.listen(process.env.PORT || 8000, ()=>console.log(`link: http://localhost:8000`))
