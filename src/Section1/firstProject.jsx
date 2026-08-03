// import React from "react";
// import ReactDOM from "react-dom/client";

// function App() {
//   const style = { border: "3px solid black", width: "400px", height: "800px" };
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
//   return (
//     <div style={{ padding: "0px 30px" }}>
//       <UniqueTitle title="HTML+CSS" emoji="🧵" color="#123456" />
//       <UniqueTitle title="React" emoji="💪" color="orangered" />
//       <UniqueTitle title="Javascript" emoji="🤩" color="yellow" />
//       <UniqueTitle title="Svelte" emoji="🤔" color="orange" />
//     </div>
//   );
// }

// function UniqueTitle(props) {
//   // const color = {props.color};
//   // style={{
//   //   backgroundColor: "red",
//   //   padding: "7px",
//   //   borderRadius: "5px",
//   //   marginLeft: "10px",
//   // }}

//   return (
//     <div
//       style={{
//         display: "inline-block",
//         padding: "7px",
//         marginLeft: "7px",
//         borderRadius: "5px",
//         backgroundColor: props.color,
//       }}
//     >
//       <span style={{ marginRight: "10px" }}>{props.title}</span>
//       <span>{props.emoji}</span>
//     </div>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// );
