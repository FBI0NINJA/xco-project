const express = require("express");
const fs = require("fs");
const app = express();

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

    fs.appendFileSync("users.txt", line);

    res.send("Saved");
});

app.listen(5050, () => console.log("Server running"));