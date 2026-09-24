const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-menu a");

const observer = new IntersectionObserver(
    (entries) => {
        const visibleSection = entries
            .filter(entry => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        
        if(!visibleSection) return;

                navLinks.forEach(link => {
                    link.classList.remove("active");
                });

                const activeLink = document.querySelector(
                    '.nav-menu a[href="#' + visibleSection.target.id + '"]'
                );

                if (activeLink) {
                    activeLink.classList.add("active");
                }
            },
    {
        rootMargin: "-35% 0px -55% 0px"
    }
);

sections.forEach(section => {
    observer.observe(section);
});

const revealCards = document.querySelectorAll(".reveal-card");

const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

revealCards.forEach(card => {
    cardObserver.observe(card);
});
    
