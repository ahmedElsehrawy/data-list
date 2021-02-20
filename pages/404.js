import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      //router.replace("/");
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="not-found">
      <h1>Oooops...</h1>
      <h2>that page cannot be found</h2>
      <p>
        go back to the
        <Link href="/">
          <a> Home Page</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
