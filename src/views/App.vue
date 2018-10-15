<template>
    <div>
		<!-- <div>
			<router-link :to="{name:'Register'}">注册</router-link>
			<router-link :to="{name:'Login'}">登陆</router-link>
		</div> -->
		<keep-alive>
			<router-view v-if="$route.meta.keepAlive"></router-view>
		</keep-alive>
			<router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
</template>
<script>
export default {

}
</script>
