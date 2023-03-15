const posts = require('./mockData.js')

module.exports = {
  get({ values }) {
	const post = posts.find(post => post.id === values.postId)
	if (post) {
		return [200, post]
	}

	return [404, { message: 'post not found' }]
  }
}
