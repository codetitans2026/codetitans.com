import { defineNitroConfig } from 'nitropack/config'

export default defineNitroConfig({
  runtimeConfig: {
    resendApiKey: process.env.RESEND_API_KEY
  }
})
