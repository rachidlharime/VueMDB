<template>
    <div id="MiniCard">

        <b-card :title='title' title-tag="h5"
                :img-src="poster" img-alt="Card image" 
                img-left img-width="70" 
                style="background: none;border: none;margin: 0;max-height: 100px">

            <b-card-text>
                <router-link exact :to="'/'+id" class="text-decoration-none">
                    Details
                    <b-icon-arrow-right></b-icon-arrow-right>
                </router-link>
            </b-card-text>
        </b-card>

    </div>
</template>

<script>
export default {
    name: 'MiniCard',
    props: {
        poster: String,
        title: String, 
        id: Number
    }
}
</script>
