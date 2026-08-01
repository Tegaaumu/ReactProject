import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      {/* <h1>Hello React!!!</h1> */}
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  //   const bestWayOut = {
  //     color: "red",
  //     fontSize: "40px",
  //     textTransform: "uppercase",
  //   };

  const bestWayOut = {};
  return (
    <header className="header">
      <h1 style={bestWayOut}>Fast React Pizza Co.</h1>;
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  //   const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {/* //The below is the first approach but not the best */}
            {/* {pizzaData.map(pizza => 
                    <Pizza 
                    name={pizza.name} 
                    photoName={pizza.photoName} 
                    ingredients={pizza.ingredients}
                    price={pizza.price}/>)} */}

            {/* //Below is the best approachwhen mapping */}
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come ack later :</p>
      )}

      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, and pepperon"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        photoName="pizzas/funghi.jpg"
        price={12}
      /> */}
    </main>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  //   console.log(isOpen);

  //   we can use if statement to return multiple return statement. Base on condotions.
  //   if (!isOpen) {
  //     return (
  //       <p>
  //         We're happy to welcome you between {openHour}:00 and {closeHour}:00.
  //         Tega
  //       </p>
  //     );
  //   }

  //   if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
  //   else alert("sorry We're closed");
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
      {/* {new Date().toLocaleTimeString()} We're currently open! */}
    </footer>
  );
  //older version
  // return React.createElement('footer', null, "we're currently open!")
}

function Order({ closeHour, openHour, test }) {
  //note there is no value passed to test
  //console.log(test);
  return (
    <div className="order">
      <p>
        We're open until {closeHour}:00. Come visit us or order online. {test}
      </p>

      <button className="btn">Order</button>
    </div>
  );
}

function Pizza({ pizzaObj }) {
  console.log(pizzaObj);

  //   if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      {/* //The below is the first approach but not the best when mapping */}
      {/* <img src={props.photoName} alt={props.name}></img>
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price + 3}</span>
      </div> */}

      {/* //The below is the best approach when mapping */}
      <img src={pizzaObj.photoName} alt={pizzaObj.name}></img>
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "Sold Out" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

//React v18
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

//React before v18
// React.render(<App />, document.getElementById("root"));
