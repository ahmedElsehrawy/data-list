import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          perspiciatis quod molestias sapiente veniam iste, facere illo vero sit
          quam voluptates ullam ex culpa unde provident debitis vel eum eius?
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          reiciendis nostrum esse ducimus voluptatibus quae harum accusantium
          cumque? Iure quasi minus velit ratione culpa itaque omnis consequatur,
          maiores ab quod!
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>see ninja listing</a>
        </Link>
      </div>
    </>
  );
}
