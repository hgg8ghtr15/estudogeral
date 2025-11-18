class User {
    constructor({ email }) {
        this.email = email;
    }

    enviarMensagem(){
        console.log(`Enviando mensagem para o email ${this.email}`);
    }
}

let user = new User({ email: 'fabiolukascj@gmail.com'})
user.enviarMensagem();