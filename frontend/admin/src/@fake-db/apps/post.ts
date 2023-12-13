import { Article } from 'src/types/common/article.type'

const posts: Article[] = [
  {
    id: 1,
    slug: 'react-1',
    title: 'react',
    description: 'react',
    body: 'node',
    authorId: 1,
    likes: [1, 2, 3, 4]
  },
  {
    id: 2,
    slug: 'vue-2',
    title: 'vue',
    description: 'vue',
    body: 'The Progressive JavaScript Framework',
    authorId: 2
  },
  {
    id: 3,
    slug: 'oki-3',
    title: 'oki',
    description: 'react',
    body: 'new',
    authorId: 3
  },
  {
    id: 4,
    slug: 'hi-3',
    title: 'new react frame work',
    description: 'framework',
    body: ' Next.js enables you to create full-stack Web applications by extending the latest React features',
    authorId: 3
  },
  {
    id: 5,
    slug: 'nguyen-thi-linh-3',
    title: 'Break new',
    description: 'new post',
    body: 'The ADP system is down',
    authorId: 3
  },
  {
    id: 6,
    slug: "What's-in-Next.js-4",
    title: "What's in Next.js?",
    description: 'All the tools you need to make the Web. Faster.',
    body: 'Built on a foundation of fast, production-grade tooling',
    authorId: 4
  },
  {
    id: 7,
    slug: 'Image-Optimization-5',
    title: 'Image Optimization',
    description: 'Size Optimization',
    body: 'Automatically serve correctly sized images for each device, using modern image formats like WebP and AVIF.',
    authorId: 5
  },
  {
    id: 8,
    slug: 'Lazy-load-5',
    title: 'Lazy load',
    description: 'Lazy',
    body: 'When it’s released, React 18 will include out-of-the-box improvements (like [automatic batching](https://github.com/reactwg/react-18/discussions/21)), new APIs (like [`startTransition`]',
    authorId: 5
  },
  {
    id: 9,
    slug: 'New-post-react-5',
    title: 'New post react',
    description: 'react new',
    body: 'For more information on upgrading to React 18, or additional resources about the release, see the [React 18 announcement post](https://github.com/reactwg/react-18/discussions/4).',
    authorId: 5
  },
  {
    id: 10,
    slug: 'React-18-Alpha-5',
    title: 'React 18 Alpha',
    description: 'React 18 Alpha',
    body: '## How to try React 18 Alpha today {/*how-to-try-react-18-alpha-today*/}nNew alphas are [regularly published to npm using the `@alpha` tag](https://github.com/reactwg/react-18/discussions/9).',
    authorId: 5
  },
  {
    id: 11,
    slug: 'Data-Fetching-5',
    title: 'Data Fetching',
    description: 'Data Fetching, Caching, and Revalidating',
    body: 'Data fetching is a core part of any application. This page goes through how you can fetch, cache, and revalidate data in React and Next.js.',
    authorId: 5
  }
]

export const findPostsById = (userId: number) => {
  return posts.filter(post => post.authorId == userId)
}
