const repository = require('../repositories/club-repository');
const { parseClubs } = require('./clubParser');

async function getClubs(req, res, next) {
    console.log("GET Clubs");
    try {
        let clubs = await repository.findAll()
        res.json(await parseClubs(clubs));
    } catch (err) {
        next(err);
    }
}

module.exports = {
    getClubs,
}