// build your `/api/projects` router here

const router = require('express').Router()
const Projects = require('../project/model')
const db = require('../../data/dbConfig')

//test

router.get('/test', (req, res) => {
    {res.status(200).json({message: 'Server is running.'})}
})

// get all projects

router.get('/api/projects', (req, res) => {
    Projects.findProjects()
    .then(project => {
        res.status(200).json(project)
    })
    .catch(err => {
        res.status(500).json({err: err.message})
    })
})

router.get('/:id', (req, res) => {  
    Projects.findProjectbyId(req.params.id)
    .then( project => {
        res.status(200).json(project)
    })
    .catch((error) => {
        res.status(500).json({error: error.message})
    })
  })

  router.get('/:id/tasks', (req, res) => {
      Projects.findProjectTasks(req.params.id)
      .then( tasks => {
          res.status(200).json({tasks})
      })
      .catch((error) => {
        res.status(500).json({error: error.message})
    })
  })

router.post('/', (req, res) => {  
    Projects.addProject(req.body)
    .then(project => {
        res.status(201).json({project})
    })
    .catch((error) => {
        res.status(500).json({error: error.message})
    })

})

router.delete('/:id', (req, res) => {  
    db('projects')
    .where({ id: req.params.id })
    .del()
  .then(count => {
    if (count > 0) {
      res.status(204).end();
    } else {
      res.status(404).json({ message: 'Record not found' });
    }
  })
  .catch(error => {
    res.status(500).json(error);
  })
})

module.exports = router