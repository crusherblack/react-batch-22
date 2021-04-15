import { useRef, useState } from "react";

//uncontrolled Form
// const Form = () => {
//   const input = useRef();
//   const input2 = useRef();

//   return (
//     <form
//       onSubmit={(e) => {
//         e.preventDefault();
//         console.log(input.current.value);
//         console.log(input2.current.value);
//       }}
//     >
//       <input type="text" id="nameInput" ref={input} />
//       <input type="text" id="nameInput" ref={input2} />
//       <button type="submit">SUBMIT FORM</button>
//     </form>
//   );
// };

//controlled Form manual
// const Form = () => {
//   const [input1, setInput1] = useState("");

//   return (
//     <form
//       onSubmit={(e) => {
//         e.preventDefault();
//         console.log(input1);
//       }}
//     >
//       <input type="text" onChange={(e) => setInput1(e.target.value)} />

//       <button type="submit">SUBMIT FORM</button>
//     </form>
//   );
// };

//controlled Form manual 2
// const Form = () => {
//   const [formData, setFormData] = useState({
//     name: "Shidiqq",
//     address: "Bandung",
//   });

//   return (
//     <form
//       onSubmit={(e) => {
//         e.preventDefault();
//       }}
//     >
//       <input
//         type="text"
//         value={formData.name}
//         onChange={(e) =>
//           setFormData({
//             ...formData,
//             name: e.target.value,
//           })
//         }
//       />
//       <input
//         type="text"
//         value={formData.address}
//         onChange={(e) =>
//           setFormData({
//             ...formData,
//             address: e.target.value,
//           })
//         }
//       />

//       <button type="submit">SUBMIT FORM</button>
//       <pre>{JSON.stringify(formData, null, 2)}</pre>
//     </form>
//   );
// };

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    description: "",
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { name, address, description } = formData;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div>
        <input
          name="name"
          type="text"
          value={name}
          onChange={(e) => onChange(e)}
        />
      </div>
      <input
        name="address"
        type="text"
        value={address}
        onChange={(e) => onChange(e)}
      />
      <input
        name="description"
        type="text"
        value={description}
        onChange={(e) => onChange(e)}
      />

      <button type="submit">SUBMIT FORM</button>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </form>
  );
};

export default Form;
