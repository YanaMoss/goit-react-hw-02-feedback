import { Component } from 'react';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  counterFeedback = optionName => {
    this.setState(prevState => {
      return { [optionName]: prevState[optionName] + 1 };
    });
  };

  countTotalFeedback = () =>
    (this.total = this.state.good + this.state.neutral + this.state.bad);
  countPositiveFeedbackPercentage = () => {
    this.positivePercentage = this.state.good / (this.total / 100);
    return Math.round(this.positivePercentage);
  };
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    return (
      <Container>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.counterFeedback}
          />
        </Section>
        <Section title={'Statistics'}>
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given"></Notification>
          )}
        </Section>
      </Container>
    );
  }
}
