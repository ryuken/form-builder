import Select, { SelectFieldBuilder } from "./Select"
import TextField, { TextFieldBuilder } from "./TextField"
import Checkbox from "./Checkbox"

export default (type = "form", element) => {

    let FormElement = "form" === type ? TextField : TextFieldBuilder

    if(element instanceof Array) {
        FormElement = "form" === type ? element[0] : element[1]
    }

    if("checkbox" === element) {
        FormElement = Checkbox
    }
    if("select" === element) {
        FormElement = "form" === type ? Select : SelectFieldBuilder
    }

    return FormElement
}