const requireRepository = require.context(
	// The relative path of the components folder
	'~/repositories',
	// Whether or not to look in subfolders
	false,
	// The regular expression used to match base component filenames
	/\.js$/,
);

const createRepositories = (httpClient) => requireRepository.keys().reduce((obj, currentFilename) => {
  	// If current file name like ./PostRepository.js
	const serviceName = currentFilename
    	// [".", "PostRepository.js"]
		.split('/')
    	// Select last array PostRepository.js
		.pop()
    	// Remove suffix file name to PostRepository
		.replace(/\.\w+$/, '');
		return {
    	// Get current data and append new repository into it
		...obj,
		[serviceName]: requireRepository(currentFilename).default(httpClient),
	};
}, {});

export default (ctx, inject) => {
  const { $axios } = ctx;

  $axios.onRequest((config) => {
    	// Add param: lang to every requests
    	// set default object first, if the request doesn't have any params
		config.params = config.params || {};
		config.params.lang = 'th';

		return config;
	});


  $axios.onResponseError((error) => {
    	// Bring user to home page
    	// window.location.href = '/';

		return Promise.reject(error);
	});

  inject('repositories', createRepositories($axios))
}
