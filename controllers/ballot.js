const db = require('../models');

const index = (req, res) => {
    db.Ballot.find({}, (err, foundBallots) => {
        if (err) console.log('Error in Ballots#index:', err);

        res.status(200).json({ballot: foundBallots});
    });
};

const show = (req, res) => {
    db.Ballot.findById(req.params.id, (err, foundBallot) => {
        if (err) console.log('Error in Ballots#index:', err);

        res.status(200).json(foundBallot);
    });
};

const create = (req, res) => {
    db.Ballot.create(req.body, (err, savedBallot) => {
        if (err) console.log('Error in Ballots#index:', err);

        res.status(200).json(savedBallot);
    });
};

const update = (req, res) => {
    db.Ballot.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updateBallot) => {
        if (err) console.log('Error in Ballots#index:', err);

        if(!updateBallot){
            res.status(200).json({message: `Could not find Ballot with id ${req.params.id}`});
        }

        res.json(updateGame);
    });
};

const destroy = (req, res) => {
    db.Ballot.findByIdAndDelete(req.params.id, (err, deletedBallot) => {
        if (err) console.log('Error in Ballots#destroy:', err);

        res.status(200).json(deletedBallot);
    });
};

module.exports = {
    index,
    show,
    create,
    update,
    destroy,
};