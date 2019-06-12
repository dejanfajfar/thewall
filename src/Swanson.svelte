<script>
    import Container from './Border.svelte';
    import { onMount } from 'svelte';
    const apiEndpoint = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';


    const fetchQuote = () => {
        return fetch(apiEndpoint).then(r => r.json());
    };

    onMount(() => {
        const timer = setInterval(() => {
            fetchQuote = fetchQuote;
        }, 5 * 60 * 1000);

        return () => clearInterval(timer);
    });
</script>

<style>
    img {
        width: 100px;
        height: 100px;
        border-radius: 20px;
        display: table-cell;
        margin-right: 10px;
    }

    p {
        font-family: 'Roboto', sans-serif;
        display: table-cell;
        margin: 0;
        vertical-align: middle
    }

    #swanson {
        display: table;
    }
</style>

<Container text='Ron Swanson quotes'>
    <div id="swanson">
        <img src="images/swanson.jpeg" alt="Ron Swanson" />
        {#await fetchQuote()}
        <p>Loading quotes...</p>
        {:then data}
        <p transform:fade >{data}</p>
        {/await}
    </div>
</Container>
