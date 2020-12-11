// build your `/api/projects` router here

const router = require('express').Router()
const Project = require('../project/model')

//test

router.get('/test', (req, res) => {
    {res.status(200).json({message: 'Server is running.'})}
})

// get all projects

router.get('/api/projects', (req, res) => {
    Project.getProjects()
    .then((names) => {
        res.status(200).json(names)
    })
    .catch(err => {
        res.status(500).json({err: err.message})
    })
})