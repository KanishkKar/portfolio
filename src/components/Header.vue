
<template>
    <div class="nav">
        <el-menu :default-active="activeIndex" class="el-menu" mode="horizontal" :ellipsis="false">
            <el-menu-item style="--el-menu-hover-bg-color:Transparent" index="0">
                <el-image style="width: 60px; height: 60px" src="./logo.png" />
            </el-menu-item>
            <el-menu-item class="hidden-sm-and-down" index="1"><a href='#home' class="nav-link">Home</a></el-menu-item>
            <el-menu-item class="hidden-sm-and-down" index="2"><a href='#about' class="nav-link">About</a>
            </el-menu-item>
            <el-menu-item class="hidden-sm-and-down" index="3"><a href='#skills' class="nav-link">Skills</a>
            </el-menu-item>
            <el-menu-item class="hidden-sm-and-down" index="4"><a href='#portfolio' class="nav-link">Portfolio</a>
            </el-menu-item>
            <el-menu-item class="hidden-sm-and-down" index="5"><a href='#contact' class="nav-link">Contact</a>
            </el-menu-item>
            <div class="flex-grow"></div>
            <el-menu-item style="--el-menu-hover-bg-color:Transparent" index="6">
                <el-switch v-model="darkMode" @change="toggleDark()" inline-prompt :active-icon="Moon"
                    :inactive-icon="Sunny" style="--el-switch-on-color: #c2c2c2; margin: 1em .5em .5em .5em" />
            </el-menu-item>
            <el-menu-item style="--el-menu-hover-bg-color:Transparent" index="7">
                <el-button style="margin: .5em" size="large" round>
                    <a class="nav-link" :href="resumeUrl" download="Kanishkar_Marimuthu_Resume">
                        Resume <i class="fa fa-download" style="margin-left:.3em"></i>
                    </a>
                </el-button>
            </el-menu-item>
        </el-menu>
    </div>
</template>
        
<script setup>
import { ref } from 'vue'
import { toggleDark, isDark } from '../composables/dark';
import { Sunny, Moon } from '@element-plus/icons-vue'

const activeIndex = ref('1')
console.log(isDark.value)
const darkMode = ref( isDark.value ? true : false)
const resumeUrl = ref('./Kanishkar_Marimuthu_Resume.pdf')
</script>

<style scoped>
.flex-grow {
    flex-grow: 1;
}
</style>