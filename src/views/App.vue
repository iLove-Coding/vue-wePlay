<template>
    <div>
		<keep-alive>
			<router-view v-if="$route.meta.keepAlive"></router-view>
		</keep-alive>
			<router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
</template>
<script>
import Vue from 'vue';
export default {
	created() {
		console.log(this.$webSocket);
	}
}
</script>
