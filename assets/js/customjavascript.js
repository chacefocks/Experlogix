// Custom JavaScript for Sunrise Medical Web Configurator
// This file contains custom enhancements and interactions

document.addEventListener('DOMContentLoaded', function() {
    // Initialize modern interactions
    initializeCardSystem();
    
    // Set up click handlers for option cards
    setupCardClickHandlers();
    
    // Monitor for dynamic content changes
    observeContentChanges();
});

function initializeCardSystem() {
    // Convert existing options to card system
    const options = document.querySelectorAll('.xP');
    options.forEach(option => {
        setupOptionCard(option);
    });
}

function setupOptionCard(option) {
    // Find any radio buttons or checkboxes within this option
    const inputs = option.querySelectorAll('input[type="radio"], input[type="checkbox"]');
    
    inputs.forEach(input => {
        // Hide the input completely
        input.style.display = 'none';
        input.style.visibility = 'hidden';
        input.style.opacity = '0';
        input.style.position = 'absolute';
        input.style.left = '-9999px';
        
        // Update card appearance based on checked state
        updateCardAppearance(option, input);
    });
}

function setupCardClickHandlers() {
    document.addEventListener('click', function(e) {
        const card = e.target.closest('.xP');
        if (!card) return;
        
        // Find the input within this card
        const input = card.querySelector('input[type="radio"], input[type="checkbox"]');
        if (!input) return;
        
        // Don't handle if clicking directly on the input
        if (e.target === input) return;
        
        // Toggle the input
        if (input.type === 'radio') {
            input.checked = true;
        } else if (input.type === 'checkbox') {
            input.checked = !input.checked;
        }
        
        // Trigger change event
        const event = new Event('change', { bubbles: true });
        input.dispatchEvent(event);
        
        // Update all cards in the same group
        updateAllCards();
        
        e.preventDefault();
        e.stopPropagation();
    });
}

function updateCardAppearance(card, input) {
    if (input.checked) {
        // Selected state
        card.style.borderColor = '#007bff';
        card.style.borderWidth = '3px';
        card.style.background = 'rgba(0, 123, 255, 0.05)';
        card.style.boxShadow = '0 0 0 2px rgba(0, 123, 255, 0.2)';
        
        // Add checkmark if not already present
        if (!card.querySelector('.card-checkmark')) {
            const checkmark = document.createElement('div');
            checkmark.className = 'card-checkmark';
            checkmark.innerHTML = '✓';
            checkmark.style.position = 'absolute';
            checkmark.style.top = '8px';
            checkmark.style.right = '8px';
            checkmark.style.color = '#007bff';
            checkmark.style.fontSize = '16px';
            checkmark.style.fontWeight = 'bold';
            checkmark.style.background = 'white';
            checkmark.style.borderRadius = '50%';
            checkmark.style.width = '24px';
            checkmark.style.height = '24px';
            checkmark.style.display = 'flex';
            checkmark.style.alignItems = 'center';
            checkmark.style.justifyContent = 'center';
            checkmark.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
            card.appendChild(checkmark);
        }
    } else {
        // Unselected state
        card.style.borderColor = '#e9ecef';
        card.style.borderWidth = '2px';
        card.style.background = 'white';
        card.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
        
        // Remove checkmark
        const checkmark = card.querySelector('.card-checkmark');
        if (checkmark) {
            checkmark.remove();
        }
    }
}

function updateAllCards() {
    const cards = document.querySelectorAll('.xP');
    cards.forEach(card => {
        const input = card.querySelector('input[type="radio"], input[type="checkbox"]');
        if (input) {
            updateCardAppearance(card, input);
        }
    });
}

function observeContentChanges() {
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList') {
                // New content added, initialize any new cards
                setTimeout(() => {
                    initializeCardSystem();
                }, 100);
            }
        });
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}