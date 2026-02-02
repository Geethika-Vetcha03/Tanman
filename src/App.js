import { useState } from "react";
import ProfileCard from "./ProfileCard";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchProfile = async () => {
    if (username === "") return;

    setLoading(true);
    setError("");
    setUserData(null);

    try {
      const response = await fetch(
        `https://api.github.com/users/${username}`
      );

      if (!response.ok) {
        throw new Error("User not found");
      }

      const data = await response.json();
      setUserData(data);
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      fetchProfile();
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-content">
          <h1 className="app-title">GitHub Profile Viewer</h1>
          <p className="app-subtitle">Search and discover GitHub profiles</p>
        </div>
      </header>

      <main className="app-main">
        <div className="search-container">
          <div className="search-box">
            <input
              type="text"
              placeholder="Enter GitHub username..."
              className="search-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button
              onClick={fetchProfile}
              className="search-button"
            >
              <span>Search</span>
            </button>
          </div>
        </div>

        <div className="results-container">
          {loading && (
            <div className="loading">
              <div className="spinner"></div>
              <p>Loading profile...</p>
            </div>
          )}
          {error && <div className="error-message">⚠️ {error}</div>}
          {userData && <ProfileCard user={userData} />}
        </div>
      </main>
    </div>
  );
}

export default App;
