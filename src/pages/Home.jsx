import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Pagination from "../components/Pagination";
import Repos from "../components/Repos";
import Spinner from "../components/Spinner";
import { Helmet } from "react-helmet-async";

import imageBar from "../icons/imageBar.svg";
import imageIcon from "../icons/imageIcon.svg";
import { ReactComponent as Followers } from "../icons/Followers.svg";

function Home() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [repos, setRepos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [repoPerPage] = useState(4);
  const [search, setSearch] = useState("");

  const location = useLocation();

  useEffect(() => {
    fetchUser();
    fetchRepo();
  }, []);

  const url = "https://api.github.com";
  const token = process.env.REACT_APP_API_KEY;

  // fetching the user
  const fetchUser = async () => {
    const response = await fetch(`${url}/users/DAVIDEbun`, {
      headers: {
        Authorization: `token ${token}`,
      },
    });
    const data = await response.json();
    setUser(data);
    setLoading(false);
  };

  // fetching the repos
  const fetchRepo = async () => {
    const response = await fetch(`${url}/users/DAVIDEbun/repos`, {
      headers: {
        Authorization: `token ${token}`,
      },
    });

    const data = await response.json();
    setRepos(data);
    setLoading(false);
    console.log(data);
  };

  // Handle Searching User
  const handleSearch = async (e) => {
    e.preventDefault();
    if (search === "") return;
    await handleSearchUser();
    await handleSearchRepo();
  };

  const handleSearchUser = async () => {
    const response = await fetch(`${url}/users/${search}`, {
      headers: {
        Authorization: `token ${token}`,
      },
    });
    const data = await response.json();
    setUser(data);
    setLoading(false);
  };

  const handleSearchRepo = async () => {
    const response = await fetch(`${url}/users/${search}/repos`, {
      headers: {
        Authorization: `token ${token}`,
      },
    });

    const data = await response.json();
    setRepos(data);
    setLoading(false);
    console.log(data);
  };

  if (loading) return <Spinner />;

  // Pagination logic
  const indexOfLastNumber = currentPage * repoPerPage;
  const indexOfFirstNumber = indexOfLastNumber - repoPerPage;
  const currentRepo = repos.slice(indexOfFirstNumber, indexOfLastNumber);
  const numberOfPages = Math.ceil(repos.length / repoPerPage);

  return (
    <>
      <Helmet>
        <title>Home | Gitplay </title>
        <meta name="description" content="Home page of GitPlay" />
        <link rel="canonical" href="/Home" />
      </Helmet>

      <div className="hold">
        {location.pathname === "/" ? (
          <div className="container homecontainer">
            <section className="profileCard">

              <div className="profileImg">
                <img className="imageBar" src={imageBar} alt="bar" />
                <img className="avatarImg" src={user.avatar_url} alt="avatar" />
              </div>

              <div className="userDetails">
                <h3>{user.name}</h3>

                <button>
                  <img src={imageIcon} alt="bar" />
                  <a target="_blank" rel="noreferrer" href={user.html_url}>
                    <h3> {user.login} </h3>
                  </a>
                </button>

                <p>{user.bio}</p>

                <p>{user.location}</p>

              </div>

              <div className="cardFoot">
                <Followers />
                <p>{user.followers} Followers</p>
                <p> {user.following} Following</p>
              </div>

              <form className="search" onSubmit={handleSearch}>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button>Search</button>
              </form>
            </section>

            <section className="RepoBody">
              <Repos currentRepo={currentRepo} />

              <Pagination
                numberOfPages={numberOfPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </section>
          </div>
        ) : (
          <Outlet />
        )}
      </div>
    </>
  );
}

export default Home;
