interface IRoute {
    [key: string]: any
}

export const routes: IRoute = {
    about: 'about',
    show: 'show',
}

export const routesConfig: IRoute = {
    ...Object.keys(routes).reduce((acc: IRoute, key: string) => ({...acc, [key]: routes[key]}), {}),
    [routes.show]: '/show/:id',
}
