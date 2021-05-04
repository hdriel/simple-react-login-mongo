const express = require('express');
const router = express.Router();

const { getUserByEmail, registerUser } = require('../models/user');

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
    } catch (error) {
        const errMsg = error && error.message || error.toString();
        console.error(urlLog, errMsg);
        return res.status(500).json({error: errMsg})
    }
})

router.post('/signup', async function (req, res) {
    try{
        const user = await registerUser(req.body);
        return res.json(user);
    } catch (error) {
        const errMsg = error && error.message || error.toString();
        console.error(req.originalUrl, errMsg);
        return res.status(500).json({error: errMsg})
    }
})

module.exports = router;
