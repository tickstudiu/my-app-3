import mock from '@/mocks/$mock.js'

export default ({ $axios }) => {
	if (process.env.NODE_ENV === 'development') {
		mock($axios)
	}
}
