import React from 'react';
import Production, { ProductionProps } from '../Production';

interface ProductionsProps {
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

export type { ProductionsProps };
export default Productions;
