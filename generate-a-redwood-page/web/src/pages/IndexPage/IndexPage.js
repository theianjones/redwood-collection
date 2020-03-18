import { Link, routes } from '@redwoodjs/router'

const IndexPage = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={routes.about()}>About</Link>
          </li>
        </ul>
      </nav>
      <h1>IndexPage</h1>
      <p>hello egghead</p>
    </div>
  )
}

export default IndexPage
