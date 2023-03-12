'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Contact() {
  const router = useRouter();

  return (
    <div>
      <h1>Contact page</h1>
      <Link href="/">Home</Link>
      <Link href={'/blog/some-title'}>Post</Link>
      <button onClick={() => router.push('/')}>Home</button>
    </div>
  );
}
