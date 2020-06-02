<script>
    // Svelte
    import { onMount } from "svelte"

    // Services
    import TodoItemService from "../services/TodoItemService.js"

    // Nested components
    import Header from "./Header.svelte"
    import TodoItem from "./TodoItem.svelte"
    import Footer from "./Footer.svelte"

    let todoList = {
        name: "Sample To-Do List",
        dateCreated: new Date()
    }

    let items = []

    $: numItems = items.length
    $: numCompletedItems = items.filter(item => item.isComplete).length

    onMount(async () => {
        items = await TodoItemService.get()
    })
    
    function addItem() {
        items = [...items, {
            description: "",
            isComplete: false
        }]
    }

    function viewItems() {
        console.groupCollapsed(`Listing Items (${new Date().toISOString()})`)
        
        items.forEach(item => {
            console.log(`${item.description} => ${item.isComplete}`)
        });

        console.groupEnd()
    }

    function saveItems() {
        TodoItemService.save(items)
    }
</script>

<style>
    .container {
        font-family: 'IBM Plex Sans', sans-serif;
    }
</style>

<div class="container">
    <Header {numItems} {numCompletedItems} />

    {#each items as todoItem}
        <TodoItem bind:description={todoItem.description} bind:isComplete={todoItem.isComplete} on:periodicSave={saveItems} />
    {/each}

    <Footer dateCreated={todoList.dateCreated} on:addItem={addItem} on:viewItems={viewItems}/>
</div>
