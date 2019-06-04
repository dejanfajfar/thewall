<script>
    import Container from './containers/wallthing.svelte';
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
        display: inline-block;
    }

    p {
        display: inline-block;
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
