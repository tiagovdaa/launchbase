const programador = {
    nome: 'Tiago',
    idade: '40',
    tecnologias: [
        { nome: 'Python', especialidade: 'Automation' },
        { nome: 'Terraform', especialidade: 'Infra as a Code' },
        { nome: 'JavaScript', especialidade: 'Web/Mobile' },
    ]
}


console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ` +
    programador.tecnologias[0].nome +
    ' com especialidade em ' +
    programador.tecnologias[0].especialidade
)   