import React from 'react';
import Production, { ProductionProps } from '../Production';

export interface ProductionsProps {
  productions: ProductionProps[];
}

function Productions(props: ProductionsProps): JSX.Element {
  const { productions } = props;

  return (
    <>
      {productions.map((production) => {
        const { id } = production;

        return <Production key={id} {...production} />;
      })}
    </>
  );
}

export default Productions;
