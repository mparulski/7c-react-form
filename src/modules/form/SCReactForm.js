import React, {Component} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import * as fieldEvents from './events/FieldEvents';
import FieldWrapper from './FieldWrapper';

const _getStateAndHelpers = Symbol();
const _formFields = Symbol();

export default class extends Component {

    static propTypes = {
        children: PropTypes.func.isRequired
    };

    state = {};

    constructor() {
        super();

        this[_formFields] = new Map();

        this.fieldEvents = {
            handleBlur: fieldEvents.handleBlur.bind(this),
            handleChange: fieldEvents.handleChange.bind(this),
            handleFocus: fieldEvents.handleFocus.bind(this),
        };
    }

    getValues() {
        const {fields} = this.state;

        return fields.map(field => field.value);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.getValues());
    };

    render() {
        const form = this.props.children(this[_getStateAndHelpers]());
        const fieldsWrappers = form.props.children; // temporary solution

        return React.Children.map(fieldsWrappers, child => {

            if (child.type.name === FieldWrapper.CLASS_NAME) {
                const fieldId = child.props.fieldId;
                const elementValue = !_.isUndefined(this.state[fieldId]) ? this.state[fieldId].value : '';

                return React.cloneElement(child, {
                    value: elementValue
                })
            }

            return child;
        });
    }

    [_getStateAndHelpers]() {
        return {
            handleSubmit: this.handleSubmit,
            ...this.fieldEvents
        }
    }
}