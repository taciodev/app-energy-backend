import { FastifyReply, FastifyRequest } from 'fastify'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  // const createBodySchema = z.object({
  //   name: z.string(),
  //   powerConsumption: z.number().positive(),
  // })

  // const { name, powerConsumption } = createBodySchema.parse(request.body)

  // const electronicDevice = await prisma.electronicDevice.create({
  //   data: {
  //     name,
  //     powerConsumption,
  //   },
  // })

  // return reply.status(201).send(electronicDevice)
}