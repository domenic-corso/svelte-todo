<script>
    export let numCompletedItems = 0, numItems = 0
</script>

<style>
    .container {
        padding: 1em;
        background: #fafafa;
    }

    .title {
        font-size: 1.2rem;
        font-weight: 500;
    }

    .total-complete {
        margin-right: 10px;
        cursor: default;
    }
</style>

<div class="container flex flex--align-items-center flex--justify-content-space-between">
    <div class="title">Sample To-Do List</div>
    <div class="flex flex--align-items-center flex--justify-content-center">
        <span title="{numCompletedItems}/{numItems} Items Complete" class="total-complete">{numCompletedItems}/{numItems}</span>
        <i class="material-icons">check</i>
    </div>
</div>
