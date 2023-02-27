export default function User({ user }) {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <p>{user.phone}</p>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const userId = params.userId;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  const user = await res.json();
  return {
    props: {
      user,
    },
  };
}
