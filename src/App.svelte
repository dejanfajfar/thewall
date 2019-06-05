<script>
	import Swanson from './Swanson.svelte';
	import Clock from './Clock.svelte';
	import Video from './Youtube.svelte';
</script>

<style>
	.row {
		display: flex;
	}
</style>

<div class="row">
	<div style="flex: 1">
	<Swanson/>
	</div>
	<div style="width: 400px">
	<Clock/>
	</div>
</div>
<div class="row">
	<Video></Video>
</div>
