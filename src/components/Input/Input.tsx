/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import * as React from 'react'
import Icon from '../Icons/Icon'
import { palette } from '../../libs/palette'

export interface InputProps {
  value?: string | number
}

const Input = ({ value }: InputProps) => {
  return (
    <div css={style}>
      <input value={value} placeholder="고객 검색" />
      <button>
        <Icon icon="SearchIcon" />
      </button>
    </div>
  )
}

const style = css`
  height: 100%;
  border-radius: 0.125rem;
  display: inline-flex;
  appearance: none;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  transition: all 100ms ease 0s;
  user-select: none;
  position: relative;
  white-space: nowrap;
  vertical-align: middle;
  line-height: 1;
  height: 2rem;
  background-color: #f5f6fa;
  min-width: 2.5rem;
  font-size: 0.875rem;
  padding: 1.125rem 1rem;
  outline: none;
  box-sizing: border-box;
  display: inline-flex;
  font-weight: 500;
  cursor: text;

  input {
    border: none;

    background-color: #f5f6fa;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: #d8dce9;
    }
  }

  button {
    border-radius: 0.5rem;
    padding: 0.25rem;
    border: none;
    margin: 0;
    text-align: center;
    background-color: #f5f6fa;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 1em;
      background-color: #f5f6fa;
    }

    &:hover {
      background-color: #f3f4f5;
      svg {
        background-color: #f3f4f5;
      }
    }
    &:active {
      background-color: #f1f2f3;
      svg {
        background-color: #f1f2f3;
      }
    }
  }

  &:hover {
    /* box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1); */
  }
`

export default Input
