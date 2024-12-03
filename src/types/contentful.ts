export interface newsCategoryType {
  id: string;
  fields: newsCategoryFieldsType;
}

export interface newsCategoryFieldsType {
  id: number;
  name: string;
  color: string;
}

export interface authorCategoryType {
  id: string;
  fields: authorCategoryFieldsType;
}

export interface authorCategoryFieldsType {
  id: number;
  name: string;
  avatarId: string;
  avatarUrl: string;
}
