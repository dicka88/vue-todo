<template>
    <div class="container">
        <div class="user">
            <h2>Data github dengan nama: {{ user.name }}</h2>
            <ul>
                <li>Username : {{ user.login }}</li>
                <li>Username : {{ user.email }}</li>
            </ul>
            <router-link to="/">Back</router-link>
        </div>
    </div>
</template>

<script>
const axios = require('axios')

module.exports = {
    data() {
        return {
            user: {}
        }
    },
    created() {
        this.getUser()
    },
    methods: {
        getUser() {
            let vm = this
            let username = this.$route.params.id
            let endpoint = 'https://api.github.com/users/' + username
            axios.get(endpoint)
                .then(res => {
                    vm.user = res.data
                })
                .catch(res => {
                    console.log(err)
                })
        }
    }
}
</script>

<style lang="stylus" scoped>
    ul, li {
        list-style: none;
    }
</style>