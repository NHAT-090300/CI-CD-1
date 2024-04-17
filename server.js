const express = require("express");

const app = express();

app.get("/", (req, res) => {
	res.json({
		status: 200,
		message: "hello nhat nguyen ngày 17/4/2023.",
	});
});

app.listen(8080, () => {
	console.log("server running on port 8080.");
});
