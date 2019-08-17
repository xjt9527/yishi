module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px2rem-exclude": {
      remUnit: 36,//设计稿宽度 此处为360宽
      exclude: /node_modules|folder_name/i
    }
  }
}