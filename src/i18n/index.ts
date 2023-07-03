import dayjs from 'dayjs';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './resources/en.json';
import sq from './resources/sq.json';

import('dayjs/locale/en');
import('dayjs/locale/sq');

const resources = {
	en: {
		translation: en,
	},
	sq: {
		translation: sq,
	},
};

i18n.use(initReactI18next)
	.init({
		resources,
		lng: 'en',
		compatibilityJSON: 'v3',
		interpolation: {
			escapeValue: false,
			nestingOptionsSeparator: '.',
		},
	})
	.catch((e) => {
		throw e;
	});

i18n.on('languageChanged', (lang) => {
	dayjs.locale(lang);
});

export default i18n;
