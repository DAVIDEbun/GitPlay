import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as RepoIcon } from "../icons/repoIcon.svg";

import { ReactComponent as Lang } from "../icons/Language.svg";

function Repos({ currentRepo }) {
  return (
    <div className="gitRepoContainer">
      {currentRepo.map((repo) => (
        <Link to={`repo/${repo.name}`} className="gitRepo">
          <div className="git_Repo" key={repo.id}>
            <h3>{repo.name}</h3>
            <RepoIcon />
          </div>

          <p>{repo.description}</p>

          <div className="git_Repo">
            <p>
              <Lang /> {repo.language}
            </p>
            <p className="visibility">{repo.visibility}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Repos;
