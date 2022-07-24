<template>
    <div>
        <el-row>
            <el-col>
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
                            <span>{{ e.skills.join(", ") }}</span>
                            <p></p>
                        </el-card>
                    </el-timeline-item>
                </el-timeline>
            </el-col>
        </el-row>
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
</style>
