/**
 * Modern Interactions for Sunrise Medical Web Configurator
 * Handles card-based option selection and modern UI behaviors
 */

document.addEventListener('DOMContentLoaded', function() {
    initializeModernInteractions();
});

function initializeModernInteractions() {
    // Hide all radio buttons and checkboxes completely
    hideAllInputs();
    
    // Convert options to cards
    convertOptionsToCards();
    
    // Set up click handlers for card selection
    setupCardClickHandlers();
    
    // Monitor for dynamic content changes
    observeContentChanges();
    
    // Set up section collapse/expand
    setupSectionToggles();
}

function hideAllInputs() {
    const inputs = document.querySelectorAll('input[type="radio"], input[type="checkbox"]');
    inputs.forEach(input => {
        input.style.display = 'none';
        input.style.visibility = 'hidden';
        input.style.opacity = '0';
        input.style.position = 'absolute';
        input.style.left = '-9999px';
        input.style.top = '-9999px';
        input.style.width = '0';
        input.style.height = '0';
        input.style.zIndex = '-1';
    });
}

function convertOptionsToCards() {
    // Find all option containers
    const optionContainers = document.querySelectorAll('.xOB, .xOBDis, .xOBErr, .xRgn .xInner');
    
    optionContainers.forEach(container => {
        // Apply flexbox layout to container
        container.style.display = 'flex';
        container.style.flexWrap = 'wrap';
        container.style.gap = '15px';
        container.style.justifyContent = 'flex-start';
        container.style.alignItems = 'flex-start';
        container.style.width = '100%';
        
        // Find all option elements within this container
        const options = container.querySelectorAll('.xP, tr, label');
        
        options.forEach(option => {
            convertToCard(option);
        });
    });
}

function convertToCard(element) {
    // Skip if already converted
    if (element.classList.contains('modern-card')) return;
    
    // Add card styling
    element.classList.add('modern-card');
    element.style.display = 'inline-block';
    element.style.background = 'white';
    element.style.border = '2px solid #e9ecef';
    element.style.borderRadius = '8px';
    element.style.padding = '15px';
    element.style.margin = '8px';
    element.style.cursor = 'pointer';
    element.style.transition = 'all 0.3s ease';
    element.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
    element.style.position = 'relative';
    element.style.minWidth = '180px';
    element.style.maxWidth = '280px';
    element.style.verticalAlign = 'top';
    element.style.width = 'auto';
    
    // Hide any radio buttons or checkboxes within this element
    const inputs = element.querySelectorAll('input[type="radio"], input[type="checkbox"]');
    inputs.forEach(input => {
        input.style.display = 'none';
        input.style.visibility = 'hidden';
        input.style.opacity = '0';
        input.style.position = 'absolute';
        input.style.left = '-9999px';
    });
    
    // Check if this option is selected
    updateCardSelection(element);
}

function setupCardClickHandlers() {
    document.addEventListener('click', function(e) {
        const card = e.target.closest('.modern-card, .xP');
        if (!card) return;
        
        // Find the input within this card
        const input = card.querySelector('input[type="radio"], input[type="checkbox"]');
        if (!input) return;
        
        // Prevent default if clicking on the input itself
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
        
        // Update visual selection
        updateAllCardSelections();
        
        e.preventDefault();
        e.stopPropagation();
    });
}

function updateCardSelection(card) {
    const input = card.querySelector('input[type="radio"], input[type="checkbox"]');
    if (!input) return;
    
    if (input.checked) {
        // Selected state
        card.style.borderColor = '#007bff';
        card.style.borderWidth = '3px';
        card.style.background = 'rgba(0, 123, 255, 0.05)';
        card.style.boxShadow = '0 0 0 2px rgba(0, 123, 255, 0.2)';
        
        // Add checkmark if not already present
        if (!card.querySelector('.selection-indicator')) {
            const checkmark = document.createElement('div');
            checkmark.className = 'selection-indicator';
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
        const checkmark = card.querySelector('.selection-indicator');
        if (checkmark) {
            checkmark.remove();
        }
    }
}

function updateAllCardSelections() {
    const cards = document.querySelectorAll('.modern-card, .xP');
    cards.forEach(updateCardSelection);
}

function observeContentChanges() {
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList') {
                // New content added, convert any new options
                setTimeout(() => {
                    hideAllInputs();
                    convertOptionsToCards();
                    updateAllCardSelections();
                }, 100);
            }
        });
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}

function setupSectionToggles() {
    const headers = document.querySelectorAll('.xRgnHdr, .xRgnHdrGL');
    headers.forEach(header => {
        header.addEventListener('click', function() {
            const section = this.closest('.xRgn');
            const inner = section.querySelector('.xInner');
            
            if (section.hasAttribute('collapsed')) {
                section.removeAttribute('collapsed');
                inner.style.display = 'block';
            } else {
                section.setAttribute('collapsed', '');
                inner.style.display = 'none';
            }
        });
    });
}

// Run multiple times to catch dynamically loaded content
setTimeout(initializeModernInteractions, 1000);
setTimeout(initializeModernInteractions, 2000);