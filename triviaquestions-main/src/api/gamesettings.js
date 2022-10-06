import { API_QUESTIONS_URL } from ".";
const questionsArray = [];

let categoryId;

export async function apiFetchQuestions(amountOfQuestions, difficulty, category) {

    if (category === "Sports")
        categoryId = 21

    else if (category === "Geography")
        categoryId = 22

    else if (category === 'History')
        categoryId = 23

    let conAPIURL = (`${API_QUESTIONS_URL}amount=${amountOfQuestions}&category=${categoryId}&difficulty=${difficulty}`)
    const response = await fetch(conAPIURL)
    const results = await response.json()
    
    for (const question of results.results) {
        questionsArray.push(question)
    }

    return questionsArray;
}