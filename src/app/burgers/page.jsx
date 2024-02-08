import Link from "next/link";
import Image from "next/image";
import { getBurgers } from "../api/requests";
import styles from "./page.module.css"


export default async function Burgers() {
  const burgers = await getBurgers()

  return (
    <div>
      <h1>Our burgers</h1>
      {burgers.map((burger) => {
        return (
          <Link
            href={`/burgers/${burger.id}`}
            key={burger.id}
            className={styles.burgerCard}
          >
            <div className={styles.imageContainer}>
              <Image
                src={burger.image}
                alt={burger.name}
                width="150"
                height="150"
              />
            </div>
            <div>
              <h3>{burger.name}</h3>
              <p>{burger.desc}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
