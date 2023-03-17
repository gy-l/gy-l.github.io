import{_ as n,c as s,a,b as p,o as t}from"./app.2ef81f74.js";const d='{"title":"Map","description":"","frontmatter":{},"headers":[{"level":2,"title":"Map","slug":"map"},{"level":3,"title":"map \u7684\u5B9A\u4E49","slug":"map-\u7684\u5B9A\u4E49"},{"level":3,"title":"map \u4E09\u79CD\u7533\u660E\u65B9\u5F0F","slug":"map-\u4E09\u79CD\u7533\u660E\u65B9\u5F0F"},{"level":3,"title":"map \u64CD\u4F5C","slug":"map-\u64CD\u4F5C"},{"level":3,"title":"1.1.7. \u5143\u7D20\u4E3A map \u7C7B\u578B\u7684\u5207\u7247","slug":"_1-1-7-\u5143\u7D20\u4E3A-map-\u7C7B\u578B\u7684\u5207\u7247"},{"level":3,"title":"1.1.8. \u503C\u4E3A\u5207\u7247\u7C7B\u578B\u7684 map","slug":"_1-1-8-\u503C\u4E3A\u5207\u7247\u7C7B\u578B\u7684-map"}],"relativePath":"golang/map.md","lastUpdated":1642476481796}',e={},o=p(`__VP_STATIC_START__<h2 id="map" tabindex="-1">Map <a class="header-anchor" href="#map" aria-hidden="true">#</a></h2><p>map \u662F\u4E00\u79CD\u65E0\u5E8F\u7684\u57FA\u4E8E key-value \u7684\u6570\u636E\u7ED3\u6784\uFF0CGo \u8BED\u8A00\u4E2D\u7684 map \u662F\u5F15\u7528\u7C7B\u578B\uFF0C\u5FC5\u987B\u521D\u59CB\u5316\u624D\u80FD\u4F7F\u7528\u3002</p><h3 id="map-\u7684\u5B9A\u4E49" tabindex="-1">map \u7684\u5B9A\u4E49 <a class="header-anchor" href="#map-\u7684\u5B9A\u4E49" aria-hidden="true">#</a></h3><div class="language-go line-numbers-mode"><pre><code><span class="token keyword">map</span><span class="token punctuation">[</span>KeyType<span class="token punctuation">]</span>ValueType
<span class="token comment">//KeyType:\u8868\u793A\u952E\u7684\u7C7B\u578B\u3002</span>
<span class="token comment">//ValueType:\u8868\u793A\u952E\u5BF9\u5E94\u7684\u503C\u7684\u7C7B\u578B\u3002</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>map \u7C7B\u578B\u7684\u53D8\u91CF\u9ED8\u8BA4\u521D\u59CB\u503C\u4E3A nil\uFF0C\u9700\u8981\u4F7F\u7528 make()\u51FD\u6570\u6765\u5206\u914D\u5185\u5B58\u3002\u8BED\u6CD5\u4E3A\uFF1A</p><div class="language-go line-numbers-mode"><pre><code><span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span>KeyType<span class="token punctuation">]</span>ValueType<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token builtin">cap</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">//\u5176\u4E2Dcap\u8868\u793Amap\u7684\u5BB9\u91CF\uFF0C\u8BE5\u53C2\u6570\u867D\u7136\u4E0D\u662F\u5FC5\u987B\u7684\uFF0C\u4F46\u662F\u6211\u4EEC\u5E94\u8BE5\u5728\u521D\u59CB\u5316map\u7684\u65F6\u5019\u5C31\u4E3A\u5176\u6307\u5B9A\u4E00\u4E2A\u5408\u9002\u7684\u5BB9\u91CF\u3002</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="map-\u4E09\u79CD\u7533\u660E\u65B9\u5F0F" tabindex="-1">map \u4E09\u79CD\u7533\u660E\u65B9\u5F0F <a class="header-anchor" href="#map-\u4E09\u79CD\u7533\u660E\u65B9\u5F0F" aria-hidden="true">#</a></h3><div class="language-go line-numbers-mode"><pre><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//===&gt; \u7B2C\u4E00\u79CD\u58F0\u660E\u65B9\u5F0F</span>

	<span class="token comment">//\u58F0\u660EmyMap1\u662F\u4E00\u79CDmap\u7C7B\u578B key\u662Fstring\uFF0C value\u662Fstring</span>
	<span class="token keyword">var</span> myMap1 <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span>
	<span class="token keyword">if</span> myMap1 <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;myMap1 \u662F\u4E00\u4E2A\u7A7Amap&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//\u5728\u4F7F\u7528map\u524D\uFF0C \u9700\u8981\u5148\u7528make\u7ED9map\u5206\u914D\u6570\u636E\u7A7A\u95F4</span>
	myMap1 <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>

	myMap1<span class="token punctuation">[</span><span class="token string">&quot;one&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;java&quot;</span>
	myMap1<span class="token punctuation">[</span><span class="token string">&quot;two&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;c++&quot;</span>
	myMap1<span class="token punctuation">[</span><span class="token string">&quot;three&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;python&quot;</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>myMap1<span class="token punctuation">)</span>

	<span class="token comment">//===&gt; \u7B2C\u4E8C\u79CD\u58F0\u660E\u65B9\u5F0F</span>
	myMap2 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span>
	myMap2<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;java&quot;</span>
	myMap2<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;c++&quot;</span>
	myMap2<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;python&quot;</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>myMap2<span class="token punctuation">)</span>

	<span class="token comment">//===&gt; \u7B2C\u4E09\u79CD\u58F0\u660E\u65B9\u5F0F</span>
	myMap3 <span class="token operator">:=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span>
		<span class="token string">&quot;one&quot;</span><span class="token punctuation">:</span>   <span class="token string">&quot;php&quot;</span><span class="token punctuation">,</span>
		<span class="token string">&quot;two&quot;</span><span class="token punctuation">:</span>   <span class="token string">&quot;c++&quot;</span><span class="token punctuation">,</span>
		<span class="token string">&quot;three&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;python&quot;</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>myMap3<span class="token punctuation">)</span>


<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><h3 id="map-\u64CD\u4F5C" tabindex="-1">map \u64CD\u4F5C <a class="header-anchor" href="#map-\u64CD\u4F5C" aria-hidden="true">#</a></h3><div class="language-go line-numbers-mode"><pre><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">printMap</span><span class="token punctuation">(</span>cityMap <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//cityMap \u662F\u4E00\u4E2A\u5F15\u7528\u4F20\u9012</span>
	<span class="token keyword">for</span> key<span class="token punctuation">,</span> value <span class="token operator">:=</span> <span class="token keyword">range</span> cityMap <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;key = &quot;</span><span class="token punctuation">,</span> key<span class="token punctuation">)</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;value = &quot;</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">ChangeValue</span><span class="token punctuation">(</span>cityMap <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	cityMap<span class="token punctuation">[</span><span class="token string">&quot;England&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;London&quot;</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	cityMap <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span>

	<span class="token comment">//\u6DFB\u52A0</span>
	cityMap<span class="token punctuation">[</span><span class="token string">&quot;China&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;Beijing&quot;</span>
	cityMap<span class="token punctuation">[</span><span class="token string">&quot;Japan&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;Tokyo&quot;</span>
	cityMap<span class="token punctuation">[</span><span class="token string">&quot;USA&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;NewYork&quot;</span>

	<span class="token comment">//\u904D\u5386</span>
	<span class="token function">printMap</span><span class="token punctuation">(</span>cityMap<span class="token punctuation">)</span>

	<span class="token comment">//\u5220\u9664</span>
	<span class="token function">delete</span><span class="token punctuation">(</span>cityMap<span class="token punctuation">,</span> <span class="token string">&quot;China&quot;</span><span class="token punctuation">)</span>

	<span class="token comment">//\u4FEE\u6539</span>
	cityMap<span class="token punctuation">[</span><span class="token string">&quot;USA&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;DC&quot;</span>
	<span class="token function">ChangeValue</span><span class="token punctuation">(</span>cityMap<span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;-------&quot;</span><span class="token punctuation">)</span>

	<span class="token comment">//\u904D\u5386</span>
	<span class="token function">printMap</span><span class="token punctuation">(</span>cityMap<span class="token punctuation">)</span>

	<span class="token comment">//\u5224\u65AD\u662F\u5426\u5B58\u5728</span>
	v<span class="token punctuation">,</span> ok <span class="token operator">:=</span> cityMap<span class="token punctuation">[</span><span class="token string">&quot;USA&quot;</span><span class="token punctuation">]</span>
		<span class="token keyword">if</span> ok <span class="token punctuation">{</span>
				fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u4E0D\u5B58\u5728&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div><h3 id="_1-1-7-\u5143\u7D20\u4E3A-map-\u7C7B\u578B\u7684\u5207\u7247" tabindex="-1">1.1.7. \u5143\u7D20\u4E3A map \u7C7B\u578B\u7684\u5207\u7247 <a class="header-anchor" href="#_1-1-7-\u5143\u7D20\u4E3A-map-\u7C7B\u578B\u7684\u5207\u7247" aria-hidden="true">#</a></h3><p>\u4E0B\u9762\u7684\u4EE3\u7801\u6F14\u793A\u4E86\u5207\u7247\u4E2D\u7684\u5143\u7D20\u4E3A map \u7C7B\u578B\u65F6\u7684\u64CD\u4F5C\uFF1A</p><div class="language-go line-numbers-mode"><pre><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> mapSlice <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> index<span class="token punctuation">,</span> value <span class="token operator">:=</span> <span class="token keyword">range</span> mapSlice <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;index:%d value:%v\\n&quot;</span><span class="token punctuation">,</span> index<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;after init&quot;</span><span class="token punctuation">)</span>

    mapSlice<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
    mapSlice<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;\u738B\u4E94&quot;</span>
    mapSlice<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&quot;password&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;123456&quot;</span>
    mapSlice<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&quot;address&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;\u7EA2\u65D7\u5927\u8857&quot;</span>
    <span class="token keyword">for</span> index<span class="token punctuation">,</span> value <span class="token operator">:=</span> <span class="token keyword">range</span> mapSlice <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;index:%d value:%v\\n&quot;</span><span class="token punctuation">,</span> index<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="_1-1-8-\u503C\u4E3A\u5207\u7247\u7C7B\u578B\u7684-map" tabindex="-1">1.1.8. \u503C\u4E3A\u5207\u7247\u7C7B\u578B\u7684 map <a class="header-anchor" href="#_1-1-8-\u503C\u4E3A\u5207\u7247\u7C7B\u578B\u7684-map" aria-hidden="true">#</a></h3><p>\u4E0B\u9762\u7684\u4EE3\u7801\u6F14\u793A\u4E86 map \u4E2D\u503C\u4E3A\u5207\u7247\u7C7B\u578B\u7684\u64CD\u4F5C\uFF1A</p><div class="language-go line-numbers-mode"><pre><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> sliceMap <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>sliceMap<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;after init&quot;</span><span class="token punctuation">)</span>
    key <span class="token operator">:=</span> <span class="token string">&quot;\u4E2D\u56FD&quot;</span>
    value<span class="token punctuation">,</span> ok <span class="token operator">:=</span> sliceMap<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token operator">!</span>ok <span class="token punctuation">{</span>
        value <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    value <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token string">&quot;\u5317\u4EAC&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u4E0A\u6D77&quot;</span><span class="token punctuation">)</span>
    sliceMap<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> value
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>sliceMap<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>__VP_STATIC_END__`,16);function c(l,u,i,r,k,m){return t(),s("div",null,[a(`
 * @Author: lgy
 * @Date: 2022-01-18 10:55:45
 * @LastEditors: lgy
 * @LastEditTime: 2022-01-18 11:28:01
 * @Description: \u8BF7\u586B\u5199\u7B80\u4ECB
`),o])}var g=n(e,[["render",c]]);export{d as __pageData,g as default};
