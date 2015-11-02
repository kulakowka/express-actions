import passport from 'passport'
import {Strategy as LocalStrategy} from 'passport-local'
import User from '../../models/user'

var strategy = new LocalStrategy((username, password, done) => {
  User.findOne({ username: username }, (err, user) => {
    if (err) { return done(err) }
    if (!user) {
      return done(null, false, { message: 'Incorrect username.' })
    }
    if (!user.validPassword(password)) {
      return done(null, false, { message: 'Incorrect password.' })
    }
    return done(null, user)
  })
})

passport.use(strategy)

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user)
  })
})

export default (settings) => {
  return passport.authenticate('local', settings)
}
