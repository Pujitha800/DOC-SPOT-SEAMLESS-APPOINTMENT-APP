const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/mongodb");

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

// Routes
app.use("/api/admin", require("./routers/adminRoute"));
app.use("/api/doctor", require("./routers/doctorRoute"));
app.use("/api/user", require("./routers/userRoute"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// server.js - Placeholder content
