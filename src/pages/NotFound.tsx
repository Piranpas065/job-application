import { Link } from "react-router-dom"

function NotFound () {
    return (
        <div>
            <h2>404</h2>
            <p>Page not found</p>
            <Link to="/" className="btn">Back to jobs</Link>
        </div>
    )
}

export default NotFound;