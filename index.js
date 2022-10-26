const express = require('express')
const app = express()
const cors = require('cors');
const port = 5000;


app.use(cors());
const course = require('./data/course.json')


app.get('/', (req, res) => {
  res.send('Max Courses!')
});
app.get('/courses',(req,res)=>{
    res.send(course)
})
app.get('/courses/:id',(req,res)=>{
  const id= req.params.id;
 
  const selectedCourses = course.find( course => course._id === id)
    res.send(selectedCourses)
})



app.listen(port, () => {
  console.log(`Max Courses server is running ${port}`)
})