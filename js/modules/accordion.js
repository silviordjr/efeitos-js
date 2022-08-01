//Accordion list -- FAQ

const initAccordion = () => {
    const accordionList = document.querySelectorAll('.js-accordion dt')

    if (accordionList.length){
        const activeAccordion = (event) => {
            event.currentTarget.classList.toggle('ativo')
            event.currentTarget.nextElementSibling.classList.toggle('ativo')
        }
    
        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion)
        })
    }
}

export default initAccordion