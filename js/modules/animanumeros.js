export default function initAnimaNumeros () {
    function animaNumeros () {
        const numeros = document.querySelectorAll('[data-numero]')
    
        numeros.forEach((numero) => {
            const total = +numero.innerText
            let start = 0
            const increment = Math.floor(total / 100)
    
            const timer = setInterval(() => {
                start = start + increment
    
                numero.innerHTML = start
    
                if (start > total){
                    numero.innerHTML = total
                    clearInterval(timer)
                }    
            }, 25 * Math.random())
        })
    }
    
    function handleMutation (mutation) {
        if (mutation[0].target.classList.contains('ativo')){
            observer.disconnect()
            animaNumeros()
        }
    }
    
    const observerTarget = document.querySelector('.numeros')
    const observer = new MutationObserver(handleMutation)
    
    
    observer.observe(observerTarget, {attributes: true})
}
