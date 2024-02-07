import { graphql, useStaticQuery } from 'gatsby';

interface Image {
  id: string;
  public_id: string;
}

interface GalleryQuery {
  contentfulGallery: {
    id: string;
    images: Image[];
  };
}

function useGallery(): GalleryQuery {
  return useStaticQuery<GalleryQuery>(graphql`
    {
      contentfulGallery(title: { eq: "Schauspiel" }) {
        id
        images {
          id
          public_id
        }
      }
    }
  `);
}

export { useGallery };
export type { GalleryQuery };
