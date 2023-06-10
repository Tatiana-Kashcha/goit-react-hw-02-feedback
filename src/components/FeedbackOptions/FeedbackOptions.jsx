import * as s from './FeedbackOptions.styled';

export const FeedbackOptions = ({
  onClickGood,
  onClickNeutral,
  onClickBad,
}) => {
  // export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <s.List>
      <s.ListItems>
        <button type="button" onClick={onClickGood}>
          Good
        </button>
      </s.ListItems>
      <s.ListItems>
        <button type="button" onClick={onClickNeutral}>
          Neutral
        </button>
      </s.ListItems>
      <s.ListItems>
        <button type="button" onClick={onClickBad}>
          Bad
        </button>
      </s.ListItems>
    </s.List>
  );
};
