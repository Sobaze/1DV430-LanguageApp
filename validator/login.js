const Validator = require('validator')
const isEmpty = require('is-empty')

module.exports = function validateLogin(data) {
    let errors = {}

        data.username = !isEmpty(data.username) ? data.username: ""
        data.password = !isEmpty(data.password) ? data.password: ""


        if(Validator.isEmpty(data.username)) {
            errors.username = "Username is required"
        }

        if(Validator.isEmpty(data.password)) {
            errors.password = "Password field is required"
        }

        return {
            errors,
            isValid: isEmpty(errors)
        }
}