import React from "react";
import "./Styles/Git.css";

const Gitcale = () => {
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 6;

    return contributions.filter((day) => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };
  return (
    <div className="gitdiv" id="git">
      <h1>Github Info</h1>
      <div className="calendar">
        <h1>Graph</h1>
        <img src="graph.jpg" alt="" />
        <h1>Streak</h1>

        <img src="str.jpg" alt="" />
        <h1>Statics</h1>
        <img src="sta.jpg" alt="" />
        <h1>Language Used</h1>
        <img src="language.jpg" alt="" />
      </div>
    </div>
  );
};

export default Gitcale;
