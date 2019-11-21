<template>
    <b-navbar id="chat-navbar" toggleable="md" type="dark" variant="info">
        <b-navbar-brand href="#">
            Vue Chat
        </b-navbar-brand>
        <b-navbar-nav class="ml-auto">
            <b-nav-text>{{ user.name }} |</b-nav-text>
            <b-nav-item href="#" active></b-nav-item>
        </b-navbar-nav>
    </b-navbar>
</template>

<script>
    import {mapActions, mapMutations, mapState} from 'vuex';

    export default {
        name: 'ChatNavBar',
        computed: {
            ...mapState([
                'user',
                'reconnect'
            ])
        },
        methods: {
            ...mapActions([
                'logout',
                'login'
            ]),
            ...mapMutations([
                'setReconnect'
            ]),
            onLogOut() {
                this.$router.push({ path: '/'});
                this.logout();
            },
            unload() {
                if (this.user.username) {
                    this.setReconnect(true);
                }
            }
        }, 
        mounted() {
            window.addEventListener('beforeunload', this.unload);
            if(this.reconnect) {
                this.login(this.user.username);
            }
        }
    }
</script>

<style>
    #chat-navbar {
        margin-bottom: 15px;
    }
</style>
