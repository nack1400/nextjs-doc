export default function Blog({ posts }) {
  return (
    <ul>
      {/* {posts.map((post) => (
        <li>{post.title}</li>
      ))} */}
      { posts.storeId }
    </ul>
  )
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://www.mocky.io/v3/a62fa770-9bff-4839-be5c-a203317898e0')
  const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}