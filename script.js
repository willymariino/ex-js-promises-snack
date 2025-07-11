/*
🏆 Snack 1
Ottieni il titolo di un post con una Promise.

Crea una funzione getPostTitle(id) che accetta un id e restituisce una Promise
 che recupera il titolo di un post dal link https://dummyjson.com/posts/{id}
*/

function getPostTitle(id) {
    return new Promise((resolve, reject) => {
        axios.get(`https://dummyjson.com/posts/${id}`)
            .then(res => resolve(res.data.title))
            .catch(reject)
            .finally(() => console.log("Richiesta completata"));
    })
}

getPostTitle(2)
    .then(res => console.log(res))
    .catch(error => console.error(error))

getPostTitle(3)
    .then(res => console.log(res))
    .catch(error => console.error(error))

/*
🏆 Snack 2
Crea la funzione lanciaDado() che restituisce una Promise che, 
dopo 3 secondi, genera un numero casuale tra 1 e 6. Tuttavia, nel 20 % dei casi, il dado si "incastra" e la Promise va in reject.
*/

function lanciaDado() {
    console.log("sto lanciando il dado 🎲")
}