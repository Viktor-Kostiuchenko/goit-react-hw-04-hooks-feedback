import Section from '../Section';
import FeedbackOptions from '../FeedbackOptions';
import StatisticList from '../StatisticList';
import Notification from '../Notification';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import imageUrl from '../../images/feedback.png';

const initialState = { good: 0, neutral: 0, bad: 0 };
export default function App() {
  const [state, setState] = useLocalStorage('localStorage', initialState);

  const increaseFbAmount = fbName => {
    setState({ ...state, [fbName]: state[fbName] + 1 });
  };

  const decreaseFbAmount = fbName => {
    setState({ ...state, [fbName]: state[fbName] - 1 });
  };

  const countTotalFeedback = () => {
    return Object.values(state).reduce((total, value) => total + value, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.trunc((state.good / total) * 100);
  };

  const noFeedbacks = countTotalFeedback() === 0;
  const options = Object.entries(state);

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
