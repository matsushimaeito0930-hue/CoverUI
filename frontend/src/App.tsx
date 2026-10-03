import { useState } from "react";
import type { FormEvent } from "react";
import coverUiLogo from "./assets/coverui-logo-transparent.png";
import "./App.css";

function LinkIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10.8 13.2a4.2 4.2 0 0 0 5.94.02l2.32-2.31a4.2 4.2 0 0 0-5.94-5.94l-1.33 1.33M13.2 10.8a4.2 4.2 0 0 0-5.94-.02l-2.32 2.31a4.2 4.2 0 0 0 5.94 5.94l1.33-1.33" /></svg>;
}

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" /></svg>;
}

function SparkleIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7L12 2Zm7.2 13.2.65 2.15L22 18l-2.15.65-.65 2.15-.65-2.15L17 18l2.2-.65.65-2.15Z" /></svg>;
}

function CursorIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 3 13.5 8.3-6.2 1.35L10.7 19 5 3Zm6.7 9.65 4.45 5.3" /></svg>;
}

function ShieldIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 20 6v5c0 5-3.4 8.6-8 10-4.6-1.4-8-5-8-10V6l8-3Zm-3.2 9 2.1 2.1 4.5-4.5" /></svg>;
}

const featureCards = [
  { title: "分かりやすいUIに変換", text: "複雑なサイトをシンプルに", icon: <CursorIcon />, tone: "blue" },
  { title: "AIでページ解析", text: "コンテンツを自動で理解", icon: <SparkleIcon />, tone: "purple" },
  { title: "安全な操作ガイド", text: "迷わず使える手順を表示", icon: <ShieldIcon />, tone: "green" },
];

function App() {
  const [url, setUrl] = useState("");
  const [notice, setNotice] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const parsedUrl = new URL(url);
      if (parsedUrl.protocol !== "http:" && parsedUrl.protocol !== "https:") throw new Error();
      setNotice("URLを確認しました。解析機能は現在準備中です。");
    } catch {
      setNotice("https:// から始まるURLを入力してください。");
    }
  };

  return (
    <main className="landing-page">
      <div className="background-orb orb-left" />
      <div className="background-orb orb-right" />
      <div className="background-wave wave-left" />
      <div className="background-wave wave-right" />
      <section className="hero" aria-labelledby="coverui-title">
        <div className="browser-illustration browser-left" aria-hidden="true">
          <div className="browser-top"><i /><i /><i /><span /></div>
          <div className="complex-ui">
            <aside><b /><b /><b /><b /><b /></aside>
            <div className="complex-content"><em /><div className="complex-tabs"><small /><small /><small /><small /></div><div className="complex-grid"><span /><span /><span /><span /><span /><span /></div><div className="complex-lines"><small /><small /><small /></div></div>
          </div>
          <strong className="illustration-label">複雑な元サイト</strong>
        </div>
        <div className="browser-illustration browser-right" aria-hidden="true">
          <div className="browser-top simple-top"><i /><i /><i /><span /></div>
          <div className="simple-ui"><div className="simple-icon"><SparkleIcon /></div><em /><p /><button>予約を確認</button><small>必要な操作だけを表示</small></div>
          <strong className="illustration-label">分かりやすいCoverUI</strong>
        </div>
        <div className="logo-frame"><img src={coverUiLogo} alt="CoverUI" /></div>
        <h1 id="coverui-title" className="sr-only">CoverUI</h1>
        <h2>複雑なWebサイトを、分かりやすいUIに変換</h2>
        <p className="hero-copy">URLを入力するだけで、AIがページを解析し、<br />誰でも使いやすいシンプルなインターフェースに再構成します。</p>
        <form className="url-form" onSubmit={handleSubmit} noValidate>
          <label className="sr-only" htmlFor="site-url">変換したいWebサイトのURL</label>
          <div className="url-input-wrap"><LinkIcon /><input id="site-url" type="url" inputMode="url" placeholder="https://example.com" value={url} onChange={(event) => { setUrl(event.target.value); setNotice(""); }} /></div>
          <button type="submit">変換する <ArrowIcon /></button>
        </form>
        <p className="form-notice" role="status">{notice}</p>
        <div className="features">
          {featureCards.map((feature) => <article className="feature-card" key={feature.title}><div className={`feature-icon ${feature.tone}`}>{feature.icon}</div><div><h3>{feature.title}</h3><p>{feature.text}</p></div></article>)}
        </div>
      </section>
      <p className="scroll-hint"><span>⌄</span>URLを入力して、今すぐ体験</p>
    </main>
  );
}

export default App;
