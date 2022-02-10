import "../stylesheets/reset.css"
import "../stylesheets/style.css"

export class DropDownMenu {

    constructor (domRef) {
        this.element = domRef
        
        const contain = (() => {
            let target = this.element

            let content = target.firstElementChild
            content.remove()
            content.classList.add('drop-down')
            
            let container = document. createElement('div')
            container.classList.add('drop-down-container')
            container.innerHTML = 'MENU'

            container.appendChild(content)
            target.append(container)
        })()
    }
}