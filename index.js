const { request } = require('express');
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data.json');

app.get('/', (req, res)=>{
    res.send('You Server is cool and running like Sun.....ha ha ha')
})

app.get('/course/:id', (req, res)=>{
    const id = req.params.id;
    const course = courses.find(course=>course.id===parseInt(id));
    res.send(course);
})

app.get('/courses', (req, res)=>{
    res.send(courses);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

//   https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/siberian-tiger-portrait-square-by-tl-wilson-photography-teresa-wilson.jpg