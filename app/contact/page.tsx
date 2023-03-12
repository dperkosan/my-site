import Link from 'next/link';

export default function Contact() {
  return (
    <div>
      <h1>Contact page</h1>
      <Link href="/">Home</Link>
      <Link href={'/blog/some-title'}>Post</Link>
    </div>
  );
}
