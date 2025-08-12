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
        initializeOptionCards();
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

    /**
     * Initialize option card functionality
     */
    function initializeOptionCards() {
        // Make ALL option cards clickable - target all possible containers
        document.addEventListener('click', function(e) {
            // Look for various option container types
            const optionCard = e.target.closest('.xP') || 
                              e.target.closest('label') ||
                              e.target.closest('[data-option]') ||
                              e.target.closest('tr') ||
                              e.target.closest('.option-card');
            
            if (optionCard) {
                // Look for input in various ways
                let input = optionCard.querySelector('input[type="radio"], input[type="checkbox"]') ||
                           optionCard.previousElementSibling?.querySelector('input[type="radio"], input[type="checkbox"]') ||
                           optionCard.nextElementSibling?.querySelector('input[type="radio"], input[type="checkbox"]');
                
                // If clicking on a label, find associated input
                if (optionCard.tagName === 'LABEL') {
                    const forAttr = optionCard.getAttribute('for');
                    if (forAttr) {
                        input = document.getElementById(forAttr);
                    } else {
                        input = optionCard.querySelector('input[type="radio"], input[type="checkbox"]');
                    }
                }
                
                if (input && !input.disabled) {
                    // For radio buttons, uncheck others in the same group first
                    if (input.type === 'radio') {
                        const radioGroup = document.querySelectorAll(`input[name="${input.name}"]`);
                        radioGroup.forEach(radio => {
                            const card = radio.closest('.xP') || 
                                        radio.closest('label') || 
                                        radio.parentElement;
                            if (card) {
                                card.classList.remove('selected');
                            }
                        });
                    }
                    
                    // Toggle the input
                    if (input.type === 'checkbox') {
                        input.checked = !input.checked;
                    } else {
                        input.checked = true;
                    }
                    
                    // Add selected class for styling
                    if (input.checked) {
                        optionCard.classList.add('selected');
                    } else {
                        optionCard.classList.remove('selected');
                    }
                    
                    // Trigger change event
                    input.dispatchEvent(new Event('change', { bubbles: true }));
                    
                    // Also trigger click event on the input for compatibility
                    input.dispatchEvent(new Event('click', { bubbles: true }));
                }
            }
        });
        
        // Initialize existing selections - check all possible containers
        document.querySelectorAll('input[type="radio"]:checked, input[type="checkbox"]:checked').forEach(input => {
            const card = input.closest('.xP') || 
                        input.closest('label') || 
                        input.parentElement;
            if (card) {
                card.classList.add('selected');
            }
        });
        
        // Convert all option containers to cards
        setTimeout(() => {
            // Find all radio buttons and checkboxes and convert their containers
            document.querySelectorAll('input[type="radio"], input[type="checkbox"]').forEach(input => {
                let container = input.closest('.xP') || 
                               input.closest('label') || 
                               input.parentElement;
                
                if (container && !container.classList.contains('option-card-converted')) {
                    container.classList.add('option-card-converted');
                    container.style.cssText += `
                        display: inline-block !important;
                        background: white !important;
                        border: 2px solid #e9ecef !important;
                        border-radius: 8px !important;
                        padding: 15px !important;
                        margin: 8px !important;
                        cursor: pointer !important;
                        transition: all 0.3s ease !important;
                        box-shadow: 0 2px 4px rgba(0,0,0,0.05) !important;
                        position: relative !important;
                        min-width: 180px !important;
                        max-width: 280px !important;
                        vertical-align: top !important;
                    `;
                    
                    // Hide the actual input
                    input.style.cssText += `
                        position: absolute !important;
                        opacity: 0 !important;
                        pointer-events: none !important;
                        width: 0 !important;
                        height: 0 !important;
                    `;
                    
                    // Add hover effect
                    container.addEventListener('mouseenter', function() {
                        this.style.borderColor = '#007bff';
                        this.style.transform = 'translateY(-2px)';
                        this.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
                    });
                    
                    container.addEventListener('mouseleave', function() {
                        if (!input.checked) {
                            this.style.borderColor = '#e9ecef';
                            this.style.transform = 'translateY(0)';
                            this.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
                        }
                    });
                    
                    // Update selection state
                    if (input.checked) {
                        container.style.borderColor = '#007bff';
                        container.style.borderWidth = '3px';
                        container.style.background = 'rgba(0, 123, 255, 0.05)';
                        container.style.boxShadow = '0 0 0 2px rgba(0, 123, 255, 0.2)';
                    }
                }
            });
        }, 1000);
        
        // Add keyboard support
        document.addEventListener('keydown', function(e) {
            if ((e.target.matches('.xP') || e.target.matches('label') || e.target.classList.contains('option-card-converted')) && 
                (e.key === 'Enter' || e.key === ' ')) {
                e.preventDefault();
                e.target.click();
            }
        });
        
        // Make all option containers focusable
        setTimeout(() => {
            document.querySelectorAll('.xP, label, .option-card-converted').forEach(card => {
                if (card.querySelector('input[type="radio"], input[type="checkbox"]')) {
                    card.setAttribute('tabindex', '0');
                    card.setAttribute('role', 'button');
                    
                    const input = card.querySelector('input[type="radio"], input[type="checkbox"]');
                    if (input) {
                        const labelText = card.textContent?.trim() || 
                                         card.querySelector('td[ct="p"], td[ct="cp"]')?.textContent?.trim() ||
                                         'Option';
                        card.setAttribute('aria-label', labelText);
                    }
                }
            });
        }, 1500);
    }
    
    // Also run option card initialization after a delay to catch dynamically loaded content
    setTimeout(() => {
        initializeOptionCards();
    }, 2000);
    
    // Run it again after page interactions
    document.addEventListener('DOMNodeInserted', function() {
        setTimeout(initializeOptionCards, 500);
    });
    
    // Legacy support for older browsers
    if (typeof MutationObserver !== 'undefined') {
        const observer = new MutationObserver(function(mutations) {
            let shouldReinit = false;
            mutations.forEach(function(mutation) {
                if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                    shouldReinit = true;
                }
            });
            if (shouldReinit) {
                setTimeout(initializeOptionCards, 500);
            }
        });
        
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }
})();