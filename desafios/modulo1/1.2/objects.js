const programador = {
    nome: 'Tiago',
    idade: '40',
    tecnologias: [
        { nome: 'Node.Js', especialidade: 'Web' },
        { nome: 'Python', especialidade: 'Automation' },
        { nome: 'Terraform', especialidade: 'Infra as a Code' },
    ]
}


console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ` +
    programador.tecnologias[0].nome +
    ' com especialidade em ' +
    programador.tecnologias[0].especialidade
)   