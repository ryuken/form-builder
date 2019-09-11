import React, { useState } from "react"

import {
    Container, Row, Col,
    Button
} from "reactstrap"

import resolve from "./resolve"
import Form from "./Form"

const Build = ({ elements, setElements, current }) => {

    let currentElement = elements[current]

    let BuildElement = resolve("build", currentElement.type)

    const onChange = (e) => {
        
        let newElements = [...elements]

        newElements[current][e.target.name] = e.target.value

        setElements(newElements)
    }

    const remove = () => {

        let newElements = [...elements]
        
        newElements.splice(current, 1)
        
        setElements(newElements)
    }

    return (
        <div>
            <BuildElement {...currentElement} onChange={onChange} />
            <Button onClick={remove}>
                Remove
            </Button>
        </div>
    )
}

export default () => {

    const [current, setCurrent] = useState(0)
    const [elements, setElements] = useState([])

    const add = (type) => {

        if("textfield" === type) {
            
            let newElements = [...elements]

            newElements.push({
                type,
                value: "",
                id: "",
                name: "",
                label: "",
                placeholder: ""
            })

            setElements(newElements)
            setCurrent(newElements.length - 1)
        }
    }

    const save = (data) => {
        console.log(data)
    }

    return (
        <Container>

            <Row>
                <Col>
                    <Button onClick={add.bind(null, "textfield")}>
                        TextField
                    </Button>
                </Col>
            </Row>

            <Row>
                <Col sm={6}>
                    <h1>Items</h1>

                    {elements[current] && (
                        <Build
                            elements={elements}
                            setElements={setElements}
                            current={current}
                        />
                    )}
                </Col>

                <Col sm={6}>
                    <h1>Preview</h1>                    

                    <Form elements={elements} onSubmit={save} />
                </Col>
            </Row>

        </Container>
    )
}