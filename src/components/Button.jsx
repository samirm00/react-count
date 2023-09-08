import PropTypes from 'prop-types';

import './Button.css';

const Button = ({ styling, text, handleClick }) => {
    return (
        <button className={`btn ${styling}`} onClick={handleClick}>
            {text}
        </button>
    );
};

// default props
Button.defaultProps = {
    styling: '',
    text: 'Click me',
    handleClick: () => {}
};

// propTypes
Button.propTypes = {
    styling: PropTypes.string,
    text: PropTypes.string,
    handleClick: PropTypes.func.isRequired
};

export default Button;
