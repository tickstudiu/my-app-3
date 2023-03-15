<template>
  <div>
	<Tutorial />
	{{ $t('common.home') }}
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  async mounted() {
	// Simple api
    // console.log(await this.$repositories.post.show(1));
  }
}
</script>
