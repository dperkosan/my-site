const delay = (time: number) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(1), time);
  });

const getData = async (slug: string) => {
  const post = await delay(5000);
  return { slug };
};

export default async function BlogPost({ params }) {
  const { slug } = params;
  const post = await getData(slug);
  return <div>{post.slug}</div>;
}
