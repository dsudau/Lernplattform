import React, { useEffect, useState } from "react";
import {
  Container,
  Box,
  SimpleGrid,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Icon,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
  ChevronDownIcon,
} from "@chakra-ui/react";

export function CourseOverview({ categories, courses }) {
  const [category, setCategory] = useState("wähle ein Kategorie");
  const [course, setCourse] = useState("");
  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    {
      if (categories) {
        setMenuList(
          categories.map((item) => {
            return (
              <MenuItem
                key={item.id}
                value={item.name}
                onClick={({ target }) => setCategory(target.value)}
              >
                {item.name}
              </MenuItem>
            );
          })
        );
      }
    }
  }, [categories]);
  return (
    <div className="courseOverview">
      <Menu autoSelect>
        <MenuButton as={Button}>{category}</MenuButton>
        <MenuList>{menuList}</MenuList>
      </Menu>
      <SimpleGrid columns={2} spacing={10}>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
      </SimpleGrid>
    </div>
  );
}
