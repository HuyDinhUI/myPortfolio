// postcss.config.cjs
export default {
  plugins: {
    // ✅ Thêm plugin nesting TRƯỚC Tailwind
    'postcss-nesting': {}, // hoặc 'postcss-nested': {}
    tailwindcss: {},
    autoprefixer: {},
  },
}