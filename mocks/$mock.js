/* eslint-disable */
module.exports = (client) => require('axios-mock-server')([
  {
    path: '/posts',
    methods: require('./posts/index')
  },
  {
    path: '/posts/_postId',
    methods: require('./posts/_postId')
  }
], client, '')
