const readXlsxFile = require('read-excel-file/node');

const schema = {
    'ID': {
        prop: '_id',
        type: Number,
        required: true,
    },
    'Name': {
        prop: 'name',
        type: String,
        required: true,
    },
    'Country': {
        prop: 'country',
        type: String,
        required: true,
    },
    'Eliminated': {
        prop: 'eliminated',
        type: Boolean,
        required: true,
    },
};

const file = './teams.xlsx'

function retrieveClubs() {
    return new Promise((resolve) => {
        readXlsxFile(file, { schema }).then((data) => {
            let invalidRows = [];
            data.errors.forEach(error => {
                invalidRows.push(error.row - 1)
            });
            let clubs = [];
            for (let i = 0; i < data.rows.length; i++) {
                if(!invalidRows.includes(i)) {
                    clubs.push(data.rows[i])
                }
    
            }    
            resolve(clubs);
          });
    })
    
}

module.exports = {
    retrieveClubs,
};