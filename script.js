(function () {
    var toggle = document.querySelector('[data-drawer-toggle="hamburger"]');
    var drawer = document.querySelector('[data-drawer="hamburger"]');
    if (!toggle || !drawer) {
        return;
    }

    var closeTargets = drawer.querySelectorAll('[data-drawer-close], [data-drawer-underlay]');

    function setOpen(isOpen) {
        drawer.classList.toggle('is-open', isOpen);
        document.body.classList.toggle('menu-open', isOpen);
        toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        drawer.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
    }

    toggle.addEventListener('click', function () {
        setOpen(!drawer.classList.contains('is-open'));
    });

    closeTargets.forEach(function (el) {
        el.addEventListener('click', function () {
            setOpen(false);
        });
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            setOpen(false);
        }
    });
})();
