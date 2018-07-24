import React, {Component} from 'react';
import PropTypes from 'prop-types';

const _getPropsAndHelpers = Symbol();

export default class FieldWrapper extends Component {

    static CLASS_NAME = 'FieldWrapper';

    static propTypes = {
        children: PropTypes.func.isRequired,
        fieldId: PropTypes.string.isRequired,
        handleBlur: PropTypes.func,
        handleChange: PropTypes.func,
        handleFocus: PropTypes.func,
        value: PropTypes.node
    };

    static defaultProps = {
        value: ''
    };

    handleBlur = () => {
        const {fieldId, handleBlur} = this.props;
        handleBlur(fieldId);
    };

    handleChange = (event) => {
        const {fieldId, handleChange} = this.props;
        handleChange(fieldId, event);
    };

    handleFocus = () => {
        const {fieldId, handleFocus} = this.props;
        handleFocus(fieldId);
    };

    render() {
        return this.props.children(this[_getPropsAndHelpers]())
    }

    [_getPropsAndHelpers]() {
        const {fieldId, value} = this.props;

        return {
            fieldId: fieldId,
            handleBlur: this.handleBlur,
            handleChange: this.handleChange,
            handleFocus: this.handleFocus,
            value: value
        }
    }
}