
<template>
    <div class="nav">
        <el-affix target=".nav" position="top" :offset="10">
            <el-menu :default-active="activeIndex" class="el-menu" mode="horizontal" :ellipsis="false">
                <el-menu-item style="--el-menu-hover-bg-color:Transparent" index="0">
                    <el-image style="width: 60px; height: 60px" src="./kk.jpg" />
                </el-menu-item>
                <el-menu-item index="1"><a href='#home' class="nav-link">Home</a></el-menu-item>
                <el-menu-item index="2"><a href='#about' class="nav-link">About</a></el-menu-item>
                <el-menu-item index="3"><a href='#skills' class="nav-link">Skills</a></el-menu-item>
                <el-menu-item index="4"><a href='#portfolio' class="nav-link">Portfolio</a></el-menu-item>
                <el-menu-item index="5"><a href='#contact' class="nav-link">Contact</a> </el-menu-item>
                <div class="flex-grow"></div>
                <el-menu-item style="--el-menu-hover-bg-color:Transparent" index="6">
                    <el-button size="large" round>
                        <a class="nav-link" :href="resumeUrl" download="Kanishkar_Marimuthu_Resume">
                            Resume <i class="fa fa-download" style="margin-left:5px"></i>
                        </a>
                    </el-button>
                </el-menu-item>
            </el-menu>
        </el-affix>
    </div>
</template>
        
<script setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const resumeUrl = ref('./Kanishkar_Marimuthu_Resume.pdf')

function download() {

}
</script>

<style scoped>
.flex-grow {
    flex-grow: 1;
}
</style>