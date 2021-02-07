import React, { useState, useEffect } from "react";
import { Content } from "./Content";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";

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
}) {
  console.log(
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
    gradings
  );
  return (
    <div className="header">
      <Container maxW="xl" centerContent>
        <Tabs>
          <TabList>
            <Tab>Meine Kurse</Tab>
            <Tab>Kurs-Angebot</Tab>
            <Tab></Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Content />
            </TabPanel>
            <TabPanel>
              <Content />
            </TabPanel>
            <TabPanel>
              <Content />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </div>
  );
}
