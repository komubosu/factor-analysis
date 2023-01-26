import styles from './Button.module.scss';

import { MouseEvent } from 'react';

const Button = ({
  onClick,
  tittle,
  buttonColor,
  buttonSize,
  textSize,
  isDisable,
}: {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  tittle: string;
  buttonColor: string;
  buttonSize: string;
  textSize: string;
  isDisable?: boolean;
}) => {
  const handleStyle = (): string => {
    let style = styles.button;

    switch (buttonColor) {
      case 'white':
        style += ' ' + styles.buttonColorWhite;
        break;
      case 'blue':
        style += ' ' + styles.buttonColorBlue;
        break;

      default:
        break;
    }

    switch (buttonSize) {
      case 'small':
        style += ' ' + styles.buttonSizeSmall;
        break;
      case 'medium':
        style += ' ' + styles.buttonSizeMedium;
        break;
      case 'large':
        style += ' ' + styles.buttonSizeLarge;
        break;

      default:
        break;
    }

    switch (textSize) {
      case 'small':
        style += ' ' + styles.textSizeSmall;
        break;
      case 'large':
        style += ' ' + styles.textSizeLarge;
        break;

      default:
        break;
    }

    return style;
  };
  return (
    <button onClick={onClick} className={handleStyle()} disabled={isDisable}>
      {tittle}
    </button>
  );
};

export default Button;
