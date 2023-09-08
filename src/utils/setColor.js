const setColor = (count) => {
    if (count > 0) {
        return 'green';
    } else if (count < 0) {
        return 'red';
    } else {
        return 'blue';
    }
};

export default setColor;
