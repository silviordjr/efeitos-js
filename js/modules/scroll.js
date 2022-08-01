//scroll suave 

export const initScroll = () => {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')

    const scrollToSection = (event) => {
        event.preventDefault()
        const href = event.currentTarget.getAttribute('href')
        const section = document.querySelector(href)
        
        //forma alternativa
        // window.scrollTo({
        //     top: section.offsetTop,
        //     behavior: 'smooth'
        // })

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection)
    })
}

//Animacao para o scroll

export const initAnimacaoScroll = () => {
    const sections = document.querySelectorAll('.js-scroll')

    if (sections.length){
        const windowHeight = window.innerHeight * 0.55

        const animaScroll = () => {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top - windowHeight
                if (sectionTop < 0){
                    section.classList.add('ativo')
                } else if (section.classList.contains('ativo')) {
                    section.classList.remove('ativo')
                }
            })
        }

        animaScroll()
        window.addEventListener('scroll', animaScroll)
    }

}