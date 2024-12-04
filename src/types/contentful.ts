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

