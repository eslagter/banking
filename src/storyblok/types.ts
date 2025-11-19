export interface Link {
  id: number;
  slug: string;
  name: string;
  isFolder: boolean;
  parentId: number;
  published: boolean;
  position: number;
  uuid: string;
  isStartPage: boolean;
}

export interface Story {
  id: number;
  uuid: string;
  name: string;
  slug: string;
  full_slug: string;
  default_full_slug: string | null;
  created_at: string;
  published_at: string;
  first_published_at: string;
  release_id: string | null;
  lang: string;
  content: Content;
  position: number;
  is_startpage: boolean;
  parent_id: number;
  group_id: string;
  translated_slugs: TranslatedSlug[];
  alternates: Alternate[];
}

export type BaseContent = {
  component: string;
  _uid: string;
  _editable?: string;
};

// Union type that unites all content types
export type Content = TeaserComponent | GridComponent | FeatureComponent;

export type GridComponent = BaseContent & {
  component: "grid";
  columns: Content[];
};

export type TeaserComponent = BaseContent & {
  component: "teaser";
  headline: string;
};

export type FeatureComponent = BaseContent & {
  component: "feature";

  name: string;
  title: string;
  text: string;
  image: Asset;
  link: StoryLink;
};

export interface StoryLink {
  cached_url: string;
  url: string;
}

export interface Asset {
  filename: string;
  alt: string;
}

export interface TranslatedSlug {
  path: string;
  name: string;
  lang: string;
}

export interface Alternate {
  id: number;
  name: string;
  slug: string;
  full_slug: string;
  is_folder: boolean;
  parent_id: number;
}
