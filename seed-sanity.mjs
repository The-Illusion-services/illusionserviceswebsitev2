import { createClient } from 'next-sanity';

const client = createClient({
  projectId: 'lhkm6ysg',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: 'skVaIhARmh67W6tY1YL1dUGyKIT6ERV8Uf0BCqLG7FCw5dEY2vcaifMj0XYWCDFeAEq3npI55nJRpW06nFyVmDkDYjMwPd8bTmGxRRRKrCfLLmHTFOW9B1MV11Vw8S978nTaUdexBGywHPN80nXao0OQ7FE5y4F0dAD1ATmiw2EgD4ZzroL9',
});

async function seed() {
  console.log('Seeding starter categories...');
  const designCat = await client.createIfNotExists({
    _type: 'category',
    _id: 'cat-design',
    title: 'Design',
    description: 'Thoughts on visual systems and clarity.',
  });

  const strategyCat = await client.createIfNotExists({
    _type: 'category',
    _id: 'cat-strategy',
    title: 'Strategy',
    description: 'Notes on building and scaling products.',
  });

  console.log('Seeding starter posts...');
  await client.create({
    _type: 'post',
    title: 'The Art of the MVP',
    slug: { _type: 'slug', current: 'the-art-of-the-mvp' },
    publishedAt: new Date().toISOString(),
    categories: [{ _type: 'reference', _ref: 'cat-strategy' }],
    tags: ['Product', 'Startup'],
    body: [
      {
        _type: 'block',
        children: [{ _type: 'span', text: 'Shipping fast is a skill. But shipping with clarity is a superpower. An MVP isn\'t just a broken version of your vision—it\'s the purest version of it.' }],
        markDefs: [],
        style: 'normal',
      }
    ],
  });

  await client.create({
    _type: 'post',
    title: 'Why Typography Matters',
    slug: { _type: 'slug', current: 'why-typography-matters' },
    publishedAt: new Date().toISOString(),
    categories: [{ _type: 'reference', _ref: 'cat-design' }],
    tags: ['Design', 'Systems'],
    body: [
      {
        _type: 'block',
        children: [{ _type: 'span', text: 'Typography is the voice of your product. If you get it right, the interface becomes invisible and the content takes center stage.' }],
        markDefs: [],
        style: 'normal',
      }
    ],
  });

  console.log('Seed complete.');
}

seed().catch(console.error);
