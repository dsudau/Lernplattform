import React, { useState } from "react";
import { validateEmail } from "../../../../services/dataServices";
import {
  isUserNameExisting,
  isEmailExisting,
  isPasswordExistingByUserName,
  isPasswordExistingByEmail,
  getIDByUserNameAndPassword,
  getIDByEmailAndPassword,
  setTabIndex,
} from "../../../../services/mapServices";
import {
  FormControl,
  FormLabel,
  Container,
  Input,
  Button,
  Center,
  Link,
  Text,
} from "@chakra-ui/react";
export function LoginInputForm({ accounts, setLoggedInAccount, setTabIndex }) {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const isInvalid = password == "";
  function handleLogin() {
    let readyToLogin = true;
    let isEmail = false;
    let isUserName = false;
    if (!validateEmail(email)) {
      readyToLogin = false;
    } else {
      if (!isEmailExisting(accounts, email)) {
        readyToLogin = false;
      } else {
        isEmail = true;
      }
    }
    if (!isUserNameExisting(accounts, userName)) {
      readyToLogin = false;
    } else {
      isUserName = true;
    }
    if (isEmail || isUserName) {
      readyToLogin = true;
      let userid = 0;
      if (isEmail) {
        if (isPasswordExistingByEmail(accounts, email, password)) {
          userid = getIDByEmailAndPassword(accounts, email, password);
        } else {
          setPassword("");
          readyToLogin = false;
        }
      } else {
        if (isPasswordExistingByUserName(accounts, userName, password)) {
          userid = getIDByUserNameAndPassword(accounts, userName, password);
        } else {
          setPassword("");
          readyToLogin = false;
        }
      }
      setLoggedInAccount(userid);
    } else {
      setEmail("");
      setUserName("");
    }
  }
  return (
    <div className="loginInputForm">
      <Container>
        <FormControl id="email">
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
        <FormControl id="userName">
          <FormLabel>oder Benutzername</FormLabel>
          <Input
            type="text"
            placeholder="Benutzername"
            onChange={({ target }) => setUserName(target.value)}
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
        <Center padding="2">
          <Button size="lg" onClick={handleLogin} disabled={isInvalid}>
            Login
          </Button>
          <Text ml="2em">
            Noch keine Account?{" "}
            <Link color="teal.500" onClick={() => setTabIndex(2)}>
              Registrieren!
            </Link>
          </Text>
        </Center>
      </Container>
    </div>
  );
}
