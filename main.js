(() => {
    [
        './components/app-body/about-us/about-us.js',
        './components/app-body/eco-system/eco-system.js',
        './components/app-body/our-service/our-service.js',
        './components/app-body/partner-portfolio/partner-portfolio.js',
        './components/app-body/register-now/register-now.js',
        './components/app-body/trending-offer/trending-offer.js',
        './components/app-header/app-header.js',
        './components/app-nav/app-nav.js',
        './components/app-body/app-body.js',
        './components/app-footer/app-footer.js',
        './components/app-root/app-root.js',
        './components/common/app-card/app-card.js',
        './components/common/grid-list/grid-list.js',
        './components/common/app-carousel/app-carousel.js',
    ].forEach(path => {
        var s = document.createElement('script');
        s.setAttribute('src', path);
        document.head.appendChild(s);
    });
})();
