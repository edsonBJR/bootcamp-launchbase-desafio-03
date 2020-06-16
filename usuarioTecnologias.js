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

// Exibindo em tela cada usuarios da coleção de usuarios, 
// o método join permite colocar um separador dentro dos itens do objeto no caso a virgula
for (let usuario of usuarios) {
    console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(', ')}`)
}

function checaSeUsuarioUsaCss(usuario) {
    for (let tecnologia of usuario.tecnologias) {
        if (tecnologia == 'CSS') return true
    }
    return false
}

for (let i = 0; i < usuarios.length; i++) {
    const usuarioTrabalhaComCss = checaSeUsuarioUsaCss(usuarios[i])

    if (usuarioTrabalhaComCss) {
        console.log(`O usuario ${usuarios[i].nome} trabalha com CSS`)
    }
}