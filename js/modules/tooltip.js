export default function initTooltip () {
    const tooltips = document.querySelectorAll('[data-tooltip]')

    function criarTooltipBox (element) {
        const tooltipBox = document.createElement('div')
        const text = element.getAttribute('aria-label')
        tooltipBox.classList.add('tooltip')
        tooltipBox.innerText = text

        document.body.appendChild(tooltipBox)
        return tooltipBox
    }

    function onMouseLeave (tooltipBox) {
        tooltipBox.remove()
    }

    function onMouseOver (event) {
        const tooltipBox = criarTooltipBox(this)

        tooltipBox.style.top = event.pageY + 'px'
        tooltipBox.style.left = event.pageX + 'px'

        onMouseMove.tooltipBox = tooltipBox
        this.addEventListener('mousemove', onMouseMove)

        this.addEventListener('mouseleave',() => onMouseLeave(tooltipBox))
    }

    const onMouseMove = {
        handleEvent (event) {
            this.tooltipBox.style.top = event.pageY + 20 + 'px'
            this.tooltipBox.style.left = event.pageX + 20 + 'px'
        }
    }

    tooltips.forEach((item) => item.addEventListener('mouseover', onMouseOver))
}