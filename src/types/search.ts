export type TSearchResultType = "customer" | "report" | "subscription" | "page";

export interface ISearchResult {
  id: string;
  title: string;
  description: string;
  href: string;
  type: TSearchResultType;
}
