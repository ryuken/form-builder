import React, { useState } from "react"
import {
    Container,
    ListGroup, ListGroupItem, Button,
    FormGroup, Label, Input, FormFeedback, FormText
} from "reactstrap"

export default ({
    name, id = name, label, lableStyle, options = [],
    value = "", onChange, disabled = false, help, errors
}) => {

    let feedback = { invalid : false }

    if(errors[name]) {
        
        feedback.invalid = true
        feedback.data = errors[name]
    }

    return (
        <FormGroup>
            <Label style={lableStyle} for={name}>{label}</Label>
            <Input type="select"
                id={id} name={name}
                disabled={disabled}
                value={value}
                onChange={onChange}
                invalid={feedback ? feedback.invalid : null}
            >
                {options.map(o => (
                    <option key={o.id} value={o.id} disabled={o.disabled}>{o.text}</option>
                ))}
            </Input>
            {feedback.invalid && <FormFeedback>{feedback.data[0]}</FormFeedback>}
            {help && <FormText>{help}</FormText>}
        </FormGroup>
    )
}


export const SelectFieldBuilder = ({
    id, name, label, options = [], onChange,
}) => {

    const [option, setOption] = useState({ id: "", text: "", disabled: false })

    const addOption = () => {

        onChange({
            target: {
                name: "options",
                value: [...options, option]
            }
        })

        // reset option
        setOption({ id: "", text: "", disabled: false })
    }

    const removeOption = (i) => {

        let newOptions = [...options]
        newOptions.splice(i, 1)

        onChange({
            target: {
                name: "options",
                value: newOptions
            }
        })

        // reset option
        setOption({ id: "", text: "", disabled: false })
    }

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
                <Label for="options">Options</Label>

                <ListGroup>
                    {options.map((option, i) => (
                        <ListGroupItem key={i} className="d-flex justify-content-between">
                            <span onClick={() => setOption(option)}>
                                {option.id} - {option.text}
                            </span>
                            <Button color="danger" onClick={removeOption.bind(null, i)}>
                                Remove
                            </Button>
                        </ListGroupItem>
                    ))}
                </ListGroup>

                <Label htmlFor="option-id">Option ID</Label>
                <Input
                    id="option-id"
                    onChange={(e) => setOption({ ...option, id: e.target.value })}
                    value={option.id}
                />

                <Label htmlFor="option-text">Option Text</Label>
                <Input
                    id="option-text"
                    onChange={(e) => setOption({ ...option, text: e.target.value })}
                    value={option.text}
                />

                <FormGroup check>
                    <Input
                        id="option-disabled"
                        type="checkbox"
                        onChange={(e) => setOption({ ...option, disabled: e.target.checked })}
                        checked={option.disabled}
                    />
                    <Label htmlFor="option-disabled">Option disabled?</Label>
                </FormGroup>

                <Button onClick={addOption}>
                    Save option
                </Button>

            </FormGroup>

        </Container>
    )
}