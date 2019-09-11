import React from "react"

import resolve from "./resolve"

export default ({ parent, id, attr, data, value, el, setFieldValue, errors }) => {

    const onChange = (e) => {
        setFieldValue(attr, e.target.value)
    }

    let FormElement = resolve("form", el.type)

    if("undefined" !== typeof el.condition) {

        let result = false

        let val = data[el.condition.variable]

        if(el.condition.operator === "equal") {

            if(val === el.condition.data)
                result = true
        }
        else if(el.condition.operator === "in") {

            if([...JSON.parse(el.condition.data)].includes(val))
                result = true
        }

        if(false === result)
            return null
    }

    return (
        <FormElement
            key={el.name}
            parent={parent}
            id={id}
            onChange={onChange}
            setFieldValue={setFieldValue}
            {...el}
            value={value}
            errors={errors}
        />
    )
}