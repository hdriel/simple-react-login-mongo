const express = require('express');
const router = express.Router();
const path = require('path');

router.use((req, res, next) => {
    console.log(req.method, req.originalUrl);
    next();
});

// Routes
router.get(
    ['/', '/signin', '/signup'],
    function (req, res) {
        res.sendFile(path.resolve(__dirname, '../../../client/build/index.html'));
    }
);

router.get('/health', function (req, res) {
    res.send('OK');
});

module.exports = router;