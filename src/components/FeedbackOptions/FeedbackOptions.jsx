import { Component } from "react";
import PropTypes from "prop-types";
import Button from "components/Button/Button";

class FeedbackOptions extends Component {
    render() {
        const { options, onLeaveFeedback } = this.props;
        return (
            <>
                {options.map((item) => {
                    return (<Button key={item} name={item} onClick={onLeaveFeedback}/>)
                })}
            </>
        )
    }
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
}