import { useRouter } from "next/router"; // 쿼리 스트링을 사용하기 위한 훅

export default function Page() {
  const router = useRouter();
  const { q } = router.query;
  return <h1>Search {q}</h1>;
}
