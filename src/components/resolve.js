import Select from "./Select"
import TextField, { TextFieldBuilder } from "./TextField"
import Checkbox from "./Checkbox"

export default (type = "form", element) => {

    let FormElement = "form" === type ? TextField : TextFieldBuilder

    if("checkbox" === element) {
        FormElement = Checkbox
    }
    if("select" === element) {
        FormElement = Select
    }

    return FormElement
}