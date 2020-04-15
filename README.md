# INSTAGRAM BOT

An Instagram Bot that likes photos based on the hashtag.

### Tutorial:

1. Clone this repo
2. Run Yarn
3. Config your account and hashtag

##### You can manually add your account in app.js
```javascript
const username = "yourusername"
const password = "yourpassword"
```

##### Or you can create a account.js file with your information
```javascript
// @account.js

module.exports = [
  "yourusername",
  "yourpassword"
]
```

```javascript
// @app.js

const login = require('./account')

const username = login[0]
const password = login[1]
```

🚀 Made using NodeJS and Puppeteer