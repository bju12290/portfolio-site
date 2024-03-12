import purgecss from '@fullhuman/postcss-purgecss';

export default {
  plugins: [
    purgecss({
      content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}', './public/**/*.html'],
      safelist: [
        /^bg-/, 
        /^text-/, 
        /^border-/, 
        /^alert-/,
        'modal', 'show', 'hidden',
        'aos-init','aos-animate', 
        /^data-aos-/,
      ],
    }),
  ],
};