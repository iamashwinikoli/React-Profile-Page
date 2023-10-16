import "./App.css";
function App() {
  return (
    <div className="App">
      <nav className="nav-bar">
        <a className="links" href="./signup.html">
          Sign-Up
        </a>
        <a className="links" href="./login.html">
          Login
        </a>
        <a
          className="links"
          href="https://github.com/iamashwinikoli"
          target="_main"
        >
          GitHub
        </a>
        <a
          className="links"
          href="www.linkedin.com/in/iamashwinikoli"
          target="_top"
        >
          Linked-In
        </a>
      </nav>
      <img
        src="./image/ashwini.jpg"
        alt="sorry somthing is wrong"
        style={{
          width: 150,
          height: 150,
          borderRadius: 200,
          justifyContent: "right",
        }}
      />
      <h1>Ashwini Koli!!</h1>
      <a className="box" href="profile.html">
        About Me
      </a>
    </div>
  );
}
export default App;
