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
      <h2>关于本站</h2>
      <p class="about-text">你好，我是 NiKi。<br><br>这里记录我关于新闻传播与 AI 前沿的思考，还有一些读书和生活的碎片。慢慢写，慢慢读。</p>
      <div class="tag-list">
        <span class="tag"># 新闻传播</span>
        <span class="tag"># AI 前沿</span>
        <span class="tag"># 读书笔记</span>
      </div>
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
    <section class="home-col panel-card">
      <h2>文章分类</h2>
      <ul class="cat-list">
        <li><span>观察</span><span>1</span></li>
        <li><span>随笔</span><span>1</span></li>
      </ul>
    </section>
    <section class="home-col panel-card">
      <h2>联系我</h2>
      <div class="contact-list">
        <a href="https://github.com/Aiyawen" target="_blank" rel="noopener">GitHub &rarr;</a>
        <a href="/about/" >关于本站 &rarr;</a>
      </div>
    </section>
  </aside>

</div>
