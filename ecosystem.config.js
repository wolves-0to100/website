module.exports = {
	apps: [
		{
			name: '0to100.ink',
			exec_mode: 'cluster',
			instances: 'max',
			script: './node_modules/nuxt/bin/nuxt.js',
			args: 'start',
			env: {
				PORT: 5678,
				NODE_ENV: 'development',
			},
			env_production: {
				PORT: 6789,
				NODE_ENV: 'production',
			},
		},
	],
}
