const express = require ('express');
const bodyParser = require ('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let entries = [];
let id = 0
app.post(`/api/post/entry`,(req, res) =>{
    req.body.id = id;
    entries.push(req.body)
    id = id + 1
    console.log(entries);
    res.json(entries)
})
app.get(`/api/weather`, (req, res) => {
    res.json(req.query.state);
})
app.get(`/api/data`, (req, res) => {
    res.json(entries)
})
app.delete(`/api/delete/:index`, (req, res) =>{
    entries = entries.filter ((e) =>{
        if(e.id.toString() !== req.params.index){
            return e;
        }
    })
    res.json(entries);
})
app.put(`/api/update`, (req,res) =>{
    entries = entries.map((e) =>{
        if(e.id === req.body.id){
            return {
                text: req.body.text,
                id: req.body.id,
                date: req.body.date,
            }
        }else{
            return e;
        }
    })
    res.json(entries);
})









const port = process.env.PORT || 8080;

app.listen(port, () =>{
    console.log(`listening on port ${port}`);
})