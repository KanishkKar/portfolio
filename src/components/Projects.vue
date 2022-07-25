<template>
    <div>
        <el-card shadow="hover" :body-style="{ padding: '0px' }">
            <div v-if="data.image != ''">
                <div>
                    <el-image :src="data.image" fit="contain" />
                </div>
                <div class="margin-title">
                    <strong>{{ data.title }}</strong>
                </div>
                <el-row class="margin-regular">
                    <el-col>
                        <el-tag style="margin:0 .5em .5em .5em;" v-for="tag in data.tags" :key="tag" type="info">
                            {{ tag }}
                        </el-tag>
                    </el-col>
                </el-row>
                <el-row justify="center" align="middle">
                    <el-col :xs="6" :sm="5" style="margin:0 .5em 1em 0;">
                        <el-button class="button-round" type="info" plain>
                            <a class="nav-link" :href="data.demo" target="_blank" rel="noopener noreferrer">
                                Demo<i class="fa fa-arrow-up-right-from-square" style="margin-left:.3em"></i>
                            </a>
                        </el-button>
                    </el-col>
                    <el-col :xs="6" :sm="5" style="margin:0 .5em 1em 0;">
                        <el-button class="button-round" type="info" plain>
                            <a class="nav-link" :href="data.source" target="_blank" rel="noopener noreferrer">
                                Sorce<i class="fa fa-arrow-up-right-from-square" style="margin-left:.3em"></i>
                            </a>
                        </el-button>
                    </el-col>
                    <el-col :xs="6" :sm="5" style="margin:0 .5em 1em 0;">
                        <el-button class="button-round" type="info" plain>
                            Read More
                        </el-button>
                    </el-col>
                </el-row>
            </div>
            <div v-else>
                <div class="hidden-sm-and-down">
                    <el-skeleton style="width: 340px">
                        <template #template>
                            <el-skeleton-item variant="image" style="width: 750px; height: 340px" />
                            <div style="padding: 14px">
                                <el-skeleton-item variant="p" />
                                <el-skeleton-item variant="p" style="width: 50%" />
                                <div style="display: flex; align-items: center; justify-items: space-between;">
                                    <el-skeleton-item variant="text" style="margin-right: 16px" />
                                    <el-skeleton-item variant="text" style="width: 30%" />
                                </div>
                            </div>
                        </template>
                    </el-skeleton>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script setup>
const props = defineProps({
    data: Object
})
</script>

<style scoped>
.margin-regular {
    margin: .5em;
}

.margin-title {
    margin: 1em;
}
</style>