import { gql } from "@apollo/client";

export const GET_ALL_POSTS = gql`
  query GET_ALL_POSTS {
    posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
      nodes {
        excerpt
        content
        slug
        date
        title
        tags {
          nodes {
            name
          }
        }
        featuredImage {
          node {
            altText
            sourceUrl
          }
        }
      }
    }
  }
`;

export const GET_POST_BY_SLUG = gql`
  query GET_POST_BY_SLUG($slug: String) {
    postBy(slug: $slug) {
      excerpt
      content
      slug
      date
      title
      tags {
        nodes {
          name
        }
      }
      featuredImage {
        node {
          altText
          sourceUrl
        }
      }
    }
  }
`;
