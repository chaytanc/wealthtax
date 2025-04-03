const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
    res.setHeader("ngrok-skip-browser-warning", "true");  // Bypass Ngrok warning
    next();
});
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

