const db = require('../models');

const index = (req, res) => {
    db.Article.find({}, (err, foundArticles) => {
        if (err) console.log('Error in Articles#index:', err);

        res.status(200).json(foundArticles);
    });
};

const show = (req, res) => {
    db.Article.findById(req.params.id, (err, foundArticle) => {
        if (err) console.log('Error in Articles#index:', err);

        res.status(200).json(foundArticle);
    });
};

const create = (req, res) => {
    db.Article.create(req.body, (err, savedArticle) => {
        if (err) console.log('Error in Articles#index:', err);

        res.status(200).json(savedArticle);
    });
};

const update = (req, res) => {
    db.Article.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updateArticle) => {
        if (err) console.log('Error in Articles#index:', err);

        if(!updateArticle){
            res.status(200).json({message: `Could not find Article with id ${req.params.id}`});
        }

        res.json(updateGame);
    });
};

const destroy = (req, res) => {
    db.Article.findByIdAndDelete(req.params.id, (err, deletedArticle) => {
        if (err) console.log('Error in Articles#destroy:', err);

        res.status(200).json(deletedArticle);
    });
};

module.exports = {
    index,
    show,
    create,
    update,
    destroy,
};