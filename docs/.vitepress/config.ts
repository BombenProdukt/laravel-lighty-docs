import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: 'Laravel Lighty',
	description:
		'A beautiful syntax highlighter for Laravel, powered by Shiki.',
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		editLink: {
			pattern:
				'https://github.com/faustbrian/laravel-lighty-docs/edit/main/docs/:path',
			text: 'Edit this page on GitHub',
		},

		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Installation', link: '/installation' },
			{ text: 'Configuration', link: '/configuration' },
			{ text: 'Annotations', link: '/annotations' },
		],

		sidebar: [
			{
				text: 'Getting Started',
				items: [
					{ 'text': 'Installation', 'link': '/installation' },
					{ 'text': 'Configuration', 'link': '/configuration' },
				],
			},
			{
				text: 'Annotations',
				items: [
					{ 'text': 'Ranges', 'link': '/annotations/ranges' },
					{ 'text': 'Classes', 'link': '/annotations/classes' },
					{ 'text': 'Collapse', 'link': '/annotations/collapse' },
					{ 'text': 'Colorify', 'link': '/annotations/colorify' },
					{ 'text': 'Diffs', 'link': '/annotations/diffs' },
					{ 'text': 'Focus', 'link': '/annotations/focus' },
					{ 'text': 'Highlight', 'link': '/annotations/highlight' },
					{ 'text': 'Ids', 'link': '/annotations/ids' },
					{ 'text': 'Linkify', 'link': '/annotations/linkify' },
					{ 'text': 'Reindex', 'link': '/annotations/reindex' },
				],
			},
			{
				text: 'Extensions',
				items: [
					{ 'text': 'CommonMark', 'link': '/extensions/commonmark' },
				],
			},
			{
				text: 'REST API',
				items: [
					{
						'text': 'List Documents',
						'link': '/rest-api#list-documents',
					},
					{
						'text': 'Create Document',
						'link': '/rest-api#create-document',
					},
					{
						'text': 'Show Document',
						'link': '/rest-api#show-document',
					},
					{
						'text': 'Delete Document',
						'link': '/rest-api#delete-document',
					},
					{
						'text': 'List Languages',
						'link': '/rest-api#list-languages',
					},
					{
						'text': 'Create Language',
						'link': '/rest-api#create-language',
					},
					{
						'text': 'Show Language',
						'link': '/rest-api#show-language',
					},
					{
						'text': 'Delete Language',
						'link': '/rest-api#delete-language',
					},
					{ 'text': 'List Themes', 'link': '/rest-api#list-themes' },
					{
						'text': 'Create Theme',
						'link': '/rest-api#create-theme',
					},
					{ 'text': 'Show Theme', 'link': '/rest-api#show-theme' },
					{
						'text': 'Delete Theme',
						'link': '/rest-api#delete-theme',
					},
				],
			},
		],

		socialLinks: [
			{
				icon: 'github',
				link: 'https://github.com/faustbrian/laravel-lighty',
			},
		],

		search: {
			provider: 'local',
		},
	},
});
