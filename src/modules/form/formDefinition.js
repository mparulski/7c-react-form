import React from 'react';
import FieldWrapper from './FieldWrapper';
import textField from "./textField";

export default (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <FieldWrapper fieldId="field-id-textField" {...props}>
                {textField}
            </FieldWrapper>

            <input type="submit" value="Submit"/>
        </form>
    )
}