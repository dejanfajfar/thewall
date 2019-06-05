<script>
    export let text;
</script>

<style>
    h2 {
        font-family: 'Open Sans Condensed', sans-serif;
        font-weight: 100;
        margin: 0;
    }
    .container {
        margin: 10px;
        color: white;
    }
    .header {
        padding: 8px;
        background-color: var(--main);
        color: #83a2a3;
    }

    .content {
        margin: 5px;
    }
</style>

<div class="container">
    <div class="header">
        <h2>{text}</h2>
    </div>
    <div class="content">
        <slot></slot>
    </div>
</div>
