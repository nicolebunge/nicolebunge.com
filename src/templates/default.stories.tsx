import DefaultTemplate from './default';

export default {
  component: DefaultTemplate,
};

export const Default = {
  args: {
    data: {
      markdownRemark: {
        frontmatter: {
          title: 'Page Title',
        },
        html: '<p>Page content</p>',
      },
    },
  },
};
