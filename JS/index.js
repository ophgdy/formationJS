import { router } from "./routeur.js";

document.addEventListener('DOMContentLoaded',(evt)=>{
    router.handleRoute()
    console.log(router.currentRoute)
})