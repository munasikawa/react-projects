const Button = () => {
  const handleClick = (e) => (e.target.textContent = "Ouch");

  return <button onDoubleClick={(e) => handleClick(e)}>Click Me</button>;

  // const handleClick = (name) => {
  //   if (count < 3) {
  //     count++;
  //     console.log(`${name} you clicked me ${count} time/s`);
  //   } else {
  //     console.log(`${name} stop clicking me!`);
  //   }
  // };

  //    const handleClick2 = (name) => console.log(`${name} stop clicking me`);
  // If you add a set of parantheses after a call back function you'll invoke it right away
  // if we have arguments we need to send to a function we can wrap the call back function
  // within a function expression or an arrow function
  //    return <button onClick={() => handleClick2("Sam")}>Click Me</button>;
};

export default Button;
