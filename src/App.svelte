<script>
	import Swanson from './Swanson.svelte';
	import Clock from './Clock.svelte';
	import Video from './Youtube.svelte';
	import News from './NewsList.svelte';
	
</script>

<style>
	.row {
		display: flex;
	}
</style>


<div class="row">
	<Clock style="width: 400px"/>
</div>
<div class="row">
	<News sources="the-verge,wired,techcrunch", apiKey="e289cecc7b7040c9a58654b23a74c1ba"></News>
	<div class="column">
		<Video></Video>
		<Swanson/>
		<Video title="🐱 Me has kitties" videoId="DxLOfvaHoYQ"/>
	</div>
</div>
