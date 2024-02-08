import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <h1 className={`${styles.title} ${styles.fire}`}>Home Page</h1>
      <div className={styles.mainImage}>
        <Image src="/fatburger.png" alt="fat burger" width={400} height={300} priority={true}/>
      </div>
      <p className={styles.text}>
        Что такое идеальный бургер? Лист свежего салата, мягкие булочки, сочное мясо. О других составляющих начинки можно поспорить, ведь это дело вкуса.
      </p>
      <p className={styles.text}>
        Есть ещё пара-тройка факторов, влияющих на аппетит: цены, качество обслуживания, правильная атмосфера заведения.
      </p>
      <Link href="/burgers" className={styles.btn}>All burgers</Link>
    </main>
  );
}
