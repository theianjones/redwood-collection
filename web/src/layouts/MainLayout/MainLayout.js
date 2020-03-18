import { Link, routes } from '@redwoodjs/router'
const MainLayout = ({ children }) => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={routes.about()}>About</Link>
          </li>
          <li>
            <Link to={routes.index()}>Index</Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </>
  )
}

export default MainLayout
