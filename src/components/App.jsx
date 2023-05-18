import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';
import { Statistics } from './Statistics';
import { Notification } from './Notification';
import React from 'react';
// импорт хука useState из React

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function onLeaveFeedback(evt) {
    const name = evt.target.dataset.action; // good

    // // заменено
    // this.setState(prevState => ({
    //   [name]: prevState[name] + 1,
    // }));

    if (name === 'good') setGood(good + 1);
    if (name === 'neutral') setNeutral(neutral + 1);
    if (name === 'bad') setBad(bad + 1);
  }

  function countTotalFeedback() {
    // let sum = 0;
    // Object.values(this.state).map(el => (sum += el));
    // return sum;

    return good + neutral + bad;
  }

  function countPositiveFeedbackPercentage() {
    const valueGood = good;
    const totalFeedback = countTotalFeedback();
    let percentage = Math.round((valueGood / totalFeedback) * 100);

    if (!totalFeedback) {
      return (percentage = 0);
    }

    return percentage;
  }

  return (
    <>
      <Section title={'Please leave Feedback'}>
        <p>React Hooks</p>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          // options={Object.keys(state)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title={'Statistics'}>
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    </>
  );
}
