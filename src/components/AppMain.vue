<script>
import axios from 'axios';

export default {
    name: "AppMain",
    data() {
        return {
            baseUrl: 'http://127.0.0.1:8000',
            project: []
        }
    },
    components: {

    },
    created() {
        this.getProject();
    },
    methods: {
        getProject() {
            axios.get(`${this.baseUrl}/api/projects`).then(resp => {
                this.project = resp.data.result;
            })
        }
    }
}
</script>

<template>
    <div class="container">
        <h2 class="text-center">i miei Progetti</h2>
        <div class="row justify-content-center">
            <div class="col-10">
                <div class="card" v-for="project in project" :key="project.id">
                    <div class="card-header">
                        Tech
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">{{ project.title }}</h5>
                        <p class="card-text">{{ project.description }} </p>
                        <a href="#" class="btn btn-primary">Scoprimi</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>