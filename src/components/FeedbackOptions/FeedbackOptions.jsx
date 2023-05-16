import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export function FeedbackOptions(props) {
  const { options, onLeaveFeedback } = props;

  return (
    <div className={css.btnWrapp}>
      {options.map(option => (
        <button
          key={option}
          className={css.btn}
          type="button"
          data-action={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
