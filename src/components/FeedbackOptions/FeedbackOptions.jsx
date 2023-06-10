import * as s from './FeedbackOptions.styled';

export const FeedbackOptions = ({ good, neutral, bad }) => {
  return (
    <s.List>
      <s.ListItems>
        <button type="button">Good</button>
      </s.ListItems>
      <s.ListItems>
        <button type="button">Neutral</button>
      </s.ListItems>
      <s.ListItems>
        <button type="button">Bad</button>
      </s.ListItems>
    </s.List>
  );
};
