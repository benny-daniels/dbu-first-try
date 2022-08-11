const express = require('express')
const router = express.Router()

// Run this code when a form is submitted to 'start answer'
router.post('/start-answer', function (req, res) {

  // Make a variable and give it the value from 'what do you want to learn'
  var learnmore = req.session.data['what-do-you-want-to-learn']

  // Check whether the variable matches a condition
  if (learnmore == "what-we-do"){
    // Send user to next page
    res.redirect('/Whatwedo')
  } else {
    // Send user to who we are
    res.redirect('/Whoweare')
  }

})
// Run this code when a form is submitted to 'who we are answer'
router.post('/who-we-are-answer', function (req, res) {

  // Make a variable and give it the value from 'where would you like to go next'
  var whowearemore = req.session.data['where-would-you-like-to-go-next']

  // Check whether the variable matches a condition
  if (whowearemore == "a-day-in-the-life"){
    // Send user to day in the life page
    res.redirect('/Dayinthelife')
  } else {
    // Send user to clients page
    res.redirect('/Ourclientsandhowwehelp')
  }

})

// Run this code when a form is submitted to  'where to next'
router.post('/where-to-next-answer', function (req, res) {

  // Make a variable and give it the value from 'what do you want to learn'
  var learnmore = req.session.data['where-to-next']
  // Check whether the variable matches a condition
  if (learnmore == "back-to-start"){
    // Send user to next page
    res.redirect('/start')}
  if (learnmore == "What-we-do"){
      // Send user to next page
      res.redirect('/Whatwedo')  }
      if (learnmore == "day-in-the-life"){
        // Send user to next page
        res.redirect('/DayintheLife')}
        if (learnmore == "who-we-are"){
          // Send user to next page
          res.redirect('/Whoweare')}
  else {
    // Send user to who we are
    res.redirect('/Ourclientsandhowwehelp')
  }

})

module.exports = router
