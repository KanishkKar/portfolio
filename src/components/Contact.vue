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
                <el-input v-model="form.name" placeholder="Name" size="large" />
              </el-form-item>
              <el-form-item prop="email">
                <el-input v-model="form.email" type="email" placeholder="E-mail" size="large" />
              </el-form-item>
              <el-form-item prop="text">
                <el-input type="textarea" rows="4" v-model="form.text" placeholder="Message" size="large" />
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
            <el-divider />
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
import config from "../../config";
import emailjs from '@emailjs/browser';
import { ElNotification } from 'element-plus'

const formRef = ref()
const form = reactive({
  name: '',
  email: '',
  text: ''
})

const rules = reactive({
  name: [
    { required: true, message: 'Please input name', trigger: 'blur' },
    { min: 3, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
  email: [
    { type: 'email', required: true, message: 'Please input e-mail', trigger: 'blur' },
  ],
  text: [
    { required: true, message: 'Please input message', trigger: 'blur' },
  ],
})

function notify(title, type, message) {
  ElNotification({
    title: title,
    message: message,
    type: type,
    position: 'top-left',
  })
}

async function sendEmail(formEl) {
  try {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
      if (valid) {
        console.log('Sending e-mail...')
        let templateParams = {
          from_email: form.email,
          from_name: form.name,
          message: form.text
        };
        emailjs.send(config.emailjs.serviceId, config.emailjs.templateId, templateParams, config.emailjs.publicKey)
          .then(function (response) {
            notify('Email sent!', 'success', 'Your message was submitted successfully')
            console.log('SUCCESS!', response.status, response.text)
            // Reset form field
            formEl.resetFields()
          }, function (error) {
            console.log('FAILED...', error)
            throw error
          });
      } else {
        console.log('Error validating details!', fields)
      }
    })
  } catch (error) {
    notify('Failed!', 'error', 'Sorry! There was a error. Please try again.')
    console.log('Error sending e-mail!', error)
  }
}

</script>

<style scoped>
.contact-details {
  font-size: .90rem;
}
</style>
