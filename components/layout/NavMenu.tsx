import { navLinks } from ".";
import { LucideMenu, LucideX } from "lucide-react";

type NavMenuProps = {
  menuIsOpen: boolean;
  toggleMenu: () => void;
};

export function NavMenu({ menuIsOpen, toggleMenu }: NavMenuProps) {
  const icon = !menuIsOpen ? (
    <LucideMenu className="h-8 w-8 cursor-default md:cursor-pointer" />
  ) : (
    <LucideX className="h-8 w-8 cursor-default md:cursor-pointer" />
  );

  return (
    <div onClick={toggleMenu} className="relative flex md:hidden">
      {icon}
      <nav
        className={`${
          menuIsOpen
            ? "visible right-0 top-10 opacity-100 duration-150"
            : "invisible right-0 top-0 opacity-0 duration-150"
        } absolute -z-10 rounded border bg-background`}
      >
        <ul className="flex flex-col gap-y-4 p-8 capitalize tracking-wider">
          {navLinks.map(([name, target]) => {
            return (
              <li key={name} className="border-b hover:text-primary">
                <a href={`#${target}`}>{name}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
