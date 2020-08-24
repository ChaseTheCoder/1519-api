require('dotenv').config();
const db = require('./models');
const data = require('./ballotData.json');

db.Ballot.deleteMany({}, (err, deletedBallot) => {
    db.Ballot.create(data.ballot, (err, seededBallot) => {
        if (err) console.log(err);
        
        console.log(data.ballot.length, 'Ballot created successfully');
        
        process.exit();
    });
});