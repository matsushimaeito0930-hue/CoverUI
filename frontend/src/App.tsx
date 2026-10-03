import { useState } from "react";
import "./App.css";

function App() {
  const [url, setUrl] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("入力されたURL:", url);

    const response = await fetch("http://localhost:8000/api/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: url,
      }),
    });

    const data = await response.json();

    console.log("Goから返ってきたデータ:", data);
  };

  return (
    <div className="container">
      <h1>CoverUI</h1>

      <p>WebサイトのURLを入力してください</p>

      <form onSubmit={handleSubmit}>
        <input
          type="url"
          placeholder="https://example.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />

        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;