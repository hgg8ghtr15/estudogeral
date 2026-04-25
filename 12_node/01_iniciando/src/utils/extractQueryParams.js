export function extractQueryParams(query) {
    // Se query for undefined ou não for uma string, retorna um objeto vazio
    if (!query || typeof query !== 'string') {
        return {}
    }

    // Se a query não começar com '?', significa que não há parâmetros de query
    // ou ela já foi processada/está incorreta para o slice(1)
    if (query.length === 0 || query[0] !== '?') {
        return {}
    }

    return query
        // 1. .slice(1): Remove o primeiro caractere da string.
        //    Em uma query string HTTP, o primeiro caractere é geralmente o '?' (ex: "?name=John&age=30").
        //    Ao remover o '?', ficamos apenas com os pares chave-valor (ex: "name=John&age=30").
        .slice(1)
        // 2. .split('&'): Divide a string em um array de substrings, usando o '&' como delimitador.
        //    Cada substring resultante será um par chave-valor (ex: ["name=John", "age=30"]).
        .split('&')
        // 3. .reduce((queryParams, param) => { ... }, {}): Itera sobre o array de pares chave-valor
        //    e os transforma em um único objeto.
        //    - queryParams: É o acumulador, o objeto final que estamos construindo (começa como {}).
        //    - param: É o item atual do array, um par chave-valor como "name=John".
        .reduce((queryParams, param) => {
            // 4. const [key, value] = param.split('=');: Para cada 'param' (ex: "name=John"):
            //    - .split('='): Divide o par chave-valor em um array usando o '=' como delimitador
            //      (ex: ["name", "John"]).
            //    - Desestruturação de array ([key, value]): Atribui o primeiro elemento do array a 'key'
            //      e o segundo a 'value'.
            //      (ex: key = "name", value = "John").
            const [key, value] = param.split('=')

            // 5. queryParams[key] = value;: Adiciona uma nova propriedade ao objeto 'queryParams'.
            //    A chave da propriedade é o 'key' extraído, e o valor é o 'value' extraído.
            //    (ex: queryParams.name = "John").
            queryParams[key] = value

            // 6. return queryParams;: Retorna o objeto 'queryParams' atualizado para a próxima iteração do 'reduce'.
            //    Após todas as iterações, este será o objeto final com todos os parâmetros.
            return queryParams
        }, {})
}