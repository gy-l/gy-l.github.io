import{_ as n,c as s,a,b as p,o as t}from"./app.2ef81f74.js";const d='{"title":"\u53D8\u91CF\u548C\u5E38\u91CF","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u53D8\u91CF","slug":"\u53D8\u91CF"},{"level":3,"title":"\u53D8\u91CF\u58F0\u660E","slug":"\u53D8\u91CF\u58F0\u660E"},{"level":2,"title":"\u5E38\u91CF","slug":"\u5E38\u91CF"},{"level":3,"title":"iota","slug":"iota"},{"level":3,"title":"\u8BA1\u7B97\u65B9\u5F0F\u4E5F\u4F1A\u7EE7\u627F","slug":"\u8BA1\u7B97\u65B9\u5F0F\u4E5F\u4F1A\u7EE7\u627F"},{"level":3,"title":"\u51E0\u4E2A\u5E38\u89C1\u7684 iota \u793A\u4F8B:","slug":"\u51E0\u4E2A\u5E38\u89C1\u7684-iota-\u793A\u4F8B"}],"relativePath":"golang/\u53D8\u91CF\u548C\u5E38\u91CF.md","lastUpdated":1643006189812}',e={},o=p(`<h1 id="\u53D8\u91CF\u548C\u5E38\u91CF" tabindex="-1">\u53D8\u91CF\u548C\u5E38\u91CF <a class="header-anchor" href="#\u53D8\u91CF\u548C\u5E38\u91CF" aria-hidden="true">#</a></h1><h2 id="\u53D8\u91CF" tabindex="-1">\u53D8\u91CF <a class="header-anchor" href="#\u53D8\u91CF" aria-hidden="true">#</a></h2><h3 id="\u53D8\u91CF\u58F0\u660E" tabindex="-1">\u53D8\u91CF\u58F0\u660E <a class="header-anchor" href="#\u53D8\u91CF\u58F0\u660E" aria-hidden="true">#</a></h3><p>Go \u8BED\u8A00\u4E2D\u7684\u6BCF\u4E00\u4E2A\u53D8\u91CF\u90FD\u6709\u81EA\u5DF1\u7684\u7C7B\u578B\uFF0C\u5E76\u4E14\u53D8\u91CF\u5FC5\u987B\u7ECF\u8FC7\u58F0\u660E\u624D\u80FD\u5F00\u59CB\u4F7F\u7528\uFF0C\u540C\u4E00\u4F5C\u7528\u57DF\u5185\u4E0D\u652F\u6301\u91CD\u590D\u58F0\u660E\u3002\u5E76\u4E14 Go \u8BED\u8A00\u7684\u53D8\u91CF\u58F0\u660E\u540E\u5FC5\u987B\u4F7F\u7528\u3002</p><div class="language-go line-numbers-mode"><pre><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">//\u58F0\u660E\u5168\u5C40\u53D8\u91CF \u65B9\u6CD5\u4E00\u3001\u65B9\u6CD5\u4E8C\u3001\u65B9\u6CD5\u4E09\u662F\u53EF\u4EE5\u7684</span>
<span class="token keyword">var</span> gA <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">100</span>
<span class="token keyword">var</span> gB <span class="token operator">=</span> <span class="token number">200</span>

<span class="token comment">//\u7528\u65B9\u6CD5\u56DB\u6765\u58F0\u660E\u5168\u5C40\u53D8\u91CF</span>
<span class="token comment">// := \u53EA\u80FD\u591F\u7528\u5728 \u51FD\u6570\u4F53\u5185\u6765\u58F0\u660E</span>
<span class="token comment">//gC := 200</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//\u65B9\u6CD5\u4E00\uFF1A\u58F0\u660E\u4E00\u4E2A\u53D8\u91CF \u9ED8\u8BA4\u7684\u503C\u662F0</span>
	<span class="token keyword">var</span> a <span class="token builtin">int</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;a = &quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;type of a = %T\\n&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>

	<span class="token comment">//\u65B9\u6CD5\u4E8C\uFF1A\u58F0\u660E\u4E00\u4E2A\u53D8\u91CF\uFF0C\u521D\u59CB\u5316\u4E00\u4E2A\u503C</span>
	<span class="token keyword">var</span> b <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">100</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;b = &quot;</span><span class="token punctuation">,</span> b<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;type of b = %T\\n&quot;</span><span class="token punctuation">,</span> b<span class="token punctuation">)</span>

	<span class="token keyword">var</span> bb <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;abcd&quot;</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;bb = %s, type of bb = %T\\n&quot;</span><span class="token punctuation">,</span> bb<span class="token punctuation">,</span> bb<span class="token punctuation">)</span>

	<span class="token comment">//\u65B9\u6CD5\u4E09\uFF1A\u5728\u521D\u59CB\u5316\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u7701\u53BB\u6570\u636E\u7C7B\u578B\uFF0C\u901A\u8FC7\u503C\u81EA\u52A8\u5339\u914D\u5F53\u524D\u7684\u53D8\u91CF\u7684\u6570\u636E\u7C7B\u578B</span>
	<span class="token keyword">var</span> c <span class="token operator">=</span> <span class="token number">100</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;c = &quot;</span><span class="token punctuation">,</span> c<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;type of c = %T\\n&quot;</span><span class="token punctuation">,</span> c<span class="token punctuation">)</span>

	<span class="token keyword">var</span> cc <span class="token operator">=</span> <span class="token string">&quot;abcd&quot;</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;cc = %s, type of cc = %T\\n&quot;</span><span class="token punctuation">,</span> cc<span class="token punctuation">,</span> cc<span class="token punctuation">)</span>

	<span class="token comment">//\u65B9\u6CD5\u56DB\uFF1A(\u5E38\u7528\u7684\u65B9\u6CD5) \u7701\u53BBvar\u5173\u952E\u5B57\uFF0C\u76F4\u63A5\u81EA\u52A8\u5339\u914D</span>
	e <span class="token operator">:=</span> <span class="token number">100</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;e = &quot;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;type of e = %T\\n&quot;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span>

	f <span class="token operator">:=</span> <span class="token string">&quot;abcd&quot;</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;f = &quot;</span><span class="token punctuation">,</span> f<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;type of f = %T\\n&quot;</span><span class="token punctuation">,</span> f<span class="token punctuation">)</span>

	g <span class="token operator">:=</span> <span class="token number">3.14</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;g = &quot;</span><span class="token punctuation">,</span> g<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;type of g = %T\\n&quot;</span><span class="token punctuation">,</span> g<span class="token punctuation">)</span>

	<span class="token comment">// =====</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;gA = &quot;</span><span class="token punctuation">,</span> gA<span class="token punctuation">,</span> <span class="token string">&quot;, gB = &quot;</span><span class="token punctuation">,</span> gB<span class="token punctuation">)</span>
	<span class="token comment">//fmt.Println(&quot;gC = &quot;, gC)</span>

	<span class="token comment">// \u58F0\u660E\u591A\u4E2A\u53D8\u91CF</span>
	<span class="token keyword">var</span> xx<span class="token punctuation">,</span> yy <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">200</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;xx = &quot;</span><span class="token punctuation">,</span> xx<span class="token punctuation">,</span> <span class="token string">&quot;, yy = &quot;</span><span class="token punctuation">,</span> yy<span class="token punctuation">)</span>
	<span class="token keyword">var</span> kk<span class="token punctuation">,</span> ll <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token string">&quot;Aceld&quot;</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;kk = &quot;</span><span class="token punctuation">,</span> kk<span class="token punctuation">,</span> <span class="token string">&quot;, ll = &quot;</span><span class="token punctuation">,</span> ll<span class="token punctuation">)</span>

	<span class="token comment">//\u591A\u884C\u7684\u591A\u7C7B\u578B\u53D8\u91CF\u58F0\u660E</span>
	<span class="token keyword">var</span> <span class="token punctuation">(</span>
		vv <span class="token builtin">int</span>  <span class="token operator">=</span> <span class="token number">100</span>
		jj <span class="token builtin">bool</span> <span class="token operator">=</span> <span class="token boolean">true</span>
	<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;vv = &quot;</span><span class="token punctuation">,</span> vv<span class="token punctuation">,</span> <span class="token string">&quot;, jj = &quot;</span><span class="token punctuation">,</span> jj<span class="token punctuation">)</span>

	mm<span class="token punctuation">,</span> nn <span class="token operator">:=</span> <span class="token number">99</span> <span class="token punctuation">,</span> <span class="token number">19</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;mm = &quot;</span><span class="token punctuation">,</span> mm<span class="token punctuation">,</span> <span class="token string">&quot;, nn = &quot;</span><span class="token punctuation">,</span> nn<span class="token punctuation">)</span>

	<span class="token comment">//\u533F\u540D\u53D8\u91CF</span>
	<span class="token comment">//\u5728\u4F7F\u7528\u591A\u91CD\u8D4B\u503C\u65F6\uFF0C\u5982\u679C\u60F3\u8981\u5FFD\u7565\u67D0\u4E2A\u503C\uFF0C\u533F\u540D\u53D8\u91CF\u3002 \u533F\u540D\u53D8\u91CF\u7528\u4E00\u4E2A\u4E0B\u5212\u7EBF\\_\u8868\u793A\uFF0C\u4F8B\u5982\uFF1A</span>
	x<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token boolean">_</span><span class="token punctuation">,</span> y <span class="token operator">:=</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;x=&quot;</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;y=&quot;</span><span class="token punctuation">,</span> y<span class="token punctuation">)</span>
	<span class="token comment">//\u533F\u540D\u53D8\u91CF\u4E0D\u5360\u7528\u547D\u540D\u7A7A\u95F4\uFF0C\u4E0D\u4F1A\u5206\u914D\u5185\u5B58\uFF0C\u6240\u4EE5\u533F\u540D\u53D8\u91CF\u4E4B\u95F4\u4E0D\u5B58\u5728\u91CD\u590D\u58F0\u660E\u3002</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">&quot;Q1mi&quot;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br></div></div><p>\u6CE8\u610F\u4E8B\u9879\uFF1A</p><div class="language-go line-numbers-mode"><pre><code>\u51FD\u6570\u5916\u7684\u6BCF\u4E2A\u8BED\u53E5\u90FD\u5FC5\u987B\u4EE5\u5173\u952E\u5B57\u5F00\u59CB\uFF08<span class="token keyword">var</span>\u3001<span class="token keyword">const</span>\u3001<span class="token keyword">func</span>\u7B49\uFF09
<span class="token operator">:=</span>\u4E0D\u80FD\u4F7F\u7528\u5728\u51FD\u6570\u5916\u3002
<span class="token boolean">_</span>\u591A\u7528\u4E8E\u5360\u4F4D\uFF0C\u8868\u793A\u5FFD\u7565\u503C\u3002
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u5E38\u91CF" tabindex="-1">\u5E38\u91CF <a class="header-anchor" href="#\u5E38\u91CF" aria-hidden="true">#</a></h2><p>\u591A\u4E2A\u5E38\u91CF\u4E5F\u53EF\u4EE5\u4E00\u8D77\u58F0\u660E\uFF1A</p><div class="language-go line-numbers-mode"><pre><code><span class="token keyword">const</span> <span class="token punctuation">(</span>
	pi <span class="token operator">=</span> <span class="token number">3.1415926</span>
	e <span class="token operator">=</span> <span class="token number">2.7182</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><code>const</code>\u540C\u65F6\u58F0\u660E\u591A\u4E2A\u5E38\u91CF\u65F6\uFF0C\u5982\u679C\u7701\u7565\u4E86\u503C\u5219\u8868\u793A\u548C\u4E0A\u9762\u4E00\u884C\u7684\u503C\u76F8\u540C\u3002 \u4F8B\u5982\uFF1A</p><div class="language-go line-numbers-mode"><pre><code><span class="token keyword">const</span> <span class="token punctuation">(</span>
	n1 <span class="token operator">=</span> <span class="token number">100</span>
	n2
	n3
	<span class="token comment">//\u5E38\u91CF\`n1\u3001n2\u3001n3\`\u7684\u503C\u90FD\u662F\`100\`</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="iota" tabindex="-1">iota <a class="header-anchor" href="#iota" aria-hidden="true">#</a></h3><p><code>iota</code>\u662F<code>go</code>\u8BED\u8A00\u7684\u5E38\u91CF\u8BA1\u6570\u5668\uFF0C\u53EA\u80FD\u5728\u5E38\u91CF\u7684\u8868\u8FBE\u5F0F\u4E2D\u4F7F\u7528\u3002 <code>iota</code>\u5728<code>const</code>\u5173\u952E\u5B57\u51FA\u73B0\u65F6\u5C06\u88AB\u91CD\u7F6E\u4E3A<code>0</code>\u3002<code>const</code>\u4E2D\u6BCF\u65B0\u589E\u4E00\u884C\u5E38\u91CF\u58F0\u660E\u5C06\u4F7F<code>iota</code>\u8BA1\u6570\u4E00\u6B21(<code>iota</code>\u53EF\u7406\u89E3\u4E3A<code>const</code>\u8BED\u53E5\u5757\u4E2D\u7684\u884C\u7D22\u5F15)\u3002 \u4F7F\u7528<code>iota</code>\u80FD\u7B80\u5316\u5B9A\u4E49\uFF0C\u5728\u5B9A\u4E49\u679A\u4E3E\u65F6\u4F7F\u7528\u8F83\u591A</p><div class="language-go line-numbers-mode"><pre><code><span class="token keyword">const</span> <span class="token punctuation">(</span>
	<span class="token comment">//\u6BCF\u884C\u7684iota\u90FD\u4F1A\u7D2F\u52A01, \u7B2C\u4E00\u884C\u7684iota\u7684\u9ED8\u8BA4\u503C\u662F0,</span>
	n1 <span class="token operator">=</span> <span class="token boolean">iota</span> <span class="token comment">//0</span>
	n2        <span class="token comment">//1</span>
	n3        <span class="token comment">//2</span>
	n4        <span class="token comment">//3</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="\u8BA1\u7B97\u65B9\u5F0F\u4E5F\u4F1A\u7EE7\u627F" tabindex="-1">\u8BA1\u7B97\u65B9\u5F0F\u4E5F\u4F1A\u7EE7\u627F <a class="header-anchor" href="#\u8BA1\u7B97\u65B9\u5F0F\u4E5F\u4F1A\u7EE7\u627F" aria-hidden="true">#</a></h3><div class="language-go line-numbers-mode"><pre><code><span class="token keyword">const</span> <span class="token punctuation">(</span>
	<span class="token comment">//\u8BA1\u7B97\u65B9\u5F0F\u4E5F\u4F1A\u7EE7\u627F\u524D\u4E00\u884C\u7684\u8BA1\u7B97\u3002</span>
	BEIJING  <span class="token operator">=</span> <span class="token number">10</span> <span class="token operator">*</span> <span class="token boolean">iota</span> <span class="token comment">//iota = 0</span>
	SHANGHAI             <span class="token comment">//iota = 1</span>
	SHENZHEN             <span class="token comment">//iota = 2</span>
  <span class="token comment">//BEIJIGN =  0 SHANGHAI =  10 SHENZHEN =  20</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="\u51E0\u4E2A\u5E38\u89C1\u7684-iota-\u793A\u4F8B" tabindex="-1">\u51E0\u4E2A\u5E38\u89C1\u7684 iota \u793A\u4F8B: <a class="header-anchor" href="#\u51E0\u4E2A\u5E38\u89C1\u7684-iota-\u793A\u4F8B" aria-hidden="true">#</a></h3><p>\u4F7F\u7528_\u8DF3\u8FC7\u67D0\u4E9B\u503C</p><div class="language-go line-numbers-mode"><pre><code><span class="token keyword">const</span> <span class="token punctuation">(</span>
	n1 <span class="token operator">=</span> <span class="token boolean">iota</span> <span class="token comment">//0</span>
	n2        <span class="token comment">//1</span>
	<span class="token boolean">_</span>
	n4        <span class="token comment">//3</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><code>iota</code>\u58F0\u660E\u4E2D\u95F4\u63D2\u961F</p><div class="language-go line-numbers-mode"><pre><code><span class="token keyword">const</span> <span class="token punctuation">(</span>
	n1 <span class="token operator">=</span> <span class="token boolean">iota</span> <span class="token comment">//0</span>
	n2 <span class="token operator">=</span> <span class="token number">100</span>  <span class="token comment">//100</span>
	n3 <span class="token operator">=</span> <span class="token boolean">iota</span> <span class="token comment">//2</span>
	n4        <span class="token comment">//3</span>
<span class="token punctuation">)</span>
<span class="token keyword">const</span> n5 <span class="token operator">=</span> <span class="token boolean">iota</span> <span class="token comment">//0</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u591A\u4E2A<code>iota</code>\u5B9A\u4E49\u5728\u4E00\u884C</p><div class="language-go line-numbers-mode"><pre><code><span class="token keyword">const</span> <span class="token punctuation">(</span>
	a<span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token boolean">iota</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token boolean">iota</span> <span class="token operator">+</span> <span class="token number">2</span> <span class="token comment">// iota = 0, a = iota + 1, b = iota + 2, a = 1, b = 2</span>
	c<span class="token punctuation">,</span> d                      <span class="token comment">// iota = 1, c = iota + 1, d = iota + 2, c = 2, d = 3</span>
	e<span class="token punctuation">,</span> f                      <span class="token comment">// iota = 2, e = iota + 1, f = iota + 2, e = 3, f = 4</span>

	g<span class="token punctuation">,</span> h <span class="token operator">=</span> <span class="token boolean">iota</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token boolean">iota</span> <span class="token operator">*</span> <span class="token number">3</span> <span class="token comment">// iota = 3, g = iota * 2, h = iota * 3, g = 6, h = 9</span>
	i<span class="token punctuation">,</span> k                      <span class="token comment">// iota = 4, i = iota * 2, k = iota * 3 , i = 8, k = 12</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,24);function c(l,u,r,i,k,b){return t(),s("div",null,[a(`
 * @Author: lgy
 * @Date: 2022-01-17 13:39:45
 * @LastEditors: lgy
 * @LastEditTime: 2022-01-24 14:36:29
 * @Description: \u8BF7\u586B\u5199\u7B80\u4ECB
`),o])}var f=n(e,[["render",c]]);export{d as __pageData,f as default};
