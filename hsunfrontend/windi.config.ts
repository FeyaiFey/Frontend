import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  preflight: false,  // 禁用基础样式重置，避免覆盖 Element Plus 的样式
  theme: {
    extend: {
      // 你可以在这里自定义你的颜色和样式，以匹配 Element Plus 的风格
      theme: {
        extend: {
          colors: {
            primary: '#409EFF',  // Element Plus 的默认主色
            secondary: '#67C23A',  // 其他你想保持一致的颜色
          },
        },
      },
    },
  },
  plugins: [],
})