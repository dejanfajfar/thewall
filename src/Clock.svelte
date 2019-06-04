<script>
    import Container from './containers/wallthing.svelte';
    import { onDestroy } from 'svelte';

    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    const interval = setInterval(() => {
        let date = new Date();
        hours = date.getHours();
        minutes = date.getMinutes();
        seconds = date.getSeconds();
    });

    onDestroy(() => clearInterval(interval));
</script>

<Container text='⏲️Clock'>
    <p>{hours} : {minutes} : {seconds}</p>
</Container>