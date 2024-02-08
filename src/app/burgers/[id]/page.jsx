import Image from "next/image";
import styles from "./page.module.css"

export const dynamicParams = false;

export async function generateStaticParams() {
  const res = await fetch("https://raw.githubusercontent.com/Chaooohs/JSON-resume/master/fat-burgers.json");
  const data = await res.json();

  return data.items.map((burger) => {
    return {
      id: burger.id,
    };
  });
}

async function getDetails() {
  const res = await fetch("https://raw.githubusercontent.com/Chaooohs/JSON-resume/master/fat-burgers.json");
  const data = await res.json();

  return data.items;
}

export default async function Details({ params }) {
  const detail = await getDetails();
  const { id } = params;

  const burger = detail.find((el) => {
    if (id === el.id) {
      return el;
    }
  });

  return (
    <div className={styles.singleBurger}>
      <h1>{burger.name}</h1>
      <div className={styles.imageContainer}>
        <Image
          src={burger.image}
          alt={burger.name}
          width="422"
          height="422"
          priority={true}
        />
      </div>
      <p>{burger.desc}</p>
    </div>
  );
}
