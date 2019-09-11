import React from "react"
import PropTypes from "prop-types"
import { Formik, Form } from "formik"
import Validator from "validatorjs"
import { Button } from "reactstrap"

import FormElement from "./FormElement"

const form = ({ elements, initialValues, onSubmit }) => {

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validate={(values) => {

                let rules = elements.reduce(
                    (acc, el) => {

                        if(el.rule)
                            acc[el.name] = el.rule

                        if(el.options) {

                            el.options.forEach(o => {

                                if(o.rule)
                                    acc[o.ruleName || o.name] = o.rule
                            })
                        }

                        return acc
                    },
                    {}
                )

                let validation = new Validator(values, rules)

                validation.passes()

                return validation.errors.all()
            }}
            render={({
                values,
                errors,
                isSubmitting,
                handleSubmit,
                setFieldValue
            }) => (
                <Form onSubmit={handleSubmit}>
                    
                    {elements.map(el => {

                        return (
                            <FormElement
                                key={el.name}
                                id={el.name}
                                attr={el.name}
                                data={values}
                                value={values[el.name]}
                                setFieldValue={setFieldValue}
                                el={el}
                                errors={errors}
                            />
                        )
                    })}

                    <Button
                        id="save"
                        type="submit"
                        color="primary"
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                    >
                        Save
                    </Button>

                </Form>
            )}
        />
    )
}

form.propTypes = {
    elements: PropTypes.array.isRequired,
    onSubmit: PropTypes.func.isRequired,
    initialValues: PropTypes.object,
}

export default form