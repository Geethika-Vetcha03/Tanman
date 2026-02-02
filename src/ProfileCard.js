function ProfileCard({ user }) {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <img
          src={user.avatar_url}
          alt={user.login}
          className="profile-avatar"
        />
      </div>

      <div className="profile-content">
        <h2 className="profile-name">
          {user.name || user.login}
        </h2>
        
        <p className="profile-login">@{user.login}</p>

        <p className="profile-bio">
          {user.bio || "No bio available"}
        </p>

        <div className="profile-stats">
          <div className="stat-item">
            <span className="stat-value">{user.followers}</span>
            <span className="stat-label">Followers</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">{user.following}</span>
            <span className="stat-label">Following</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">{user.public_repos}</span>
            <span className="stat-label">Repos</span>
          </div>
        </div>

        {user.location && (
          <div className="profile-info">
            <span className="info-icon">📍</span>
            <span>{user.location}</span>
          </div>
        )}
        
        {user.company && (
          <div className="profile-info">
            <span className="info-icon">🏢</span>
            <span>{user.company}</span>
          </div>
        )}
        
        {user.blog && (
          <div className="profile-info">
            <span className="info-icon">🔗</span>
            <a href={user.blog} target="_blank" rel="noopener noreferrer">
              {user.blog}
            </a>
          </div>
        )}

        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="profile-link"
        >
          View Profile →
        </a>
      </div>
    </div>
  );
}

export default ProfileCard;
