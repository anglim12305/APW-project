const mongoose = require('mongoose')
const marked = require('marked')
const slugify = require('slugify')
const createDomPurify = require('dompurify')
const { JSDOM } = require('jsdom')
const { convertToFalse } = require('mongoose/lib/cast/boolean')
const dompurify = createDomPurify(new JSDOM().window)

const articleSchema = new mongoose.Schema({
  question1: {
    type: String,
    required: false
  },
  question2: {
    type: String
  },
 question3: {
    type: String,
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  slug: {
    type: String,
  
    unique: true
  },
  sanitizedHtml: {
    type: String,
    required: false
  },
  question4: {
    type: String,
    required: false
  },
  question5: {
    type: String,
    required: false
  },
  question6: {
    type: String,
    required: false
  },
  question7: {
    type: String,
    required: false
  },
  question8: {
    type: String,
    required: false
  },
  name:{
	  type  : String,
	  required : false
  } ,
  email:{
	type  : String,
	required : false
} ,
password:{
	type  : String,
	required : false
} ,
})

articleSchema.pre('validate', function(next) {
  if (this.question1) {
    this.slug = slugify(this.question1, { lower: true, strict: true })
  }

  if (this.question2) {
    this.sanitizedHtml = dompurify.sanitize(marked(this.question2))
  }

  next()
})

module.exports = mongoose.model('Article', articleSchema)