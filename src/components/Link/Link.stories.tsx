import Link from '.';

export default {
  component: Link,
};

export const Default = {
  args: {
    children: 'Internal Link',
    to: '/',
  },
};

export const External = {
  args: {
    children: 'External Link',
    to: 'http://example.com',
  },
};
