<template>
	<div>
		<a-layout>
			<a-layout-header>
				<DefaultHeader />
			</a-layout-header>

			<a-layout>
				<a-layout-content>
					<Nuxt />
				</a-layout-content>
			</a-layout>

			<a-layout-footer>
				<DefaultFooter />
			</a-layout-footer>
		</a-layout>
	</div>
</template>

<script>
import DefaultFooter from '@/components/layout/default/Footer.vue'
import DefaultHeader from '@/components/layout/default/Header.vue'

export default {
  components: {
	DefaultFooter,
	DefaultHeader,
  }
}
</script>
