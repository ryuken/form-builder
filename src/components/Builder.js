import React, { useState } from "react"
import dynamic from "next/dynamic"

import {
    Container, Row, Col,
    Button
} from "reactstrap"

import 'react-sortable-tree/style.css'

const SortableTree = dynamic(import("react-sortable-tree"), { ssr: false})


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

        let newElements = [...elements, {
            type,
            value: "",
            id: "",
            name: "",
            label: "",
            placeholder: ""
        }]

        setElements(newElements)
        setCurrent(newElements.length - 1)
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
                    <Button onClick={add.bind(null, "select")}>
                        Select
                    </Button>
                </Col>
            </Row>

            <Row>
                <Col sm={6}>
                    <div style={{ height: 400 }}>
                        <SortableTree
                            treeData={elements}
                            onChange={treeData => setElements(treeData)}
                            generateNodeProps={node => {
                                return {
                                    id:node.node.id,
                                    onClick: (e) => handleNodeClick(node, e),
                                    // **** This is where the actual row gets rendered so do what you want with isSelected *****
                                    title: <div className={node.isSelected ? 'selected' : ''}>{node.node.name}</div>
                                }
                            }}
                        />
                    </div>
                </Col>

                <Col sm={6}>
                    <h1>Preview</h1>                    

                    <Form elements={elements} onSubmit={save} />
                </Col>
            </Row>

        </Container>
    )
}