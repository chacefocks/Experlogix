/*
 * Modern Interactions JavaScript
 * Enhanced functionality for the modernized configurator
 */

(function() {
    'use strict';

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeModernFeatures);
    } else {
        initializeModernFeatures();
    }

    function initializeModernFeatures() {
        initializeCollapsibleSections();
        initializeSmoothScrolling();
        initializeKeyboardNavigation();
        initializeTooltips();
        initializeProgressIndicators();
        initializeResponsiveFeatures();
    }

    /**
     * Initialize collapsible sections
     */
    function initializeCollapsibleSections() {
        const headers = document.querySelectorAll('.xRgn > .xRgnHdr, .xRgn > .xRgnHdrGL');
        
        headers.forEach(header => {
            // Remove any existing click handlers to prevent conflicts
            header.removeEventListener('click', handleHeaderClick);
            
            header.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const section = this.parentElement;
                const content = section.querySelector('.xInner');
                
                if (!content) return;
                
                // Toggle collapsed state
                const isCollapsed = section.hasAttribute('collapsed');
                
                if (isCollapsed) {
                    section.removeAttribute('collapsed');
                    content.style.display = 'block';
                } else {
                    section.setAttribute('collapsed', '');
                    content.style.display = 'none';
                }
                
                // Update ARIA attributes for accessibility
                this.setAttribute('aria-expanded', !isCollapsed);
                content.setAttribute('aria-hidden', isCollapsed);
            });
            
            // Set initial ARIA attributes
            const section = header.parentElement;
            const content = section.querySelector('.xInner');
            const isCollapsed = section.hasAttribute('collapsed');
            
            header.setAttribute('role', 'button');
            header.setAttribute('aria-expanded', !isCollapsed);
            header.setAttribute('tabindex', '0');
            
            if (content) {
                content.setAttribute('aria-hidden', isCollapsed);
                // Ensure content is visible by default unless collapsed
                if (!isCollapsed) {
                    content.style.display = 'block';
                }
            }
        });
    }


    /**
     * Initialize smooth scrolling for navigation
     */
    function initializeSmoothScrolling() {
        const navLinks = document.querySelectorAll('.xCb a[href^="#"]');
        
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    /**
     * Enhanced keyboard navigation
     */
    function initializeKeyboardNavigation() {
        // Handle Enter and Space keys for collapsible headers
        document.addEventListener('keydown', function(e) {
            if (e.target.matches('.xRgnHdr, .xRgnHdrGL')) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    e.target.click();
                }
            }
        });

        // Escape key to close modals
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                const modal = document.getElementById('overlayDlg');
                if (modal && modal.style.display !== 'none') {
                    closeOverlayDialog();
                }
            }
        });
    }

    /**
     * Initialize modern tooltips
     */
    function initializeTooltips() {
        const elementsWithTooltips = document.querySelectorAll('[title]');
        
        elementsWithTooltips.forEach(element => {
            const originalTitle = element.getAttribute('title');
            element.removeAttribute('title'); // Remove default tooltip
            
            const tooltip = document.createElement('div');
            tooltip.className = 'modern-tooltip';
            tooltip.textContent = originalTitle;
            tooltip.style.cssText = `
                position: absolute;
                background: rgba(0, 0, 0, 0.9);
                color: white;
                padding: 8px 12px;
                border-radius: 4px;
                font-size: 12px;
                font-family: 'Muli', sans-serif;
                white-space: nowrap;
                z-index: 10000;
                opacity: 0;
                pointer-events: none;
                transition: opacity 0.2s ease;
                transform: translateY(-100%);
                margin-top: -8px;
            `;
            
            document.body.appendChild(tooltip);
            
            element.addEventListener('mouseenter', function(e) {
                const rect = this.getBoundingClientRect();
                tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
                tooltip.style.top = rect.top + window.scrollY + 'px';
                tooltip.style.opacity = '1';
            });
            
            element.addEventListener('mouseleave', function() {
                tooltip.style.opacity = '0';
            });
        });
    }

    /**
     * Initialize progress indicators
     */
    function initializeProgressIndicators() {
        // Add loading states to buttons
        const buttons = document.querySelectorAll('.xTbBtns > a');
        
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                if (!this.classList.contains('loading')) {
                    this.classList.add('loading');
                    this.style.opacity = '0.7';
                    this.style.pointerEvents = 'none';
                    
                    // Remove loading state after 2 seconds (adjust as needed)
                    setTimeout(() => {
                        this.classList.remove('loading');
                        this.style.opacity = '';
                        this.style.pointerEvents = '';
                    }, 2000);
                }
            });
        });
    }

    /**
     * Initialize responsive features
     */
    function initializeResponsiveFeatures() {
        // Mobile menu toggle
        const createMobileMenuToggle = () => {
            const toggle = document.createElement('button');
            toggle.className = 'mobile-menu-toggle';
            toggle.innerHTML = '<i class="fas fa-bars"></i>';
            toggle.style.cssText = `
                display: none;
                position: fixed;
                top: 15px;
                left: 15px;
                z-index: 1001;
                background: var(--primary-color);
                color: white;
                border: none;
                border-radius: 4px;
                padding: 10px;
                cursor: pointer;
                font-size: 16px;
            `;
            
            toggle.addEventListener('click', function() {
                const sidebar = document.querySelector('.xCb');
                if (sidebar) {
                    const isVisible = sidebar.style.transform === 'translateX(0px)';
                    sidebar.style.transform = isVisible ? 'translateX(-100%)' : 'translateX(0px)';
                }
            });
            
            document.body.appendChild(toggle);
            
            // Show/hide based on screen size
            const mediaQuery = window.matchMedia('(max-width: 768px)');
            const handleMediaQuery = (e) => {
                toggle.style.display = e.matches ? 'block' : 'none';
            };
            
            mediaQuery.addListener(handleMediaQuery);
            handleMediaQuery(mediaQuery);
        };
        
        createMobileMenuToggle();
    }

    /**
     * Utility function to add CSS class with animation
     */
    function addClassWithAnimation(element, className, duration = 300) {
        element.classList.add(className);
        setTimeout(() => {
            element.classList.remove(className);
        }, duration);
    }

    /**
     * Enhanced form validation with modern styling
     */
    function enhanceFormValidation() {
        const inputs = document.querySelectorAll('input[type="text"], textarea');
        
        inputs.forEach(input => {
            input.addEventListener('invalid', function(e) {
                e.preventDefault();
                this.style.borderColor = 'var(--danger-color)';
                this.style.boxShadow = '0 0 0 2px rgba(220, 53, 69, 0.25)';
                
                // Remove error styling on input
                this.addEventListener('input', function() {
                    this.style.borderColor = '';
                    this.style.boxShadow = '';
                }, { once: true });
            });
        });
    }

    // Initialize form validation
    enhanceFormValidation();

    /**
     * Add modern loading spinner
     */
    function createLoadingSpinner() {
        const spinner = document.createElement('div');
        spinner.className = 'modern-spinner';
        spinner.innerHTML = '<div class="spinner-ring"></div>';
        spinner.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(255, 255, 255, 0.9);
            display: none;
            align-items: center;
            justify-content: center;
            z-index: 10000;
        `;
        
        const spinnerCSS = document.createElement('style');
        spinnerCSS.textContent = `
            .spinner-ring {
                width: 40px;
                height: 40px;
                border: 4px solid var(--medium-gray);
                border-top: 4px solid var(--accent-color);
                border-radius: 50%;
                animation: spin 1s linear infinite;
            }
            
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `;
        
        document.head.appendChild(spinnerCSS);
        document.body.appendChild(spinner);
        
        // Expose global functions to show/hide spinner
        window.showModernSpinner = () => {
            spinner.style.display = 'flex';
        };
        
        window.hideModernSpinner = () => {
            spinner.style.display = 'none';
        };
    }
    
    createLoadingSpinner();

})();