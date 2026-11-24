---
layout: default
title: Niki的空间
---

<div class="home-grid">

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
      <figure><img src="/assets/img/autumn-1.png" alt="秋景一"></figure>
      <figure><img src="/assets/img/autumn-2.png" alt="秋景二"></figure>
    </div>
  </section>

</div>
