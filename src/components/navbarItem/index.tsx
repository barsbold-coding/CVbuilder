import Link from 'next/link';
import React from 'react';

import style from './style.module.css';

type NavItemProps = {
  contrast?: boolean;
  to: string;
  children: string;
  onClick?: () => void;
}

function NavItem({ contrast, to, children, onClick }: NavItemProps) {
  return (
    <Link href={to} onClick={onClick}>
      <div style={style} className={`${style.item} ${contrast && style.contrast}`}>
        {children}
      </div>
    </Link>
  );
}

export default NavItem;
