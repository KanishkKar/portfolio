<template>
  <div class="home">
    <el-row justify="center" align="middle" :gutter="10">
      <el-col :xs="{ span: 18 }" :sm="{ span: 9 }" :md="{ span: 6 }">
        <div style="margin: 2em 2em 2em 0">
          <el-avatar :src="about.image"></el-avatar>
        </div>
      </el-col>
      <el-col :sm="{ span: 15 }" :md="{ span: 12 }">
        <div style="margin-right: 2em">
          <h1>{{ about.fullname }}</h1>
          <h4 style="color:#89959e">{{ about.designation }}</h4>
          <div>
            <p>
              {{ about.summary }}
              <el-button type="info" link>
                <a href='#about' class="nav-link">Learn more.</a>
              </el-button>
            </p>
            <p>
              {{ about.workingOn }}
            </p>
            <el-row :gutter="10">
              <el-col :span="8" v-for="value in about.skills" :key="value">
                <details disabled>
                  <summary>
                    {{ value }}
                  </summary>
                </details>
              </el-col>
            </el-row>
          </div>
          <div style="margin:2rem 1em 2em 0 ">
            <el-button size="large" type="info" class="button-round" plain>
              <a href='#portfolio' class="nav-link">Portfolio</a>
            </el-button>
            <el-button size="large" type="info" class="button-round" plain>
              <a href='#contact' class="nav-link">Contact</a>
            </el-button>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import json from '../content/about.json'

const about = ref(json)
</script>

<style scoped>
.el-avatar {
  --el-avatar-bg-color: #000000;
  --el-avatar-size: 250px;
}

details[disabled] summary,
details.disabled summary {
  /* prevents click events */
  pointer-events: none;
  /* prevents text selection */
  user-select: none;
}
</style>
