import { Link } from 'react-router-dom';
import './Header.scss';

export default function Header() {
  return (
    <>
      <div>Header Component</div>
      <Link to="auth">Authorisation</Link>
      <Link to="graphyql">Graphyql</Link>
    </>
  );
}
