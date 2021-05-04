const express = require('express');
const router = express.Router();

const { getUserByEmail, registerUser } = require('../models/user');

// Client should not get real server errors
const SERVER_ERROR = 'Opps.. Something went wrong, please try again later.';

router.post('/signin', async function (req, res) {
    const urlLog = `${req.originalUrl} : `;
    const errMsg = 'incorrect email or password';

    try{
        const { email, password } = req.body;
        if(!email || !password){
            console.warn(urlLog, `missing params`);
            return res.status(403).json({error: errMsg})
        }

        const user = await getUserByEmail(email);

        if(!user){
            console.warn(urlLog, `'${email}' user not found`);
            return res.status(403).json({error: errMsg})
        }

        if(user.password !== password){
            console.warn(urlLog, `'${email}' password is not matching`);
            return res.status(403).json({error: errMsg})
        }

        return res.json(user);
    }
    catch (error) {
        const errMsg = error && error.message || error.toString();
        console.error(urlLog, errMsg);
        return res.status(500).json({error: SERVER_ERROR})
    }
})

router.post('/signup', async function (req, res) {
    const userData = req.body;

    try {
        const user = await registerUser(userData);
        return res.json(user);
    }
    catch (error) {
        const errMsg = error && error.message || error.toString();
        console.error(req.originalUrl, errMsg);

        const { email } = userData || {};
        const emailExists = new RegExp(`^E11000 duplicate key error collection: .*\.users index: email_1 dup key: { : "${email}" }`).test(errMsg);

        return emailExists
            ? res.status(403).json({error: 'The email address has already taken'})
            : res.status(500).json({error: SERVER_ERROR})
    }
})

module.exports = router;
