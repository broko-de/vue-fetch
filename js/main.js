const app = new Vue({
    el: '#app',
    data: {
        personajes: [],
        siguiente: '',
        anterior: '',
        API: 'https://rickandmortyapi.com/api/character/'
    },
    created(){
        this.fetchData(this.API);
    },
    methods:{
        fetchData(url){
            // axios.get(url)
            //     .then( response => {
            //         console.log(response);
            //         this.personajes = response.data.results;
            //         this.siguiente = response.data.info.next;
            //         this.anterior = response.data.info.prev;
            //     })
            fetch(url)
                .then(response => response.json())
                .then(dataApi => {
                    this.personajes = dataApi.results;
                    this.siguiente = dataApi.info.next;
                    this.anterior = dataApi.info.prev;
                    console.log(this.personajes);
                })
                .catch(err => {
                    console.error(err)
                })
        },
        next(){
            fetch(this.siguiente)
                .then(response => response.json())
                .then(dataApi => {
                    this.personajes = dataApi.results;
                    this.siguiente = dataApi.info.next;
                    this.anterior = dataApi.info.prev;
                })
                .catch(err => {
                    console.error(err);
                })
        },
        prev(){
            fetch(this.anterior)
                .then(response => response.json())
                .then(dataApi => {
                    this.personajes = dataApi.results;
                    this.siguiente = dataApi.info.next;
                    this.anterior = dataApi.info.prev;
                })
                .catch(err => {
                    console.error(err);
                })
        }
    }
})