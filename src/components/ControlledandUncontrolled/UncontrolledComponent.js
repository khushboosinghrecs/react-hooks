import React, { useRef } from 'react';
// An uncontrolled component in React is a component that does not store its form data in its internal state. Instead, it lets the DOM handle the form data directly. Here is an example:
const UncontrolledInput = React.forwardRef((props, ref) => {
  return <input ref={ref} defaultValue="" placeholder={props.placeholder} />;
});

function UncontrolledComponent() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log("uncontrolled");
    console.log("email", email);
    console.log('password', password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <UncontrolledInput ref={emailRef} placeholder="Email" />
      <UncontrolledInput ref={passwordRef} placeholder="Password" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledComponent;
