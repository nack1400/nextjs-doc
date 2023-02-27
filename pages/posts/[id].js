export default function Post({  }) {
  return <div> {} test </div>;
}

// 빌드 시에 static하게 생성할 페이지를 정함
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://www.mocky.io/v3/a62fa770-9bff-4839-be5c-a203317898e0')
  const posts = await res.json();
  const objs = posts.books;

  // console.log(obj[0]);
  // const paths = posts.map((obj) => ({
  //   params: { id: obj.bookId },
  // }))

  // const paths = [{
  //   params: { id: obj.bookId },
  // }];

  const paths = objs.map((obj) => ({
    params: { id: obj.bookId.toString() },
  }));
  // console.log(paths);

  return { paths, fallback: true }
}

// 빌드 시 데이터를 fetch하여 static페이지를 생성
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`https://www.mocky.io/v3/a62fa770-9bff-4839-be5c-a203317898e0`);
  const posts = await res.json();
  const obj = posts.books[params.id];
  const json = {bookId: '101', title: 'API test 01', author: 'John Doe'}
  console.log('obj : ', obj);
  console.log('posts : ', posts);
  console.log('json : ', json);
  console.log('typeof(json) : ', typeof(json));
  // Pass post data to the page via props
  return { props: { json, } }
}