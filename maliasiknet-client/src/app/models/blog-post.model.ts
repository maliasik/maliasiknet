export interface BlogPost {
    id: number;
    title: string;
    content: string;
    author: string;
    createdAt: Date;
    updatedAt?: Date;
    tags?: string[];
    summary?: string;
    thumbnailImageUrl?: string;
    commentsCount?: number;
    isPublished: boolean;
    category?: string;
  }