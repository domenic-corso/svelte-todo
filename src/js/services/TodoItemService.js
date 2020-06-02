const LS_KEY_NAME = "svelte_todo_store"

export default {
    get() {
        const recent = localStorage.getItem(LS_KEY_NAME)
        let data = []

        if (recent) {
            data = JSON.parse(recent)
        }

        return new Promise((resolve) => {
            resolve(data)
        })
    },
    save(items) {
        return new Promise((resolve) => {
            localStorage.setItem(LS_KEY_NAME, JSON.stringify(items))
            resolve()
        })
    }
}
