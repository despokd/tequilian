import { dictionary, locale, getLocaleFromNavigator, _ } from 'svelte-i18n';

function setupI18n() {
	dictionary.set({
		en: {
			id: 'en',
			header: {
				home: 'Home',
				snippets: 'Snippets',
				imprint: 'Imprint',
				aboutMe: 'About me',
				links: 'Links'
			},
			footer: {
				aboutMe: 'About me',
			},
			home: {
				title: 'Home'
			},
			snippets: {
				title: 'Snippets'
			},
			links: {
				title: 'Links'
			},
			imprint: {
				title: 'Imprint'
			}
		},
		de: {
			id: 'de',
			header: {
				home: 'Start',
				snippets: 'Snippets',
				imprint: 'Impressum',
				aboutMe: 'Über mich',
				links: 'Links'
			},
			footer: {
				aboutMe: 'Über mich',
			},
			home: {
				title: 'Home'
			},
			snippets: {
				title: 'Snippets'
			},
			links: {
				title: 'Links'
			},
			imprint: {
				title: 'Impressum'
			}
		}
	});

	locale.set((getLocaleFromNavigator()) ? getLocaleFromNavigator() : 'de');
}
export { _, setupI18n };
