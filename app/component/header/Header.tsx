"use client";
import { forwardRef } from 'react';
import styles from './style.module.scss';
import Magnetic from './Magnetic';
import LetsTalk from '../Button/LetsTalk';
import { cn } from '@/lib/utils';

const Header = forwardRef(function index(props, ref:any) {
  return (
    <div className={styles.header}>
        <Magnetic>
          <div className={styles.burger}>
            <div ref={ref} className={cn(styles.bounds, "text-white")}>
              {/* <LetsTalk /> */}
              <span className='text-center flex w-max flex-nowrap flex-col items-center border rounded-full hover:bg-[#FE6E39] hover:border-[#FE6E39] hover:text-white px-4 py-1 translate-y-1/2 -translate-x-1/3'>
              Lets Talk
              </span>
            </div>
          </div>
        </Magnetic>
    </div>
  )}
)

export default Header