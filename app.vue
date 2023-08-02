<script lang="ts" setup>
const db = useFirestore()
const user = useCurrentUser()

const {
  public: { vuefireVersion, nuxtVuefireVersion },
} = useRuntimeConfig()

const router = useRouter()
const route = useRoute()
</script>

<template>
  <h1>Nuxt + VueFire</h1>

  <NuxtPage />

  <footer>
    <code>vuefire@{{ vuefireVersion }}</code> -
    <code>nuxt-vuefire@{{ nuxtVuefireVersion }}</code>
  </footer>
</template>
