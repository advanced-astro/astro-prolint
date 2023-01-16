module.exports = {
	env: {
		node: true,
		browser: true,
		es2021: true
	},
	extends: ['plugin:prettier/recommended'],
	rules: {
		'prettier/prettier': 'warn'
	},
	parserOptions: {
		sourceType: 'module'
	},
	overrides: [
		{
			files: '*.ts',
			parser: '@typescript-eslint/parser',
			parserOptions: {
				project: 'tsconfig.json'
			},
			plugins: ['@typescript-eslint'],
			overrides: [
				{
					files: ['./src/**/*.ts'],
					extends: [
						'eslint:recommended',
						'plugin:@typescript-eslint/recommended',
						'plugin:@typescript-eslint/eslint-recommended',
						'plugin:@typescript-eslint/recommended-requiring-type-checking',
						'plugin:prettier/recommended'
					],
					rules: {
						'no-plusplus': 'off',
						'no-underscore-dangle': 'off',
						'import/prefer-default-export': 'off',
						'prettier/prettier': 'warn'
					}
				}
			]
		}
	]
}
