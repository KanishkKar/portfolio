<template>
  <div class="about">
    <el-row :gutter="20">
      <el-col :span="7">
        <div class="justify-center" style="margin-top: 10%">
          <el-avatar :src="about.image"></el-avatar>
        </div>
      </el-col>
      <el-col :span="13">
        <div>
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
            <el-row :gutter="18">
              <el-col :span="6" v-for="value in about.skills" :key="value">
                <details disabled>
                  <summary>
                    {{ value }}
                  </summary>
                </details>
              </el-col>
            </el-row>
          </div>
          <div style="margin-top:2rem">
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
