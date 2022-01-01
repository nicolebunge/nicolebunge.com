import Productions from '.';

export default {
  component: Productions,
};

export const Default = {
  args: {
    productions: [
      {
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
    ],
  },
};
