import react from "react";
import { Helmet } from "react-helmet-async";
import ErrorBoundary from "../components/ErrorBoundaries";
import Pagination from "../components/Pagination";
import { Link } from "react-router-dom";

function ErrorPage() {
  return <div className="errorPage">
    <Link to="/">
            <button className="singleRepoButton"> Back</button>
          </Link>
    <ErrorBoundary>
        <Pagination />
    </ErrorBoundary>

  </div>;
}

export default ErrorPage;