import { ResolvedProduction } from '@/data/utils';
import Production from '../Production';

interface ProductionsProps {
  productions: ResolvedProduction[];
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
