import React, { useState, useEffect } from "react";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { LoginInputForm } from "./forms/input/common/LoginInputForm";
import { RegisterInputForm } from "./forms/input/common/RegisterInputForm";
import { CourseOverview } from "./forms/output/common/CourseOverview";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Container,
  Heading,
  Link,
} from "@chakra-ui/react";
import { getUserNameByID } from "../services/mapServices";
export function Header({
  roles,
  accounts,
  categories,
  courses,
  tasks,
  answerTypes,
  answers,
  choiceAnswers,
  textAnswers,
  subscriptions,
  progresses,
  answersByStudent,
  corrections,
  gradings,
  loggedInAccount,
  setLoggedInAccount,
  setNewServerData,
}) {
  const [tabIndex, setTabIndex] = useState(0);
  function handleTabIndex(index) {
    setTabIndex(index);
  }
  return (
    <div className="header">
      <Container minW="80%">
        {!loggedInAccount ? (
          <React.Fragment>
            <Heading ts="2em">Willkommen auf der Lernplattform</Heading>
            <Tabs index={tabIndex}>
              <TabList>
                <Tab
                  fontSize="1.5em"
                  onClickCapture={() => {
                    setTabIndex(0);
                  }}
                >
                  Kurs-Angebot
                </Tab>
                <Tab
                  fontSize="1.5em"
                  onClickCapture={() => {
                    setTabIndex(1);
                  }}
                >
                  Anmelden
                </Tab>
                <Tab
                  fontSize="1.5em"
                  onClickCapture={() => {
                    setTabIndex(2);
                  }}
                >
                  Registrieren
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <CourseOverview
                    courses={courses}
                    categories={categories}
                    accounts={accounts}
                    setTabIndex={(index) => {
                      handleTabIndex(index);
                    }}
                  />
                </TabPanel>
                <TabPanel>
                  <LoginInputForm
                    accounts={accounts}
                    setLoggedInAccount={(userName) => {
                      setLoggedInAccount(userName);
                    }}
                    setTabIndex={(index) => {
                      handleTabIndex(index);
                    }}
                  />
                </TabPanel>
                <TabPanel>
                  <RegisterInputForm
                    roles={roles}
                    accounts={accounts}
                    setTabIndex={(index) => {
                      handleTabIndex(index);
                    }}
                    setNewServerData={(name, data) => {
                      setNewServerData(name, data);
                    }}
                  />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Heading ts="2em" display="inline">
              Willkommen auf der Lernplattform,{" "}
              {getUserNameByID(accounts, loggedInAccount)}{" "}
            </Heading>
            <Link
              fontSize="1"
              onClick={() => {
                setLoggedInAccount(null);
              }}
            >
              (ausloggen)
            </Link>
            <Tabs>
              <TabList>
                <Tab fontSize="1.5em">Kurs-Angebot</Tab>
                <Tab fontSize="1.5em">Meine Kurse</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Content
                    roles={roles}
                    accounts={accounts}
                    categories={categories}
                    courses={courses}
                    tasks={tasks}
                    answerTypes={answerTypes}
                    answers={answers}
                    choiceAnswers={choiceAnswers}
                    textAnswers={textAnswers}
                    subscriptions={subscriptions}
                    progresses={progresses}
                    answersByStudent={answersByStudent}
                    corrections={corrections}
                    gradings={gradings}
                  />
                </TabPanel>
                <TabPanel>
                  <Content
                    roles={roles}
                    accounts={accounts}
                    categories={categories}
                    courses={courses}
                    tasks={tasks}
                    answerTypes={answerTypes}
                    answers={answers}
                    choiceAnswers={choiceAnswers}
                    textAnswers={textAnswers}
                    subscriptions={subscriptions}
                    progresses={progresses}
                    answersByStudent={answersByStudent}
                    corrections={corrections}
                    gradings={gradings}
                  />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </React.Fragment>
        )}
        <Footer />
      </Container>
    </div>
  );
}
