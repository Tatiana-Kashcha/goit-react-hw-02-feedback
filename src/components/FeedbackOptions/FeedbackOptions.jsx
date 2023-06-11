import * as s from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <s.List>
      {options.map(element => (
        <s.ListItems>
          <button type="button" onClick={onLeaveFeedback}>
            {element}
          </button>
        </s.ListItems>
      ))}
    </s.List>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      element: PropTypes.string.isRequired,
    })
  ),
  onLeaveFeedback: PropTypes.func.isRequired,
};
