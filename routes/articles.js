const express = require('express')
const Article = require('./../models/article')
const router = express.Router()

router.get('/new', (req, res) => {
  res.render('articles/new', { article: new Article() })
})

router.get('/edit/:id', async (req, res) => {
  const article = await Article.findById(req.params.id)
  res.render('articles/edit', { article: article })
})

router.get('/:slug', async (req, res) => {
  const article = await Article.findOne({ slug: req.params.slug })
  if (article == null) res.redirect('/')
  res.render('articles/show', { article: article })
})

router.post('/', async (req, res, next) => {
  req.article = new Article()
  next()
}, saveArticleAndRedirect('new'))

router.put('/:id', async (req, res, next) => {
  req.article = await Article.findById(req.params.id)
  next()
}, saveArticleAndRedirect('edit'))

router.delete('/:id', async (req, res) => {
  await Article.findByIdAndDelete(req.params.id)
  res.redirect('/')
})



function saveArticleAndRedirect(path) {
  return async (req, res) => {
    let article = req.article
    article.question1 = req.body.question1
    article.question2 = req.body.question2
    article.question3 = req.body.question3
    article.question4 = req.body.question4
    article.question5 = req.body.question5
    article.question6 = req.body.question6
    article.question7 = req.body.question7
    article.question8 = req.body.question8


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