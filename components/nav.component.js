import Link from 'next/link';

const Nav = () => {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>      
    </div>
  )
}

export default Nav;