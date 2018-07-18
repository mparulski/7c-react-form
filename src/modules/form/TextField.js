import React, {Component} from 'react';

export default class extends Component {

    render() {
        const {onBlur, onChange, onFocus, value} = this.props;

        return <input type="text" onBlur={onBlur} onChange={onChange} onFocus={onFocus} value={value}/>
    }
}