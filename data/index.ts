export const navbarData = {
  homeTitle: 'کمپیوٹنگ پیڈیا',
}

export const footerData = {
  author: 'کمپیوٹنگ پیڈیا',
  aboutAuthor: 'آزادمصدراردوانسائیکلوپیڈیا', // Modify for SEO
}

export const homePage = {
  title: 'اردو انسائیکلوپیڈیا میں خوش آمدید',
  description: 'آزاد دائرۃ المعارف جس میں کوئی بھی ترمیم کر سکتا ہے',
}

export const blogsPage = {
  title: 'تلاش',
  description: '',
}

export const categoryPage = {
  title: 'زمرہ جات',
  description: '',
}

export const aboutPage = {
  title: 'اردو انسائیکلوپیڈیا',
  description: 'Software Engineer, Problem Solver, Web Enthusiast.',
  aboutMe: 'Hello, fellow human! I\'m a software wizard who spends most of his day crafting code spells at @AppsCode in the Bytebuilders team. When I\'m not crafting code, you can find me summoning solutions to problems on online judges. Just don\'t ask me to cast any love spells, my magic only works on machines!',
}

export const seoData = {
  description: 'Riyad, Software Engineer at AppsCode, with over 2.5+ years experience in software development.',
  ogTitle: 'Riyad codes and helps others learn Javascript, Typescript, Vue, Nuxt, & Problem Solving',
  twitterDescription: 'My blog website, where I play around with Nuxt, Vue, and more and showcase my blog, resources, etc',
  image: 'https://res.cloudinary.com/dmecmyphj/image/upload/v1673548905/nuxt-blog/cover_ntgs6u.webp',
  mySite: 'https://blog-nurriyad.vercel.app',
  twitterHandle: '@qdnvubp',
  mailAddress: 'asadnurriyad@gmail.com',
}

export const siteMetaData = [
  {
    name: 'description',
    content: seoData.description,
  },
  // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
  { property: 'og:site_name', content: seoData.mySite },
  { property: 'og:type', content: 'website' },
  {
    property: 'og:url',
    content: seoData.mySite,
  },
  {
    property: 'og:title',
    content: seoData.ogTitle,
  },
  {
    property: 'og:description',
    content: seoData.description,
  },
  {
    property: 'og:image',
    content: seoData.image,
  },
  // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/
  { name: 'twitter:site', content: seoData.twitterHandle },
  { name: 'twitter:card', content: 'summary_large_image' },
  {
    name: 'twitter:url',
    content: seoData.mySite,
  },
  {
    name: 'twitter:title',
    content: seoData.ogTitle,
  },
  {
    name: 'twitter:description',
    content: seoData.twitterDescription,
  },
  {
    name: 'twitter:image',
    content: seoData.image,
  },
]
