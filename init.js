header = `
<h1>
    <a href="index.html" style="text-decoration: none; color: inherit;">
        <img src="figure/icon.png" alt="Article SAVE Logo" style="height: 50px; vertical-align: middle; margin-right: 10px;">
        Article SAVE
    </a>
</h1>
`;

footer = `
<p>
    © 2026 <a href="https://github.com/elecbug">elecbug</a> in <a href="https://github.com/kmu-save">KMU SAVE</a>. All rights reserved.
</p>
`;

nav = `
<h3 style="margin-bottom: 10px; text-align: center;">
    MENU
</h3>
<div class="nav-separator"></div>
<table>
    <tr>
        <td><a href="index.html">홈</a></td>
    </tr>
    <tr>
        <td><a href="submission-procedure.html">투고 절차 안내</a></td>
    </tr>
</table>
`;

document.getElementById('header').innerHTML = header;
document.getElementById('footer').innerHTML = footer;
document.getElementById('nav').innerHTML = nav;
