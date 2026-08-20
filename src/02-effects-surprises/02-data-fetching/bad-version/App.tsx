import { useState, useEffect } from "react";
import Header from "../../../components/Header/Header";
import "../App.css";

type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  age: number;
  phone: string;
  company: {
    name: string;
    department: string;
    title: string;
  };
};

type UsersResponse = {
  users: User[];
  total: number;
  skip: number;
  limit: number;
};

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [userList, setUserList] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const shouldSearch = searchTerm.length >= 3;

  useEffect(() => {
    if (!shouldSearch) {
      setUserList([]);
      setError(null);
      return;
    }

    const abortController = new AbortController();

    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `https://dummyjson.com/users/search?q=${encodeURIComponent(searchTerm.toLowerCase())}`,
          { signal: abortController.signal },
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data: UsersResponse = await response.json();
        setUserList(data.users);
      } catch (err) {
        if (err instanceof Error && err.name !== "AbortError") {
          setError(err.message);
          setUserList([]);
        }
      } finally {
        if (!abortController.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchUsers();

    return () => {
      abortController.abort();
    };
  }, [searchTerm, shouldSearch]);

  return (
    <>
      <Header
        sectionName="Effects Surprises"
        title="User Search — bad version"
        tooltip="This component uses effects for data fetching, spreads the logic into component and makes the code hard to read."
      />

      <div className="pokemon-search-container">
        <div className="search-section">
          <h2>Search Users</h2>
          <p className="search-hint">
            Type at least 3 characters to search (e.g., "john", "emily", "michael")
          </p>
          <input
            type="text"
            className="search-input"
            placeholder="Enter user name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm.length > 0 && searchTerm.length < 3 && (
            <p className="search-warning">Please type at least 3 characters</p>
          )}
        </div>

        <div className="results-section">
          {/* Loading State */}
          {loading && (
            <div className="loading-state">
              <div className="spinner"></div>
              <p>Searching for "{searchTerm}"...</p>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="error-state">
              <span className="error-icon">⚠️</span>
              <p>{error}</p>
            </div>
          )}

          {/* Empty State - No results found */}
          {!loading && !error && userList.length === 0 && shouldSearch && (
            <div className="empty-state">
              <span className="empty-icon">🔍</span>
              <p>No users found matching "{searchTerm}"</p>
              <p className="empty-hint">Try a different search term</p>
            </div>
          )}

          {/* Results */}
          {!loading && !error && userList.length > 0 && (
            <div className="pokemon-results">
              <p className="results-count">Found {userList.length} users</p>
              <div className="pokemon-grid">
                {userList.map((user) => (
                  <div key={user.id} className="pokemon-card">
                    <img src={user.image} alt={user.firstName} className="pokemon-image" />
                    <div className="pokemon-info">
                      <h3 className="pokemon-name">
                        {user.firstName} {user.lastName}
                      </h3>
                      <div className="pokemon-types">
                        <span className="type-badge type-normal">{user.company.department}</span>
                      </div>
                      <div className="pokemon-stats">
                        <p>
                          <strong>Age:</strong> {user.age}
                        </p>
                        <p>
                          <strong>Email:</strong> {user.email}
                        </p>
                        <p>
                          <strong>Company:</strong> {user.company.name}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Initial idle state */}
          {!loading && !error && userList.length === 0 && !searchTerm && (
            <div className="idle-state">
              <span className="idle-icon">👤</span>
              <p>Start typing to search for users!</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
