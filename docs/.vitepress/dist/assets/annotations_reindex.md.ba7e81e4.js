import{_ as s,o as n,c as a,V as l}from"./chunks/framework.d3b95951.js";const d=JSON.parse('{"title":"Reindex","description":"","frontmatter":{},"headers":[],"relativePath":"annotations/reindex.md","filePath":"annotations/reindex.md"}'),e={name:"annotations/reindex.md"},p=l(`<h1 id="reindex" tabindex="-1">Reindex <a class="header-anchor" href="#reindex" aria-label="Permalink to &quot;Reindex&quot;">​</a></h1><h2 id="fixed" tabindex="-1">Fixed <a class="header-anchor" href="#fixed" aria-label="Permalink to &quot;Fixed&quot;">​</a></h2><p>The <strong>reindex(n)</strong> annotation will reassign the line number of the line(s) it is applied to.</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// lighty {&quot;skipLineParsing&quot;: true}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// This is a long bit of text, hard to reindex the middle.</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;&lt;&lt;EOT</span></span>
<span class="line"><span style="color:#C3E88D;">spring sunshine</span></span>
<span class="line"><span style="color:#C3E88D;">the smell of waters</span></span>
<span class="line"><span style="color:#C3E88D;">from the stars</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">deep winter</span></span>
<span class="line"><span style="color:#C3E88D;">the smell of a crow [lighty reindex(99)]</span></span>
<span class="line"><span style="color:#C3E88D;">from the stars</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">beach to school</span></span>
<span class="line"><span style="color:#C3E88D;">the smell of water</span></span>
<span class="line"><span style="color:#C3E88D;">in the sky</span></span>
<span class="line"><span style="color:#89DDFF;">EOT</span><span style="color:#89DDFF;">;[</span><span style="color:#A6ACCD;">lighty highlight</span><span style="color:#89DDFF;">:-</span><span style="color:#F78C6C;">9</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">]</span></span></code></pre></div><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// This is a long bit of text, hard to reindex the middle.</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;&lt;&lt;EOT</span></span>
<span class="line"><span style="color:#C3E88D;">spring sunshine</span></span>
<span class="line"><span style="color:#C3E88D;">the smell of waters</span></span>
<span class="line"><span style="color:#C3E88D;">from the stars</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">deep winter</span></span>
<span class="line"><span style="color:#C3E88D;">the smell of a crow [lighty reindex(99)]</span></span>
<span class="line"><span style="color:#C3E88D;">from the stars</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">beach to school</span></span>
<span class="line"><span style="color:#C3E88D;">the smell of water</span></span>
<span class="line"><span style="color:#C3E88D;">in the sky</span></span>
<span class="line"><span style="color:#89DDFF;">EOT</span><span style="color:#89DDFF;">;[</span><span style="color:#A6ACCD;">lighty highlight</span><span style="color:#89DDFF;">:-</span><span style="color:#F78C6C;">9</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">]</span></span></code></pre></div><h2 id="increment" tabindex="-1">Increment <a class="header-anchor" href="#increment" aria-label="Permalink to &quot;Increment&quot;">​</a></h2><p>The <strong>reindex(+n)</strong> annotation will increment the line number of the line(s) it is applied to.</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// lighty {&quot;skipLineParsing&quot;: true}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// This is a long bit of text, hard to reindex the middle. [lighty reindex(+5):5,5]</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;&lt;&lt;EOT</span></span>
<span class="line"><span style="color:#C3E88D;">spring sunshine</span></span>
<span class="line"><span style="color:#C3E88D;">the smell of waters</span></span>
<span class="line"><span style="color:#C3E88D;">from the stars</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">deep winter</span></span>
<span class="line"><span style="color:#C3E88D;">the smell of a crow</span></span>
<span class="line"><span style="color:#C3E88D;">from the stars</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">beach to school</span></span>
<span class="line"><span style="color:#C3E88D;">the smell of water</span></span>
<span class="line"><span style="color:#C3E88D;">in the sky</span></span>
<span class="line"><span style="color:#89DDFF;">EOT</span><span style="color:#89DDFF;">;[</span><span style="color:#A6ACCD;">lighty highlight</span><span style="color:#89DDFF;">:-</span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">]</span></span></code></pre></div><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// This is a long bit of text, hard to reindex the middle. [lighty reindex(+5):5,5]</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;&lt;&lt;EOT</span></span>
<span class="line"><span style="color:#C3E88D;">spring sunshine</span></span>
<span class="line"><span style="color:#C3E88D;">the smell of waters</span></span>
<span class="line"><span style="color:#C3E88D;">from the stars</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">deep winter</span></span>
<span class="line"><span style="color:#C3E88D;">the smell of a crow</span></span>
<span class="line"><span style="color:#C3E88D;">from the stars</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">beach to school</span></span>
<span class="line"><span style="color:#C3E88D;">the smell of water</span></span>
<span class="line"><span style="color:#C3E88D;">in the sky</span></span>
<span class="line"><span style="color:#89DDFF;">EOT</span><span style="color:#89DDFF;">;[</span><span style="color:#A6ACCD;">lighty highlight</span><span style="color:#89DDFF;">:-</span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">]</span></span></code></pre></div><h2 id="decrement" tabindex="-1">Decrement <a class="header-anchor" href="#decrement" aria-label="Permalink to &quot;Decrement&quot;">​</a></h2><p>The <strong>reindex(-n)</strong> annotation will decrement the line number of the line(s) it is applied to.</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// lighty {&quot;skipLineParsing&quot;: true}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// This is a long bit of text, hard to reindex the middle. [lighty reindex(-5):5,5]</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;&lt;&lt;EOT</span></span>
<span class="line"><span style="color:#C3E88D;">spring sunshine</span></span>
<span class="line"><span style="color:#C3E88D;">the smell of waters</span></span>
<span class="line"><span style="color:#C3E88D;">from the stars</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">deep winter</span></span>
<span class="line"><span style="color:#C3E88D;">the smell of a crow</span></span>
<span class="line"><span style="color:#C3E88D;">from the stars</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">beach to school</span></span>
<span class="line"><span style="color:#C3E88D;">the smell of water</span></span>
<span class="line"><span style="color:#C3E88D;">in the sky</span></span>
<span class="line"><span style="color:#89DDFF;">EOT</span><span style="color:#89DDFF;">;[</span><span style="color:#A6ACCD;">lighty highlight</span><span style="color:#89DDFF;">:-</span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">]</span></span></code></pre></div><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// This is a long bit of text, hard to reindex the middle. [lighty reindex(-5):5,5]</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;&lt;&lt;EOT</span></span>
<span class="line"><span style="color:#C3E88D;">spring sunshine</span></span>
<span class="line"><span style="color:#C3E88D;">the smell of waters</span></span>
<span class="line"><span style="color:#C3E88D;">from the stars</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">deep winter</span></span>
<span class="line"><span style="color:#C3E88D;">the smell of a crow</span></span>
<span class="line"><span style="color:#C3E88D;">from the stars</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">beach to school</span></span>
<span class="line"><span style="color:#C3E88D;">the smell of water</span></span>
<span class="line"><span style="color:#C3E88D;">in the sky</span></span>
<span class="line"><span style="color:#89DDFF;">EOT</span><span style="color:#89DDFF;">;[</span><span style="color:#A6ACCD;">lighty highlight</span><span style="color:#89DDFF;">:-</span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">]</span></span></code></pre></div><h2 id="hide" tabindex="-1">Hide <a class="header-anchor" href="#hide" aria-label="Permalink to &quot;Hide&quot;">​</a></h2><p>The <strong>reindex(0)</strong> annotation will hide the line(s) it is applied to.</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// lighty {&quot;skipLineParsing&quot;: true}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// This is a long bit of text, hard to reindex the middle. [lighty reindex(null):5,5]</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;&lt;&lt;EOT</span></span>
<span class="line"><span style="color:#C3E88D;">spring sunshine</span></span>
<span class="line"><span style="color:#C3E88D;">the smell of waters</span></span>
<span class="line"><span style="color:#C3E88D;">from the stars</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">deep winter</span></span>
<span class="line"><span style="color:#C3E88D;">the smell of a crow</span></span>
<span class="line"><span style="color:#C3E88D;">from the stars</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">beach to school</span></span>
<span class="line"><span style="color:#C3E88D;">the smell of water</span></span>
<span class="line"><span style="color:#C3E88D;">in the sky</span></span>
<span class="line"><span style="color:#89DDFF;">EOT</span><span style="color:#89DDFF;">;[</span><span style="color:#A6ACCD;">lighty highlight</span><span style="color:#89DDFF;">:-</span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">]</span></span></code></pre></div><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// This is a long bit of text, hard to reindex the middle. [lighty reindex(null):5,5]</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;&lt;&lt;EOT</span></span>
<span class="line"><span style="color:#C3E88D;">spring sunshine</span></span>
<span class="line"><span style="color:#C3E88D;">the smell of waters</span></span>
<span class="line"><span style="color:#C3E88D;">from the stars</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">deep winter</span></span>
<span class="line"><span style="color:#C3E88D;">the smell of a crow</span></span>
<span class="line"><span style="color:#C3E88D;">from the stars</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">beach to school</span></span>
<span class="line"><span style="color:#C3E88D;">the smell of water</span></span>
<span class="line"><span style="color:#C3E88D;">in the sky</span></span>
<span class="line"><span style="color:#89DDFF;">EOT</span><span style="color:#89DDFF;">;[</span><span style="color:#A6ACCD;">lighty highlight</span><span style="color:#89DDFF;">:-</span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">]</span></span></code></pre></div>`,17),t=[p];function o(i,c,r,y,h,D){return n(),a("div",null,t)}const F=s(e,[["render",o]]);export{d as __pageData,F as default};
