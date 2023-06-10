import { Component } from 'react';
import { Section } from 'components/Section/Section';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions good={good} neutral={neutral} bad={bad} />
          {/* <FeedbackOptions options={} onLeaveFeedback={} /> */}
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            // total={countTotalFeedback()}
            // positivePercentage={countPositiveFeedbackPercentage()}
          />
          <Notification message="There is no feedback" />
        </Section>
      </>
    );
  }
}

export default App;
