const express = require('express');
const router = express.Router();
const passport = require('passport');

const Post = require('../../models/Post');
const Article = require('../../models/Article');

// const validatePostInput = require('../../validation/post');

router.get('/test', (req, res) => res.json({ msg: "Article works" }));

// @route GET api/articles
// @desc Get articles all
// @access Public
router.get('/', (req, res) => {
    Article.find()
        .sort({ date: -1 })
        .then(articles => res.json(articles))
        .catch(err => res.status(404).json({ err }));
});

// @route GET api/articles/:id
// @desc Get article by id
// @access Public
router.get('/:id', (req, res) => {
    Article.findById(req.params.id)
        .then(article => {
            res.json(article)
        })
        .catch(err => res.status(404).json({ err }));
});

// @route POST api/articles
// @desc Create new article
// @access Private
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    // const { errors, isValid } = validatePostInput(req.body);
    const isValid = true;
    if (!isValid) {
        return res.status(400).json(errors);
    }
    const newArticle = new Article({
        content: req.body.content,
        title: req.body.title,
        avatar: req.body.avatar,   
        user: req.user.id,
    });

    newArticle.save().then(article => res.json(article));
});

// @route DELETE api/articles/:id
// @desc Delete article by id
// @access Private
router.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    const errors = {};
    // we can use user model to do thist right? 
    // why do we need Profile model????
    Profile.findOne({ user: req.user.id })
        .then(profile => {
            if (!profile) {
                // so right now, if the user cancel his account, nobody would be able to 
                // remove his posts.
                errors.noprofile = 'User profile not found';
                return res.status(404).json(errors);
            } else {
                Post.findById(req.params.id)
                    .then(post => {
                        if (post.user.toString() !== req.user.id) {
                            errors.post = 'User not authorized';
                            return res.status(401).json(errors);
                        } else {
                            post.remove().then((() => res.json({ success: true })));
                        }
                    })
                    .catch(err => res.status(404).json({ err }));
            }
        });
});


// @route POST  api/posts/like/:id
// @desc Like post
// @access Private
router.post('/like/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    const errors = {};
    // we can use user model to do thist right? 
    // why do we need Profile model????
    Profile.findOne({ user: req.user.id })
        .then(profile => {
            if (!profile) {
                // so right now, if the user cancel his account, nobody would be able to 
                // remove his posts.
                errors.noprofile = 'User profile not found';
                return res.status(404).json(errors);
            } else {
                // if already liked, return
                Post.findById(req.params.id)
                    .then(post => {
                        if (post.likes.find(el => el.user.toString() === req.user.id)) {
                            // already liked
                            errors.alreadyliked = 'Already liked this post'
                            return res.status(400).json({ errors });
                        }
                        post.likes.push({
                            user: req.user.id
                        });
                        post.save().then(() => res.json(post));
                    })
                    .catch(err => res.status(404).json({ err }));
            }
        });
});

// @route POST  api/posts/unlike/:id
// @desc Unlike post
// @access Private
router.post('/unlike/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    const errors = {};
    // we can use user model to do thist right? 
    Profile.findOne({ user: req.user.id })
        .then(profile => {
            if (!profile) {
                // so right now, if the user cancel his account, nobody would be able to 
                // remove his posts.
                errors.noprofile = 'User profile not found';
                return res.status(404).json(errors);
            } else {
                // if already liked, return
                Post.findById(req.params.id)
                    .then(post => {
                        const index = post.likes.findIndex(el => el.user.toString() === req.user.id);
                        if (index !== -1) {
                            post.likes.splice(index, 1);
                            post.save().then(() => res.json(post));
                        } else {
                            // haven't liked the post
                            errors.notliked = 'You haven\'t liked this post'
                            return res.status(400).json({ errors });
                        }
                    })
                    .catch(err => res.status(404).json({ err }));
            }
        });
});

module.exports = router;