<script>
    import { onMount } from 'svelte';
    import Border from './Border.svelte';
    import NewsItem from './NewsItem.svelte';
    import { fade } from 'svelte/transition';

    export let sources;
    export let apiKey;

    const apiUrl = `https://newsapi.org/v2/top-headlines?sources=${sources}&pageSize=12&apiKey=${apiKey}`;

    const fetchNewsItems = () => {
        return fetch(apiUrl)
            .then(r => r.json())
            .then(data => {
                if (data.status !== "ok") {
                    return [];
                }

                return data.articles.map(article => {
                    return {
                        author: article.author,
                        title: article.title,
                        description: article.description,
                        url: article.url,
                        imageUrl: article.urlToImage,
                        publishedAt: article.publishedAt,
                        source: article.source.name
                    }
                });
            })
    };

    onMount(() => {
        const timer = setInterval(() => {
            fetchNewsItems = fetchNewsItems;
        }, 15 * 60 * 1000)

        return () => clearInterval(timer);
    });
</script>

<style>
    #news {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-content: space-around;
    }
</style>

<Border text="📰 News - powered by newsapi.org">
<div id="news">
    {#await fetchNewsItems()}
        <p>LOADING....</p>
    {:then articles}
        {#each articles as article (article.title)}
            <NewsItem article={article}></NewsItem>
        {/each}
    {:catch error}
        <p>ERROR {error.message}</p>
    {/await}
</div>
</Border>