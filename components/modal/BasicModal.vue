<template>
	<a-modal :visible="visible" title="Basic Modal" @ok="handleOk">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-modal>
</template>

<script>
export default {
	data() {
		return {
			visible: false
		}
	},

	methods: {
		showModal() {
			this.visible = true;
		},

		// On click OK btn
		handleOk() {
			this.visible = false;
		}
	},
}
</script>
