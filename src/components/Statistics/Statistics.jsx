import * as s from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <s.List>
      <s.ListItems>
        <span>Good: {good}</span>
      </s.ListItems>
      <s.ListItems>
        <span>Neutral: {neutral}</span>
      </s.ListItems>
      <s.ListItems>
        <span>Bad: {bad}</span>
      </s.ListItems>
      <s.ListItems>
        <span>Total: {total}</span>
      </s.ListItems>
      <s.ListItems>
        <span>Positive feedback: {positivePercentage}%</span>
      </s.ListItems>
    </s.List>
  );
};
