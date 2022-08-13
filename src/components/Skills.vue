<template>
  <div class="text-center" style="margin:2em">
    <h1>Skills</h1>
  </div>
  <div>
    <el-row justify="center" align="middle">
      <el-col class="text-center" :xs="12" :sm="12" :md="8" v-for="(skill) in skills" :key="skill.title">
        <el-card :body-style="{ padding: '0px' }" shadow="never" class="skills">
          <div><i :class="skill.icon"></i></div>
          <h3>{{ skill.title }}</h3>
          <el-divider/>
          <span>{{ skill.info.join(", ") }}</span>
        </el-card>
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

.skills {
  height: 240px;
}

.el-card {
  --el-card-border-color: none;
  --el-card-border-radius: none;
}

html.dark .el-card {
  background-color: #141414
}

.el-divider {
  text-align: center;
}

.el-divider--horizontal {
  width: 50%;
  margin-left: auto;
  margin-right: auto;
}
</style>
