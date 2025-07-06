import { useId } from "react";

/* eslint-disable no-unused-vars */
function Input(props) {
  const { id = "input", label } = props;
  const inputId = useId();
  return (
    <>
      <label htmlFor="">
        <span>{label}</span>
        <input
          type="text"
          id={`${inputId}-${id}`}
          placeholder="Enter your name"
        />
      </label>
      <p>Name Should contain at least firstname and last name</p>
    </>
  );
}

function App() {
  return (
    <>
      <Input id="firstname" label="First Name" />
      <Input />
    </>
  );
}

export default App;
