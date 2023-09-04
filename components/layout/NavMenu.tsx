import { useEffect } from "react";
import { navLinks } from ".";
import { Link } from "react-scroll";
import { LucideMenu, LucideX } from "lucide-react";
import { ThemeSwitch } from "../theme-switch";

type NavMenuProps = {
  menuIsOpen: boolean;
  setMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleMenu: () => void;
};

export function NavMenu({
  menuIsOpen,
  setMenuIsOpen,
  toggleMenu,
}: NavMenuProps) {
  useEffect(() => {
    const mediaQueryList = window.matchMedia(`(min-width:768px)`);

    const handleChange = ({ matches }: MediaQueryListEvent) => {
      if (matches) {
        setMenuIsOpen(false);
        document.body.style.overflowY = "auto";
      }
      // return console.log("matches:", matches);
    };

    mediaQueryList.addEventListener("change", handleChange);

    return () => {
      mediaQueryList.removeEventListener("change", handleChange);
    };
  }, []);

  const icon = !menuIsOpen ? (
    <LucideMenu className="h-8 w-8 cursor-default md:cursor-pointer" />
  ) : (
    <LucideX className="h-8 w-8 cursor-default md:cursor-pointer" />
  );

  return (
    <div className={`relative flex md:hidden`}>
      <span onClick={toggleMenu}>{icon}</span>
      <nav
        className={`${
          menuIsOpen
            ? "visible right-1/2 top-8 origin-top-right scale-100 opacity-100 duration-300"
            : "invisible right-1/2 top-8 origin-top-right scale-0 opacity-0 duration-300"
        } absolute -z-10 min-h-full rounded border bg-background p-10`}
      >
        <ul className="flex flex-col gap-y-4">
          <ThemeSwitch />

          {navLinks.map(([name, target]) => {
            return (
              <li key={name} className="hover:text-primary">
                <Link
                  to={target}
                  href="#"
                  spy={true}
                  hashSpy={true}
                  onClick={toggleMenu}
                  activeClass="active"
                  className="text-sm font-semibold uppercase tracking-widest"
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
