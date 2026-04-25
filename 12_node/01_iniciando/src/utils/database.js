import fs from 'node:fs/promises'

const DATABASE_PATH = new URL("db.json", import.meta.url)

export class Database {
    #database = {}

    constructor() {
        fs.readFile(DATABASE_PATH, 'utf-8')
        .then((data) => {
            this.database = JSON.parse(data)
        }).catch(() => {
            this.#persist()
        })
    }

    #persist() {
        //Escreve os arquivo JSON no caminho especificado
        fs.writeFile(DATABASE_PATH, JSON.stringify(this.#database))
    }

    // Método para inserir dados em uma tabela
    insert(table, data) {
        // Verifica se a tabela já existe no banco de dados
        if (Array.isArray(this.#database[table])) {
            this.#database[table].push(data)
        } else {
            this.#database[table] = [data]
        }

        this.#persist()
    }

    // Método para selecionar todos os dados de uma tabela
    select(table) {
        return this.#database[table] ?? []
    }
}
/**
 * Database class to manage in-memory data storage.
 */