import React from "react"
import PropTypes from "prop-types"
import { withFormik } from "formik"
import Validator from "validatorjs"
import { Button } from "reactstrap"

import FormElement from "./FormElement"

const MyForm = props => {
    
    const {
      values,
      errors,
      setFieldValue,
      handleSubmit,
      isSubmitting
    } = props;
    return (
        <form onSubmit={handleSubmit}>
                    
            {props.elements.map(el => {

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

        </form>
    )
}
  
const form = withFormik({
    mapPropsToValues: ({ initialValues }) => (initialValues),
  
    // Custom sync validation
    validate: (values, { elements }) => {

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
    },
  
    handleSubmit: (values, formikBag) => formikBag.props.onSubmit(values, formikBag),
})(MyForm)

form.propTypes = {
    elements: PropTypes.array.isRequired,
    onSubmit: PropTypes.func.isRequired,
    initialValues: PropTypes.object,
}

export default form