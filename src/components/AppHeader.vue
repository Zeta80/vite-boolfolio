<script>
import axios from 'axios';

export default {
    name: "AppHeader",
    data() {
        return {
            navigation: [
                {
                    label: 'Home',
                    route: 'home',
                },
                {
                    label: 'La Mia Società',
                    route: 'about',
                },
                {
                    label: 'Progetti',
                    route: 'projects',
                }
            ]
        }
    },
    components: {

    },
    created() {

    },
    methods: {

    }
}
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand text-primary" href="#">Boolfolio</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item" v-for=" (navItem, index) in navigation " :key="index"> <router-link
                                :to="{ name: navItem.route }" class="nav-link active" aria-current="page">
                                {{ navItem.label }}</router-link>
                        </li>

                        <li class="nav-item">
                            <a href="http://127.0.0.1:8000/admin" class="nav-link ">Go to Admin</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>

</template>