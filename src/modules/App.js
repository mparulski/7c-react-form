import React, {Component} from 'react';
import SCReactForm from './form/SCReactForm';

import formDefinition from './form/formDefinition';

export default class extends Component {

    render() {
        return (
            <div>
                <SCReactForm>
                    {formDefinition}
                </SCReactForm>
            </div>
        );
    }
}