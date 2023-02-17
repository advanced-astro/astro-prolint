module.exports = {
	extends: ['stylelint-config-html', '@tinkoff/stylelint-config', 'stylelint-config-standard-scss'],
	plugins: ['stylelint-scss', 'stylelint-csstree-validator'],
	overrides: [
		{
			files: ['**/*.{astro,html}'],
			customSyntax: 'postcss-html'
		},
		{
			files: ['src/**/*.{scss,css}'],
			customSyntax: 'postcss-scss'
		}
	],
	rules: {
		'csstree/validator': {
			syntaxExtensions: ['sass'],
			ignoreAtrules: ['custom-at-rule', '-webkit-keyframes'],
			ignoreProperties: ['composes', 'mask', '-webkit-mask', '-webkit'],
			ignoreValue: '^oklch'
		},
		'at-rule-no-unknown': null,
		'scss/at-rule-no-unknown': true,
		// 'scss/selector-no-redundant-nesting-selector': true,

		'scss/at-rule-no-unknown': true,
		'number-leading-zero': 'always',
		'color-no-hex': true,
		'max-empty-lines': 2,
		'no-descending-specificity': true,
		'no-duplicate-selectors': true,
		'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['global', 'nth-last-col'] }]
	},
	ignoreFiles: ['node_modules/*'],
	defaultSeverity: 'warning'
}
