import React, { useEffect, useState } from "react";
import { validateEmail } from "../../../../services/dataServices";
import {
  FormControl,
  FormLabel,
  Container,
  Input,
  Button,
  Center,
  Radio,
  RadioGroup,
  Stack,
  Link,
  Text,
} from "@chakra-ui/react";
import {
  isUserNameExisting,
  isEmailExisting,
  getRoleIDByRoleName,
  getNewID,
} from "../../../../services/mapServices";
export function RegisterInputForm({
  roles,
  accounts,
  setTabIndex,
  setNewServerData,
}) {
  const [email, setEmail] = useState("");
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [role, setRole] = useState("");
  const [newAccount, setNewAccount] = useState(null);
  const isInvalid =
    email == "" ||
    userName == "" ||
    password == "" ||
    passwordConfirm == "" ||
    password !== passwordConfirm ||
    role == "" ||
    email == "E-Mail-Adresse existiert bereits!" ||
    userName == "Benutzername existiert bereits!";

  function handleRegister(event) {
    let isEmail = true;
    let isUserName = true;
    let isPassword = true;
    event.preventDefault();
    if (!validateEmail(email)) {
      setEmail("");
      isEmail = false;
    }
    if (password !== passwordConfirm) {
      setPassword("");
      setPasswordConfirm("");
      isPassword = false;
    }
    if (isEmailExisting(accounts, email)) {
      setEmail("E-Mail-Adresse existiert bereits!");
      isEmail = false;
    }
    if (isUserNameExisting(accounts, userName)) {
      setUsername("Benutzername existiert bereits!");
      isUserName = false;
    }

    if (isUserName && isEmail && isPassword) {
      setNewAccount({
        id: getNewID(accounts),
        name: userName,
        email: email,
        password: password,
        role: getRoleIDByRoleName(roles, role),
      });
      setEmail("");
      setUsername("");
      setPassword("");
      setPasswordConfirm("");
      setRole("");
    }
  }
  useEffect(() => {
    if (newAccount) {
      console.log(newAccount);
      setNewServerData("accounts", newAccount);
      setTabIndex(2);
    }
  }, [newAccount]);
  return (
    <div className="registerInputForm">
      <Container>
        <FormControl id="email" isRequired>
          <FormLabel>E-Mail-Adresse</FormLabel>
          <Input
            type="email"
            placeholder="E-Mail-Adresse"
            onChange={({ target }) =>
              setEmail(String(target.value).toLowerCase())
            }
            value={email}
          />
        </FormControl>
        <FormControl id="userName" isRequired>
          <FormLabel>Benutzername</FormLabel>
          <Input
            type="text"
            placeholder="Benutzername"
            onChange={({ target }) => setUsername(target.value)}
            value={userName}
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Passwort</FormLabel>
          <Input
            type="password"
            placeholder="Passwort"
            onChange={({ target }) => setPassword(target.value)}
            value={password}
          />
        </FormControl>
        <FormControl id="passwordConfirm" isRequired>
          <FormLabel>Passwort</FormLabel>
          <Input
            type="password"
            placeholder="Passwort bestätigen"
            onChange={({ target }) => setPasswordConfirm(target.value)}
            value={passwordConfirm}
          />
        </FormControl>
        <RadioGroup>
          <Stack direction="row">
            <Radio
              value="student"
              onChange={({ target }) => setRole(target.value)}
            >
              Student
            </Radio>
            <Radio
              value="author"
              onChange={({ target }) => setRole(target.value)}
            >
              {" "}
              Kursleiter
            </Radio>
          </Stack>
        </RadioGroup>
        <Center padding="2">
          <Button
            size="lg"
            type="submit"
            onClick={handleRegister}
            disabled={isInvalid}
          >
            Registrieren
          </Button>
          <Text ml="2em">
            Bereits einen Account?{" "}
            <Link color="teal.500" onClick={() => setTabIndex(1)}>
              Anmelden!
            </Link>
          </Text>
        </Center>
      </Container>
    </div>
  );
}
