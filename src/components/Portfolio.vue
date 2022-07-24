<template>
    <div class="text-center" style="margin:2em">
        <h1>Portfolio</h1>
    </div>
    <div>
        <el-carousel class="hidden-sm-and-down" trigger="click" type="card" :autoplay="false" indicator-position="none" height="515px">
            <el-carousel-item v-for="item in portfolio" :key="item.title">
                <Projects :data="item"></Projects>
            </el-carousel-item>
        </el-carousel>
        <el-row class="hidden-md-and-up" justify="center" align="middle" v-for="item in portfolio" :key="item.title">
            <el-col>
                <Projects :data="item"></Projects>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>
import portfolio from "../content/portfolio.json";
import Projects from './Projects.vue';
</script>