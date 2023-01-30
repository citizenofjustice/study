import Link from "next/link";

function NewsPage() {
  return (
    <>
      <ul>
        <li>
          <Link href="/news/nextjs-is-a-great-framework">NextJS is great!</Link>
        </li>
        <li>Some text</li>
      </ul>
    </>
  );
}

export default NewsPage;
