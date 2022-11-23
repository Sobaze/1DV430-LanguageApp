const Validator = require('validator')
const isEmpty = require('is-empty')

module.exports = function validateRegistrationInput(data) {
    let errors = {}
        data.username = !isEmpty(data.username) ? data.username: ""
        data.password = !isEmpty(data.password) ? data.password: ""
        data.password2 = !isEmpty(data.password2) ? data.password2: ""


        //name checks
        if(Validator.isEmpty(data.username)) {
            errors.username = "Username is required"
        }

        // pw check
        if( Validator.isEmpty(data.password)) {
            errors.password = "Password field is required"
        }

        if(Validator.isEmpty(data.password2)) {
            errors.password2 = "Confirm password field is required"
        }

        if(!Validator.isLength(data.password, {min: 6, max: 1000} )) {
            errors.password = "Password must be atleast 6 characters long"
        }

        if(!Validator.equals(data.password, data.password2)) {
            errors.password2 = "Passwords must match"
        }

        return {
            errors,
            isValid: isEmpty(errors)
        }
}
