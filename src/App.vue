<template lang="pug">
  v-app
    router-view
</template>

<script>
import { App } from '@capacitor/app'
import { useTheme } from 'vuetify'
let theme
export default {
  setup() {
    theme = useTheme()
    theme.change('dark')
  },
  name: 'App',
  data: () => ({}),
  mounted() {
    document.title = 'Dopamine'

    //戻るボタンの挙動
    App.addListener('backButton', () => {
      const now = location.pathname
      if (now != '/') {
        this.$router.back()
      } else {
        //アプリを終了させず、最小化
        App.minimizeApp()
      }
    })
    //theme.change('light')
  },
}
</script>

<style>
* {
  user-select: none;
  text-transform: none;
}
</style>
