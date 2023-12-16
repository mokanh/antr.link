import { Link as RouterLink } from "react-router-dom";
import { HStack, Link, StackDivider, Text } from "@chakra-ui/react";

type NavLinkProps = { text: string };

const NavLink = ({ text }: NavLinkProps) => (
  <Link>
    <Text fontSize="xl">{text}</Text>
  </Link>
);

const Navbar = () => (
  <HStack position={'absolute'} spacing={3} divider={<StackDivider />} as="nav">
    <RouterLink to="/">
      <NavLink text="Home" />
    </RouterLink>
    <RouterLink to="/about">
      <NavLink text="About" />
    </RouterLink>
  </HStack>
);

export default Navbar;
