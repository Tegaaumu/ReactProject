// import React from "react";
// import ReactDOM from "react-dom/client";

// const skills = [
//   {
//     skill: "HTML+CSS",
//     level: "advanced",
//     color: "#2662EA",
//   },
//   {
//     skill: "JavaScript",
//     level: "advanced",
//     color: "#EFD81D",
//   },
//   {
//     skill: "Web Design",
//     level: "advanced",
//     color: "#C3DCAF",
//   },
//   {
//     skill: "Git and GitHub",
//     level: "intermediate",
//     color: "#E84F33",
//   },
//   {
//     skill: "React",
//     level: "advanced",
//     color: "#60DAFB",
//   },
//   {
//     skill: "Svelte",
//     level: "beginner",
//     color: "#FF3B00",
//   },
// ];

// function App() {
//   const style = { border: "3px solid black", width: "400px", height: "auto" };
//   return (
//     <div style={style}>
//       {/* <h2>We place our component here</h2> */}
//       <ImageSection />
//       <Content
//         tilte="Jonas Schmedtmann"
//         content="I can write long sentences so i had to do this instead repeatedly.I can write long sentences so i had to do this instead repeatedly.I can write long sentences so i had to do this instead repeatedly.I can write long sentences so i had to do this instead repeatedly.I can write long sentences so i had to do this instead repeatedly."
//       />
//       <AllUniqueTitle />
//     </div>
//   );
// }

// function ImageSection() {
//   return (
//     <div style={{ width: "100%" }}>
//       <img
//         style={{ width: "400px", backgroundSize: "contain" }}
//         src="pizzas/funghi.jpg"
//         alt="Developer Name"
//       />
//     </div>
//   );
// }

// function Content(props) {
//   return (
//     <div style={{ padding: "30px" }}>
//       <h1>{props.tilte}</h1>
//       <p>{props.content}</p>
//     </div>
//   );
// }
// function AllUniqueTitle() {
//   const listOfSkills = skills;
//   return (
//     <div style={{ padding: "0px 30px" }}>
//       {/* <UniqueTitle title="HTML+CSS" emoji="🧵" color="#123456" />
//       <UniqueTitle title="React" emoji="💪" color="orangered" />
//       <UniqueTitle title="Javascript" emoji="🤩" color="yellow" />
//       <UniqueTitle title="Svelte" emoji="🤔" color="orange" /> */}
//       {listOfSkills &&
//         listOfSkills.map((skill) => (
//           <UniqueTitle
//             skill={skill.skill}
//             color={skill.color}
//             level={skill.level}
//             key={skill.skill}
//           />
//         ))}
//     </div>
//   );
// }

// function UniqueTitle({ skill, color, level }) {
//   // const color = {props.color};
//   // style={{
//   //   backgroundColor: "red",
//   //   padding: "7px",
//   //   borderRadius: "5px",
//   //   marginLeft: "10px",
//   // }}
//   //   let emoji = null;
//   //   if (PropsSkills.level == "advanced") {
//   //     emoji = "💪";
//   //   } else if (PropsSkills.level == "intermediate") {
//   //     emoji = "👍";
//   //   } else {
//   //     emoji = "👶";
//   //   }
//   return (
//     <div
//       style={{
//         display: "inline-block",
//         padding: "7px",
//         marginLeft: "10px",
//         marginBottom: "10px",
//         borderRadius: "5px",
//         backgroundColor: color,
//       }}
//     >
//       <span style={{ marginRight: "10px" }}>{skill}</span>
//       <span>
//         {/* {emoji} */}
//         {level === "advanced" && "💪"}
//         {level === "intermediate" && "👍"}
//         {level === "beginner" && "👶"}
//       </span>
//     </div>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// );
