import Production from '.';

const meta = {
  component: Production,
};

const Default = {
  args: {
    id: '12345678-9012-3456-7890-123456789012',
    name: 'Erbarmen',
    role: 'Lis Sørensen',
    organization: {
      name: 'Berliner Kriminal Theater',
      slug: 'berliner-kriminal-theater',
      url: 'https://www.kriminaltheater.de',
    },
    directors: [
      {
        name: 'Wolfgang Rumpf',
      },
    ],
  },
};

export { Default };
export default meta;
