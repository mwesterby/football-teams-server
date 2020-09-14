const excelParser = require('./excelParser');
const repository = require('../repositories/club.repository');

async function addClub (club) {
    const { _id, name, country, eliminated } = club;
    try {
        await repository.add(_id, name, country, eliminated)
    } catch (err) {
        console.log(err);
    }
}

function populate() {
    console.log("Adding initial clubs...")
    excelParser.retrieveClubs().then((clubs) => {
        clubs.forEach(async club => {
            await addClub(club);
        });
    });
}

module.exports = {
    populate,
}
