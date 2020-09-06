import React, { Component } from 'react';
import { Section } from './section/Section.js';
import { Feedback } from './feedback/Feedback.js';
import { Statistic } from './statistic/Statistic.js';

const objState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export default class App extends Component {
  state = { ...objState };

  feedbackEvent = event => {
    event.persist();
    this.setState(prevState => {
      return { [event.target.name]: prevState[event.target.name] + 1 };
    });
  };

  totalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPercentage = () => {
    return Math.round((100 / this.totalFeedback()) * this.state.good);
  };

  render() {
    return (
      <>
        <Section title={'Please leave feedback'}>
          <Feedback
            options={Object.keys(this.state)}
            feedbackEvent={this.feedbackEvent}
          />
        </Section>
        <Section title={'Statistics'}>
          {this.totalFeedback() > 0 ? (
            <Statistic
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.totalFeedback()}
              countPercentage={this.countPercentage()}
            />
          ) : (
            <p>No feedback given</p>
          )}
        </Section>
      </>
    );
  }
}
