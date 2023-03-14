import { FC } from 'react';

interface Button {
  variant: string;
}

const Button: FC<Button> = ({ variant }) => {
  return <div>click</div>;
};

export default Button;
