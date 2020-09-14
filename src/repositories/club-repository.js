const club = require('../models/club');

class ClubRepository {
    constructor(model) {
        this.model = model;
    }

    // add(_id, name, country, eliminated) {
    //     const clubToAdd = { _id, name, country, eliminated };
    //     const clubToSave = new this.model(clubToAdd);
    //     return clubToSave.save();
    // }

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

    updateById(_id, object) {
        const query = { _id: _id };
        return this.model.findOneAndUpdate(query, {
            $set: {
                name: object.name,
                country: object.country,
                eliminated: object.eliminated,
            },
        });
    }

}

module.exports = new ClubRepository(club);
