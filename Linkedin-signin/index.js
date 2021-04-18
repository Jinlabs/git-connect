'use strict';

const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const validator = require('validator');
const API = require('./lib/API');
const { sessionName, sessionKeys } = require('./config');

app.disable('x-powered-by');

app.set('view engine', 'ejs');

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cookieSession({
    name: sessionName,
    keys: sessionKeys
}));

app.get('/', async (req, res) => {
        try {
            const id = await API.getLinkedinId(req);
            console.log(id);
            res.render('index');
        } catch(err) {
            res.send(err);
        }
    
});

app.get('/auth', (req, res) => {
    res.redirect(API.getAuthorizationUrl());
});

app.get('/callback', async (req, res) => {
    if(!req.query.code) {
        res.redirect('/');
        return;
    }
    try {
        const data = await API.getAccessToken(req);
        if(data.access_token) {
            console.log(data.access_token);
            req.session.token = data.access_token;
            req.session.authorized = true;
        }
        res.redirect('/');
    } catch(err) {
        res.json(err);
    }
});


app.listen(port);