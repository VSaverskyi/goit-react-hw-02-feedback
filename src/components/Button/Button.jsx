import { Component } from "react";
import PropTypes from "prop-types";

class Button extends Component {
    render() {
        const { name, onClick } = this.props;
        return (
            <button name={name} onClick={onClick} type="button">
                        {name}
                    </button>
        )
    }
}

export default Button;

Button.propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}