export function parseRoutePath(path){
    // Expressão regular para identificar parâmetros de rota
    const routeParametersRegex = /:([a-zA-Z]+)/g

    // Substitui os parâmetros por grupos nomeados em regex
    const params = path.replaceAll(routeParametersRegex, "(?<$1>[a-zA-Z0-9-_]+)")
    // console.log(path)
    const pathRegex = new RegExp(`${params}(?<query>\\?(.*))?$`)

    // console.log(pathRegex)
    return pathRegex
}