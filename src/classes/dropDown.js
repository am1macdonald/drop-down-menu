import "../stylesheets/reset.css"
import "../stylesheets/style.css"

export class DropDownMenu {

    constructor (domRef) {
        this.element = domRef
        
        const contain = (() => {
            console.log(this.element.childNodes)
        })()
    }
    slideDown () {
        let target = this.element
        target.addEventListener('click', () => {
            target.classlist.toggle('slide');
        })
    }
}