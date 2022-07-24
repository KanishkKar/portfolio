<template>
    <div>
        <el-timeline>
            <el-timeline-item v-for="e in props.data" :key="e.name" center :timestamp="e.date" placement="top">
                <el-card>
                    <h3>{{ e.name }}, {{ e.place }}</h3>
                    <p>
                        <strong>
                            {{ e.degree || e.position }}
                            {{ e.gpa ? "(" + e.gpa + ")" : "" }}
                        </strong>
                    </p>
                    <span class="skills" v-for="s in e.skills" :key="s">{{ s }}</span>
                    <p></p>
                </el-card>
            </el-timeline-item>
        </el-timeline>
    </div>
</template>

<script setup>
const props = defineProps({
    data: Object
})
</script>

<style scoped>
ul.timeline {
    list-style-type: none;
    position: relative;
}

.skills {
    padding-right: 0.5em;
}
</style>
