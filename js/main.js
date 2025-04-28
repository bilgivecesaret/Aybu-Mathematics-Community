(function ($) {
    $.fn.profileSlider = function () {
        const settings = $.extend({
            profileSelector: '.scientist-profile',
            prevBtnSelector: '.prev-btn',
            nextBtnSelector: '.next-btn',
            interval: 5000
        });

        return this.each(function () {
            const container = $(this);
            const profiles = container.find(settings.profileSelector);
            const prevBtn = container.find(settings.prevBtnSelector);
            const nextBtn = container.find(settings.nextBtnSelector);
            let currentIndex = 0;

            function updateActiveProfile(index) {
                profiles.removeClass('active');
                profiles.eq(index).addClass('active');
            }

            prevBtn.on('click', function () {
                currentIndex = (currentIndex - 1 + profiles.length) % profiles.length;
                updateActiveProfile(currentIndex);
            });

            nextBtn.on('click', function () {
                currentIndex = (currentIndex + 1) % profiles.length;
                updateActiveProfile(currentIndex);
            });

            setInterval(function () {
                currentIndex = (currentIndex + 1) % profiles.length;
                updateActiveProfile(currentIndex);
            }, settings.interval);

            updateActiveProfile(currentIndex);
        });
    };
}(jQuery));

$(function () {
    $('.scientist-slider').profileSlider();
});