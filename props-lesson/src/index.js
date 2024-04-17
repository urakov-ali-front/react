import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skillsData = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "orange",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "Node",
    level: "beginner",
    color: "green",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Info />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="me.jpg" alt="my-avatar" />;
}

function Info() {
  return (
    <div>
      <h1>Urakov Ali</h1>
      <p>I'm a good programmer</p>
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <li className="skill" style={{ backgroundColor: color }}>
      {skill}
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </li>
  );
}

//👍👶💪
function SkillList() {
  return (
    <ul className="skill-list">
      {skillsData.map((skill) => (
        <Skill
          skill={skill.skill}
          color={skill.color}
          level={skill.level}
          key={skill.name}
        />
      ))}
    </ul>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
