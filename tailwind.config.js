// remember to fix this issue wint the tailwind/nuxt
// https://github.com/tailwindlabs/tailwindcss-intellisense/issues/663#issuecomment-1316788128

module.exports = {
  darkMode: 'class',
  content: [],
  theme: {
    extend: {
      fontFamily: {
        spacegrotesk: ['Space Grotesk', 'sans-serif'],
        nastaleeq: ['Jameel Noori Nastaleeq', 'sans-serif'],
        notoNastaleeq: ['Noto Nastaliq Urdu', 'sans-serif'],
        mehr: ['Mehr Nastaliq', 'sans-serif']
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],

  css: [

  ]
}
