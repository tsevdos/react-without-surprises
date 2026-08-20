import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
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

async function searchUsers(searchTerm: string): Promise<User[]> {
  const response = await fetch(
    `https://dummyjson.com/users/search?q=${encodeURIComponent(searchTerm)}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  const data: UsersResponse = await response.json();
  return data.users;
}

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const shouldSearch = searchTerm.length >= 3;
  const {
    status,
    data: userList = [],
    error,
  } = useQuery({
    queryKey: ["users", "search", searchTerm.toLowerCase()],
    queryFn: () => searchUsers(searchTerm.toLowerCase()),
    enabled: shouldSearch, // Only fetch when we have enough characters
  });
  const isLoading = status === "pending";
  const isError = status === "error";
  const isSuccess = status === "success";

  return (
    <>
      <Header
        sectionName="Effects Surprises"
        title="User Search — solution"
        tooltip="This component uses TanStack Query for data fetching and useDeferredValue for debouncing — clean and maintainable!"
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
          {isLoading && shouldSearch && (
            <div className="loading-state">
              <div className="spinner"></div>
              <p>Searching for "{searchTerm}"...</p>
            </div>
          )}

          {/* Error State */}
          {isError && (
            <div className="error-state">
              <span className="error-icon">⚠️</span>
              <p>{error instanceof Error ? error.message : "An error occurred"}</p>
            </div>
          )}

          {/* Empty State - No results found */}
          {isSuccess && userList.length === 0 && (
            <div className="empty-state">
              <span className="empty-icon">🔍</span>
              <p>No users found matching "{searchTerm}"</p>
              <p className="empty-hint">Try a different search term</p>
            </div>
          )}

          {/* Results */}
          {isSuccess && userList.length > 0 && (
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
          {!isLoading && !isError && userList.length === 0 && !searchTerm && (
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
