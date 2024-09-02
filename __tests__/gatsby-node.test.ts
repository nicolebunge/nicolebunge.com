import type { CreateNodeArgs, CreatePagesArgs, CreateSchemaCustomizationArgs } from 'gatsby';
import { resolve } from 'node:path';
import { describe, expect, it, vi } from 'vitest';
import type { Data, Node } from '../gatsby-node';
import { createPages, createSchemaCustomization, onCreateNode } from '../gatsby-node';

const defaultTemplate = resolve('src/templates/default.tsx');

const data = {
  allMarkdownRemark: {
    edges: [
      {
        node: {
          frontmatter: {
            path: '/page-a',
          },
        },
      },
      {
        node: {
          frontmatter: {
            path: '/page-b',
          },
        },
      },
    ],
  },
} satisfies Data;

describe('gatsby-node', () => {
  describe('createPages', () => {
    it('should create pages', async () => {
      const createPage = vi.fn();
      const graphql = vi.fn().mockResolvedValueOnce({ data });

      await createPages({
        actions: {
          createPage,
        },
        graphql,
      } as unknown as CreatePagesArgs);

      expect(createPage).toHaveBeenCalledTimes(2);
      expect(createPage).toHaveBeenCalledWith({
        component: defaultTemplate,
        context: {
          slug: '/page-a',
        },
        path: '/page-a',
      });
    });
  });

  describe('createSchemaCustomization', () => {
    it('should create schema customization', () => {
      const createTypes = vi.fn();

      createSchemaCustomization({
        actions: {
          createTypes,
        },
      } as unknown as CreateSchemaCustomizationArgs);

      const typeDefs = `
    type Director implements Node {
      productions: [Production] @link(by: "director.fields.slug", from: "fields.slug")
    }
    type Organization implements Node {
      productions: [Production] @link(by: "organization.fields.slug", from: "slug")
    }
    type Production implements Node {
      directors: [Director] @link(by: "fields.slug")
      organization: Organization @link(by: "fields.slug")
    }
  `;

      expect(createTypes).toHaveBeenCalledTimes(1);
      expect(createTypes).toHaveBeenCalledWith(typeDefs);
    });
  });

  describe('onCreateNode', () => {
    it('should add a `slug` field on node creation', () => {
      const createNodeField = vi.fn();
      const node = {
        name: 'Organization Name',
        internal: {
          type: 'Organization',
        },
      };

      onCreateNode({
        actions: {
          createNodeField,
        },
        node,
      } as unknown as CreateNodeArgs<Node>);

      expect(createNodeField).toHaveBeenCalledTimes(1);
      expect(createNodeField).toHaveBeenCalledWith({
        name: 'slug',
        node,
        value: 'organization-name',
      });
    });

    it('should not add a `slug` field for unsupported types', () => {
      const createNodeField = vi.fn();
      const node = {
        internal: {
          type: 'Unsupported Type',
        },
      };

      onCreateNode({
        actions: {
          createNodeField,
        },
        node,
      } as unknown as CreateNodeArgs<Node>);

      expect(createNodeField).toHaveBeenCalledTimes(0);
    });
  });
});
