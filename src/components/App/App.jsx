import React, { useState } from 'react';
import Section from '../Section';
import FeedbackOptions from '../FeedbackOptions';
import StatisticList from '../StatisticList';
import Notification from '../Notification';
import imageUrl from '../../images/feedback.png';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increaseFbAmount = fbName => {
    switch (fbName) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const decreaseFbAmount = fbName => {
    switch (fbName) {
      case 'good':
        setGood(prevState => prevState - 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState - 1);
        break;
      case 'bad':
        setBad(prevState => prevState - 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.trunc((good / total) * 100);
  };

  const noFeedbacks = countTotalFeedback() === 0;
  const options = [
    ['good', good],
    ['neutral', neutral],
    ['bad', bad],
  ];

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onIncreaseFbAmount={increaseFbAmount}
          onDecreaseFbAmount={decreaseFbAmount}
        />
      </Section>
      <Section title="Statistics">
        {noFeedbacks && <Notification url={imageUrl} />}
        {!noFeedbacks && (
          <StatisticList
            options={options}
            totalFeedback={countTotalFeedback}
            positiveFeedback={countPositiveFeedbackPercentage}
          />
        )}
      </Section>
    </>
  );
}
