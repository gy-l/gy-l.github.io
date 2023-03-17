import{_ as t,c as d,a as r,b as e,o as a}from"./app.2ef81f74.js";const _='{"title":"\u8FD0\u7B97\u7B26","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u7B97\u6570\u8FD0\u7B97\u7B26","slug":"\u7B97\u6570\u8FD0\u7B97\u7B26"},{"level":3,"title":"\u5173\u7CFB\u8FD0\u7B97\u7B26","slug":"\u5173\u7CFB\u8FD0\u7B97\u7B26"},{"level":3,"title":"\u903B\u8F91\u8FD0\u7B97\u7B26","slug":"\u903B\u8F91\u8FD0\u7B97\u7B26"},{"level":3,"title":"\u4F4D\u8FD0\u7B97\u7B26","slug":"\u4F4D\u8FD0\u7B97\u7B26"},{"level":3,"title":"\u8D4B\u503C\u8FD0\u7B97\u7B26","slug":"\u8D4B\u503C\u8FD0\u7B97\u7B26"}],"relativePath":"golang/\u8FD0\u7B97\u7B26.md","lastUpdated":1642391597091}',l={},s=e(`<h1 id="\u8FD0\u7B97\u7B26" tabindex="-1">\u8FD0\u7B97\u7B26 <a class="header-anchor" href="#\u8FD0\u7B97\u7B26" aria-hidden="true">#</a></h1><p>Go \u8BED\u8A00\u5185\u7F6E\u7684\u8FD0\u7B97\u7B26\u6709\uFF1A</p><div class="language-"><pre><code>\u7B97\u672F\u8FD0\u7B97\u7B26
\u5173\u7CFB\u8FD0\u7B97\u7B26
\u903B\u8F91\u8FD0\u7B97\u7B26
\u4F4D\u8FD0\u7B97\u7B26
\u8D4B\u503C\u8FD0\u7B97\u7B26
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="\u7B97\u6570\u8FD0\u7B97\u7B26" tabindex="-1">\u7B97\u6570\u8FD0\u7B97\u7B26 <a class="header-anchor" href="#\u7B97\u6570\u8FD0\u7B97\u7B26" aria-hidden="true">#</a></h3><table><thead><tr><th>\u8FD0\u7B97\u7B26</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>+</td><td>\u76F8\u52A0</td></tr><tr><td>-</td><td>\u76F8\u51CF</td></tr><tr><td>*</td><td>\u76F8\u4E58</td></tr><tr><td>/</td><td>\u76F8\u9664</td></tr><tr><td>%</td><td>\u6C42\u4F59</td></tr></tbody></table><p>\u6CE8\u610F\uFF1A ++\uFF08\u81EA\u589E\uFF09\u548C--\uFF08\u81EA\u51CF\uFF09\u5728 Go \u8BED\u8A00\u4E2D\u662F\u5355\u72EC\u7684\u8BED\u53E5\uFF0C\u5E76\u4E0D\u662F\u8FD0\u7B97\u7B26\u3002</p><h3 id="\u5173\u7CFB\u8FD0\u7B97\u7B26" tabindex="-1">\u5173\u7CFB\u8FD0\u7B97\u7B26 <a class="header-anchor" href="#\u5173\u7CFB\u8FD0\u7B97\u7B26" aria-hidden="true">#</a></h3><table><thead><tr><th>\u8FD0\u7B97\u7B26</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>==</td><td>\u68C0\u67E5\u4E24\u4E2A\u503C\u662F\u5426\u76F8\u7B49\uFF0C\u5982\u679C\u76F8\u7B49\u8FD4\u56DE True \u5426\u5219\u8FD4\u56DE False\u3002</td></tr><tr><td>!=</td><td>\u68C0\u67E5\u4E24\u4E2A\u503C\u662F\u5426\u4E0D\u76F8\u7B49\uFF0C\u5982\u679C\u4E0D\u76F8\u7B49\u8FD4\u56DE True \u5426\u5219\u8FD4\u56DE False\u3002</td></tr><tr><td>&gt;</td><td>\u68C0\u67E5\u5DE6\u8FB9\u503C\u662F\u5426\u5927\u4E8E\u53F3\u8FB9\u503C\uFF0C\u5982\u679C\u662F\u8FD4\u56DE True \u5426\u5219\u8FD4\u56DE False\u3002</td></tr><tr><td>&gt;=</td><td>\u68C0\u67E5\u5DE6\u8FB9\u503C\u662F\u5426\u5927\u4E8E\u7B49\u4E8E\u53F3\u8FB9\u503C\uFF0C\u5982\u679C\u662F\u8FD4\u56DE True \u5426\u5219\u8FD4\u56DE False\u3002</td></tr><tr><td>&lt;</td><td>\u68C0\u67E5\u5DE6\u8FB9\u503C\u662F\u5426\u5C0F\u4E8E\u53F3\u8FB9\u503C\uFF0C\u5982\u679C\u662F\u8FD4\u56DE True \u5426\u5219\u8FD4\u56DE False\u3002</td></tr><tr><td>&lt;=</td><td>\u68C0\u67E5\u5DE6\u8FB9\u503C\u662F\u5426\u5C0F\u4E8E\u7B49\u4E8E\u53F3\u8FB9\u503C\uFF0C\u5982\u679C\u662F\u8FD4\u56DE True \u5426\u5219\u8FD4\u56DE False\u3002</td></tr></tbody></table><h3 id="\u903B\u8F91\u8FD0\u7B97\u7B26" tabindex="-1">\u903B\u8F91\u8FD0\u7B97\u7B26 <a class="header-anchor" href="#\u903B\u8F91\u8FD0\u7B97\u7B26" aria-hidden="true">#</a></h3><table><thead><tr><th>\u8FD0\u7B97\u7B26</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>&amp;&amp;</td><td>\u903B\u8F91 AND \u8FD0\u7B97\u7B26\u3002 \u5982\u679C\u4E24\u8FB9\u7684\u64CD\u4F5C\u6570\u90FD\u662F True\uFF0C\u5219\u4E3A True\uFF0C\u5426\u5219\u4E3A False\u3002</td></tr><tr><td>ll</td><td>\u903B\u8F91 OR \u8FD0\u7B97\u7B26\u3002 \u5982\u679C\u4E24\u8FB9\u7684\u64CD\u4F5C\u6570\u6709\u4E00\u4E2A True\uFF0C\u5219\u4E3A True\uFF0C\u5426\u5219\u4E3A False\u3002</td></tr><tr><td>!</td><td>\u903B\u8F91 NOT \u8FD0\u7B97\u7B26\u3002 \u5982\u679C\u6761\u4EF6\u4E3A True\uFF0C\u5219\u4E3A False\uFF0C\u5426\u5219\u4E3A True\u3002</td></tr></tbody></table><h3 id="\u4F4D\u8FD0\u7B97\u7B26" tabindex="-1">\u4F4D\u8FD0\u7B97\u7B26 <a class="header-anchor" href="#\u4F4D\u8FD0\u7B97\u7B26" aria-hidden="true">#</a></h3><p>\u4F4D\u8FD0\u7B97\u7B26\u5BF9\u6574\u6570\u5728\u5185\u5B58\u4E2D\u7684\u4E8C\u8FDB\u5236\u4F4D\u8FDB\u884C\u64CD\u4F5C\u3002</p><table><thead><tr><th>\u8FD0\u7B97\u7B26</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>&amp;</td><td>\u53C2\u4E0E\u8FD0\u7B97\u7684\u4E24\u6570\u5404\u5BF9\u5E94\u7684\u4E8C\u8FDB\u4F4D\u76F8\u4E0E\u3002\uFF08\u4E24\u4F4D\u5747\u4E3A 1 \u624D\u4E3A 1\uFF09</td></tr><tr><td>l</td><td>\u53C2\u4E0E\u8FD0\u7B97\u7684\u4E24\u6570\u5404\u5BF9\u5E94\u7684\u4E8C\u8FDB\u4F4D\u76F8\u6216\u3002\uFF08\u4E24\u4F4D\u6709\u4E00\u4E2A\u4E3A 1 \u5C31\u4E3A 1\uFF09</td></tr><tr><td>^</td><td>\u53C2\u4E0E\u8FD0\u7B97\u7684\u4E24\u6570\u5404\u5BF9\u5E94\u7684\u4E8C\u8FDB\u4F4D\u76F8\u5F02\u6216\uFF0C\u5F53\u4E24\u5BF9\u5E94\u7684\u4E8C\u8FDB\u4F4D\u76F8\u5F02\u65F6\uFF0C\u7ED3\u679C\u4E3A 1\u3002\uFF08\u4E24\u4F4D\u4E0D\u4E00\u6837\u5219\u4E3A 1\uFF09</td></tr><tr><td>&lt;&lt;</td><td>\u5DE6\u79FB n \u4F4D\u5C31\u662F\u4E58\u4EE5 2 \u7684 n \u6B21\u65B9\u3002\u201Ca&lt;&lt;b\u201D\u662F\u628A a \u7684\u5404\u4E8C\u8FDB\u4F4D\u5168\u90E8\u5DE6\u79FB b \u4F4D\uFF0C\u9AD8\u4F4D\u4E22\u5F03\uFF0C\u4F4E\u4F4D\u8865 0\u3002</td></tr><tr><td>&gt;&gt;</td><td>\u53F3\u79FB n \u4F4D\u5C31\u662F\u9664\u4EE5 2 \u7684 n \u6B21\u65B9\u3002\u201Ca&gt;&gt;b\u201D\u662F\u628A a \u7684\u5404\u4E8C\u8FDB\u4F4D\u5168\u90E8\u53F3\u79FB b \u4F4D\u3002</td></tr></tbody></table><h3 id="\u8D4B\u503C\u8FD0\u7B97\u7B26" tabindex="-1">\u8D4B\u503C\u8FD0\u7B97\u7B26 <a class="header-anchor" href="#\u8D4B\u503C\u8FD0\u7B97\u7B26" aria-hidden="true">#</a></h3><table><thead><tr><th>\u8FD0\u7B97\u7B26</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>=</td><td>\u7B80\u5355\u7684\u8D4B\u503C\u8FD0\u7B97\u7B26\uFF0C\u5C06\u4E00\u4E2A\u8868\u8FBE\u5F0F\u7684\u503C\u8D4B\u7ED9\u4E00\u4E2A\u5DE6\u503C</td></tr><tr><td>+=</td><td>\u76F8\u52A0\u540E\u518D\u8D4B\u503C</td></tr><tr><td>-=</td><td>\u76F8\u51CF\u540E\u518D\u8D4B\u503C</td></tr><tr><td>*=</td><td>\u76F8\u4E58\u540E\u518D\u8D4B\u503C</td></tr><tr><td>/=</td><td>\u76F8\u9664\u540E\u518D\u8D4B\u503C</td></tr><tr><td>%=</td><td>\u6C42\u4F59\u540E\u518D\u8D4B\u503C</td></tr><tr><td>&lt;&lt;=</td><td>\u5DE6\u79FB\u540E\u8D4B\u503C</td></tr><tr><td>&gt;&gt;=</td><td>\u53F3\u79FB\u540E\u8D4B\u503C</td></tr><tr><td>&amp;=</td><td>\u6309\u4F4D\u4E0E\u540E\u8D4B\u503C</td></tr><tr><td>l=</td><td>\u6309\u4F4D\u6216\u540E\u8D4B\u503C</td></tr><tr><td>^=</td><td>\u6309\u4F4D\u5F02\u6216\u540E\u8D4B\u503C</td></tr></tbody></table>`,15);function n(h,i,o,b,c,p){return a(),d("div",null,[r(`
 * @Author: lgy
 * @Date: 2022-01-17 11:45:59
 * @LastEditors: lgy
 * @LastEditTime: 2022-01-17 11:53:17
 * @Description: \u8BF7\u586B\u5199\u7B80\u4ECB
`),s])}var g=t(l,[["render",n]]);export{_ as __pageData,g as default};
