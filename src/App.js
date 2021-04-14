import { useState, useEffect } from "react";
import "./styles/global.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function Modal({ isVisible }) {
  useEffect(() => {
    console.log("aku dimunculkan");
    //cleanUpFunction
    return () => {
      console.log("aku dihancurkan");
    };
  }, []);

  return (
    isVisible && (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "200px",
          height: "200px",
          borderRadius: "5px",
          background: "red",
          color: "white",
          textAlign: "center",
        }}
      >
        <h3>INI ADALAH MODAL</h3>
      </div>
    )
  );
}

function App() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  //componentDidMount
  //componentDidUpdate => update jika state atau props apapun berubah
  useEffect(() => {
    console.log("component mounted");
  });

  //componentDidMount
  useEffect(() => {
    console.log("component mounted 2");
  }, []);

  //componentDidMount => dependecies list => update secara spesifik
  useEffect(() => {
    console.log("update");
  }, [count]);

  //componentWillUnmount
  useEffect(() => {
    return () => {
      console.log("saya terhapus");
    };
  }, []);

  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
          flexDirection: "column",
        }}
      >
        <Modal isVisible={isVisible} />
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increament</button>
        <button
          onClick={() =>
            setIsVisible((prev) => {
              return !prev;
            })
          }
        >
          TONGGLE MODAL
        </button>
      </div>
    </>
  );
}

export default App;
