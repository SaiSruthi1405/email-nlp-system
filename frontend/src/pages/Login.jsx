export default function Login() {
  return (
    <div style={{background:"#111", color:"white", height:"100vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
      <div>
        <h2>Login Page</h2>
        <input placeholder="Email" /><br /><br />
        <input placeholder="Password" type="password" /><br /><br />
        <button>Login</button>
      </div>
    </div>
  );
}