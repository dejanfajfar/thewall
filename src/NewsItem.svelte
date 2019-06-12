<script>
    export let article = {
        author: "Unknown Author",
        title: "unknown title",
        description: "No description",
        url: "#",
        imageUrl: "",
        publishedAt: ""
    };
</script>

<style>
    .article {
        width: 22%;
        display: flex;
        flex-direction: column;
        background-color: black;
        box-shadow: 6px 6px 10px black; 
        margin: 10px 0;
        position: relative;
    }

    .content {
        padding: 5px 10px;
    }

    .author {
        position: absolute;
        top: 0;
        left: 0;
        padding: 5px;
        background-color: var(--main);
    }

    .author > p {
        margin: 0;
        color: var(--main-text);
    }

    h1 {
        font-family: 'Open Sans Condensed', sans-serif;
        margin: 0;
        text-align: justify;
        font-weight: 100;
        font-size: 20px;
    }

    img{
        width: 100%;
    }

</style>

<article class="article">
    <img class="articleimg" src="{article.imageUrl}" alt={article.title}>
    <div class="author">
        <p>{article.author}</p>
    </div>
    <div class="content">
        <h1>{article.title}</h1>
    </div>
    <div class="footer">
    </div>
</article>