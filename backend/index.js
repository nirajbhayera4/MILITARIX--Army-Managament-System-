const express =require("express");
const mongoose =require("mongoose");
const cors =require("cors");
require("dotenv").config();
const soldierRoutes = require("./routes/soldierRoutes");

const app=express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//mongo connection
app.use('api/soldiers', soldierRoutes);

// database connection 
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,})
    .then(() => {
        console.log("MongoDB connected successfully");
        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
    })
    .catch((error) => {
        console.error("MongoDB connection error:", error);
    })
    .catch((err)=> console.log("Error connecting to MongoDB:", err));
