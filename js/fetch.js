import {keys} from "./keys.js";

// MAIN

(async () => {
    const getGithubUsername = async (username) => {
        // build a fetch
        const url = `https://api.github.com/users/${username}/events`;
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${keys.github}`
            },
        };
        try {
            const response = await fetch(url, options);
            let list = await response.json();
            return list.updated_at;
            console.log(list.updated_at);
        } catch (error) {
            return error;
        }
    };
    console.log(getGithubUsername("mononoke813"));


})();

