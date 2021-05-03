const express = require('express')
const mongoose = require('mongoose')
const Article = require('./models/article')
const articleRouter = require('./routes/articles')
const methodOverride = require('method-override')
const app = express()
const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const userRouter = require('./routes/users')
const initializePassport = require('./passport-config')
initializePassport(
  passport,
  email => users.find(user => user.email === email),
  id => users.find(user => user.id === id)
)

mongoose.connect('mongodb://localhost/newblog', {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
})






app.use(session({
  secret: "GiveMEGOODGRADE",
  resave: false,
  saveUninitialized: false
}))
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(flash())

app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))





app.get('/', async (req, res) => {
  const articles = await Article.find().sort({ createdAt: 'desc' })
  res.render('articles/index', { articles: articles })
})





















app.use('/articles', articleRouter)
app.use( '/users', userRouter)
app.listen(3000)