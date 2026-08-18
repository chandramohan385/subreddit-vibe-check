import "./index.css"

const AllPosts = ({ posts }) => {
    if (posts.length === 0) return null

    return (
        <div className="post-list">
            <h3>Top Posts</h3>
            {posts.map(post => (
                <div key={post.id} className={`post-card ${post.sentimentLabel.toLowerCase()}`}>
                    <a href={post.url} target="_blank" rel="noreferrer" className="post-title">
                        {post.title}
                    </a>
                    <div className="post-meta">
                        <span className="post-score">⬆ {post.score}</span>
                        <span className="post-comments">💬 {post.numComments}</span>
                        <span className={`sentiment-badge ${post.sentimentLabel.toLowerCase()}`}>
                            {post.sentimentLabel}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AllPosts
