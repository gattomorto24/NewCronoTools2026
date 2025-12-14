/* --- CronoTools UI Manager --- */

const UI = {
    init() {
        this.cacheDOM();
        this.bindEvents();
        this.initTheme();
        this.handleScroll();
    },

    // Called when navbar (or other UI pieces) render later
    onNavbarRendered() {
        this.cacheDOM();
        // ensure any newly rendered sidebar buttons are hooked
        this.initTheme();
    },

    cacheDOM() {
        this.body = document.body;
        this.navbar = document.getElementById('global-navbar');
        this.sidebarLeft = document.getElementById('sidebar-left');
        this.sidebarRight = document.getElementById('sidebar-right');
        this.backdrop = document.getElementById('backdrop');
        this.menuBtn = document.getElementById('menu-btn');
        this.settingsBtn = document.getElementById('settings-btn');
    },

    bindEvents() {
        if (this.menuBtn) this.menuBtn.addEventListener('click', () => this.toggleSidebar('left'));
        if (this.settingsBtn) this.settingsBtn.addEventListener('click', () => this.toggleSidebar('right'));
        if (this.backdrop) this.backdrop.addEventListener('click', () => this.closeAllSidebars());
        
        window.addEventListener('scroll', () => this.handleScroll(), { passive: true });
        // Keep UI in sync when navbar preferences change (beta toggle, style changes)
        window.addEventListener('crono-bar-update', () => {
            this.cacheDOM();
            this.handleScroll();
        });
        
        // Close sidebar on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.closeAllSidebars();
        });

        // Delegate theme button clicks (works even if buttons are rendered later)
        document.addEventListener('click', (e) => {
            const btn = e.target.closest('[data-set-theme]');
            if (btn && btn.dataset && btn.dataset.setTheme) {
                this.setTheme(btn.dataset.setTheme);
            }
        });

        // If navbar renders after UI.init, re-run theme setup
        window.addEventListener('crono-navbar-rendered', () => this.onNavbarRendered());
    },

    handleScroll() {
        if (!this.navbar) return;

        // If beta glass mode is activated, keep the navbar docked and avoid 'scrolled' state
        if (document.body.classList.contains('beta-glass-mode')) {
            this.navbar.classList.remove('scrolled');
            return;
        }

        if (window.scrollY > 20) this.navbar.classList.add('scrolled'); else this.navbar.classList.remove('scrolled');
    },

    toggleSidebar(side) {
        this.closeAllSidebars();
        const sidebar = side === 'left' ? this.sidebarLeft : this.sidebarRight;
        if (sidebar) {
            sidebar.classList.add('open');
            this.backdrop.classList.add('active');
            this.body.classList.add('no-scroll');
        }
    },

    closeAllSidebars() {
        document.querySelectorAll('.sidebar.open').forEach(el => el.classList.remove('open'));
        if (this.backdrop) this.backdrop.classList.remove('active');
        this.body.classList.remove('no-scroll');
    },

    initTheme() {
        const savedTheme = localStorage.getItem('crono-theme');
        let theme = savedTheme;
        if (!theme) {
            theme = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
        }

        document.documentElement.setAttribute('data-theme', theme);



        // Update active state in theme menu if exists
        document.querySelectorAll('[data-set-theme]').forEach(btn => {
            if (btn.dataset.setTheme === theme) btn.classList.add('active');
            btn.addEventListener('click', (e) => {
                this.setTheme(e.currentTarget.dataset.setTheme);
            });
        });

        // If user hasn't chosen a theme explicitly, follow system changes
        if (!savedTheme && window.matchMedia) {
            const mq = window.matchMedia('(prefers-color-scheme: dark)');
            const listener = (e) => {
                this.setTheme(e.matches ? 'dark' : 'light');
            };
            if (mq.addEventListener) mq.addEventListener('change', listener); else mq.addListener(listener);
        }
    },

    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('crono-theme', theme);
        
        // Update UI
        document.querySelectorAll('[data-set-theme]').forEach(btn => btn.classList.remove('active'));
        const activeBtn = document.querySelector(`[data-set-theme="${theme}"]`);
        if (activeBtn) activeBtn.classList.add('active');

        // No navbar selector; theme UI updates handled via sidebar buttons
    },

    showAlert(title, message, actions = []) {
        // Remove existing alert
        const existing = document.querySelector('.ios-alert');
        if (existing) existing.remove();

        const alertEl = document.createElement('div');
        alertEl.className = 'ios-alert active';
        alertEl.innerHTML = `
            <h3>${title}</h3>
            <p>${message}</p>
            <div class="alert-actions"></div>
        `;

        const actionsContainer = alertEl.querySelector('.alert-actions');
        
        if (actions.length === 0) {
            actions = [{ text: 'OK', class: 'primary', action: () => {} }];
        }

        actions.forEach(act => {
            const btn = document.createElement('button');
            btn.className = `alert-btn ${act.class || ''}`;
            btn.textContent = act.text;
            btn.onclick = () => {
                alertEl.classList.remove('active');
                setTimeout(() => alertEl.remove(), 300);
                this.backdrop.classList.remove('active'); // Close backdrop if used
                if (act.action) act.action();
            };
            actionsContainer.appendChild(btn);
        });

        document.body.appendChild(alertEl);
        
        // Optional: use backdrop for alert too
        // this.backdrop.classList.add('active');
    }
};

document.addEventListener('DOMContentLoaded', () => UI.init());