module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		container: {
			center: true,
			screens: {
				sm: '100%',
				md: '100%',
				lg: '800px',
				xl: '1515px',
			},
		},
		// colors: {
		//  blue: {
		// 	  50: '#dd0000',
		// 	  100: colors.blue['100'],
		// 	  500: '#a20f40',
		// 	  600: '#a20d40',
		//  },
		// },
		fontSize: {
			xs: ['12px', '14.32px'],
			sm: ['14px', '20px'],
			base: ['16px', '22px'],
			lg: ['20px', '26px'],
			xl: ['24px', '30px'],
			'2xl': ['24px', '32px'],
		},
		screens: {
			'3xl': { min: '2001px' },
			'2xlmax': { max: '1400px' },
			'2xl': { min: '1501px', max: '2000px' },
			'2xlMin': { min: '1500px' },
			lgmin: { min: '1024px' },
			xl: { min: '1280px', max: '1500px' },
			lg: { min: '1024px', max: '1279px' },

			md: { min: '768px', max: '1023px' },
			sm: { max: '767px' },
			xs: { max: '520px' },
			xxs: { max: '400px' },
		},
		extend: {
			boxShadow: {
				'3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
			},
			colors: {
				red: '#f00',
				light: '#e1e1e1',
			},
		},
	},
	plugins: [],
};
