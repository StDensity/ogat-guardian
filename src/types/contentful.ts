export interface newsCategoryType {
  id: string;
  fields: newsCategoryFieldsType;
}

export interface newsCategoryFieldsType {
  id: number;
  name: string;
  color: string;
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
      fields: {
        id: number;
        name: string;
        color: string;
      };
    }[];
    images: {
      id: string;
      fields: {
        title: string;
        description: string;
        fileName: string;
        url: string;
        width: number;
        height: number;
      };
    };
  };
}