<script>
    import Container from './Border.svelte';
    const apiEndpoint = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';


    const fetchQuote = () => {
        return fetch(apiEndpoint).then(r => r.json());
    };

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
        <p>{data}</p>
        {/await}
    </div>
</Container>
