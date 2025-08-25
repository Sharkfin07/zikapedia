import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import { Link } from "@heroui/link";
import { ThemeSwitch } from "@/components/theme-switch";
import { ZikaLogo } from "@/components/icons";
import { useLocation } from "react-router-dom";

const useCurrentMenu = () => {
    const location = useLocation();
    switch (location.pathname) {
        case "/projects":
            return "projects";
        case "/skills":
            return "skills";
        default:
            return "etc";
    };
};

const defaultNavContentClass = "text-lg md:text-2xl";

export default function NavbarMain() {
    const ucm = useCurrentMenu();
    return (
        <Navbar shouldHideOnScroll>
            <NavbarBrand>
                <ZikaLogo />
            </NavbarBrand>
            <NavbarContent className="sm:flex gap-4 md:gap-6 w-{100%}" justify="center">
                <NavbarItem>
                    <Link color="foreground" className={defaultNavContentClass + (ucm === "skills" ? " font-bold" : "")} href="/skills">
                        Skills
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" className={defaultNavContentClass + (ucm === "projects" ? " font-bold" : "")} href="/projects">
                        Projects
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <ThemeSwitch />
            </NavbarContent>
        </Navbar>
    );
}
