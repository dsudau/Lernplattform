import React, { useState, useEffect } from "react";

export function Content(props) {
  const date = new Date();
  const datum = new Date(date.setMonth(date.getMonth() + 8));
  const neuesDatum = JSON.stringify(datum);
  return (
    <div className="content">
      <p>{neuesDatum}</p>
    </div>
  );
}
