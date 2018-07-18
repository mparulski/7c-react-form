const onBlur = function(fieldId) {
    this.setState({[fieldId]: {focus: false}});
};

const onChange = function(fieldId, event) {
    this.setState({[fieldId]: {value: event.target.value}});
};

const onFocus = function(fieldId) {
    this.setState({[fieldId]: {focus: true}});
};

export {
    onBlur,
    onChange,
    onFocus
}

