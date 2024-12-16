import Link from '.';

const meta = {
  component: Link,
};

const Default = {
  args: {
    children: 'Internal Link',
    to: '/',
  },
};

const External = {
  args: {
    children: 'External Link',
    to: 'http://example.com',
  },
};

export { Default, External };
export default meta;
