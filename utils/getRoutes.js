export default async () => {
	const { $content } = require('@nuxt/content')
	const blogposts = await $content('blog').only(['path']).fetch()

	console.log(blogposts)
	return blogposts.map((file) => (file.path === '/index' ? '/' : file.path))
}
