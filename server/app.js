require("dotenv").config();

const express = require("express");``
const app = express();

// db connection
const connectDB = require("./db/connect");

// packages
const cookieParser = require("cookie-parser");

// middlewares
app.use(express.json());
app.use(cookieParser());

// routes
app.use('/', require('./routes/index'));
app.use('/auth', require('./routes/auth'));

const PORT = process.env.PORT || 4000;
app.listen(PORT, async () => {
	try {
		await connectDB(process.env.MONGO_URI);
		console.log(`Server is listening on port ${PORT}...`);
	} catch (error) {
		console.log(error);
	}
});
