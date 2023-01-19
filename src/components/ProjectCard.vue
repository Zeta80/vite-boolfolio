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
            Tech
        </div>
        <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ sharpText(project.description) }} </p>
            <a href="#" class="btn btn-primary">Scoprimi</a>
        </div>
    </div>

</template>