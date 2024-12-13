import clsx from 'clsx';
import { HTMLAttributes, ReactNode } from 'react';
import { main } from './Main.module.css';

interface MainProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function Main(props: MainProps) {
  const { className, ...otherProps } = props;

  return <main className={clsx(className, main)} role="main" {...otherProps} />;
}

export type { MainProps };
export default Main;
