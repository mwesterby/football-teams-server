const club = require('../models/club');

class ClubRepository {
    constructor(model) {
        this.model = model;
    }

    add(_id, name, country, eliminated) {
        const clubToAdd = { _id, name, country, eliminated };
        const filter = { _id: _id };
        const clubToSave = new this.model(clubToAdd);
    
        console.log(clubToSave);
        return this.model.findOneAndUpdate(filter, clubToSave, {
            new: true,
            upsert: true,
        });
    }

    findAll() {
        return this.model.find();
    }

    findById(id) {
        return this.model.findById(id);
    }

    deleteById(id) {
        return this.model.findByIdAndDelete(id);
    }
}

module.exports = new ClubRepository(club);
