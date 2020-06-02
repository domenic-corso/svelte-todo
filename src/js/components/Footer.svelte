<script>
    import { createEventDispatcher } from "svelte"
    
    export let dateCreated

    const dispatch = createEventDispatcher()
    const dateCreatedString = dateCreated.toLocaleString()
</script>

<style>
    .container {
        background: #333333;
        color: #ffffff;
        font-size: 0.85rem;
        padding: 1em;
    }

    .material-icons {
        font-size: 1em;
    }

    .date-created {
        margin-right: 10px;
    }

    .button {
        padding: 0.4em 0.75em;
        cursor: pointer;
        color: #ffffff;
        background: rgba(255, 255, 255, 0.2);
        border: 1px solid #ffffff;
        border-radius: 5px;
        transition: all 0.25s;
        margin-right: 5px;
    }

    .button:hover {
        background: rgba(255, 255, 255, 0.3);
    }
</style>

<div class="container flex flex--justify-content-space-between">
    <div>
        <button class="button flex flex--inline flex--align-items-center" on:click={() => dispatch("addItem")}>
            <i class="material-icons">add</i>
            Add Item
        </button>
        <button class="button flex flex--inline flex--align-items-center" on:click={() => dispatch("viewItems")}>
            <i class="material-icons">visibility</i>
            View Items (Check the Console)
        </button>
    </div>
    <div class="flex flex--align-items-center">
        <span title="This list was created on {dateCreatedString}" class="date-created">{dateCreatedString}</span>
        <i class="material-icons">query_builder</i>
    </div>
</div>
