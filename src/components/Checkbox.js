import React from "react"
import { FormGroup, Label, Input, FormFeedback, FormText } from "reactstrap"

export default ({
    name, id = name, label,
    value = false, onChange, disabled = false, help, errors
}) => {

    const [ checked, setChecked ] = React.useState(Boolean(value))

    let feedback = { invalid : false }

    if(errors[id]) {
        
        feedback.invalid = true
        feedback.data = errors[id]
    }

    const toggle = (e) => {

        setChecked(!checked)

        onChange({
            target: {
                name: e.target.name,
                value: !checked
            }
        })
    }

    return (
        <FormGroup check>
            <Label check>
                <Input type="checkbox"
                    id={id} name={name}
                    disabled={disabled}
                    onChange={toggle}
                    checked={checked}
                    invalid={feedback ? feedback.invalid : null}
                />
                {label}
            </Label>
            
            {feedback.invalid && <FormFeedback>{feedback.data[0]}</FormFeedback>}
            {help && <FormText>{help}</FormText>}
        </FormGroup>
    )
}