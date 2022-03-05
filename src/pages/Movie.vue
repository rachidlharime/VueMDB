<template>
    <div id="Movie">
        
        <b-row style="min-height: 100vh">
            <b-col md=12 class="m-3">
                
            </b-col>
            <b-col lg=10 class="m-auto">

                <div v-if="loading" class="d-flex justify-content-center mb-3">
                    <b-spinner style="width: 10rem; height: 10rem;"></b-spinner>
                </div>
                
                <Card v-else :poster="movie.Poster" :title="movie.Title+' - '+movie.Year" 
                        :genres="movie.Genre" :plot="movie.Plot"
                        :director='movie.Director' :actors='movie.Actors' :imdb="movie.imdbRating" />

            </b-col>
            <b-col md=12 class="m-3 text-center">
                <router-link exact to="/" class="text-light text-decoration-none">
                    <b-icon-arrow-left></b-icon-arrow-left>
                    Back to home
                </router-link>
            </b-col>
        </b-row>

    </div>
</template>

<script>
import Card from '../components/Card'

const axios = require("axios")

export default {
    name: 'Movie',
    components: {
        Card
    },
    data() {
        return {
            loading: true,
            errored: false,
            errorText: "",
            apikey: process.env.VUE_APP_API_KEY,
            id: this.$route.params.id,
            movie: null
        }
    },
    computed: {
        buildUrl () {
            return `http://www.omdbapi.com/?i=${this.id}&plot=short&apikey=${this.apikey}`
        }
    },
    mounted() {
        axios.get(this.buildUrl)
        .then(response => {
            if(response.data.Response === "False") {
                window.location.href = '/'
            } else {
                this.movie = response.data
            }
        })
        .catch(error => {
            console.log(error)
        })
        .finally(() => this.loading = false)
    }
}
</script>