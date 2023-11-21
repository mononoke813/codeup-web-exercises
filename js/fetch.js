// fetch("https://api.github.com/users/mononoke813", {headers: {'Authorization': 'ghp_cfUkXrcEwVrHrUZFxvOBfvXnV410CH0c1KvA'}}).then((response) => response.json())
//     .then((data) => {
//         console.log(data);
//     })
// MAIN

(async () => {
    const getGithubUsername = async (username) => {
        // build a fetch
        const url = `https://api.github.com/users/${username}`;
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
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