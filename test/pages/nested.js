import React from "react"
import Head from "next/head"

import { Container } from "reactstrap"
import Block, { BlockFieldBuilder } from "../Block"
import Form from "../../dist/Form"

const elements = [
    {
        type: [Block, BlockFieldBuilder],
        name: "blocks",
        elements: [
            {
                type: "textfield",
                id: "type",
                name: "type",
                label: "Type",
                placeholder: "Vul je type in"
            },
            {
                type: [Block, BlockFieldBuilder],
                name: "settings",
                elements: [
                    {
                        type: "textfield",
                        id: "condition",
                        name: "condition",
                        label: "Condition",
                        placeholder: "Vul je condition in"
                    },
                    {
                        type: [Block, BlockFieldBuilder],
                        name: "third",
                        dataType: "object",
                        elements: [
                            {
                                type: "textfield",
                                id: "limit",
                                name: "limit",
                                label: "Limit",
                                placeholder: "Vul je limiet in"
                            }
                        ]
                    },
                ]
            },
        ]
    },
    {
        type: "select",
        id: "birthplace",
        name: "birthplace",
        label: "Birthplace",
        options: [
            { id: "", text: "Kies een geboorteplaats", disabled: true },
            { id: "the_hague", text: "Den Haag" },
            { id: "amsterdam", text: "Amsterdam" },
        ],
        placeholder: "Vul je geboorteplaats in"
    }
]

const data = {
    blocks: [{
        type: "condition",
        settings: {
            condition: "if",
        }
    }, {
        type: "mongoose",
        settings: {
            type: "findOne",
        }
    }]
}

export default () => {

    return (
        <React.Fragment>
            <Head>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
            </Head>
            <Container>
                <Form
                    initialValues={data}
                    elements={elements}
                    onSubmit={(data) => console.log(data) }
                />
            </Container>
        </React.Fragment>
    )
}