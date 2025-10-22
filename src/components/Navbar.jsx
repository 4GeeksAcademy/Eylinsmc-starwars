import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export default function Navbar() {
  const { store, dispatch } = useGlobalReducer();
  const favorites = store.favorites || [];

  const handleRemove = (fav, event) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch({ type: "REMOVE_FAVORITE", payload: fav });
  };

  return (
    <nav
      className="navbar navbar-expand-lg bg-dark border-bottom border-body"
      data-bs-theme="dark"
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          Star Wars
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown">
              <button
                className="btn btn-dark dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Favorites{" "}
                <span className="badge bg-danger ms-1">{favorites.length}</span>
              </button>
              <ul className="dropdown-menu dropdown-menu-dark">
                {favorites.length === 0 ? (
                  <li>
                    <span className="dropdown-item">Empty</span>
                  </li>
                ) : (
                  favorites.map((fav) => {
                    const displayName =
                      fav.properties?.name ||
                      fav.properties?.model ||
                      fav.properties?.title ||
                      "Favorite";
                    const linkTo =
                      fav.type === "character"
                        ? `/character/${fav.uid}`
                        : fav.type === "planet"
                        ? `/planet/${fav.uid}`
                        : `/vehicle/${fav.uid}`;
                    return (
                      <li
                        key={`${fav.uid}-${fav.type}`}
                        className="d-flex align-items-center justify-content-between"
                      >
                        <Link
                          to={linkTo}
                          className="dropdown-item flex-grow-1"
                        >
                          {displayName}
                        </Link>
                        <button
                          className="btn btn-sm btn-outline-danger ms-2"
                          title="Remove"
                          onClick={(e) => handleRemove(fav, e)}
                        >
                          <i className="fa fa-trash"></i>
                        </button>
                      </li>
                    );
                  })
                )}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
