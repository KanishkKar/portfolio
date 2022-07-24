
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

const activeIndex = ref('1')
const resumeUrl = ref('./Kanishkar_Marimuthu_Resume.pdf')
</script>

<style scoped>
.flex-grow {
    flex-grow: 1;
}
</style>