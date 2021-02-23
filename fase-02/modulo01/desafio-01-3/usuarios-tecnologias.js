const usuarios =
  [
    {
      nome: 'Tiago',
      tecnologias: ['HTML', 'CSS']
    },
    {
      nome: 'Cecilia',
      tecnologias: ['JavaScript', 'CSS']
    },
    {
      nome: 'Elis',
      tecnologias: ['HTML', 'Node.js']
    }
  ]

for (let i = 0; i < usuarios.length; i++) {
  console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias}`)
}