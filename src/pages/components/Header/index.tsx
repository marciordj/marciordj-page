import React from 'react';

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
            <a href="#">Icon1</a>
            <a href="#">Icon2</a>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Header;