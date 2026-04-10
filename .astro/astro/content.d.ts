declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"blog": {
"best_free_vpn_bypass_whitelist_russia_2026.md": {
	id: "best_free_vpn_bypass_whitelist_russia_2026.md";
  slug: "best_free_vpn_bypass_whitelist_russia_2026";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"bypass_mobile_internet_blocking_2026.md": {
	id: "bypass_mobile_internet_blocking_2026.md";
  slug: "bypass_mobile_internet_blocking_2026";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"chto_delat_esli_ne_rabotaet_telegram_segodnya.md": {
	id: "chto_delat_esli_ne_rabotaet_telegram_segodnya.md";
  slug: "chto_delat_esli_ne_rabotaet_telegram_segodnya";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ded_vpn_review_user_opinions_2026.md": {
	id: "ded_vpn_review_user_opinions_2026.md";
  slug: "ded_vpn_review_user_opinions_2026";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"delete_v2raytun_appstore.md": {
	id: "delete_v2raytun_appstore.md";
  slug: "delete_v2raytun_appstore";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"dpi-russia-2026.md": {
	id: "dpi-russia-2026.md";
  slug: "dpi-russia-2026";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"durev_vpn_review_user_opinions_2026.md": {
	id: "durev_vpn_review_user_opinions_2026.md";
  slug: "durev_vpn_review_user_opinions_2026";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"free_vpn_working_in_russia_april_2026_unique.md": {
	id: "free_vpn_working_in_russia_april_2026_unique.md";
  slug: "free_vpn_working_in_russia_april_2026_unique";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"hit_vpn_review_user_opinions_2026.md": {
	id: "hit_vpn_review_user_opinions_2026.md";
  slug: "hit_vpn_review_user_opinions_2026";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"how_to_download_free_vpn_in_russia_2026.md": {
	id: "how_to_download_free_vpn_in_russia_2026.md";
  slug: "how_to_download_free_vpn_in_russia_2026";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"kakoi_vpn_rabotaet_v_marte_2026.md": {
	id: "kakoi_vpn_rabotaet_v_marte_2026.md";
  slug: "kakoi_vpn_rabotaet_v_marte_2026";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"luchshiy_besplatnyy_vpn_dlya_discord_2026_long.md": {
	id: "luchshiy_besplatnyy_vpn_dlya_discord_2026_long.md";
  slug: "luchshiy_besplatnyy_vpn_dlya_discord_2026_long";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"mobile_internet_not_working_2026_dpi_bypass_unique.md": {
	id: "mobile_internet_not_working_2026_dpi_bypass_unique.md";
  slug: "mobile_internet_not_working_2026_dpi_bypass_unique";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"novyy_obhod_belyh_spiskov_vpn_dpi_2026_long_v2.md": {
	id: "novyy_obhod_belyh_spiskov_vpn_dpi_2026_long_v2.md";
  slug: "novyy_obhod_belyh_spiskov_vpn_dpi_2026_long_v2";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"opsvpn_review_and_user_opinions_2026.md": {
	id: "opsvpn_review_and_user_opinions_2026.md";
  slug: "opsvpn_review_and_user_opinions_2026";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"sota_vpn_review_user_opinions_2026.md": {
	id: "sota_vpn_review_user_opinions_2026.md";
  slug: "sota_vpn_review_user_opinions_2026";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"telegram_ne_rabotaet_rkn_dpi_guide.md": {
	id: "telegram_ne_rabotaet_rkn_dpi_guide.md";
  slug: "telegram_ne_rabotaet_rkn_dpi_guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"top_10_best_free_vpns_for_bypassing_whitelists_on_mobile_in_2026.md": {
	id: "top_10_best_free_vpns_for_bypassing_whitelists_on_mobile_in_2026.md";
  slug: "top_10_best_free_vpns_for_bypassing_whitelists_on_mobile_in_2026";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"top_10_free_vpn_for_youtube_2026_unique.md": {
	id: "top_10_free_vpn_for_youtube_2026_unique.md";
  slug: "top_10_free_vpn_for_youtube_2026_unique";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"top_30_vpn_2026_human_low_spam_final.md": {
	id: "top_30_vpn_2026_human_low_spam_final.md";
  slug: "top_30_vpn_2026_human_low_spam_final";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"top_best_free_vpn_for_android_working_in_russia_2026.md": {
	id: "top_best_free_vpn_for_android_working_in_russia_2026.md";
  slug: "top_best_free_vpn_for_android_working_in_russia_2026";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"top_best_free_vpn_iphone_russia_2026.md": {
	id: "top_best_free_vpn_iphone_russia_2026.md";
  slug: "top_best_free_vpn_iphone_russia_2026";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"top_best_free_vpns_for_mac_os_working_in_russia_2026.md": {
	id: "top_best_free_vpns_for_mac_os_working_in_russia_2026.md";
  slug: "top_best_free_vpns_for_mac_os_working_in_russia_2026";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"top_best_free_vpns_for_windows_pc_working_in_russia_in_2026.md": {
	id: "top_best_free_vpns_for_windows_pc_working_in_russia_in_2026.md";
  slug: "top_best_free_vpns_for_windows_pc_working_in_russia_in_2026";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"vpn_not_working_story_unique_v5.md": {
	id: "vpn_not_working_story_unique_v5.md";
  slug: "vpn_not_working_story_unique_v5";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"vpn_structured.md": {
	id: "vpn_structured.md";
  slug: "vpn_structured";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"which_free_vpn_works_in_russia_2026_v4.md": {
	id: "which_free_vpn_works_in_russia_2026_v4.md";
  slug: "which_free_vpn_works_in_russia_2026_v4";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"why_telegram_not_working_2026_unique.md": {
	id: "why_telegram_not_working_2026_unique.md";
  slug: "why_telegram_not_working_2026_unique";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
