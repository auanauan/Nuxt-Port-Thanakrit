import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: 'NuxtJS',
      description: {
        en: 'I build modern and advanced websites and applications with React or Expo by React Native.',
        id_ID: 'ฉันสร้างเว็บไซต์และแอปพลิเคชันที่ทันสมัยและล้ำหน้าด้วย Nuxt 3',
      },
      icon: 'devicon:nuxtjs',
      image: null,
    },
    {
      id: 2,
      title: 'Vue',
      description: {
        en: 'I use Vue, a modern JavaScript and Typescript framework, while making dynamic and static websites and applications.',
        id_ID: 'ฉันใช้ Vue ซึ่งเป็นเฟรมเวิร์ก JavaScript และ Typescript สมัยใหม่ ในขณะที่สร้างเว็บไซต์และแอปพลิเคชันแบบไดนามิกและแบบคงที่',
      },
      icon: 'devicon:vuejs',
      image: null,
    },
    {
      id: 3,
      title: 'NodeJS',
      description: {
        en: 'For an app, I also use Kotlin.',
        id_ID: 'Untuk membuat aplikasi, saya juga menggunakan Kotlin.',
      },
      icon: 'devicon:nodejs',
      image: null,
    },
    {
      id: 4,
      title: 'Python',
      description: {
        en: 'In Cybersecurity, I use Python, SQL, Java/JavaScript, C++, etc. But Python is the language I use more often.',
        id_ID: 'ในระบบรักษาความปลอดภัยทางไซเบอร์ ฉันใช้ Python, SQL, Java/JavaScript, C++ ฯลฯ แต่ Python เป็นภาษาที่ฉันใช้บ่อยกว่า',
      },
      icon: 'devicon:python',
      image: null,
    },
  ]
})
