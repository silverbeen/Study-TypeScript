import fetch from "isomorphic-unfetch";

const name = ({ user, time }) => {
  const userName = user && user.name;

  return (
    <>
      {userName}
      {time}
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  try {
    const res = await fetch(`https://api.github.com/users/${params.name}`);
    //const user = await res.json();
    if (res.status === 200) {
      const user = await res.json();
      return { props: { user, time: new Date().toISOString } };
    }
    return { props: { time: new Date().toISOString } };
  } catch (e) {
    console.log(e);
    return { props: { time: new Date().toISOString } };
  }
};

export async function getStaticPaths() {
  return {
    paths: [{ params: { name: "silverbeen" } }],
    fallback: true,
  };
}

export default name;
