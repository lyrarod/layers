"use client";

import { useState } from "react";

import { navLinks } from ".";
import { NavMenu } from "./NavMenu";
import { LucideLayers } from "lucide-react";
import { ThemeSwitch } from "../theme-switch";
import { Button } from "../ui/button";

import { Link } from "react-scroll";

export function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen((prevState) => !prevState);

    menuIsOpen
      ? (document.body.style.overflowY = "auto")
      : (document.body.style.overflowY = "hidden");
  };

  return (
    <header className="fixed top-0 z-50 flex h-20 w-full border-b bg-background/75 backdrop-blur-md md:h-24">
      <div className="container flex items-center justify-between">
        <div
          onClick={() => {
            setMenuIsOpen(false);
            document.body.style.overflowY = "auto";
          }}
        >
          <a href="#" className="cursor-default md:cursor-pointer">
            <strong className="flex items-center gap-x-2 text-2xl md:gap-x-3 md:text-3xl">
              <LucideLayers className="h-8 w-8 text-primary md:h-10 md:w-10" />
              Layers
            </strong>
          </a>
        </div>

        <nav className="hidden md:flex">
          <ul className="flex gap-x-8">
            {navLinks.map(([name, target]) => {
              const nameFormatted = name !== "contact" && name;
              return (
                <li key={name}>
                  <Link
                    to={target}
                    href={`#`}
                    spy={true}
                    hashSpy={true}
                    offset={0}
                    activeClass="active"
                    className="pb-1 text-sm font-medium uppercase tracking-widest transition hover:border-b hover:border-primary hover:text-primary"
                  >
                    {nameFormatted}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-x-4">
          <span className="hidden md:block">
            <ThemeSwitch />
          </span>
          <a href="#contact" className="hidden md:block">
            <Button size={"default"}>Contact</Button>
          </a>
          <NavMenu
            menuIsOpen={menuIsOpen}
            setMenuIsOpen={setMenuIsOpen}
            toggleMenu={toggleMenu}
          />
        </div>
      </div>
    </header>
  );
}
