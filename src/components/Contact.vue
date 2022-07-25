<template>
  <div>
    <div class="container">
      <div class="text-center" style="margin:2em">
        <h1>Contact</h1>
      </div>
      <div>
        <el-row justify="center" align="middle">
          <el-col :xs="24" :sm="12" :md="10">
            <el-form :rules="rules" :model="form" ref="formRef">
              <el-form-item prop="name">
                <el-input v-model="form.name" placeholder="Name" />
              </el-form-item>
              <el-form-item prop="email">
                <el-input v-model="form.email" type="email" placeholder="E-mail" />
              </el-form-item>
              <el-form-item prop="text">
                <el-input type="textarea" rows="4" v-model="form.text" placeholder="Message" />
              </el-form-item>
              <el-form-item>
                <el-button type="info" class="button-round" @click="sendEmail(formRef)" plain>
                  Submit<i class="fa fa-paper-plane" style="margin-left:.3em"></i>
                </el-button>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </div>
      <el-row justify="center" align="middle">
        <el-col :xs="24" :sm="12" :md="10">
          <div class="contact-details">
            <hr />
            <p>
              Location
              <i class="fa fa-location-dot" style="margin:0 .3em"></i>
              :
              <span style="margin:0 5px">
                {{ contact.location }}
              </span>
            </p>
            <p>
              Email
              <i class="fa fa-envelope" style="margin:0 .3em"></i>
              :
              <a class="link" :href="`mailto:${contact.mail}`" target="_blank" rel="noopener noreferrer">
                {{ contact.mail }}
              </a>
            </p>
            <p>
              Phone
              <i class="fa fa-phone" style="margin:0 .3em"></i>
              :
              <span style="margin:0 5px">
                {{ contact.phone }}
              </span>
            </p>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import contact from "../content/contact.json";

const formRef = ref()
const form = reactive({
  name: '',
  email: '',
  text: ''
})

const rules = reactive({
  name: [
    { required: true, message: 'Please input name', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
  email: [
    { type: 'email', required: true, message: 'Please input e-mail', trigger: 'blur' },
  ],
  text: [
    { required: true, message: 'Please input message', trigger: 'blur' },
  ],
})

async function sendEmail(formEl) {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('Sending e-mail!')
    } else {
      console.log('Error sending e-mail!', fields)
    }
  })
}

</script>

<style scoped>
.link {
  color: #181d20;
  text-decoration-color: #181d20;
  margin: 0 5px
}

.contact-details{
  font-size: .90rem;
}
</style>
