header = `
<h1>
    <a href="index.html" style="text-decoration: none; color: inherit;">
        <img src="/figure/icon.png" alt="Article SAVE Logo" style="height: 50px; vertical-align: middle; margin-right: 10px;">
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
<div>
<table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
    <tr>
        <td><button class="menu-button" id="home-button">홈</button></td>
    </tr>
    <tr>
        <td><button class="menu-button" id="submission-procedure-button">투고 절차 안내</button></td>
    </tr>
</table>
</div>
`;

document.getElementById('header').innerHTML = header;
document.getElementById('footer').innerHTML = footer;
document.getElementById('nav').innerHTML = nav;

// Navigation button event listeners
document.getElementById('home-button').addEventListener('click', function() {
    window.location.href = '/index';
});

document.getElementById('submission-procedure-button').addEventListener('click', function() {
    window.location.href = '/submission-procedure';
});