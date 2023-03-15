const posts = require('./mockData.js')

module.exports = {
	get() {
    	return [200, posts]
  	}
}
