import type { Key, ReactNode } from 'react';

interface ListProps<Item> {
  as?: 'ul' | 'ol';
  items: Item[];
  renderItem: (item: Item) => ReactNode;
}

function List<Item extends { id: Key }>(props: ListProps<Item>) {
  const { as: As = 'ul', items, renderItem } = props;

  return (
    <As>
      {items.map((item) => {
        const { id } = item;

        return <li key={id}>{renderItem(item)}</li>;
      })}
    </As>
  );
}

export type { ListProps };
export default List;
