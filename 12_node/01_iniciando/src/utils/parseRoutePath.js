export function parseRoutePath(path) {
    //Esta linha cria uma regex para encontrar palavras que começam com :
    const routerParametersRegex = /:([a-zA-Z]+)/g

    const params = path.replace(routerParametersRegex, "(?<$1>[a-zA-Z0-9-_]+)")

    const pathRegex = new RegExp(`${params}(?<query>\\?(.*))?$`)

    return pathRegex
}