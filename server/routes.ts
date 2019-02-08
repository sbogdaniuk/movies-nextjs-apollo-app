import Routes, * as nextRoutes from 'next-routes'
import { flatten } from 'lodash'

import { routesConfig } from '../constants'

// @ts-ignore
export const NRoutes = nextRoutes() as Routes
export const Router = NRoutes.Router
export const Link = NRoutes.Link

Object.keys(routesConfig).map(name => {
  const [pattern, page] = flatten([routesConfig[name]])
  NRoutes.add(name, pattern, page)
})
