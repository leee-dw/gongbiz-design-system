import * as React from 'react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import classNames from 'classnames'

import styles from './index.module.scss'

export enum ButtonTheme {
  DEFAULT = 'default',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}
export enum ButtonVariant {
  DEFAULT = 'solid',
  OUTLINE = 'outline',
  GHOST = 'ghost',
  LINK = 'link',
}

export interface IProps {
  // children: React.ReactNode
  children: string
  onClick?: React.MouseEventHandler
  theme?: ButtonTheme
  variants?: ButtonVariant
}

const Button: React.FC<IProps> = ({
  children,
  theme = ButtonTheme.DEFAULT,
  variants = ButtonVariant.DEFAULT,
}) => {
  const classNameProps = classNames(styles.default, styles[theme], styles[variants])
  return (
    <button disabled={boolean('Disabled', false)} className={classNameProps}>
      {text('Label', children)}
    </button>
  )
}

export default Button
