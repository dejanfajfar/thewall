<script>
    export let text;
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Roboto:100,400,700&display=swap');

    h2 {
        font-family: 'Roboto', sans-serif;
        font-weight: 100;
        margin: 0;
    }
    .container {
        margin: 10px;
        border: 3px var(--main) solid;
        color: white;
    }
    .header {
        padding: 8px;
        background-color: var(--main);
        color: #83a2a3;
    }
</style>

<div class="container">
    <div class="header">
        <h2>{text}</h2>
    </div>
    <slot></slot>
</div>
