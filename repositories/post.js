const resource = '/posts'

export default ($axios) => ({
  	all() {
    	return $axios.get(`${resource}`)
  	},

  	show(postId) {
    	return $axios.get(`${resource}/${postId}`)
  	},

	// create(payload) {
	// 	return $axios.post(`${resource}`, payload)
	// },

	// update(id, payload) {
	// 	return $axios.post(`${resource}/${id}`, payload)
	// },

	// delete(id) {
	// 	return $axios.delete(`${resource}/${id}`)
	// }
})
