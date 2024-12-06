export interface newsCategoryType {
  id: string;
  fields: newsCategoryFieldsType;
}

export interface newsCategoryFieldsType {
  id: number;
  name: string;
  color: string;
  slug: string;
}

export interface authorType {
  id: string;
  fields: authorFieldsType;
}

export interface authorFieldsType {
  id: number;
  name: string;
  avatarId: string;
  avatarUrl: string;
  role: string;
}

export interface newsDataType {
  id: string;
  fields: {
    newsTitle: string;
    id: number;
    date: string;
    summary: string;
    author: {
      id: string;
      fields: {
        id: number;
        name: string;
        avatar: {
          id: string;
          title: string;
          url: string;
        };
      };
    };
    category: {
      id: string;
      fields: newsCategoryFieldsType;
    }[];
    images: newsImagesType;
  };
}

export interface newsImagesType {
  id: string;
  fields: {
    title: string;
    description: string;
    fileName: string;
    url: string;
    width: number;
    height: number;
  };
}
import { Document } from "@contentful/rich-text-types";

export interface normalNewsDataDetailedType {
  id: string;
  fields: {
    newsTitle: string;
    id: number;
    date: string;
    summary: string;
    author: {
      id: string;
      fields: {
        id: number;
        name: string;
        avatar: {
          id: string;
          title: string;
          url: string;
        };
      };
    };
    category: {
      id: string;
      fields: newsCategoryFieldsType;
    }[];
    body: Document;

    images: newsImagesType[];
  };
}

export interface sportNewsDataDetailedType {
  id: string;
  fields: {
    newsTitle: string;
    id: number;
    date: string;
    summary: string;
    author: {
      id: string;
      fields: {
        id: number;
        name: string;
        avatar: {
          id: string;
          title: string;
          url: string;
        };
      };
    };
    category: {
      id: string;
      fields: newsCategoryFieldsType;
    }[];
    body: Document;
    result: {
      title: string;
      score: {
        judges: number;
        public: number;
      };
      remarks: {
        judge: string;
        scores?: string;
        content?: string;
      }[];
    }[];
    images: newsImagesType[];
  };
}
