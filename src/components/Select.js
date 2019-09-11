import { FormGroup, Label, Input, FormFeedback, FormText } from "reactstrap"

export default ({
    name, id = name, label, options = [],
    value = "", onChange, disabled = false, help, errors
}) => {

    let feedback = { invalid : false }

    if(errors[name]) {
        
        feedback.invalid = true
        feedback.data = errors[name]
    }

    return (
        <FormGroup>
            <Label for={name}>{label}</Label>
            <Input type="select"
                id={id} name={name}
                disabled={disabled}
                value={value}
                onChange={onChange}
                invalid={feedback ? feedback.invalid : null}
            >
                {options.map(o => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                ))}
            </Input>
            {feedback.invalid && <FormFeedback>{feedback.data[0]}</FormFeedback>}
            {help && <FormText>{help}</FormText>}
        </FormGroup>
    )
}


export const SelectFieldBuilder = ({
    id, name, label, options = [], placeholder, onChange,
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