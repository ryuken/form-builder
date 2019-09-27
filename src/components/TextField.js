import React from "react"
import {
    Container,
    FormGroup, Label, Input, FormFeedback, FormText
} from "reactstrap"

export default ({
    name, id = name, label, lableStyle, placeholder, type = "text",
    value = "", onChange, disabled = false, help, errors = []
}) => {

    let feedback = { invalid : false }

    if(errors[id]) {
        
        feedback.invalid = true
        feedback.data = errors[id]
    }

    return (
        <FormGroup>
            <Label style={lableStyle} for={name}>{label}</Label>
            <Input type={type}
                id={id} name={name}
                placeholder={placeholder}
                disabled={disabled}
                onChange={onChange}
                value={value}
                invalid={feedback ? feedback.invalid : null}
            />
            {feedback.invalid && <FormFeedback>{feedback.data[0]}</FormFeedback>}
            {help && <FormText>{help}</FormText>}
        </FormGroup>
    )
}

export const TextFieldBuilder = ({
    id, name, label, placeholder, onChange,
}) => {

    return (
        <Container>

            <FormGroup>
                <Label for="id">ID</Label>
                <Input
                    name="id"
                    onChange={onChange}
                    value={id}
                />
            </FormGroup>

            <FormGroup>
                <Label for="name">Name</Label>
                <Input
                    name="name"
                    onChange={onChange}
                    value={name}
                />
            </FormGroup>

            <FormGroup>
                <Label for="label">Label</Label>
                <Input
                    name="label"
                    onChange={onChange}
                    value={label}
                />
            </FormGroup>

            <FormGroup>
                <Label for="placeholder">Placeholder</Label>
                <Input
                    name="placeholder"
                    onChange={onChange}
                    value={placeholder}
                />
            </FormGroup>

        </Container>
    )
}