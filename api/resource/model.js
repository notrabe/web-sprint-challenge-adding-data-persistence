// build your `Resource` model here

const db = require('../../data/dbConfig')

module.exports = {
    getResources,
    getResourceById,
    addResource,
}

function getResources() {
    return db('resources')
    .select('*')
}

function getResourceById(id) {
    return db('resources')
    .where({ id })
    .first()
}

function addResource(resource){
    return db('resources')
    .insert(resource)
    .then( list => {
        return getResourceById(list)
    })
} 