import { FastifyReply, FastifyRequest } from 'fastify'
import { prisma } from '@/lib/prisma'

export async function getAllResources(request: FastifyRequest, reply: FastifyReply) {
  const electronicDevices = await prisma.electronicDevice.findMany()

  return reply.status(200).send(electronicDevices)
}