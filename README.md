```
use gitbook to start the doc server

gitbook serve book --port 8080
```

```
use nodejs generator six random number

Math.random().toString().match(/\d{6}/)[0]
```

```
use nodejs generator salt and crypto the password with salt

const crypto = require('crypto')
// generator a salt for user
const salt = crypto.randomBytes(16).toString('hex')
// rececive the password form frontend
const pwd = 'pwd'
// generator a hash value and save it to db with the user`s salt
const hash = crypto.pbkdf2Sync(pwd, salt, 1000, 64).toString('hex')
```

```
use nodejs generator code and get the crypto string 

const code = `${ctx.params.terminal}${ctx.params.sys}${moment().format('YYMMDD')}${Math.random().toString().match(/\d{6}/)[0]}`
const sh1sum = crypto.createHash('sha1')
sh1sum.update(`salt${code}salt`)
const transCode = sh1sum.digest('hex').substr(0, 36)
```

```
use nodejs call c++ functions

the issue of my github [issue](https://github.com/nodejs/help/issues/714)
```