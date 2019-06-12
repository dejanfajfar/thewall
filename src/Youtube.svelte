<script>
    import Container from './Border.svelte';

    export let videoId = '4993sBLAzGA';
    export let title = '🛰️ LiveStream';

    const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&enablejsapi=1`;
</script>

<Container text='{title}'>
<iframe 
    width="720" 
    height="405"
    src="{videoUrl}"
    frameborder="0">
</iframe>
</Container>