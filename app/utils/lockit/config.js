
exports.db = {
  url: 'mongodb://127.0.0.1/',
  name: 'express_actions_v2',
  collection: 'users'  // collection name for MongoDB
}

// name for subject and email content
exports.appname = 'lockit - Test App'

// url for proper link generation
// exports.url = 'http://localhost:3000'

// lock account
// show warning after three failed login attempts
exports.failedLoginsWarning = 3
// lock account after five failed login attempts
exports.failedLoginAttempts = 5
// lock account for 20 minutes
exports.accountLockedTime = '20 minutes'

// public email address of your app
exports.emailFrom = 'welcome@lock.it'

exports.emailType = 'nodemailer-smtp-transport'
exports.emailSettings = {
  service: 'Mailgun',
  auth: {
    user: 'postmaster@sandboxa2fa6aec1054486ba188ee59ad0fcdbd.mailgun.org',
    pass: 'd269e2db05d8a723e606f8cc140dc6d2'
  }
}

// email signup template
exports.emailSignup = {
  subject: 'Welcome to <%- appname %>',
  text: [
    '<h2>Hello <%- username %></h2>',
    'Welcome to <%- appname %>.',
    '<p><%- link %> to complete your registration.</p>'
  ].join(''),
  linkText: 'Click here'
}

// email already taken template
exports.emailSignupTaken = {
  subject: 'Email already registered',
  text: [
    '<h2>Hello <%- username %></h2>',
    'you or someone else tried to sign up for <%- appname %>.',
    '<p>Your email is already registered and you cannot sign up twice.',
    ' If you haven\'t tried to sign up, you can safely ignore this email. Everything is fine!</p>',
    '<p>The <%- appname %> Team</p>'
  ].join('')
}

// resend signup template
exports.emailResendVerification = {
  subject: 'Complete your registration',
  text: [
    '<h2>Hello <%- username %></h2>',
    'here is the link again. <%- link %> to complete your registration.',
    '<p>The <%- appname %> Team</p>'
  ].join(''),
  linkText: 'Click here'
}

// forgot password template
exports.emailForgotPassword = {
  subject: 'Reset your password',
  text: [
    '<h2>Hey <%- username %></h2>',
    '<%- link %> to reset your password.',
    '<p>The <%- appname %> Team</p>'
  ].join(''),
  linkText: 'Click here'
}
