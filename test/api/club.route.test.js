const { expect } = require('../setup/chai.setup');

const {
    addClub,
    getClub,
    getClubs,
    deleteClub,
    resetClubs,
} = require('../modules/club.service');

const club1 = {
    name: 'Hull City',
    country: 'England',
    eliminated: true,
}

const club1Updated = {
    name: 'Hull City',
    country: 'England',
    eliminated: false,
}

const club1id = 1;

const clubWithNoName = {
    country: 'England',
    eliminated: false,
}

const clubWithNoCountry = {
    name: 'Hull City',
    eliminated: false,
}

const clubWithNoEliminatedStatus = {
    name: 'Hull City',
    country: 'England',
}

const emptyClub = {}

describe('/api/v1/club', () => {
    afterEach('delete all clubs', async () => {
        await resetClubs();
    });
    describe('PUT /club/{id}', () => {
        it('returns 200 and adds the club', async () => {
            const res = await addClub(club1id, club1);
            expect(res.status).to.equal(200);
            expect(res.body).to.include(club1);
        });
        it('returns 200 and updates the existing club data', async () => {
            const res1 = await addClub(club1id, club1);
            expect(res1.status).to.equal(200);
            expect(res1.body).to.include(club1);

            const res2 = await addClub(club1id, club1Updated);
            expect(res2.status).to.equal(200);
            expect(res2.body).to.include(club1Updated);

            const res3 = await getClubs();
            expect(res3.body).to.have.lengthOf(1); // Assert there is still only 1 club

        });
        it('returns 400 when a club with no name is provided', async () => {
            const res = await addClub(club1id, clubWithNoName);
            expect(res.status).to.equal(400);
        });
        it('returns 400 when a club with no country is provided', async () => {
            const res = await addClub(club1id, clubWithNoCountry);
            expect(res.status).to.equal(400);
        });
        it('returns 400 when a club with no eliminated status is provided', async () => {
            const res = await addClub(club1id, clubWithNoEliminatedStatus);
            expect(res.status).to.equal(400);
        });
        it('returns 400 when an empty club is provided', async () => {
            const res = await addClub(club1id, emptyClub);
            expect(res.status).to.equal(400);
        });
    });
    describe('GET /club/{id}', () => {
        it('returns 200 and returns the club for the valid id provided', async () => {
            await addClub(club1id, club1);
            const res = await getClub(club1id);
            expect(res.status).to.equal(200);
            expect(res.body).to.include(club1);
        });
        it('returns 404 if a club with the provided id does not exist', async () => {
            const res = await getClub(club1id);
            expect(res.status).to.equal(404);
        });
    });
    describe('DELETE /club/{id}', () => {
        it('returns 200 and deletes the club for the valid id provided', async () => {
            await addClub(club1id, club1);
            const res = await deleteClub(club1id);
            expect(res.status).to.equal(200);
            expect(res.body).to.include(club1);
        });
        it('returns 404 if a club with the provided id does not exist', async () => {
            const res = await deleteClub(club1id);
            expect(res.status).to.equal(404);
        });
    });
});