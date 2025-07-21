const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Temporary user data
const TEMP_USER = {
  email: "user@example.com",
  password: "123",
};

// Login API
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  if (email === TEMP_USER.email && password === TEMP_USER.password) {
    res.status(200).json({ message: "Login successful" });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
