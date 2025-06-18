const config = {
  // plugins: ["@tailwindcss/postcss"],
  plugins: {
    '@unocss/postcss': {
      content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
    },
  },
};

export default config;
