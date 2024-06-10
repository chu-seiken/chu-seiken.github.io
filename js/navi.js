
var path = document.location.pathname;

var s = `
<ul id="topnav">
	<li class="index1"><a href="index.html">トップページ<br><span>Top</span></a></li>
	<li class="index2"><a href="about_cvl.html">CVLについて<br><span>About CVL</span></a></li>
	<li class="index3"><a href="cvl.html">CVL（Chuseiken <br>Vulnerability List）</a></li>
	<li class="index4"><a href="report.html">定期レポート<br><span>Report</span></a></li>
	<li class=""><a href="http://chuseiken.or.jp/index.html" target="_blank">当法人について<br><span>About</span></a></li>
	<li class="index5"><a href="contact.html" target="_blank">脆弱性・情報漏洩の報告<br><span>Contact</span></a></li>
</ul>
`;

var q;

if (path == "/index.html" || path == "/") {
	q = s.replace('index1', 'active');
} else if (path == "/about_cvl.html") {
	q = s.replace('index2', 'active');
} else if (path == "/cvl.html") {
	q = s.replace('index3', 'active');
} else if (path == "/report.html") {
	q = s.replace('index4', 'active');
} else if (path == "/contact.html") {
	q = s.replace('index5', 'active');
} else {
	q = s;
}

document.write(q);
