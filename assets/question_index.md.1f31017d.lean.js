import{_ as s,c as n,a as e,b as a,o as t}from"./app.cd91127c.js";const h='{"title":"vite press \u90E8\u7F72 git \u7684\u65B9\u6CD5","description":"","frontmatter":{},"headers":[{"level":3,"title":"vite press \u90E8\u7F72 git \u7684\u65B9\u6CD5","slug":"vite-press-\u90E8\u7F72-git-\u7684\u65B9\u6CD5"},{"level":3,"title":"\u66F4\u6539 host \u65B9\u5F0F\u53C2\u8003\u5982\u4E0B:","slug":"\u66F4\u6539-host-\u65B9\u5F0F\u53C2\u8003\u5982\u4E0B"}],"relativePath":"question/index.md","lastUpdated":1650881717015}',c={},p=a(`__VP_STATIC_START__<h3 id="vite-press-\u90E8\u7F72-git-\u7684\u65B9\u6CD5" tabindex="-1">vite press \u90E8\u7F72 git \u7684\u65B9\u6CD5 <a class="header-anchor" href="#vite-press-\u90E8\u7F72-git-\u7684\u65B9\u6CD5" aria-hidden="true">#</a></h3><p>1\u3001\u63D0\u4EA4\u547D\u4EE4\u5DF2\u5199\u5728<code>deploy.sh</code>\u6587\u4EF6\u91CC 2\u3001\u53EF\u4EE5<code>build</code>\u4EE5\u540E\u4F7F\u7528<code>bash</code>\u6267\u884C\u6216\u8005\u76F4\u63A5\u4F7F\u7528<code>package.json</code>\u91CC\u7684<code>scripts</code>\u6267\u884C\u5373\u53EF 3\u3001\u5982\u679C\u94FE\u63A5<code>github</code>\u62A5\u9519 433\uFF0C\u53EF\u4EE5\u4FEE\u6539\u4FEE\u6539<code>host</code>\u6587\u4EF6\u6216\u8005\u4FEE\u6539 git \u4EE3\u7406\u5730\u5740\u3002 \u66F4\u6539\u4EE3\u7406\u65B9\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-shell line-numbers-mode"><pre><code><span class="token function">git</span> config --global http.proxy socks5://127.0.0.1:7890
<span class="token function">git</span> config --global http.https://github.com.proxy socks5://127.0.0.1:7890
<span class="token comment"># socks5\u67E5\u770B\u81EA\u5DF1\u7684\u4EE3\u7406</span>

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-shell line-numbers-mode"><pre><code><span class="token function">git</span> config --global --unset http.proxy
<span class="token function">git</span> config --global --unset http.https://github.com.proxy
<span class="token comment"># \u53D1\u597D\u4E86\u53EF\u4EE5\u91CD\u7F6E</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u66F4\u6539-host-\u65B9\u5F0F\u53C2\u8003\u5982\u4E0B" tabindex="-1">\u66F4\u6539 host \u65B9\u5F0F\u53C2\u8003\u5982\u4E0B: <a class="header-anchor" href="#\u66F4\u6539-host-\u65B9\u5F0F\u53C2\u8003\u5982\u4E0B" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><pre><code><span class="token comment">##</span>
<span class="token comment"># Host Database</span>
<span class="token comment">#</span>
<span class="token comment"># localhost is used to configure the loopback interface</span>
<span class="token comment"># when the system is booting.  Do not change this entry.</span>
<span class="token comment">##</span>
<span class="token number">127.0</span>.0.1	        localhost
<span class="token number">255.255</span>.255.255 	broadcasthost
::1               localhost

<span class="token number">196.252</span>.68.189    raw.githubusercontent.com

<span class="token number">150.82</span>.112.255    github.com

<span class="token comment"># \u8BB0\u5F97\u5148Ping \`Ping raw.githubusercontent.com\`</span>

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>__VP_STATIC_END__`,6);function o(l,r,i,b,m,d){return t(),n("div",null,[e(`
 * @Author: lgy
 * @Date: 2021-10-13 15:21:55
 * @LastEditors: lgy
 * @LastEditTime: 2022-04-25 18:14:46
 * @Description: \u8BF7\u586B\u5199\u7B80\u4ECB
`),p])}var g=s(c,[["render",o]]);export{h as __pageData,g as default};
