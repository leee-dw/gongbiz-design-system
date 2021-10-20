/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import Icon, { iconTypes } from './Icon'

export default {
  component: Icon,
  title: 'Components/Icon',
}

export const IconList = () => {
  return (
    <ul css={iconListStyle}>
      {iconTypes.map(icon => (
        <li key={icon}>
          <Icon icon={icon} />
          {icon}
        </li>
      ))}
    </ul>
  )
}

const iconListStyle = css`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  background-color: #000;
  li {
    box-sizing: border-box;
    width: 25%;
    padding: 1rem;
    display: flex;
    align-items: center;
    color: #fff;
    svg {
      margin-right: 1rem;
    }
  }
`
