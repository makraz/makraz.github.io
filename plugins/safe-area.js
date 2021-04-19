const plugin = require('tailwindcss/plugin')

export default plugin(function ({ addUtilities }) {
	const newUtilities = {
		'.safe-top': {
			paddingTop: 'constant(safe-area-inset-top)',
			paddingTop: 'env(safe-area-inset-top)',
		},
		'.safe-left': {
			paddingLeft: 'constant(safe-area-inset-left)',
			paddingLeft: 'env(safe-area-inset-left)',
		},
		'.safe-right': {
			paddingRight: 'constant(safe-area-inset-right)',
			paddingRight: 'env(safe-area-inset-right)',
		},
		'.safe-bottom': {
			paddingBottom: 'constant(safe-area-inset-bottom)',
			paddingBottom: 'env(safe-area-inset-bottom)',
		},
	}

	addUtilities(newUtilities)
})
