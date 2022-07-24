<template>
    <div>
        <el-row class="content-baseline" :gutter="20">
            <el-col :span="12">
                <div>
                    <span style="font-size: 80%;">
                        Designed and developed with
                        <i class="fa fa-heart" style="margin:0 3px"></i>
                        by Kanishk Kar
                    </span>
                </div>
            </el-col>
            <el-col :span="2" :offset="6">
                <div>
                    <a class="nav-link" :href="contact.gitHub" target="_blank" rel="noopener noreferrer">
                        <i class="fa-brands fa-github-square"></i>
                    </a>
                </div>
            </el-col>
            <el-col :span="2">
                <div>
                    <a class="nav-link" :href="contact.linkedIn" target="_blank" rel="noopener noreferrer">
                        <i class="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </el-col>
            <el-col :span="2">
                <div>
                    <a class="nav-link" :href="`mailto:${contact.mail}`" target="_blank" rel="noopener noreferrer">
                        <i class="fa-solid fa-envelope"></i>
                    </a>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>
import contact from "../content/contact.json";
</script>

<style scoped>
.content-baseline {
    align-items: baseline
}

.fa-brands {
    font-size: 30px;
}

.fa-solid {
    font-size: 30px;
}
</style>