import React from "react";
import "./Styles/Git.css";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
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
        <GitHubCalendar
          username="Mohammadzaki0027"
          year={new Date().getFullYear()}
          blockSize={10}
        >
          <ReactTooltip delayShow={20} html />
        </GitHubCalendar>
        <h1>Streak</h1>

        <img
          src="https://github-readme-streak-stats.herokuapp.com?user=Mohammadzaki0027&theme=dark"
          alt=""
        />
        <h1>Statics</h1>
        <img
          src="https://github-readme-stats.vercel.app/api?username=Mohammadzaki0027&theme=highcontrast&show_icons=true"
          alt=""
        />
        <h1>Language Used</h1>
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=Mohammadzaki0027"
          alt=""
        />
      </div>
    </div>
  );
};

export default Gitcale;
