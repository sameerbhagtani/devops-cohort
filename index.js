import express from "express";

const app = express();
const PORT = process.env.PORT ?? 3000;

app.get("/", (req, res) => {
    return res.json({
        message: "Server is healthy (github actions) docker 🐋. SSL testing.",
    });
});

app.listen(PORT, () => {
    console.log(`✅ Server started at PORT: ${PORT}`);
});
