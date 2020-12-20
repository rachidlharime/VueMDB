<template>
    <div id="Card">

        <b-card no-body class="overflow-hidden m-auto movieCard" style="background: #203737">
            <b-row>
                <b-col md=4>
                    <b-card-img :src="poster" alt="Image" class="rounded-0 poster"></b-card-img>
                </b-col>
                <b-col>
                    <b-card-body class="mt-3" :title="title" :sub-title="genres">
                        <b-card-text class="mt-3">
                            {{ plot }}
                            <p class="mt-3">
                                Directed by :
                                <span class="text-info">
                                    {{ director }}
                                </span>
                            </p>
                            <p class="mt-3">
                                Starring :
                                <span class="text-info">
                                    {{ actors }}
                                </span>
                            </p>
                            <p class="mt-3">
                                IMDB Rating : <b-badge variant="warning" v-html=imdb></b-badge>
                            </p>
                        </b-card-text>
                    </b-card-body>
                </b-col>
            </b-row>
        </b-card>
        
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        poster: String,
        title: String, 
        genres: String, 
        plot: String,
        director: String,
        actors: String,
        imdb: String
    }
}
</script>

<style scoped>

@media only screen and (max-width: 768px) {
  .movieCard {
      width: 75% !important;
  }
  .poster {
      max-height: 450px;
  }
}
@media only screen and (max-width: 575px) {
  .movieCard {
      width: 85% !important;
  }
}
@media only screen and (max-width: 500px) {
  .movieCard {
      width: 90% !important;
  }
}


</style>