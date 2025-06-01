// postcss.config.cjs
module.exports = {
  plugins: {
    // ✅ Thêm plugin nesting TRƯỚC Tailwind
    'postcss-nesting': {}, // hoặc 'postcss-nested': {}
    tailwindcss: {},
    autoprefixer: {},
  },
}