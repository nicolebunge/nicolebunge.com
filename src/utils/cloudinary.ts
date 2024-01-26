/* eslint-disable import/prefer-default-export */

interface QueryProps {
  width?: number;
  height?: number;
}

function buildQuery(props: QueryProps): string {
  const { height, width } = props;

  const params = {
    // c: 'fill',
    c: 'pad',
    b: 'gen_fill',
    f: 'auto',
    h: height,
    q: 'auto',
    w: width,
  };

  return Object.entries(params)
    .filter(([, value]) => value)
    .map(([key, value]) => `${key}_${value}`)
    .join(',');
}

export { buildQuery };
