import React from "react";
import Image from "next/image";
import Link from "next/link";
// import './header.css';

const Header = () => {
  return (
    <div className="main-menu">
      <Image
        src="/log.png"
        alt="Picture of the author"
        width={60}
        height={50}
      />
      <ul>
        <Link href="/">
          <li >ГЛАВНАЯ</li>
        </Link>
        <Link href="/shop">
          <li>АВТОМОБИЛИ</li>
        </Link>
        <Link href="/info">
          <li>МИР MAZDA</li>
        </Link>
        <Link href="/account">
          <li>ЛИЧНЫЙ КАБИНЕТ</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
