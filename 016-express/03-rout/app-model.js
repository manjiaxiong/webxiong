const express = require('express')
const app = express()
const usersRouter=require('./routes/users.js')
const blogsRouter=require('./routes/blogs.js')
app.use(express.static('public'))//默认找到public下面的index.html
app.use('/static',express.static('public'))
app.use('/users',usersRouter);//以/users开头
app.use('/blogs',blogsRouter);//以/blogs开头
/*
app.get('/users', (req, res) => res.send('get response '))
app.post('/users', (req, res) => res.send('post response '));
app.put('/users', (req, res) => res.send('put response '));
app.delete('/users', (req, res) => res.send('delete response '));


app.get('/blogs', (req, res) => res.send('get response '))
app.post('/blogs', (req, res) => res.send('post response '));
app.put('/blogs', (req, res) => res.send('put response '));
app.delete('/blogs', (req, res) => res.send('delete response '));
*/

app.listen(3000, () => console.log('Example app listening on port 3000!'))