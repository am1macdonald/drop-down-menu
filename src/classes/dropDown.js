import "../stylesheets/reset.css"
import "../stylesheets/style.css"

export class DropDownMenu {

    constructor (domRef) {
        this.element = domRef
        
        const contain = (() => {
            let target = this.element
            let content = target.firstElementChild

            let button = document.createElement('button')
            let arrow = document.createElement('div')
            let hidden = document.createElement('div');

            button.type = 'button'
            button.innerHTML = 'Menu'
            button.classList.add('drop-down')

            button.addEventListener('click', () => {
                hidden.classList.toggle('animate')
            })

            arrow.classList.add('arrow-down')

            hidden.classList.add('hidden')

            content.remove()

            button.append(arrow)

            hidden.append(content);

            target.append(button)
            target.append(hidden)

            
            
            console.log(content)


        })()
    }
    slideDown () {
        let target = this.element
        target.addEventListener('click', () => {
            target.classlist.toggle('slide');
        })
    }
}