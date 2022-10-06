import { createStore } from "vuex";
import { apiFetchQuestions } from "./api/gamesettings";

export default createStore({
    state: {
        user: null,
        questions: []

    },
    mutations: {
        setUser: (state, user) =>  {
            state.user = user
        },
        setQuestions: (state, questions) => {
            state.questions = questions
        }

    },
    actions: {
        async fetchQuestions({commit}){
            const questions = await apiFetchQuestions()

            commit('setQuestions', questions)
        }
    }
})