import React, { useState, useEffect } from "react";

export function Content({
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
    <div className="content">
      <p>Content</p>
    </div>
  );
}
