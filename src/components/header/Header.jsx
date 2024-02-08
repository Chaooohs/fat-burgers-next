import Link from "next/link"
import { BurgerIcon } from "../burger/BurgerIcon"
import { SiBurgerking } from "react-icons/si";

export const Header = () => {
  return (
    <header>
      <Link href="/">
        <SiBurgerking />
      </Link>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/reviews">Reviews</Link>
        <Link href="/burgers">Burgers</Link>
      </nav>
    </header>
  )
}