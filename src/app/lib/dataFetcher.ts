import {
  TypeAuthor,
  TypeAuthorSkeleton,
  TypeNewsCategory,
  TypeNewsCategorySkeleton,
  TypeNormalNews,
  TypeNormalNewsSkeleton,
  TypeSportsNews,
  TypeSportsNewsSkeleton,
} from "@/types/contentful/types";

// const BASE_URL = "http://localhost:3000/api/contentful";

import { createClient } from "contentful";

export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  environment: process.env.CONTENTFUL_BRANCH,
});

/**
 * Fetch all news categories.
 */
export const getAllNewsCategories = async (): Promise<
  TypeNewsCategory<undefined, "en-US">[]
> => {
  try {
    const response =
      await contentfulClient.getEntries<TypeNewsCategorySkeleton>({
        content_type: "newsCategory",
      });
    return response.items;
  } catch {
    throw new Error("Failed to fetch news categories");
  }
};

export const getAllNormalNews = async (): Promise<
  TypeNormalNews<"WITHOUT_UNRESOLVABLE_LINKS", "en-US">[]
> => {
  try {
    const response =
      await contentfulClient.withoutUnresolvableLinks.getEntries<TypeNormalNewsSkeleton>(
        {
          content_type: "normalNews",
        },
      );
    return response.items;
  } catch {
    throw new Error("Failed to fetch all normal news");
  }
};

export const getAllSportNews = async (): Promise<
  TypeSportsNews<"WITHOUT_UNRESOLVABLE_LINKS", "en-US">[]
> => {
  try {
    const response =
      await contentfulClient.withoutUnresolvableLinks.getEntries<TypeSportsNewsSkeleton>(
        {
          content_type: "sportsNews",
        },
      );
    return response.items;
  } catch {
    throw new Error("Failed to fetch all normal news");
  }
};

export const getAllAuthors = async (): Promise<
  TypeAuthor<"WITHOUT_UNRESOLVABLE_LINKS", "en-US">[]
> => {
  try {
    const response =
      await contentfulClient.withoutUnresolvableLinks.getEntries<TypeAuthorSkeleton>(
        {
          content_type: "author",
        },
      );
    return response.items;
  } catch {
    throw new Error("Failed to fetch all authors");
  }
};

export const getNormalNewsById = async (
  id: string,
): Promise<TypeNormalNews<"WITHOUT_UNRESOLVABLE_LINKS", "en-US">> => {
  try {
    const response =
      await contentfulClient.withoutUnresolvableLinks.getEntry<TypeNormalNewsSkeleton>(
        id,
      );
    return response;
  } catch {
    throw new Error("Failed to fetch all normal news");
  }
};

export const getSportsNewsById = async (
  id: string,
): Promise<TypeSportsNews<"WITHOUT_UNRESOLVABLE_LINKS", "en-US">> => {
  try {
    const response =
      await contentfulClient.withoutUnresolvableLinks.getEntry<TypeSportsNewsSkeleton>(
        id,
      );
    return response;
  } catch {
    throw new Error("Failed to fetch individual sports news");
  }
};

export const getAuthorById = async (
  id: string,
): Promise<TypeAuthor<"WITHOUT_UNRESOLVABLE_LINKS", "en-US">> => {
  try {
    const response =
      await contentfulClient.withoutUnresolvableLinks.getEntry<TypeAuthorSkeleton>(
        id,
      );
    return response;
  } catch {
    throw new Error("Failed to fetch author from id");
  }
};

// /**
//  * Fetch a specific news category by ID.
//  * @param id - The ID of the news category.
//  */
// export const getNewsCategoryById = async (
//   id: string,
// ): Promise<newsCategoryType> => {
//   const response = await fetch(`${BASE_URL}/content-type/news-category/${id}`);
//   if (!response.ok)
//     throw new Error(`Failed to fetch news category with ID: ${id}`);
//   return response.json();
// };

// /**
//  * Fetch all authors.
//  */
// export const getAllAuthors = async (): Promise<authorType[]> => {
//   const response = await fetch(`${BASE_URL}/content-type/author`);
//   if (!response.ok) throw new Error("Failed to fetch authors");
//   return response.json();
// };

// /**
//  * Fetch a specific author by ID.
//  * @param id - The ID of the author.
//  */
// export const getAuthorById = async (id: string): Promise<authorType> => {
//   const response = await fetch(`${BASE_URL}/content-type/author/${id}`);
//   if (!response.ok) throw new Error(`Failed to fetch author with ID: ${id}`);
//   return response.json();
// };

/**
 * Fetch all normal news.
 */
// export const getMinimalNormalNews = async (): Promise<
//   minimalNewsDataType[]
// > => {
//   try {
//     const res = await contentfulClient.getEntries({
//       content_type: "normalNews",
//     });

//     const filteredItems = res.items.map((item: Entry) => {
//       const authorDetails = item.fields.author as Entry;
//       const categoryDetails = item.fields.category as Entry[];
//       const imageDetails = (item.fields.images ?? []) as Asset[];

//       return {
//         id: item.sys.id,
//         fields: {
//           newsTitle: item.fields.newsTitle,

//           id: item.fields.id,
//           date: item.fields.date,
//           summary: item.fields.summary,
//           author: {
//             id: authorDetails.sys.id,
//             fields: {
//               role: authorDetails.fields.role,
//               id: authorDetails.fields.id,
//               name: authorDetails.fields.name,
//               avatar: {
//                 id: (authorDetails.fields.avatar as Asset)?.sys.id,
//                 title: (authorDetails.fields.avatar as Asset)?.fields.title,
//                 url: `https:${(authorDetails.fields.avatar as Asset)?.fields.file?.url}`,
//               },
//             },
//           },
//           category: categoryDetails.map((data: Entry) => ({
//             id: data.sys.id,
//             fields: data.fields,
//           })),
//           images: imageDetails[0]
//             ? {
//                 id: imageDetails[0].sys.id,
//                 fields: {
//                   title: imageDetails[0].fields.title,
//                   description: imageDetails[0].fields.description,
//                   fileName: imageDetails[0].fields.file?.fileName,
//                   url: `https:${imageDetails[0].fields.file?.url}`,
//                   width:
//                     (imageDetails[0].fields.file?.details as AssetDetails).image
//                       ?.width ?? 0,
//                   height:
//                     (imageDetails[0].fields.file?.details as AssetDetails).image
//                       ?.height ?? 0,
//                 },
//               }
//             : null,
//         },
//       };
//     });

//     return filteredItems; // or use Response.json(filteredItems) if supported
//   } catch (error) {
//     console.error("Error fetching minimal normal news:", error);
//     throw new Error("Failed to fetch minimal news data.");
//   }
// };

// export const getDetailedNormalNewsById = async (
//   id: string,
// ): Promise<normalNewsDataDetailedType> => {
//   const response = await fetch(`${BASE_URL}/content-type/normal-news/${id}`);
//   if (!response.ok) throw new Error("Failed to fetch normal news");
//   return response.json();
// };

// /**
//  * Fetch all sports news.
//  */
// export const getMinimalSportsNews = async (): Promise<newsDataType[]> => {
//   const response = await fetch(`${BASE_URL}/content-type/sports-news`);
//   if (!response.ok) throw new Error("Failed to fetch sports news");
//   return response.json();
// };

// export const getDetailedSportsNewsById = async (
//   id: string,
// ): Promise<sportNewsDataDetailedType> => {
//   const response = await fetch(`${BASE_URL}/content-type/sports-news/${id}`);
//   if (!response.ok) throw new Error("Failed to fetch normal news");
//   return response.json();
// };
