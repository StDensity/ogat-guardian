import {
  authorType,
  newsCategoryType,
  normalNewsDataDetailedType,
  newsDataType,
  sportNewsDataDetailedType,
} from "@/types/contentful";

const BASE_URL = "http://localhost:3000/api/contentful";

/**
 * Fetch all news categories.
 */
export const getAllNewsCategories = async (): Promise<newsCategoryType[]> => {
  const response = await fetch(`${BASE_URL}/content-type/news-category`);
  if (!response.ok) throw new Error("Failed to fetch news categories");
  return response.json();
};

/**
 * Fetch a specific news category by ID.
 * @param id - The ID of the news category.
 */
export const getNewsCategoryById = async (
  id: string,
): Promise<newsCategoryType> => {
  const response = await fetch(`${BASE_URL}/content-type/news-category/${id}`);
  if (!response.ok)
    throw new Error(`Failed to fetch news category with ID: ${id}`);
  return response.json();
};

/**
 * Fetch all authors.
 */
export const getAllAuthors = async (): Promise<authorType[]> => {
  const response = await fetch(`${BASE_URL}/content-type/author`);
  if (!response.ok) throw new Error("Failed to fetch authors");
  return response.json();
};

/**
 * Fetch a specific author by ID.
 * @param id - The ID of the author.
 */
export const getAuthorById = async (id: string): Promise<authorType> => {
  const response = await fetch(`${BASE_URL}/content-type/author/${id}`);
  if (!response.ok) throw new Error(`Failed to fetch author with ID: ${id}`);
  return response.json();
};

/**
 * Fetch all normal news.
 */
export const getMinimalNormalNews = async (): Promise<newsDataType[]> => {
  const response = await fetch(`${BASE_URL}/content-type/normal-news`);
  if (!response.ok) throw new Error("Failed to fetch normal news");
  return response.json();
};

export const getDetailedNormalNewsById = async (
  id: string,
): Promise<normalNewsDataDetailedType> => {
  const response = await fetch(`${BASE_URL}/content-type/normal-news/${id}`);
  if (!response.ok) throw new Error("Failed to fetch normal news");
  return response.json();
};

/**
 * Fetch all sports news.
 */
export const getMinimalSportsNews = async (): Promise<newsDataType[]> => {
  const response = await fetch(`${BASE_URL}/content-type/sports-news`);
  if (!response.ok) throw new Error("Failed to fetch sports news");
  return response.json();
};

export const getDetailedSportsNewsById = async (
  id: string,
): Promise<sportNewsDataDetailedType> => {
  const response = await fetch(`${BASE_URL}/content-type/sports-news/${id}`);
  if (!response.ok) throw new Error("Failed to fetch normal news");
  return response.json();
};
