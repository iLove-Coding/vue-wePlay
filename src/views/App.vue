<template>
    <div>
		<keep-alive>
			<router-view v-if="$route.meta.keepAlive"></router-view>
		</keep-alive>
			<router-view v-if="!$route.meta.keepAlive"></router-view>
		<wp-debug></wp-debug>
    </div>
</template>
<script>
import Vue from 'vue';
import AudioMixin from '@/mixins/audio.mixin.js';
export default {
	created() {
		console.log(this.$webSocket);
	},
	mixins: [ AudioMixin ],
	provide() {
		return {
			soundManager: {
				playOnline: this.playOnlineAudio
			}
		}
	}
}
</script>