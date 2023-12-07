const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log(req.query.name) //http://localhost:3000/?name=paras   // paras
    res.send('KONOHARAM') // CONTROL C TO EXIT
})
app.get('/map', (req, res) => {
    res.send('map')
})
app.get('/contact', (req, res) => {
    res.send('contact')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})