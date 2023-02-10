declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		typeof entryMap[C][keyof typeof entryMap[C]] & Render;

	type BaseCollectionConfig<S extends import('astro/zod').ZodRawShape> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<import('astro/zod').ZodObject<S>>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends import('astro/zod').ZodRawShape>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	export function getEntry<C extends keyof typeof entryMap, E extends keyof typeof entryMap[C]>(
		collection: C,
		entryKey: E
	): Promise<typeof entryMap[C][E] & Render>;
	export function getCollection<
		C extends keyof typeof entryMap,
		E extends keyof typeof entryMap[C]
	>(
		collection: C,
		filter?: (data: typeof entryMap[C][E]) => boolean
	): Promise<(typeof entryMap[C][E] & Render)[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		import('astro/zod').ZodObject<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			injectedFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"blog": {
"coliving-vs-renting-pros-cons-and-the-difference-between-them.md": {
  id: "coliving-vs-renting-pros-cons-and-the-difference-between-them.md",
  slug: "coliving-vs-renting-pros-cons-and-the-difference-between-them",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"kitchensink.mdx": {
  id: "kitchensink.mdx",
  slug: "kitchensink",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"paying-guest-hostels-or-co-living-which-option-is-best-for-students.md": {
  id: "paying-guest-hostels-or-co-living-which-option-is-best-for-students.md",
  slug: "paying-guest-hostels-or-co-living-which-option-is-best-for-students",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"why-is-coliving-more-in-demand-after-the-covid-pandemic.md": {
  id: "why-is-coliving-more-in-demand-after-the-covid-pandemic.md",
  slug: "why-is-coliving-more-in-demand-after-the-covid-pandemic",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
},

	};

	type ContentConfig = typeof import("./config");
}
