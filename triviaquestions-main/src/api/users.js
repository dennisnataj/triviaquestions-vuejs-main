import { BASE_URL, API_KEY } from ".";
const arrayOfUsersFromApi = [];
export async function apiUserRegister(username) {
    try {
        const config = {
            method: "POST",
            headers: {
                "X-API-Key": API_KEY,
                "content-type": "application/json"
            },
            body: JSON.stringify({
                username
            })
        }
        await fetch(`${BASE_URL}`, {
            method: 'GET'
        })
            .then(response => {
                return response.json()
            })
            .then(function (getArray) {
                for (const user of getArray) {
                    arrayOfUsersFromApi.push(user);
                }
            })
        const checkForUsername = !!arrayOfUsersFromApi.find(item => JSON.stringify(item.username) === JSON.stringify(username))
        if (username === "") {
            throw new Error("You need to enter a username")
        }
        else if(checkForUsername)
        {
            throw new Error(`User: ${username} already exists!`)
        }
        else {
            alert(`Hello ${username}, you are ready to play!`)
            const response = await fetch(`${BASE_URL}`, config)
            const data = await response.json()
            const usersData = data;
            return [null , usersData]
        }

    }
    catch (error) {
        return [error.message, null]
    }
}