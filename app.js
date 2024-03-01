const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("public"));

app.listen(3300, () => console.log("Servidor corriendo"));

const port = process.env.PORT || 3033;
app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`);
});


app.get("/", (req, res) => {
	res.sendFile(path.resolve(__dirname, "./view/home.html"));
});

app.get("/login.html", (req, res) => {
	res.sendFile(path.resolve(__dirname, "./view/login.html"));
});

app.post("/login.html", (req, res) => {
	res.sendFile(path.resolve(__dirname, "./view/home.html"));
});

app.get("/registro.html", (req, res) => {
	res.sendFile(path.resolve(__dirname, "./view/registro.html"));
});

app.post("/registro.html", (req, res) => {
	res.sendFile(path.resolve(__dirname, "./view/home.html"));
});

