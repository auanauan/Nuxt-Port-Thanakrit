import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: 'Name',
      content: {
        en: 'English.',
        id_ID: 'Thai.',
      },
      image: '/images/.png',
    },
  ]
})
