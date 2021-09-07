import React from 'react';

import style from './style.module.scss';

const Header = () => {
  return (
    <div className={style.container}>
      <div className={style.headerContent}>
        <h2>marciordj</h2>

        <nav className={style.sections}>
          <p>Home</p>
          <p>Post</p>
        </nav>
      </div>
    </div>
  )
}


export default Header;