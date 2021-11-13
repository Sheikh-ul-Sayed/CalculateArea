require('dotenv').config();
const app = require('./app');
const port = process.env.PORT;
const hostname = '127.0.0.1';




app.use((req, res) => {
    res.send("404 : Page Not Found !");
});

app.listen(port, hostname, () => {
    console.log(`server is running at http://${hostname}:${port}`);
});