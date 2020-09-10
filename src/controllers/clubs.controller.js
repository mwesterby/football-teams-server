const repository = require('../repositories/club-repository');

async function getClubs(req, res, next) {
    console.log("GET Clubs");
    try {
        let clubs = await repository.findAll()
        res.json(await parseClubs(clubs));
    } catch (err) {
        next(err);
    }

}

async function putClub (req, res, next) {
    console.log("PUT Club");
    const {name, country, eliminated } = req.body;
    const _id = req.params.id;

    try {
        let clubAdded = await repository.add(_id, name, country, eliminated)
        res.json(parseClub(clubAdded));
    } catch (err) {
        next(err);
    }
}

async function parseClubs(clubs) {
    parsedClubs = [];
    clubs.forEach(club => {
        parsedClubs.push(parseClub(club))
    });
    return parsedClubs;
}

function parseClub(club) {
    return {
        id: club._id,
        name: club.name,
        country: club.country,
        eliminated: club.eliminated,
    };
}

module.exports = {
    getClubs,
    putClub,
}