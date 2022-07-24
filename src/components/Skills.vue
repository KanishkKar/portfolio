<template>
  <div class="text-center" style="margin:2em">
    <h1>Skills</h1>
  </div>
  <div>
    <el-row justify="center" align="middle">
      <el-col  style="margin-bottom: 2em;" class="text-center" :xs="12" :sm="8" v-for="(skill) in skills" :key="skill.title">
        <div >
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
