import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 0,
      title: {
        en: 'All',
        id_ID: 'ทั้งหมด',
      },
    },
    {
      id: 1,
      title: {
        en: 'Song',
        id_ID: 'เพลง',
      },
    },
    {
      id: 2,
      title: {
        en: 'App',
        id_ID: 'แอพ',
      },
    },
    {
      id: 3,
      title: {
        en: 'Web Design',
        id_ID: 'ออกแบบเว็บ',
      },
    },
  ]
})
