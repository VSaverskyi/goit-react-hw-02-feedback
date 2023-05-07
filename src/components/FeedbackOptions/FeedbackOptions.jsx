import { Component } from "react";

class FeedbackOptions extends Component {
    render() {
        const { options, onLeaveFeedback } = this.props;
        return (
            <>
                {options.map((item) => {
                    return (<button name={item} key={item} onClick={onLeaveFeedback} type="button">
                        {item}
                    </button>)
                })}
            </>
        )
    }
}

export default FeedbackOptions;

