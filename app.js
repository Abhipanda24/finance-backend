const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Middleware
app.use(express.json());

// Routes
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

// ✅ MongoDB Atlas connection (FIXED PASSWORD)
mongoose.connect("mongodb://abhipanda2004:Abhinav%40123@ac-p4gyzb8-shard-00-00.pihe32m.mongodb.net:27017,ac-p4gyzb8-shard-00-01.pihe32m.mongodb.net:27017,ac-p4gyzb8-shard-00-02.pihe32m.mongodb.net:27017/financeDB?ssl=true&replicaSet=atlas-c2cndv-shard-0&authSource=admin&retryWrites=true&w=majority")
.then(() => console.log("DB connected"))
.catch(err => console.log(err));
// Test route
app.get("/", (req, res) => {
    res.send("Server is working");
});

// Server start
app.listen(5000, () => {
    console.log("Server running on port 5000");
});