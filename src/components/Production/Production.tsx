import Link from '../Link';
import { formatList } from '../../utils/string';

interface Director {
  id: string;
  name: string;
  slug: string;
  url?: string;
}

interface Organization {
  id: string;
  name: string;
  slug: string;
  url: string;
}

interface ProductionProps {
  directors: Director[];
  id: string;
  name: string;
  organization: Organization;
  role: string;
  slug: string;
  date?: string;
  url?: string;
}

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
