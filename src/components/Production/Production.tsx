import { ResolvedProduction } from '@/data/utils';
import Link from '../Link';
import { formatList } from '../../utils/string';

type ProductionProps = ResolvedProduction;

function Production(props: ProductionProps) {
  const { name, role, directors, organization, url } = props;

  return (
    <p>
      {url ? (
        <Link to={url}>
          <strong>„{name}“</strong>
        </Link>
      ) : (
        <strong>„{name}“</strong>
      )}
      , {role}
      <br />
      Regie: {formatList(directors.map((director) => director.name))},{' '}
      <Link to={organization.url}>{organization.name}</Link>
    </p>
  );
}

export type { ProductionProps };
export default Production;
