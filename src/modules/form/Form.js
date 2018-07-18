import React, {Component} from 'react';

import TextField from './TextField';
import FieldWrapper from './FieldWrapper';
import * as fieldEvents from './FieldEvents';

export default class extends Component {

    state = {};

    constructor() {
        super();

        this.fieldEvents = {
            onBlur: fieldEvents.onBlur.bind(this),
            onChange: fieldEvents.onChange.bind(this),
            onFocus: fieldEvents.onFocus.bind(this)
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('handleSubmit');
    };

    render() {
        console.log(this.state);
        return (
            <form onSubmit={this.handleSubmit}>
                <FieldWrapper fieldComponent={TextField} fieldId="field-id-textField" {...this.fieldEvents} />
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}