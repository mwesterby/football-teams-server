const server = require('../setup/server.setup');

async function addClub(id, club) {
    const res = await server()
        .put(`/api/v1/club/${id}`)
        .send(club)
    return res;
}

async function getClub(id) {
    const res = await server()
        .get(`/api/v1/club/${id}`)
    return res;
}

async function getClubs() {
    const res = await server()
        .get('/api/v1/clubs')
    return res;
}

async function deleteClub(id) {
    const res = await server()
        .delete(`/api/v1/club/${id}`)
    return res;
}

async function resetClubs() {
    const res = await getClubs();
    if (res.statusCode == 200) {
        const allClubs = res.body;
        allClubs.forEach(async (club) => {
            await server()
            .delete(`/api/v1/club/${club.id}`)
        });
    }
    
}

module.exports = {
    addClub,
    getClub,
    getClubs,
    deleteClub,
    resetClubs,
}