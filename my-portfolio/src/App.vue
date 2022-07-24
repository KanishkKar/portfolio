<template>
  <div class="container-fluid">
    <div id="app">
      <el-backtop :right="100" :bottom="100"></el-backtop>
      <el-container>
        <el-header>
          <Header></Header>
        </el-header>
        <el-main>
          <div class="main">
            <section id="home">
              <Home></Home>
            </section>
            <section id="about">
              <About></About>
            </section>
            <section id="skills">
              <Skills></Skills>
            </section>
            <section id="portfolio">
              <Portfolio></Portfolio>
            </section>
            <section id="contact">
              <Contact></Contact>
            </section>
            <section id="footer">
              <Footer></Footer>
            </section>
          </div>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Portfolio from './components/Portfolio.vue'
import Contact from './components/Contact.vue'
</script>

<style scoped>
.main {
  position: relative;
}
</style>
