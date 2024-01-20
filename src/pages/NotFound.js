import { Link } from "react-router-dom"
const NotFound = () => {
  return (
    <div>
        <h2>404 Error</h2>
        <p>Page not found. Please check the URL and try again</p>
        <p>Click the link to <Link to='/'>Homepage</Link></p>
    </div>
  )
}

export default NotFound