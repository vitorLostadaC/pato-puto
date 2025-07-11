import type { PaymentWebhookPayload } from '@repo/api-types/payment.dto'
import { z } from 'zod'
import type { FastifyTypedInstance } from '../../types/fastify'
import { AbacatePayWebhook } from './use-cases/abacatepay-use-case'

const abacatePayWebhook = new AbacatePayWebhook()

export async function webhookRoutes(fastify: FastifyTypedInstance) {
	fastify.post(
		'/abacatepay',
		{
			schema: {
				querystring: z.object({
					webhookSecret: z.string()
				})
			}
		},
		async (request, reply) => {
			const secret = request.query.webhookSecret
			const event = request.body as PaymentWebhookPayload

			const result = await abacatePayWebhook.execute(secret, event)

			return reply.status(200).send(result)
		}
	)
}
