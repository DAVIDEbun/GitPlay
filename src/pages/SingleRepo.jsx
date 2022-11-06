import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import { Helmet } from "react-helmet-async";
import { ReactComponent as forks } from "../icons/fork.svg";
import { ReactComponent as openIssues } from "../icons/open issues.svg";
import { ReactComponent as size } from "../icons/size.svg";
import { ReactComponent as views } from "../icons/views.svg";

function SingleRepo() {
  const { id } = useParams();
  const [repo, setRepo] = useState({});
  const [loading, setLoading] = useState(true);

  const url = "https://api.github.com";
  const token = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    fetchRepo();
  }, [id]);

  // fetch single repo
  const fetchRepo = async () => {
    const response = await fetch(`${url}/repos/DAVIDEbun/${id}`, {
      headers: {
        Authorization: `token ${token}`,
      },
    });
    const data = await response.json();
    setRepo(data);
    setLoading(false);
  };

  if (loading) return <Spinner />;

  console.log(id);
  return (
    <>
    <Helmet>
        <title>SingleRepo | Gitplay </title>
        <meta name="description" content="Each Repo Details" />
        <link rel="canonical" href="/SingleRepo" />
      </Helmet>
    <div className="Container">
      <div className="gridContainer">
        <section>
          <Link to="/">
            <button className="singleRepoButton"> Back</button>
          </Link>
        </section>

        <section>
          <div className="singleRepoContent">
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>
          </div>

          <div className="singleRepocontent_">
            <p className="visibility">{repo.visibility}</p>
            <p>{repo.language}</p>
          </div>
        </section>

        <section className="singleRepoFlex">
          <div className="singleRepoButton">
            <forks />
            <p>{repo.forks} Forks</p>
          </div>
          <p className="singleRepoButton">
            <size /> File Size: {repo.size}kb
          </p>
          <p className="singleRepoButton">watchers : {repo.watchers}</p>
          <p className="singleRepoButton">open issues : {repo.open_issues}</p>

          <button className="singleRepoButton">
            <a target="_blank" rel="noreferrer" href={repo.html_url}>
              VIEW ON GITHUB
            </a>
          </button>
        </section>
      </div>
    </div>
    </>
  );
}

export default SingleRepo;
