import { useRouter } from "next/router";

function DetailPage() {
  const router = useRouter();

  const newsId = router.query.newsId;
  // we could send request to the backend API
  // to fetch the news items with newsId

  return <h1>The detail page</h1>;
}

export default DetailPage;
