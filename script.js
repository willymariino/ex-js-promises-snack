/*
🏆 Snack 1
Ottieni il titolo di un post con una Promise.

Crea una funzione getPostTitle(id) che accetta un id e restituisce una Promise
 che recupera il titolo di un post dal link https://dummyjson.com/posts/{id}
*/

function getPostTitle(id) {
    return new Promise((resolve, reject) => {
        axios.get(`https://dummyjson.com/posts/${id}`)
            .then(res => resolve(res.data))
            .catch(reject)
            .finally(() => console.log("Richiesta completata"));
    })
}

getPostTitle(2)
    .then(res => console.log(res))
    .catch(error => console.error(error))