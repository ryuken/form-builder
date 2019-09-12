import React, { useState, useEffect } from "react"
import {
    Container, Card, CardBody,
    FormGroup, Label, Input, FormFeedback, FormText
} from "reactstrap"

import getValue from "../dist/getValue"
import FormElement from "../dist/FormElement"

export default ({
    parent, name, id = name, label, elements,
    value = "", onChange, setFieldValue, disabled = false, help, errors = []
}) => {

    const [formElements, setFormElements] = useState([])

    useEffect(() => {

        if(value instanceof Array) {
            
            let newElements = [...formElements]

            // TODO for blocks you can make the elements dynamic here based on value
            for(let i=0; i < value.length; i++) {

                newElements.push(
                    elements
                )
            }

            setFormElements(newElements)
        }
        else {
            setFormElements(elements)
        }

    }, [elements])

    let feedback = { invalid : false }

    if(errors[id]) {
        
        feedback.invalid = true
        feedback.data = errors[id]
    }

    return (
        <Card>
            <CardBody>

                {formElements.map((el, i) => {

                    if(el instanceof Array) {

                        return el.map(element => {
    
                            let attr = `${name}.${i}.${element.name}`

                            return (
                                <FormElement
                                    key={attr}
                                    parent={name}
                                    attr={attr}
                                    value={getValue(value, `${i}.${element.name}`)}
                                    setFieldValue={setFieldValue}
                                    el={element}
                                    errors={errors}
                                />
                            )
                        })
                    }
                    
                    let attr = `${name}.${el.name}`

                    return (
                        <FormElement
                            key={attr}
                            parent={name}
                            attr={attr}
                            value={getValue(value, el.name)}
                            setFieldValue={setFieldValue}
                            el={el}
                            errors={errors}
                        />
                    )
                })}

            </CardBody>
        </Card>
    )
}

export const BlockFieldBuilder = ({
    id, name, label, value = "", placeholder, onChange,
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