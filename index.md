---
layout: default
title: NiKi的空间
---

<div class="hero">
  <img src="/assets/img/banner.jpg" alt="欢迎来到 NiKi 的空间" class="hero-img">
  <div class="hero-shade"></div>
  <div class="hero-text">
    <h1>欢迎来到 NiKi 的空间</h1>
    <p>Stay hungry, stay foolish.</p>
  </div>
</div>

<div class="page-grid">

  <aside class="side-col side-left">
    <section class="home-col panel-tall">
      <h2>任务栏</h2>
      <ul class="task-list">
        <li class="done">完成博客改版</li>
        <li>整理读书笔记</li>
        <li>学一个新 AI 工具</li>
        <li>下周推送排版</li>
      </ul>
      <div class="panel-note">&check; 已完成 &nbsp;/&nbsp; 待办清单</div>
    </section>
  </aside>

  <div class="center-col">
    <section class="home-col home-posts">
      <h2>文章推送</h2>
      <ul class="post-list">
{% for post in site.posts %}
        <li>
          <span class="post-meta">{{ post.date | date: "%Y-%m-%d" }}</span>
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </li>
{% endfor %}
      </ul>
{% if site.posts.size == 0 %}
      <p>还没有文章。往 `_posts/` 里放一个 md 文件就有了。</p>
{% endif %}
    </section>

    <section class="home-col home-gallery">
      <h2>图片</h2>
      <div class="gallery-grid">
        <figure><img src="/assets/img/photo-1.jpg" alt="照片一"></figure>
        <figure><img src="/assets/img/photo-2.jpg" alt="照片二"></figure>
        <figure><img src="/assets/img/photo-3.jpg" alt="照片三"></figure>
        <figure><img src="/assets/img/photo-4.jpg" alt="照片四"></figure>
      </div>
    </section>
  </div>

  <aside class="side-col side-right">
    <section class="home-col panel-card weather-card">
      <h2>天气预报</h2>
      <div class="weather-box">
        <svg class="weather-icon" viewBox="0 0 40 40" width="38" height="38"><circle cx="20" cy="20" r="9" fill="#FAC775"/><g stroke="#FAC775" stroke-width="2"><path d="M20 3v5M20 32v5M3 20h5M32 20h5M8 8l3.5 3.5M28.5 28.5L32 32M32 8l-3.5 3.5M11.5 28.5L8 32"/></g></svg>
        <div>
          <div class="weather-temp">20&deg;</div>
          <div class="weather-desc">西西亚 &middot; 晴</div>
        </div>
      </div>
      <div class="panel-note">湿度 45% &middot; 风力 2 级</div>
    </section>
    <section class="home-col panel-card">
      <h2>正在听</h2>
      <a class="vinyl-link" href="https://music.163.com/#/song?id=1331865888" target="_blank" rel="noopener" title="点击播放">
        <div class="vinyl">
          <img src="/assets/img/vinyl-cover.jpg" alt="恋与憧憬 封面" class="vinyl-label">
        </div>
      </a>
      <div class="music-title">恋与憧憬</div>
      <div class="music-artist">V.K克 &middot; 点击唱片播放</div>
    </section>
  </aside>

</div>
