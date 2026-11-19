---
layout: default
title: Niki的空间
---

# 文章

<ul class="post-list">
{% for post in site.posts %}
  <li>
    <span class="post-meta">{{ post.date | date: "%Y-%m-%d" }}</span>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
  </li>
{% endfor %}
</ul>

{% if site.posts.size == 0 %}
还没有文章。往 `_posts/` 里放一个 `2026-11-02-我的第一篇.md` 就有了。
{% endif %}
