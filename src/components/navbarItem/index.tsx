import Link from 'next/link';
import React from 'react';
import {Paragraph} from '../typography';

import style from './style.module.css';

type NavItemProps = {
  contrast?: boolean;
  to: string;
  children: string;
  onClick?: () => void;
}

function NavItem({ contrast, to, children, onClick }: NavItemProps) {
  return (
    <Link href={to} onClick={onClick} style={{ textDecoration: 'none' }}>
      <div style={style} className={`${style.item} ${contrast && style.contrast}`}>
        <Paragraph size='normal' color='white'>
          {children}
        </Paragraph>
      </div>
    </Link>
  );
}

export default NavItem;
