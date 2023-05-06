import React, { Component } from 'react';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  handleClickNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  handleClickBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = ({ good, neutral, bad }) => {
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = ({ good, neutral, bad }) => {
    const total = good + neutral + bad;
    return total === 0 ? 0 : (good * 100) / total;
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <h2>Please leave feedback</h2>
        <button onClick={this.handleClickGood} type="button">
          Good
        </button>
        <button onClick={this.handleClickNeutral} type="button">
          Neutral
        </button>
        <button onClick={this.handleClickBad} type="button">
          Bad
        </button>
        <h2>Statistics</h2>
        <div>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {this.countTotalFeedback(this.state)}</p>
          <p>
            Positive feedback:{' '}
            {this.countPositiveFeedbackPercentage(this.state)}%
          </p>
        </div>
      </>
    );
  }
}

export default Feedback;
