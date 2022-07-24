<template>
  <div class="justify-center">
    <h1>Skills</h1>
  </div>
  <div>
    <el-row class="justify-center" :gutter="21">
      <el-col class="text-center" :span="7" v-for="(skill) in skills" :key="skill.title">
        <div style="padding:2em 3em 2em">
          <div><i :class="skill.icon"></i></div>
          <h3>{{ skill.title }}</h3>
          <hr width="50%" />
          <span>{{ skill.info.join(", ") }}</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import skills from "../content/skills.json";
</script>

<style scoped>
.fa {
  font-size: 40px;
}
</style>
