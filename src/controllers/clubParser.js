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
    parseClub,
    parseClubs,
}