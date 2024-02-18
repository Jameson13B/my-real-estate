import { Outlet, Link } from "react-router-dom"

export const Layout = () => {
  return (
    <div>
      {/* Replace this with Nav component*/}
      <nav className="bg-black fixed top-0 left-0 w-full py-[20px]">
        <ul className="flex justify-between max-w-[768px] mx-auto">
          <li>
            <Link className="text-blue-200 font-bold" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-blue-200 font-bold" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="text-blue-200 font-bold" to="/properties">
              Properties
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  )
}
