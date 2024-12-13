import Link from '../Link';

function formatList(list: string[]): string {
  return list.reduce(
    (text, value, i, array) => text + (i < array.length - 1 ? ', ' : ' & ') + value,
  );
}

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
}

function Production(props: ProductionProps) {
  const { name, role, directors, organization } = props;

  return (
    <p>
      <strong>„{name}“</strong>, {role}
      <br />
      Regie: {formatList(directors.map((director) => director.name))},{' '}
      <Link to={organization.url}>{organization.name}</Link>
    </p>
  );
}

export type { ProductionProps };
export default Production;
