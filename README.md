# The Subreddit Vibe Check 📡

A React web application built for the Full Stack Developer Internship assignment. It fetches posts from a specified subreddit, performs client-side sentiment analysis on the titles, and presents a visual dashboard showing the overall "vibe" of the community.

---

## 🚀 Features

- **Subreddit Search**: Look up any public subreddit (e.g., `programming`, `reactjs`, `technology`).
- **Data Fetching**: Pulls recent posts to get a fresh snapshot of the community's current discussions.
- **Client-side Sentiment Analysis**: Uses the `sentiment` library to analyze post titles and calculate sentiment scores.
- **Vibe Scoreboard**: Displays the overall subreddit mood with sentiment labels and scores.
- **Visual Breakdown**: Interactive chart showing percentage split of Positive, Neutral, and Negative posts.
- **Detailed Post Feed**: Lists the posts with direct Reddit links, upvote counts, comment counts, and individual sentiment badges.
- **Smooth UX & Edge Cases**: Includes loading spinners, input clearing on submit, empty state handling, and user-friendly error messages.

---

## 🛠️ Tech Stack & Libraries

- **Frontend**: React (Class Components)
- **Styling**: Vanilla CSS (Custom dark theme)
- **Sentiment Analysis**: `sentiment` (AFINN-165 vocabulary-based client-side sentiment analysis)
- **UI Components & Icons**: `react-loader-spinner`

---

## 📌 Note on Data Source / API Choice

While building this project, I encountered CORS restrictions and new access limitations on Reddit's default public endpoints. To ensure reliable and fast client-side fetching without requiring complex proxy setups or API key approvals, this app uses the **Arctic Shift API**—an open Reddit data mirror that provides real-time Reddit post data with full CORS support.

---

## 💻 Local Setup & Running

1. **Clone the repository**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/subreddit-vibe-check.git
   cd subreddit-vibe-check
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. Open `http://localhost:3000` in your browser.

---

## 📂 Project Structure

```
src/
├── components/
│   ├── SearchBar/           # Subreddit input and submit button
│   ├── VibeScoreBoard/      # Overall sentiment score & emoji summary
│   ├── SentimentChart/      # Visual bar breakdown of post sentiments
│   ├── AllPosts/            # List of analyzed post cards with badges
│   └── SubRedditVibeChecker/# Main container managing state and API calls
├── App.js                   # Application root
├── App.css                  # Core layout styles
├── index.js                 # Entry point
└── index.css                # Global theme styles
```

---

Thank you for reviewing my assignment submission!
