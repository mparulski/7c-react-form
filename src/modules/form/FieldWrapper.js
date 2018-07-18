import React, {Component} from 'react';
import PropTypes from 'prop-types';

const _getPropsAndHelpers = Symbol();

export default class extends Component {

    static propTypes = {
        fieldComponent: PropTypes.oneOfType([
            PropTypes.element,
            PropTypes.func
        ]).isRequired,
        fieldId: PropTypes.string.isRequired,
        value: PropTypes.node
    };

    static defaultProps = {
        value: ''
    };

    constructor() {
        super();

        // onRegister
    }

    onBlur = () => {
        const {fieldId, onBlur} = this.props;
        onBlur(fieldId);
    };

    onChange = (event) => {
        const {fieldId, onChange} = this.props;
        onChange(fieldId, event);
    };

    onFocus = () => {
        const {fieldId, onBlur} = this.props;
        onBlur(fieldId);
    };

    render() {
        const FieldComponent = this.props.fieldComponent;

        return <FieldComponent {...this[_getPropsAndHelpers]()}/>
    }

    [_getPropsAndHelpers]() {
        return {
            fieldId: this.props.fieldId,
            onBlur: this.onBlur,
            onChange: this.onChange,
            onFocus: this.onFocus,
            value: this.props.value
        }
    }
}