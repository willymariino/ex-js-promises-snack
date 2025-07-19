# Esercizi sulle Promises - Modulo 1, Lezione 3

Questo progetto contiene una serie di esercizi pratici sulle **Promises** in JavaScript

### Snack 1: Ottenere il titolo di un post

- **Funzione:** `getPostTitle(id)`
- **Descrizione:** Recupera il titolo di un post tramite una chiamata HTTP all'endpoint [https://dummyjson.com/posts/{id}](https://dummyjson.com/posts/{id}) usando Axios.
- **Promise:** Risolta con il titolo del post, oppure rigettata in caso di errore.

### Snack 2: Lancio del dado asincrono

- **Funzione:** `lanciaDado()`
- **Descrizione:** Simula il lancio di un dado dopo 3 secondi. Nel 20% dei casi la Promise viene rigettata per simulare un errore ("dado incastrato").
- **Promise:** Risolta con il valore del dado (1-6), oppure rigettata con un messaggio di errore.

