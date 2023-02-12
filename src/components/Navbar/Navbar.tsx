import { Nav, Title } from './styles';
import { Link } from 'react-router-dom';
import { logout } from 'lib/auth';
import { Modal } from 'components/Modal/Modal';
import { Button } from 'components/Button/styles';

function LoginButton() {
  return <Button>Login</Button>;
}

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
          <Modal trigger={LoginButton()}>
            <Button
              onClick={() => {
                console.log('hello');
              }}
            >
              login with google
            </Button>
          </Modal>
        </li>
      </ul>
    </Nav>
  );
}
