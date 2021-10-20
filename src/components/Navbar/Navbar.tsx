import * as React from 'react'
import { css } from '@emotion/core'

export interface NavbarProps {
  href?: string
}

const Navbar = ({ href }: NavbarProps) => {
  return (
    <nav>
      <ul>
        <li>
          <a href={href}>About us</a>
        </li>
        <li>
          <a href={href}>Ministries</a>
        </li>
        <li>
          <a href={href}>Community</a>
        </li>
        <li>
          <a href={href}>Locations</a>
        </li>
        <li>
          <a href={href}>Blog</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
