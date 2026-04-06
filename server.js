const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();

app.use(cors()); //
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
    const res = await fetch("https://pubg-mobile-production-7acb.up.railway.app/save", {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(data)
    });

    const result = await res.json();
    alert(result.message);

} catch (err) {
    alert("Error connecting to server ❌");
}
app.get("/", (req, res) => {
    res.send("Server is running ✅");
});

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => console.log("Server running on port " + PORT));
