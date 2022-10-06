import { createRouter, createWebHashHistory } from "vue-router"
import Login from "./views/Login.vue"
import Question from "./views/Question.vue"
import Result from "./views/Result.vue"
import GameSettings from "./views/GameSettings.vue"

const routes = [
    {
        path: '/',
        component: Login
    },
    {
        path: '/gamesettings',
        component: GameSettings
    },

    {
        path: '/question',
        component: Question
    },

    {
        path: '/result',
        component: Result
    }

  

]

export default createRouter({
    history: createWebHashHistory(),
    routes
})