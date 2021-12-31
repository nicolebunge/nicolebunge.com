import Alignment from '.';

export default {
  component: Alignment,
};

export const Default = {
  args: {
    children: 'Alignment',
  },
};

export const AlignCenter = {
  args: {
    align: 'center',
  },
};

export const JustifyCenter = {
  args: {
    justify: 'center',
  },
};

export const Center = {
  args: {
    align: 'center',
    justify: 'center',
  },
};
