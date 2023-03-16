<template>
  <div>
	{{ $t('common.home') }}

	<BasicModalVue ref="basicModal" />
  </div>
</template>

<script>
// modal
import BasicModalVue from '@/components/modal/BasicModal.vue'

export default {
  	name: 'IndexPage',

	components: {
		BasicModalVue,
	},

  	async mounted() {
		// Simple api
		console.log(await this.$repositories.post.show(1))

		// Simple using ref to toggle modal
		this.$refs.basicModal.showModal()
  	}
}
</script>
