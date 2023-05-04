const express = require('express');
require('./db/config')
const cors = require("cors");
const app = express();
const Employee_data = require('./db/Employee_details');
const Employee = require('./db/signup');
var multer = require('multer');
const bodyParser = require('body-parser');

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());
app.use(express.json());
app.use('/uploads',express.static('uploads'))

const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, "uploads")
        },
        filename: (req, file, cb) => {
            cb(null,  file.fieldname+'-' + Date.now() + '.jpg' )
        }
    })
}).single("image")

app.post('/register', async (req, res) => {
    let employee = new Employee(req.body);
    let result = await employee.save();
    // result=result.toObject();
    res.send(result);
    console.log(req.body)
})

app.post('/login', async (req, res) => {
    if (req.body.email && req.body.password) {
        let employee = await Employee.findOne(req.body).select("-password");
        if (employee)
            res.send(employee);
        else
            res.send({})
    }
})
app.post('/details', upload,async (req, res) => {

    let employee = new Employee_data({
        name:req.body.name,
        designation:req.body.designation,
        lastcompany:req.body.lastcompany,
        experience:req.body.experience,
        email:req.body.email,
        image:req.file.path
    });
    let result = await employee.save();
    res.send(result);
    console.log(req.body)
    // console.log(req.body,req.file);

})
app.get("/showdetails", async (req, res) => {
    let employee = await Employee_data.find();
    if (employee.length > 0)
        res.send(employee);
    else
        res.send("no records")
    console.log(employee);
})


app.listen(4000)