import { FastifyInstance } from 'fastify'
import { create } from './create.controller'
import { getAllResources } from './getAllResources.controller'

export async function appRoutes(app: FastifyInstance) {
  app.post('/devices', create)
  app.get('/devices', getAllResources)
}