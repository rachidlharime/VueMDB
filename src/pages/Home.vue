<template>
    <div id="home">

        <b-row class="pt-5">
            <b-col lg=8 class="m-auto">

                <h1 class="mb-3 text-center">VueMDB</h1>

                <h5 class="text-center">
                    A simple VueJS 2 movies app using 
                    <b-link href="http://www.omdbapi.com" target="_blank">
                        OMDB API
                    </b-link>
                </h5>

                <p class="text-center">
                    <b-link href="https://github.com/rachidlharime/vuemdb" target="_blank" >
                        <b-icon-github></b-icon-github>
                        Code
                    </b-link>
                </p>
                
                <b-form @submit.prevent>
                    <b-form-input id="search" placeholder="Looking for a movie ?" autocomplete="off"
                                    v-model="searchText" @keyup="fetchData">
                    </b-form-input>
                </b-form>

                <b-list-group v-if="showed" class="mt-2" style="max-height: 300px;overflow-y:auto">

                    <b-list-group-item v-if="loading" variant="info" class="text-center">
                        <b-spinner></b-spinner>
                    </b-list-group-item>

                    <b-list-group-item v-else-if="errored" variant="danger" class="text-center">
                        {{ errorText }}
                    </b-list-group-item>

                    <b-list-group-item v-else-if="respEmpty" variant="info" class="text-center">
                        No results found
                    </b-list-group-item>

                    <b-list-group-item v-else v-for="movie in movies" :key='movie.id' 
                                        variant="info" style="padding: 0">

                        <MiniCard :title='movie.Title+" - "+movie.Year' 
                                    :poster="movie.Poster" :id='movie.imdbID' />
                        
                    </b-list-group-item>

                </b-list-group>

                
            </b-col>
        </b-row>

    </div>
</template>

<script>
import MiniCard from '../components/MiniCard'

const axios = require("axios")

export default {
    name: 'Home',
    components: {
        MiniCard
    },
    data() {
        return {
            searchText: "",
            loading: true,
            errored: false,
            errorText: "",
            apikey: "e13fed6c",
            movies: null
        }
    },
    computed: {
        showed () {
            if (this.searchText.length > 2 ){ return true }
            else { return false }
        },
        buildUrl () {
            return 'http://www.omdbapi.com/?s='+this.searchText+'&type=movie&apikey='+this.apikey
        },
        respEmpty () {
            if(this.movies == undefined) { return true }
            else { return false }
        }
    },
    methods: {
        fetchData() {
            if(this.showed) {
                this.loading = true
                axios.get(this.buildUrl)
                .then(response => {
                    this.errored = false
                    this.movies = response.data.Search
                })
                .catch(error => {
                    this.errorText = error
                    this.errored = true
                    console.log(error)
                })
                .finally(() => this.loading = false)
            }
        }
    }
}
</script>