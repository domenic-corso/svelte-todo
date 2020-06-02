<script>
    import { createEventDispatcher } from "svelte"

    export let description, isComplete
    const dispatch = createEventDispatcher()

    $: placeholderText = description.length === 0 ? "Enter item description" : ""
</script>

<style>
    .container {
        padding: 1em;
        background: #ffffff;
        border-bottom: 1px solid #eeeeee;
    }

    .description {
        width: 100%;
        margin-right: 1em;
        background: none;
        outline: none;
        border: none;
    }

    .description::placeholder {
        color: #cccccc;
    }
</style>

<div class="container flex flex--align-items-center flex--justify-content-space-between">
    <input type="text" class="description" bind:value={description} placeholder="{placeholderText}" on:change={() => dispatch("periodicSave")}>
    <input type="checkbox" class="is-complete" bind:checked={isComplete} on:change={() => dispatch("periodicSave")}>
</div>
