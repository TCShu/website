document.addEventListener('DOMContentLoaded', function() {
    // Generic smooth scroll function
    function smoothScrollTo(targetId) {
        const target = document.getElementById(targetId);
        if (target) {
            target.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start' // Align to top of viewport
            });
        }
    }
    
    // Add click handlers for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1); // Remove the #
            smoothScrollTo(targetId);
        });
    });
});