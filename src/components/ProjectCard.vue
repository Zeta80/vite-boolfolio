<script>

export default {
    name: "ProjectCard",
    props: {

        project: Object

    },

    data() {
        return {
            contentMaxLenght: 50
        }
    },
    components: {

    },
    created() {

    },
    methods: {
        sharpText(text) {
            if (text && text.length > this.contentMaxLenght) {
                return text.substr(0, this.contentMaxLenght) + '...';
            }
            return text;
        }
    }
}
</script>

<template>

    <div class="card" v-for="project in project" :key="project.id">
        <div class="card-header">
            {{ project.type ? project.type.name : 'Nessuna categoria' }}
        </div>
        <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ sharpText(project.description) }} </p>
            <router-link :to="{ name: 'single-project', params: { slug: project.slug } }"
                class="btn btn-primary">Scoprimi</router-link>
        </div>
    </div>

</template>