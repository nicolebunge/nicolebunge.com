import List from '.';

const meta = {
  component: List,
};

interface Item {
  id: number;
  name: string;
}

const items = [
  { id: 1, name: 'One' },
  { id: 2, name: 'Two' },
  { id: 3, name: 'Three' },
] as const satisfies Item[];

const Default = {
  args: {
    items,
    renderItem: (item: Item) => item.name,
  },
};

export { Default };
export default meta;
