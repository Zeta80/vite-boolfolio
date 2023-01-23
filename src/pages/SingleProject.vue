<script>
import axios from 'axios';
export default {
    name: "SingleProject",
    data() {
        return {
            baseUrl: 'http://127.0.0.1:8000',
            project: {}
        }
    },
    created() {
        const slug = this.$route.params.slug;
        axios.get(`${this.baseUrl}/api/projects/${slug}`).then(resp => {
            // this.project = resp.data.result;
            console.log(resp);
            if (resp.data.success) {
                //se trova progetto
                this.project = resp.data.project
            } else {
                //sposto su pagina NOTFOND
                this.$router.push({ name: "not-found" })
            }

        })
    }
}
</script>

<template >
    <main>
        <div class="container">
            <p class="mt-5 text-center">{{ project.type ? project.type.name : 'nessuna categoria' }}</p>
            <h1 class="mt-3 text-center">{{ project.title }}</h1>
            <p class="mt-3 text-center">{{ project.description }}</p>
        </div>
    </main>
</template>