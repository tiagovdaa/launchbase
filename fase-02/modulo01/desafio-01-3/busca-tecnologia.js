const usuarios = [
     {
          nome: 'Elis',
          tecnologias: ['HTML', 'CSS']
     },
     {
          nome: 'Tiago',
          tecnologias: ['JavaScript', 'CSS']
     },
     {
          nome: 'Cecilia',
          tecnologias: ['HTML', 'Node.js']
     }
]

function checaSeUsuarioUsaCSS(usuario) {
     for (let i = 0; i < usuario.tecnologias.length; i++) {
          if (usuario.tecnologias[i] == 'CSS') {
               return true
          }
     }
     return false
}

for (let i = 0; i < usuarios.length; i++) {
     const usuarioUsaCss = checaSeUsuarioUsaCSS(usuarios[i])
     if (usuarioUsaCss) {
          console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
     }
}
