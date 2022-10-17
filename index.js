const express = require('express')
const app = express()
app.use(express.json())
app.use(cors())
app.get('/',(req,res) => {
	res.send("hello world")
})

app.get('/get-author',(req,res) => {
	res.send("nat!")
}

app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Welcome to sagar-gavand.tech')
})

app.listen(process.env.PORT || 3000)
