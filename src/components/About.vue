<template>
  <div class="container">
    <div class="text-center">
      <h1>About Me</h1>
    </div>
    <div>
      <el-row justify="center" :gutter="20">
        <el-col style="margin:0 2em 0 0" :md="8">
          <div>
            <Timeline :data="education" />
          </div>
        </el-col>
        <el-col style="margin:0 2em 0 0" :md="8">
          <div>
            <Timeline :data="experience" />
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup>
import education from '../content/education.json'
import experience from '../content/experience.json'
import Timeline from './Timeline.vue';
</script>