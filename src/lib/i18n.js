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
				aboutMe: 'Über mich'
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
			imprint: {
				title: 'Impressum'
			}
		}
	});

	locale.set((getLocaleFromNavigator()) ? getLocaleFromNavigator() : 'de');
}
export { _, setupI18n };
