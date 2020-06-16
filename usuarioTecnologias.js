// Programa armazenar array de usuarios e tecnologia
// Imprimir em tela as seguintes informações
// Carlos trabalha com HTML, CSS
// Jarmine trabalha com JavaScript, CSS
// Tuane trabalha com HTML, Node.js

const usuarios = [{
        nome: "Carlos",
        tecnologias: [
            "HTML",
            "CSS"
        ]
    },
    {
        nome: "Jasmine",
        tecnologias: [
            "Javascript",
            "CSS"
        ]
    },
    {
        nome: "Tuane",
        tecnologias: [
            "HTML",
            "Node.js"
        ]
    }
]
for (let usuario of usuarios) {
    console.log(`${usuario.nome} trabalha com ${usuario.tecnologias}`)
}