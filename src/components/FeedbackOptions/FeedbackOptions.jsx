import * as s from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({
  onClickGood,
  onClickNeutral,
  onClickBad,
  // options, onLeaveFeedback
}) => {
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

FeedbackOptions.propTypes = {
  onClickGood: PropTypes.func.isRequired,
  onClickNeutral: PropTypes.func.isRequired,
  onClickBad: PropTypes.func.isRequired,
};
