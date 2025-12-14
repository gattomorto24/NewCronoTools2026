/* --- Universal Navbar Component (Morphing Design) --- */

class GlobalNavbar extends HTMLElement {
    connectedCallback() {
        this.render();
        this.applyUserPreferences();
        
        // Listener per aggiornamenti
        window.addEventListener('crono-bar-update', () => this.applyUserPreferences());
    }

    render() {
        this.innerHTML = `
        <nav id="global-navbar">
            <div class="nav-pill" id="dynamic-pill">
                <button class="nav-btn" id="menu-btn" aria-label="Menu" onclick="UI.toggleSidebar('left')">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                </button>
                
                <div class="nav-center">
                    <div class="nav-center-links desktop-only">
                         ${this.getMenuLinks('nav-link')}
                    </div>
                    <div class="nav-mini-logo">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                        <span>CronoTools</span>
                    </div>
                </div>

                <button class="nav-btn" id="settings-btn" aria-label="Settings" onclick="UI.toggleSidebar('right')">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1 0-2.83 2 2 0 0 1 0-2.83l.06.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                </button>
            </div>
        </nav>
        
        <aside class="sidebar" id="sidebar-left">
            <div class="sidebar-header">
                <span class="sidebar-title">Menu</span>
                <button class="nav-btn" onclick="UI.closeAllSidebars()" style="width: 32px; height: 32px;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
            </div>
            <div class="sidebar-content">
                <div class="menu-list">
                    ${this.getMenuLinks('menu-item')}
                </div>
            </div>
        </aside>

        <aside class="sidebar right" id="sidebar-right">
            <div class="sidebar-header">
                <span class="sidebar-title">Impostazioni</span>
                <button class="nav-btn" onclick="UI.closeAllSidebars()" style="width: 32px; height: 32px;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
            </div>
            <div class="sidebar-content">
                
                <!-- OLD DESIGN SWITCHER -->
                <div class="ios-toggle-wrapper" onclick="toggleOldDesign()">
                    <div class="ios-toggle-label">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right:8px"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line></svg>
                        Barra Minimale
                    </div>
                    <input type="checkbox" class="ios-toggle" id="oldDesignCheckbox" onclick="event.stopPropagation(); toggleOldDesign();">
                </div>

                <div class="dynamic-config-link" style="margin-bottom: 24px;">
                    <a href="/dynamic-bar/index.html" class="menu-item" style="background: var(--bg-tertiary); font-weight: 600; color: var(--accent); justify-content: center;">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 8px;"><rect x="2" y="6" width="20" height="12" rx="6"></rect></svg>
                        Configura Dynamic Bar
                    </a>
                </div>

                <h4 style="margin: 0 0 12px; opacity: 0.6; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; padding-left: 4px;">Tema</h4>
                <div class="menu-list theme-list">
                    ${this.getThemeButtons()}
                </div>
            </div>
        </aside>
        <div class="backdrop" id="backdrop"></div>
        `;
    }

    /* --- Shared Helpers --- */
    getMenuLinks(className) {
        const links = [
            { href: '/index.html', text: 'Home', match: '/index.html' },
            { href: '/ai/index.html', text: '✨ AI Remove BG', match: '/ai', style: 'color: var(--accent); font-weight: 700;' },
            { href: '/filtri/index.html', text: 'Filtri', match: '/filtri' },
            { href: '/crop-immagini/index.html', text: 'Ritaglia', match: '/crop' },
            { href: '/base64/index.html', text: 'Convertitore', match: '/base64' },
            { href: '/ridimensiona/index.html', text: 'Ridimensiona', match: '/ridimensiona' },
            { href: '/qr/index.html', text: 'QR Code', match: '/qr' },
        ];

        return links.map(link => {
            const active = this.isActive(link.match) ? 'active' : '';
            return `<a href="${link.href}" class="${className} ${active}" style="${link.style || ''}">${link.text}</a>`;
        }).join('');
    }

    getThemeButtons() {
        const themes = ['light', 'dark', 'midnight', 'slate', 'latte', 'sunset', 'forest', 'lavanda', 'cyberpunk'];
        return themes.map(t => 
            `<button class="menu-item" data-set-theme="${t}"><span class="theme-dot" style="background: var(--bg-primary);"></span> ${t.charAt(0).toUpperCase() + t.slice(1)}</button>`
        ).join('');
    }

    isActive(path) {
        return window.location.pathname.includes(path);
    }

    applyUserPreferences() {
        const body = document.body;
        const isOldDesign = localStorage.getItem('old-design-active') === 'true';
        
        // Toggle Class on Body
        body.classList.toggle('old-design-mode', isOldDesign);
        
        // Update Checkbox UI
        const checkbox = this.querySelector('#oldDesignCheckbox');
        if(checkbox) checkbox.checked = isOldDesign;

        // Hide "Configura Dynamic Bar" if in old mode
        const configLink = this.querySelector('.dynamic-config-link');
        if(configLink) configLink.style.display = isOldDesign ? 'none' : 'block';

        if (!isOldDesign) {
            const prefs = JSON.parse(localStorage.getItem('crono-bar-prefs') || '{}');
            body.classList.toggle('dynamic-island-mode', prefs.style === 'island');
        } else {
            body.classList.remove('dynamic-island-mode');
        }
    }
}

// Global toggle function
window.toggleOldDesign = function() {
    const isActive = localStorage.getItem('old-design-active') === 'true';
    localStorage.setItem('old-design-active', !isActive);
    window.dispatchEvent(new Event('crono-bar-update'));
};

customElements.define('crono-navbar', GlobalNavbar);