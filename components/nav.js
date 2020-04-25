import Link from "next/link";

const Nav = () => (
  <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
  <div className="container">
    <a className="navbar-brand" href="#">Bitcoin Price</a>
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link href="/"><a className="nav-link">Home</a></Link>
        </li>
        <li className="nav-item">
          <Link href="/about"><a className="nav-link">About</a></Link>
        </li>
      </ul>
    </div>
  </div>

</nav>
);

export default Nav;
// background-image: -webkit-gradient(linear, left top, left bottom, from(#04519b), color-stop(60%, #033C73), to(#02325f));
//     background-image: linear-gradient(#04519b, #033C73 60%, #02325f);