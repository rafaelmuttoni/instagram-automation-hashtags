<p>
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/rafaelmuttoni/instagram-automation-hashtags.svg">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/rafaelmuttoni/instagram-automation-hashtags.svg">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/rafaelmuttoni/instagram-automation-hashtags.svg">

  <a href="https://github.com/rafaelmuttoni/instagram-automation-hashtags/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/rafaelmuttoni/instagram-automation-hashtags.svg">
  </a>

  <a href="https://github.com/rafaelmuttoni/instagram-automation-hashtags/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/rafaelmuttoni/instagram-automation-hashtags.svg">
  </a>
</p>

<h1>
  INSTAGRAM BOT :robot:
</h1>

<p>An Instagram Bot that likes photos based on the hashtag.</p>

## :rocket: Technologies

This project is currently using the following technologies:

- Node
- Puppeteer

## :information_source: How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js v10.16](https://nodejs.org/) or higher + [Yarn v1.13](https://yarnpkg.com/) or higher installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/rafaelmuttoni/rafaelmuttoni.com

# Go into the repository
$ cd rafaelmuttoni.com

# Install dependencies
$ yarn
```

After that you will need to add the account and password:

```javascript
// You can manually add your account in app.js
const username = "yourusername"
const password = "yourpassword"
```

```javascript
// Or you can create a account.js file with your information

//account.js
module.exports = [
  "yourusername",
  "yourpassword"
]

//app.js
const login = require('./account')

const username = login[0]
const password = login[1]
```

---

:wave: [Get in touch!](https://www.linkedin.com/in/rafaelmuttoni/)