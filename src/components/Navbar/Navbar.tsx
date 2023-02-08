import { Nav, Title } from './styles';
import { Link } from 'react-router-dom';
import { logout } from 'lib/auth';

export function Navbar() {
  return (
    <Nav>
      <Title>Abora JS</Title>
      <ul>
        <li>
          <Link to="/sup">About</Link>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <button>Login</button>
        </li>
      </ul>
    </Nav>
  );
}
