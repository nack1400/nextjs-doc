export default function Post({ post }) {
  return <> 
    id : {post.id}<br />
    name : {post.name} <br />
    username : {post.username}
  </>;
}

// 빌드 시에 static하게 생성할 페이지를 정함
export async function getStaticPaths() {
  // When this is true (in preview environments) don't
  // prerender any static pages
  // (faster builds, but slower initial page load)
  if (process.env.SKIP_BUILD_STATIC_GENERATION) {
    return {
      paths: [],
      fallback: 'blocking',
    }
  }
  
  // Call an external API endpoint to get posts
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await res.json();
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
}

// 빌드 시 데이터를 fetch하여 static페이지를 생성
export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const post = await res.json();
  return { props: { post } };
}
