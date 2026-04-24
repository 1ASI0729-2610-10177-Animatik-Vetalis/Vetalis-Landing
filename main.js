document.addEventListener('DOMContentLoaded', () => {

    // Smooth Scrolling Navbar
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
        });
    });

    // Toggle de Precios (Mensual a Anual)
    const btnMonthly = document.getElementById('btn-monthly');
    const btnAnnual = document.getElementById('btn-annual');
    const priceProf = document.getElementById('price-prof');
    const saveProf = document.getElementById('save-prof');
    const perPeriods = document.querySelectorAll('.per-period');

    btnAnnual.addEventListener('click', () => {
        btnMonthly.classList.remove('active');
        btnAnnual.classList.add('active');
        if(priceProf) priceProf.innerText = '278.4';
        perPeriods.forEach(p => p.innerText = '/ año');
        if(saveProf) saveProf.classList.remove('hidden');
    });

    btnMonthly.addEventListener('click', () => {
        btnAnnual.classList.remove('active');
        btnMonthly.classList.add('active');
        if(priceProf) priceProf.innerText = '29';
        perPeriods.forEach(p => p.innerText = '/ mes');
        if(saveProf) saveProf.classList.add('hidden');
    });

    // Lógica Acordeón FAQ
    const faqCards = document.querySelectorAll('.faq-card');
    faqCards.forEach(card => {
        card.addEventListener('click', () => {
            const isActive = card.classList.contains('active');
            faqCards.forEach(other => other.classList.remove('active'));
            if (!isActive) card.classList.add('active');
        });
    });

});