(function () {
    var script = document.currentScript;
    var base = script ? (script.getAttribute('data-base') || '') : '';
    var isRoot = base === '' || base === './';

    var style = document.createElement('style');
    style.textContent = [
        'body { padding-top: 0; overflow-x: hidden; }',
        '.site-header {',
        '    background-color: #161616;',
        '    border-bottom: 1px solid #2e2e2e;',
        '    padding: 0.85rem 1.5rem;',
        '    margin: 0 -1rem 2rem;',
        '}',
        '.site-header-inner {',
        '    max-width: 1000px;',
        '    margin: 0 auto;',
        '    display: grid;',
        '    grid-template-columns: 1fr auto 1fr;',
        '    align-items: center;',
        '}',
        '.site-logo-link {',
        '    display: inline-flex;',
        '    align-items: center;',
        '    text-decoration: none;',
        '}',
        '.site-logo {',
        '    display: block;',
        '    width: 160px;',
        '    height: 48px;',
        '    object-fit: contain;',
        '}',
        '.site-nav {',
        '    display: flex;',
        '    align-items: center;',
        '    justify-content: center;',
        '    gap: clamp(0.75rem, 2.5vw, 1.5rem);',
        '}',
        '.site-nav-link {',
        '    color: #a0a0a0;',
        '    text-decoration: none;',
        '    font-size: 0.9rem;',
        '    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;',
        '    display: inline-flex;',
        '    align-items: center;',
        '    white-space: nowrap;',
        '    transition: color 0.2s ease;',
        '}',
        '.site-nav-link:hover { color: #00ff66; }',
        '.site-discord-icon {',
        '    display: block;',
        '    width: 24px;',
        '    height: 24px;',
        '}',
        '.site-nav-divider {',
        '    width: 1px;',
        '    height: 14px;',
        '    background: #2e2e2e;',
        '    flex-shrink: 0;',
        '}',
        '@media (max-width: 580px) {',
        '    .site-header-inner {',
        '        grid-template-columns: 1fr;',
        '        justify-items: center;',
        '        gap: 0.65rem;',
        '    }',
        '    .site-header-spacer { display: none; }',
        '}'
    ].join('\n');
    document.head.appendChild(style);

    var header = document.createElement('header');
    header.className = 'site-header';
    header.innerHTML =
        '<div class="site-header-inner">' +
            '<a href="' + base + 'index.html" class="site-logo-link">' +
                '<img src="' + base + 'assets/logo.png" width="160" height="48" alt="Catclass Tools" class="site-logo">' +
            '</a>' +
            '<nav class="site-nav">' +
                '<a href="https://links.catclass.space" class="site-nav-link" target="_blank" rel="noopener">Link Generation System</a>' +
                '<span class="site-nav-divider"></span>' +
                '<a href="https://discord.catclass.org" class="site-nav-link" target="_blank" rel="noopener">' +
                    '<img src="' + base + 'assets/discord.svg" width="24" height="24" alt="Discord" class="site-discord-icon">' +
                '</a>' +
            '</nav>' +
            '<div class="site-header-spacer"></div>' +
        '</div>';

    document.body.insertBefore(header, document.body.firstChild);
}());
