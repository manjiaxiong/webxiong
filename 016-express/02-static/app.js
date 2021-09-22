const express = require('express')
const app = express()

app.use(express.static('public'))//默认找到public下面的index.html
// app.use('/static',express.static('public'))
app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3000, () => console.log('Example app listening on port 3000!'))