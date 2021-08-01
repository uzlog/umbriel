import express from 'express'

import { adaptMiddleware } from '../adapters/ExpressMiddlewareAdapter'
import { adaptRoute } from '../adapters/ExpressRouteAdapter'
import { makeCreateTemplateController } from '../factories/controllers/CreateTemplateControllerFactory'
import { makePreviewTemplateController } from '../factories/controllers/PreviewTemplateControllerFactory'
import { makeSearchTemplatesController } from '../factories/controllers/SearchTemplatesControllerFactory'
import { makeSetDefaultTemplateController } from '../factories/controllers/SetDefaultTemplateControllerFactory'
import { makeEnsureAuthenticatedMiddleware } from '../factories/middlewares/EnsureAuthenticatedMiddlewareFactory'

const templatesRouter = express.Router()

templatesRouter.use(adaptMiddleware(makeEnsureAuthenticatedMiddleware()))

templatesRouter.post('/', adaptRoute(makeCreateTemplateController()))
templatesRouter.get('/search', adaptRoute(makeSearchTemplatesController()))
templatesRouter.get('/preview', adaptRoute(makePreviewTemplateController()))
templatesRouter.patch(
  '/:templateId/set-as-default',
  adaptRoute(makeSetDefaultTemplateController())
)

export { templatesRouter }
