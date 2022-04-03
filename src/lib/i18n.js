import { dictionary, locale, getLocaleFromNavigator, _ } from 'svelte-i18n';

function setupI18n() {
	dictionary.set({
		en: {
			id: 'en',
			general: {
				'title': 'Tequilian',
				'description': 'When life gives you a lemon ask for salt and Tequilian'
			},
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
			},
			comingSoon: {
				title: 'Coming soon',
				text: 'This page is not available yet. Come back later or {buttonStart}go back{buttonEnd}.'
			}
		},
		de: {
			id: 'de',
			general: {
				'title': 'Tequilian',
				'description': 'Wenn das Leben dir eine Zitrone gibt, frag nach Salz und Tequilian'
			},
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
			},
			comingSoon: {
				title: 'Coming soon',
				text: 'Diese Seite ist noch nicht verfügbar. Komm später wieder oder {buttonStart}gehe zurück{buttonEnd}.'
			}
		}
	});

	locale.set((getLocaleFromNavigator()) ? getLocaleFromNavigator() : 'de');
}
export { _, setupI18n };
