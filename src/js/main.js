import "normalize.css"

// Svelte components
import App from "./components/App.svelte"

// CSS
import "../css/master.scss"

const app = new App({
    target: document.getElementById("app")
})
