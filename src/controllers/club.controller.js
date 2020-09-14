const repository = require('../repositories/club-repository');
const { parseClub } = require('./clubParser');

async function getClub(req, res, next) {
    const _id = req.params.id
    try {
        let club = await repository.findById(_id);
        if (!club) {
            res.sendStatus(404);
        } else {
            res.json(parseClub(club));
        }
    } catch (err) {
        next(err);
    }
}

async function putClub (req, res, next) {
    const {name, country, eliminated } = req.body;
    const _id = req.params.id;
    try {
        let clubAdded = await repository.add(_id, name, country, eliminated)
        res.json(parseClub(clubAdded));
    } catch (err) {
        next(err);
    }
}

async function deleteClub (req, res, next) {
    const _id = req.params.id;
    try {
        let deletedClub = await repository.deleteById(_id);
        if (!deletedClub) {
            res.sendStatus(404);
        } else {
            res.json(parseClub(deletedClub));
        }
    } catch (err) {
        next(err);
    }
}

module.exports = {
    getClub,
    putClub,
    deleteClub,
}