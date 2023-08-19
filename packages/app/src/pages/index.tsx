import { api } from "~/utils/api";
import Banner from "~/components/banner/banner";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <main>
        <Banner />
      </main>
    </>
  );
}
