const puppeteer = require('puppeteer')
const login = require('./account') 

const likeHashtags = async () => {
  const username = login[0]
  const password = login[1]
  const hashtag = "javascript"

  // Navegar para o Instagram

  const browser = await puppeteer.launch( { headless: true } )
  const page = await browser.newPage()

  await page.goto('https://www.instagram.com/')
  await page.waitFor(1000)

  // Preencher usuário e senha e fazer login

  await page.type('[name=username]', username)
  await page.type('[name=password]', password)
  await page.click('[type=submit]')
  await page.waitFor(3000)

  // Ir para página de hashtags

  await page.goto(`https://www.instagram.com/explore/tags/${hashtag}/`)
  await page.waitFor(3000)

  // Abri primeira foto

  const primeiraFoto = await page.$x('//*[@id="react-root"]/section/main/article/div[1]/div/div/div[1]/div[1]/a/div/div[2]')
  await primeiraFoto[0].click()
  await page.waitFor(3000)

  // Loop de curtir e ir para a próxima

  for (let i = 0; i <= 10; i++) {
    await page.screenshot({ path: `foto${i}.png`})
    await page.click('button.wpO6b')
    await page.screenshot({ path: `coracao${i}.png`})
    await page.click('a.coreSpriteRightPaginationArrow')
    await page.waitFor(1000)
  }

  console.log('ok')
}

likeHashtags()