require('dotenv').config();
const express = require('express')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , session = require('express-session')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0');

const app = express();
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}))

app.use(passport.initialize());
app.use(passport.session());

// massive()

passport.use( new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.AUTH_CALLBACK
}, function(accessToken, refreshToken, extraParams, profile, done){
    //database
    const db = app.get('db');
        console.log('id',profile.identities[0].user_id )
    db.get_user([profile.identities[0].user_id]).then( user => {
        console.log('user', user)
        if ( user[0] ) {
            done(null, user[0].id)
        } else {
            db.create_user([profile.displayName, profile.emails[0].value, profile.picture, profile.identities[0].user_id]).then(user => {
                done( null, user[0].id)
            })
        }
    })
}))
const port = 3334;
app.listen(port, () => console.log('Shipped docked at port', port))
