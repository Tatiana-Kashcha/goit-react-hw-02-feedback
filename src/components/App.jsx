import { Component } from 'react';
import { Statistics } from 'components/Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        {/* <Section>
          <FeedbackOptions />
        </Section>
        <Section> */}
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          // total={countTotalFeedback()}
          // positivePercentage={countPositiveFeedbackPercentage()}
        />
        {/* </Section> */}
      </div>
    );
  }
}

export default App;
