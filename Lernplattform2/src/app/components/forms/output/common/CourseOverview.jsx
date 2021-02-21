import React, { useEffect, useState } from "react";
import {
  LinkBox,
  LinkOverley,
  Container,
  Link,
  Select,
  Text,
  Box,
  SimpleGrid,
  Menu,
  MenuButton,
  categoryOptionListe,
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
  Divider,
} from "@chakra-ui/react";
import { getUserNameByID } from "../../../../services/mapServices";

export function CourseOverview({ categories, courses, setTabIndex, accounts }) {
  const [category, setCategory] = useState({ name: "", id: 0 });
  const [categoryOptionListe, setCategoryOptionListe] = useState([]);
  const [courseButtonList, setCourseButtonList] = useState([]);

  useEffect(() => {
    {
      if (categories) {
        setCategoryOptionListe(
          categories.map((item) => {
            return (
              <option
                id={item.id}
                key={item.id}
                value={item.name}
                onClick={({ target }) =>
                  setCategory({ name: target.value, id: target.id })
                }
              >
                {item.name}
              </option>
            );
          })
        );
      }
    }
  }, [categories]);
  useEffect(() => {
    if (courses && category) {
      setCourseButtonList(
        courses.map((item) => {
          if (item.category == category.id) {
            return (
              <Box
                key={item.id}
                className="courseButton"
                border="1px solid grey"
                borderRadius="0.2em"
                padding="0.3em"
                marginTop="0.5em"
              >
                <Link
                  className="courseButton"
                  onClick={() => {
                    setTabIndex(1);
                  }}
                >
                  <Box
                    sx={{
                      ".courseButton:hover &": {
                        cursor: "pointer",
                        backgroundColor: "#EDF2F7",
                      },
                    }}
                  >
                    <Text fontSize="3xl">{item.name}</Text>
                    <Text fontSize="md">{item.description}</Text>
                    <Text fontSize="sm">
                      Autor: {getUserNameByID(accounts, item.author)}
                    </Text>
                  </Box>
                </Link>
              </Box>
            );
          }
        })
      );
    }
  }, [category]);
  return (
    <div className="courseOverview">
      <Select placeholder="wähle eine Kategorie" marginBottom="0.5em">
        {categoryOptionListe}
      </Select>
      <Divider orientation="horizontal" variant="solid" />
      <SimpleGrid columns={2} spacing={10}>
        {courseButtonList}
      </SimpleGrid>
    </div>
  );
}
