const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/save", (req, res) => {
  const user = req.body;
  const line = `
Name: ${user.firstName} ${user.lastName}
Email: ${user.email}
Phone: ${user.phone}
Age: ${user.age}
Location: ${user.location}
--------------------------
`;
  try {
    fs.appendFileSync("users.txt", line);
    res.json({ message: "Saved successfully" });
  } catch (err) {
    res.status(500).json({ error: "File write error" });
  }
});

app.get("/", (req, res) => {
  res.send("Server is running ✅");
});

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log("Server running on port " + PORT));