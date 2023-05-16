import PropTypes from 'prop-types';
import css from './Section.module.css';

export function Section(props) {
  const { title, children } = props;

  return (
    <section className={css.section}>
      <h1>{title}</h1>
      <>{children}</>
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
