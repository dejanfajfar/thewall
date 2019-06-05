<script>
    import Container from './Border.svelte';
    const apiEndpoint = 'http://ron-swanson-quotes.herokuapp.com/v2/quotes';


    const fetchQuote = async () => {
        const response = await fetch(apiEndpoint);
        const json = await response.json();
        return json;
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
