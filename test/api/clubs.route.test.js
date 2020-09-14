const { expect } = require('../setup/chai.setup');

const {
    addClub,
    getClubs,
    resetClubs,
} = require('../modules/club.service');


const club1 = {
    name: 'Hull City',
    country: 'England',
    eliminated: true,
}
const club1id = 1;

const club2 = {
    name: 'Manchester United',
    country: 'England',
    eliminated: true,
}
const club2id = 2;

describe('/api/v1/clubs', () => {
    afterEach('delete all clubs', async () => {
        await resetClubs();
    });
    describe('GET /clubs', () => {
        it('returns 200 and returns all clubs', async () => {
            await addClub(club1id, club1);
            await addClub(club2id, club2);
            const res = await getClubs();
            expect(res.status).to.equal(200);
            expect(res.body[0]).to.include(club1);
            expect(res.body[1]).to.include(club2);
            expect(res.body).to.have.lengthOf(2);
        });
        it('returns 404 when there are no clubs to return', async () => {
            const res = await getClubs();
            expect(res.status).to.equal(404);
        });
    });
});