function Signup() {
  return (
    <div style={{
      background: "#121212",
      color: "white",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div>
        <h2>Signup</h2>
        <input placeholder="Email" /><br/><br/>
        <input placeholder="Password" type="password" /><br/><br/>
        <button>Register</button>
      </div>
    </div>
  );
}

export default Signup;