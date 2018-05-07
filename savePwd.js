const crypto = require('crypto')

// generator a salt for user
const salt = crypto.randomBytes(16).toString('hex')

// rececive the password form frontend
const pwd = 'pwd'

// generator a hash value and save it to db with the user`s salt
const hash = crypto.pbkdf2Sync(pwd, salt, 1000, 64).toString('hex')