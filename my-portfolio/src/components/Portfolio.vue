<template>
    <div class="justify-center">
        <h1>Portfolio</h1>
    </div>
    <div>
        <el-carousel trigger="click" type="card" :autoplay="false" indicator-position="none" height="500px">
            <el-carousel-item v-for="item in portfolio" :key="item.title">
                <el-card shadow="hover" :body-style="{ padding: '0px' }">
                    <div v-if="item.image != ''">
                        <div>
                            <el-image :src="item.image" fit="contain" />
                        </div>
                        <div class="margin-title">
                            <strong>{{ item.title }}</strong>
                        </div>
                        <el-row :gutter="12" class="margin-regular">
                            <el-col>
                                <el-tag style="margin-left: 10px; margin-right: 5px;" v-for="tag in item.tags"
                                    :key="tag" type="info">
                                    {{ tag }}
                                </el-tag>
                            </el-col>
                        </el-row>
                        <el-row class="card-buttons" :gutter="12">
                            <el-col :span="4">
                                <el-button class="button-round" type="info" plain>
                                    <a class="nav-link" :href="item.demo" target="_blank" rel="noopener noreferrer">
                                        Demo<i class="fa fa-arrow-up-right-from-square" style="margin-left:5px"></i>
                                    </a>
                                </el-button>
                            </el-col>
                            <el-col :span="4">
                                <el-button class="button-round" type="info" plain>
                                    <a class="nav-link" :href="item.source" target="_blank" rel="noopener noreferrer">
                                        Sorce<i class="fa fa-arrow-up-right-from-square" style="margin-left:5px"></i>
                                    </a>
                                </el-button>
                            </el-col>
                            <el-col :span="4">
                                <el-button class="button-round" type="info" plain>
                                    Read More
                                </el-button>
                            </el-col>
                        </el-row>
                        <el-row class="margin-regular">
                        </el-row>
                    </div>
                    <div v-else>
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
                </el-card>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script setup>
import portfolio from "../content/portfolio.json";
</script>

<style scoped>
.margin-regular {
    margin: 5px;
}

.margin-title {
    margin: 15px;
}

.card-buttons {
    padding: 5px;
    justify-content: center;
}
</style>