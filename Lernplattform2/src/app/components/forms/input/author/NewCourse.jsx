import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

export function NewCourse({ courses, categories }) {
  return (
    <div className="newCourse">
      <p>Ein Author muss eingeloggt sein</p>
      <p>
        Kurs-kategorie wird ausgewählt ODER eine neue angelegt, Dropdown und
        Input
      </p>
      <p>Kursname wird erstellt - Input</p>
      <p>Kursbeschreibung - Input</p>
      <p>Autorname Output automatisch eingefügt</p>
      <p>
        Soll der Kurs veröffntlicht werden ODER vorerst nur für den Autor
        sichtbar sein
      </p>
      <p>
        Fertig - Button: Course-Objekt und leeres Task-Objekt wird erstellt
        WECHSEL zu Kurs-OutputForm
      </p>
      <p>
        Aufgaben hinzufügen-Button: Kurs-Objekt wird gelöscht bzw nicht erstellt
      </p>
      <p>Abbrechen: Kurs-Objekt wird gelöscht</p>
      <Container>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Actions
          </MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
          </MenuList>
        </Menu>
        <FormControl id="email" isRequired>
          <FormLabel>Email-Adresse</FormLabel>
          <Input />
        </FormControl>
      </Container>
    </div>
  );
}
