import React from 'react';
import './_index.scss';

const Button = (props) => {
  const { text, ...rest } = props;
  return <button {...rest}>{text}</button>;
};
export default Button;
