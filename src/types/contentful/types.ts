import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";
import { JsonValue } from "type-fest";

export interface TypeAuthorFields {
  id: EntryFieldTypes.Integer;
  name: EntryFieldTypes.Symbol;
  avatar?: EntryFieldTypes.AssetLink;
  role?: EntryFieldTypes.Symbol;
}

export type TypeAuthorSkeleton = EntrySkeletonType<TypeAuthorFields, "author">;
export type TypeAuthor<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeAuthorSkeleton, Modifiers, Locales>;

export function isTypeAuthor<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
>(
  entry: Entry<EntrySkeletonType, Modifiers, Locales>,
): entry is TypeAuthor<Modifiers, Locales> {
  return entry.sys.contentType.sys.id === "author";
}

export type TypeAuthorWithoutLinkResolutionResponse =
  TypeAuthor<"WITHOUT_LINK_RESOLUTION">;
export type TypeAuthorWithoutUnresolvableLinksResponse =
  TypeAuthor<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeAuthorWithAllLocalesResponse<
  Locales extends LocaleCode = LocaleCode,
> = TypeAuthor<"WITH_ALL_LOCALES", Locales>;
export type TypeAuthorWithAllLocalesAndWithoutLinkResolutionResponse<
  Locales extends LocaleCode = LocaleCode,
> = TypeAuthor<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeAuthorWithAllLocalesAndWithoutUnresolvableLinksResponse<
  Locales extends LocaleCode = LocaleCode,
> = TypeAuthor<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;

export interface TypeNewsCategoryFields {
  id: EntryFieldTypes.Integer;
  name: EntryFieldTypes.Symbol;
  color?: EntryFieldTypes.Symbol;
  slug: EntryFieldTypes.Symbol;
}

export type TypeNewsCategorySkeleton = EntrySkeletonType<
  TypeNewsCategoryFields,
  "newsCategory"
>;
export type TypeNewsCategory<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeNewsCategorySkeleton, Modifiers, Locales>;

export function isTypeNewsCategory<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
>(
  entry: Entry<EntrySkeletonType, Modifiers, Locales>,
): entry is TypeNewsCategory<Modifiers, Locales> {
  return entry.sys.contentType.sys.id === "newsCategory";
}

export type TypeNewsCategoryWithoutLinkResolutionResponse =
  TypeNewsCategory<"WITHOUT_LINK_RESOLUTION">;
export type TypeNewsCategoryWithoutUnresolvableLinksResponse =
  TypeNewsCategory<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeNewsCategoryWithAllLocalesResponse<
  Locales extends LocaleCode = LocaleCode,
> = TypeNewsCategory<"WITH_ALL_LOCALES", Locales>;
export type TypeNewsCategoryWithAllLocalesAndWithoutLinkResolutionResponse<
  Locales extends LocaleCode = LocaleCode,
> = TypeNewsCategory<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeNewsCategoryWithAllLocalesAndWithoutUnresolvableLinksResponse<
  Locales extends LocaleCode = LocaleCode,
> = TypeNewsCategory<
  "WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES",
  Locales
>;

export interface TypeNormalNewsFields {
  newsTitle: EntryFieldTypes.Symbol;
  id: EntryFieldTypes.Integer;
  author: EntryFieldTypes.EntryLink<TypeAuthorSkeleton>;
  date: EntryFieldTypes.Date;
  category: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<TypeNewsCategorySkeleton>
  >;
  body: EntryFieldTypes.RichText;
  images?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
  summary?: EntryFieldTypes.Symbol;
  footnote?: EntryFieldTypes.Symbol;
}

export type TypeNormalNewsSkeleton = EntrySkeletonType<
  TypeNormalNewsFields,
  "normalNews"
>;
export type TypeNormalNews<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeNormalNewsSkeleton, Modifiers, Locales>;

export function isTypeNormalNews<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
>(
  entry: Entry<EntrySkeletonType, Modifiers, Locales>,
): entry is TypeNormalNews<Modifiers, Locales> {
  return entry.sys.contentType.sys.id === "normalNews";
}

export type TypeNormalNewsWithoutLinkResolutionResponse =
  TypeNormalNews<"WITHOUT_LINK_RESOLUTION">;
export type TypeNormalNewsWithoutUnresolvableLinksResponse =
  TypeNormalNews<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeNormalNewsWithAllLocalesResponse<
  Locales extends LocaleCode = LocaleCode,
> = TypeNormalNews<"WITH_ALL_LOCALES", Locales>;
export type TypeNormalNewsWithAllLocalesAndWithoutLinkResolutionResponse<
  Locales extends LocaleCode = LocaleCode,
> = TypeNormalNews<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeNormalNewsWithAllLocalesAndWithoutUnresolvableLinksResponse<
  Locales extends LocaleCode = LocaleCode,
> = TypeNormalNews<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;

export interface TypeSportsNewsFields {
  id: EntryFieldTypes.Integer;
  newsTitle: EntryFieldTypes.Symbol;
  date: EntryFieldTypes.Date;
  author: EntryFieldTypes.EntryLink<TypeAuthorSkeleton>;
  category: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<TypeNewsCategorySkeleton>
  >;
  header: EntryFieldTypes.Symbol;
  body: EntryFieldTypes.RichText;
  images?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
  summary?: EntryFieldTypes.Symbol;
  footnote?: EntryFieldTypes.Symbol;
  results: EntryFieldTypes.Object<EntryFieldTypes.Object>;
}

export type TypeSportsNewsSkeleton = EntrySkeletonType<
  TypeSportsNewsFields,
  "sportsNews"
>;
export type TypeSportsNews<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeSportsNewsSkeleton, Modifiers, Locales>;

export function isTypeSportsNews<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
>(
  entry: Entry<EntrySkeletonType, Modifiers, Locales>,
): entry is TypeSportsNews<Modifiers, Locales> {
  return entry.sys.contentType.sys.id === "sportsNews";
}

export type TypeSportsNewsWithoutLinkResolutionResponse =
  TypeSportsNews<"WITHOUT_LINK_RESOLUTION">;
export type TypeSportsNewsWithoutUnresolvableLinksResponse =
  TypeSportsNews<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeSportsNewsWithAllLocalesResponse<
  Locales extends LocaleCode = LocaleCode,
> = TypeSportsNews<"WITH_ALL_LOCALES", Locales>;
export type TypeSportsNewsWithAllLocalesAndWithoutLinkResolutionResponse<
  Locales extends LocaleCode = LocaleCode,
> = TypeSportsNews<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeSportsNewsWithAllLocalesAndWithoutUnresolvableLinksResponse<
  Locales extends LocaleCode = LocaleCode,
> = TypeSportsNews<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;

export interface SportNewsResult {
  [key: string]: JsonValue;
  title: string;
  score: {
    judges: number; // Assuming judges' score is a numeric value
    public: number; // Assuming public score is a numeric value
  };
  remarks: {
    judge: string;
    scores?: string; // Optional field for additional scores info
    content?: string; // Optional field for extra content related to the remarks
  }[];
}

export type TypeSportsNewsResult = SportNewsResult[];
