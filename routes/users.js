const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const keys = require('../config/keys')

const validateRegistrationInput = require('../validator/register')
const validateLogin = require('../validator/login')

const User = require('../models/siteUser')


// @route POST api/users register
// @desc Register user
// @acces Public
router.post('/register', (req, res) => {
    // Form validation
    const { errors, isValid } = validateRegistrationInput(req.body)


    // Check validation
    if(!isValid) {
        return res.status(400).json(errors)
    }

    User.findOne({ username: req.body.username }).then(user => {

        if(user) {
            return res.status(400).json({ username: "Username already exists" })
        } else {
            const newUser = new User({
                username: req.body.username,
                password: req.body.password
            })
    
            //Hash pw
            bcrypt.genSalt(10, function (err, salt) {
                if (err) return next()

                bcrypt.hash(newUser.password, salt, function (err, hash) {
                    if (err) return next()
                    newUser.password = hash
                    newUser.save().then(user => res.json(user)).catch(err => console.log(err))
                })
            })
        }
    })
})


// @route POST api/user/login


router.post('/login', (req, res) => {

    const { errors, isValid } = validateLogin(req.body)


    if(!isValid) {
        return res.status(400).json(errors)
    }

    const username = req.body.username
    const password = req.body.password

    User.findOne({ username }).then(user => {
        if (!user) {
            return res.status(404).json({usernotfound: "Username or Password is incorrect"})
        }

        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                const payload = {
                    id: user.id,
                    username: user.username
                }

                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    {
                        expiresIn: 31556926 // 1 year in seconds
                    },
                    (err, token) => {
                        res.json({
                            success: true,
                            token: "Bearer " + token
                        })
                    }
                )
            } else {
                return res
                .status(400)
                .json({ passwordincorrect: " Username or Password is incorrect"})
            }
        })
    })
})


module.exports = router