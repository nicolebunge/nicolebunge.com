import Alignment from '.';

const meta = {
  component: Alignment,
};

const Default = {
  args: {
    children: 'Alignment',
  },
};

const AlignCenter = {
  args: {
    align: 'center',
  },
};

const JustifyCenter = {
  args: {
    justify: 'center',
  },
};

const Center = {
  args: {
    align: 'center',
    justify: 'center',
  },
};

export { AlignCenter, Center, Default, JustifyCenter };
export default meta;
