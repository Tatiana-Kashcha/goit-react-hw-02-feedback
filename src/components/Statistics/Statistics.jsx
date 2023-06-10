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
        <p>Good: {good}</p>
      </s.ListItems>
      <s.ListItems>
        <p>Neutral: {neutral}</p>
      </s.ListItems>
      <s.ListItems>
        <p>Bad: {bad}</p>
      </s.ListItems>
      <s.ListItems>
        <p>Total: {total}</p>
      </s.ListItems>
      <s.ListItems>
        <p>Positive feedback: {positivePercentage}%</p>
      </s.ListItems>
    </s.List>
  );
};
