export interface Comment {
  id: string;
  article_id: string;
  content: string;
  created_at: string;
  is_hidden?: boolean;
}

export interface Like {
  article_id: string;
  client_hash: string;
  created_at: string;
}
