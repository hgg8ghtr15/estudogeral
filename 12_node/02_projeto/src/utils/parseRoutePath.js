export function parseRoutePath(path){
    const routeParametersReges = /:([a-zA-Z]+)/g

    const params = path.replaceAll(routeParametersReges, "(?<$1>[a-zA-Z0-9-_]+)")

    const pathRegex = new RegExp(`^${params}(?<query>\\?(.*))?$`)

    return pathRegex
}