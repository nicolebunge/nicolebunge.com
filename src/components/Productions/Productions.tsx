import Production, { ProductionProps } from '../Production';

interface ProductionsProps {
  productions: ProductionProps[];
}

function Productions(props: ProductionsProps) {
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
