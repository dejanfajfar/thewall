<script>
    import Container from './Border.svelte';
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

<style>
    p {
        font-family: 'Russo One', sans-serif;
        font-size: 50px;
        font-weight: 300;
        margin: 0;
        text-align: center;
    }

    .seconds {
        font-size: 30px;
    }
</style>

<Container text='⏲️Clock'>
    <p>
    <span>{hours}:{minutes}</span><span class="seconds">{seconds}</span>
    </p>
</Container>