<template>
    <div class="container">
        <header>
            Daftar User Github
        </header>
        <div class="list">
            <ul v-for="user in users" :key="user.username" style="list-style: none">
                <li>
                    <router-link :to="{ name: 'User' , params : {id : user.username}}">
                        {{ user.username }} - {{ user.name }}
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
module.exports =  {
    data() {
        return {
            users: []
        }
    },
    created() {
        this.getAllUser()
    },
    methods: {
        getAllUser() {

            this.users = [
                {
                    username: 'dicka88',
                    name: 'Dicka Ismaji'
                },
                {
                    username: 'thembig',
                    name: 'Malik Fajar'
                },
                {
                    username: 'jovianreynaldo',
                    name: 'Alphonsus Jovian Joy Reynaldo'
                },
                {
                    username: 'guntoroyk',
                    name: 'Guntoro Yudhi Kusumo'
                },
                {
                    username: 'daffastefian',
                    name: 'Daffa Stefian Abyansyah'
                },
                {
                    username: 'aldipradana',
                    name: 'Aldi Pradana'
                },
                {
                    username: 'ezralazuardy',
                    name: 'Ezra Lazuardy Wijaya',
                }
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
    header {
        display: block;
        width: 100%;
        background-color: green;
        color: white;
    }
    .list {
        margin-left: -50px;
    }
</style>