const express = require('express');
const app = express();
const PORT = 8000

app.use(express.static(__dirname))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})