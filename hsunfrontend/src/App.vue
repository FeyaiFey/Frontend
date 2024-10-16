<script setup lang="ts">
    import { RouterLink, RouterView } from 'vue-router'
    import { ElNotification } from 'element-plus'

    ElNotification({
        title: '提示',
        type: 'warning',
        duration: 0,
        dangerouslyUseHTMLString: true,
        message:
        '<div><p><strong>若要修改密码请邮件联系管理员删除账户重新注册。</strong></p><p><a href="https://s220s.chinaemail.cn/webmail7.5/webmail.php" target="_blank">邮箱地址:wxb1@h-sun.com</a></p></div>'
        })
</script>

<template>
    <RouterView />
</template>
  
<style lang="less" scoped>

.size {
  width: 100%;
  height: 100%;
}
  
html,
body {
  padding: 0 !important;
  margin: 0;
  overflow: hidden;
  .size;

  #app {
    .size;
  }
}
</style>
