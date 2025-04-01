var App = Vue.component('App', {
    template: `
        <div class="container">
            <!-- ESEMPIO 1: CON DIV -->
            <!-- Visualizzazione del bottone solo se isAbilited e' true -->
            <div v-if="isAbilited">
                <button class="btn btn-primary"> Elimina File </button>
            </div>
            <!-- Visualizzazione del bottone solo se isAbilited e' false -->
            <div v-else>
                Utente non abilitato alla cancellazione dei file
            </div>

            <hr>

            <!-- ESEMPIO 2: CON TEMPLATE -->
            <!-- Visualizzazione del bottone solo se isAbilited2 e' true -->
            <template v-if="isAbilited2">
                <p>Comandi file</p>
                <button class="btn btn-dark"> Elimina File </button>
            </template>
            <!-- Visualizzazione del bottone solo se isAbilited2 e' false -->
            <template v-else>
                <p>Comandi file</p>
                Utente non abilitato alla cancellazione dei file
            </template>

            <hr>

            <!-- ESEMPIO 3: CON V-IF-ELSE -->
            <div v-if="type === 'A'">
                A
            </div>
            <div v-else-if="type === 'B'">
                B
            </div>
            <div v-else-if="type === 'C'">
                C
            </div>
            <div v-else>
                Not A/B/C
            </div>

            <hr>

            <!-- ESEMPIO 4: CON FORM E METODI -->
            <form>
                <div class="form-group">
                    <!-- Visualizzazione del form solo se loginType e' 'username' -->
                    <template v-if="loginType === 'username'">
                        <label>Username</label>
                        <input key="username" class="form-control" placeholder="Enter your username">
                    </template>
                    <!-- Visualizzazione del form solo se loginType e' 'email' -->
                    <template v-else>
                        <label>Email</label>
                        <input key="email" class="form-control" placeholder="Enter your email address">
                    </template>
                    <!-- NB. Il "key" sull'input serve per rendere dinamico il form e non mantenere lo stesso testo di input inserito ogni volta che cambio il tipo di login attraverso il pulsante -->
                </div>
            </form>
            <!-- Pulsanti per cambiare il tipo di login -->
            <button v-on:click="byUsername()" class="btn btn-primary">Per Username</button>
            <button v-on:click="byEmail()" class="btn btn-primary">Per Email</button>

            <hr>

            <!-- ESEMPIO 5: CON V-SHOW -->
            <p>Visualizzazione del bottone solo se antistress e' true</p>
            <button v-show="antistress">Cliccami come antistress</button>
            <!-- N.B. Anche quando la proprietà era false, la sua proprietà su display è messa a null, cioè invisibile. C'è un minore impatto sulle prestazioni, quindi usare:
            v-show => per qualcosa che può cambiare più frequentemente
            v-if => per qualcosa che cambia una volta sola o raramente -->
        </div>
    `,
    data() {
        return {
            isAbilited: false, // Variabile booleana per controllare la visibilità del bottone
            isAbilited2: false, // Variabile booleana per controllare la visibilità del bottone
            type: 'B', // Variabile per controllare il tipo di visualizzazione
            loginType: 'username', // Variabile per controllare il tipo di login
            byUsername() {
                this.loginType = 'username'; // Imposta il tipo di login su 'username'
            },
            byEmail() {
                this.loginType = 'email'; // Imposta il tipo di login su 'email'
            },
            antistress: true, // Variabile booleana per controllare la visibilità del bottone antistress
        }
    },
});

// Creazione di una nuova istanza di Vue che monta il componente su un elemento con id "app"
new Vue({
    el: "#app",
});