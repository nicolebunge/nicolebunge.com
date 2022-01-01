import Production from '.';

export default {
  component: Production,
};

export const Default = {
  args: {
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
