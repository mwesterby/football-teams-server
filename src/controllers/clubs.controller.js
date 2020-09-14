const repository = require('../repositories/club.repository');
const { parseClubs } = require('./clubParser');

async function getClubs(req, res, next) {
    try {
        let clubs = await repository.findAll()
        if (clubs.length == 0) {
            res.sendStatus(404);
        } else {
            res.json(await parseClubs(clubs));
        }
    } catch (err) {
        next(err);
    }
}

module.exports = {
    getClubs,
}