module.exports = {
	apps: [
		{
			name: '0to100.ink',
			exec_mode: 'cluster',
			instances: 'max', // Or a number of instances
			script: './node_modules/nuxt/bin/nuxt.js',
			args: 'start',
		},
	],
}
