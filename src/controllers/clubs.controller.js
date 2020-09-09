const repository = require('../repositories/club-repository');

const getClubs = (req, res, next) => {
    console.log("GET Clubs");
    repository.findAll().then((clubs) => {
        res.json(clubs);
    }).catch((err) => {
        next(err);
    })
}

const putClub = async (req, res, next) => {
    console.log("PUT Club");
    const {name, country, eliminated } = req.body;
    const _id = req.params.id;

    repository
    .add(_id, name, country, eliminated)
    .then((club) => {
        res.json(club);
    })
    .catch((error) => {
        if(error.code == 11000) {
            res.sendStatus(409);
            console.log("Duplicate key")
        } else {
            next(error)
        }
    })

    
}

module.exports = {
    getClubs,
    putClub,
}