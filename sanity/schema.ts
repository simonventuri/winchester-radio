import { type SchemaTypeDefinition } from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    {
      name: 'show',
      title: 'Show',
      type: 'document',
      fields: [
        { name: 'title', type: 'string' },
        { name: 'slug', type: 'slug', options: { source: 'title' } },
        { name: 'presenter', type: 'string' },
        { name: 'summary', type: 'text' },
      ]
    },
    {
      name: 'episode',
      title: 'Episode',
      type: 'document',
      fields: [
        { name: 'title', type: 'string' },
        { name: 'slug', type: 'slug', options: { source: 'title' } },
        { name: 'summary', type: 'text' },
        { name: 'duration', type: 'string' },
        { name: 'published', type: 'date' },
        { name: 'audio', type: 'file', options: { accept: 'audio/*' } },
        { name: 'show', type: 'reference', to: [{ type: 'show' }] }
      ]
    },
    {
      name: 'scheduleSlot',
      title: 'Schedule Slot',
      type: 'document',
      fields: [
        { name: 'day', type: 'string' }, // e.g. 'today', 'monday'
        { name: 'time', type: 'string' },
        { name: 'title', type: 'string' },
        { name: 'presenter', type: 'string' },
        { name: 'order', type: 'number' },
        { name: 'show', type: 'reference', to: [{ type: 'show' }] }
      ]
    }
  ]
}
