const express = require('express')
const article = require('./../models/article')
const router = express.Router()

router.get('/register',  (req, res) => {
    res.render('register.ejs')
  })

  router.get('/login',  (req, res) => {
    res.render('login.ejs')
   
  })
router.post('/register',  async (req, res) => {

  try {
    
    article.push({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    })
    res.redirect('/login')
  } catch {
    res.redirect('/register')
  }
})




function saveArticleAndRedirect(path) {
  return async (req, res) => {
    let article = req.article
    article.name = req.body.name
    article.email = req.body.email
  
    try {
      article = await article.save()
      res.redirect(`/articles/${article.slug}`)
    } catch (e) {

      console.log(e)
      res.render(`articles/${path}`, { article: article })
    }
  }
}

module.exports = router