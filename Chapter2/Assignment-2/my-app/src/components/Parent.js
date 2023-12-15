function Parent(props) {
  console.log(props.children);
  return <div style={{ border: "2px solid red" }}>{props.children}</div>;
}

export default Parent;
