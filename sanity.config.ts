import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './src/sanity/schema'

export default defineConfig({
  name: 'default',
  title: 'Illusion Services Studio',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'lhkm6ysg',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  basePath: '/studio',

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
})
