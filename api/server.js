// build your server here
const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')

const projectRouter = require('./project/router')

const server = express()
server.use(helmet())
server.use(morgan('dev'))
server.use(cors())
server.use(express.json())
server.use(projectRouter)