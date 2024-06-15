const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

dotenv.config();
const PORT = process.env.PORT;
const MongoDB_URI = process.env.MONGODB_URI;
const app = express();

mongoose
    .connect(MongoDB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log(err));

// middleware
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET_KEY))
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    }),
);


app.get("/", (req, res) => {
    res.send("Hello, world!");
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})