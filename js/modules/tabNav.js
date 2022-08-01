// navegacao por tabs -- lista de animais

const initTabNav = () => {
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');

    if (tabMenu.length && tabContent.length){
        const activeTab = (index) => {
            tabContent.forEach((content) => {
                content.classList.remove('ativo')
            })
        
            tabContent[index].classList.add('ativo', tabContent[index].dataset.anime)
        }
        
        tabMenu.forEach((tab, index) =>{
            tab.addEventListener('click', () => activeTab(index))
        })
    }
}

export default initTabNav