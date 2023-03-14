export default function getStaticParams() {
  // this is to know what to prerender in post
  return [{ slug: 'learn-to-code' }, { slug: 'angular-vs-react' }];
}
