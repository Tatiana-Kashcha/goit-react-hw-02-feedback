import * as s from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  console.log(options);
  return (
    <s.List>
      <s.ListItems>
        <button type="button" onClick={onLeaveFeedback}>
          Good
        </button>
      </s.ListItems>
      <s.ListItems>
        <button type="button" onClick={onLeaveFeedback}>
          Neutral
        </button>
      </s.ListItems>
      <s.ListItems>
        <button type="button" onClick={onLeaveFeedback}>
          Bad
        </button>
      </s.ListItems>
    </s.List>
  );
};
