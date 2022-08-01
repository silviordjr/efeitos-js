export default function initFuncionamento () {
    const funcionamento = document.querySelector('[data-semana]')
    const diasSemana = funcionamento.dataset.semana.split(',').map(Number)
    const horarioSemana = funcionamento.dataset.horario.split(',').map(Number)
    
    const dataAtual = new Date()
    const diaSemana = dataAtual.getDay()
    const horario = dataAtual.getHours()
    
    if (diasSemana.indexOf(diaSemana) !== -1 && (horarioSemana[0] <= horario && horarioSemana[1] > horario)){
        funcionamento.classList.add('aberto')
    }
}
