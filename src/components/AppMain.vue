<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';

export default {
    name: "AppMain",
    data() {
        return {
            baseUrl: 'http://127.0.0.1:8000',
            project: [],
        }
    },
    components: {
        ProjectCard
    },
    created() {
        this.getProject();
    },
    methods: {
        getProject() {
            axios.get(`${this.baseUrl}/api/projects`).then(resp => {
                this.project = resp.data.result;
            })
        },

    }
}
</script>

<template>
    <div class="container">
        <h2 class="text-center">i miei Progetti</h2>
        <div class="row justify-content-center">
            <div class="col-10">
                <ProjectCard :project="project" />
            </div>
        </div>
    </div>
</template>