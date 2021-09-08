import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'

import style from './style.module.scss';

const Header = () => {
  return (
    <div className={style.container}>
      <div className={style.headerContent}>
        <h2>marciordj</h2>

        <div className={style.contentContainer}>
          <nav>
            <a href="#">Home</a>
            <a href="#">Post</a>
          </nav>

          <div>
            <a href="#">
              <FaGithub />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Header;