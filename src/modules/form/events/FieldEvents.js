const handleBlur = function (fieldId) {
    this.setState((prevState) => {
        return {[fieldId]: {...prevState[fieldId], focus: false}}
    });
};

const handleChange = function (fieldId, event) {
    const {value} = event.target;

    this.setState((prevState) => {
        return {[fieldId]: {...prevState[fieldId], value: value}}
    });
};

const handleFocus = function (fieldId) {
    this.setState((prevState) => {
        return {[fieldId]: {...prevState[fieldId], focus: true}}
    });
};

export {
    handleBlur,
    handleChange,
    handleFocus
}

