document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('[data-site-header]');
    function updateHeader() {
        if (header) header.classList.toggle('is-condensed', window.scrollY > 16);
    }
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });

    const timeline = document.querySelector('[data-activity-timeline]');
    const activityData = {
        anti: {
            year: '2024',
            category: 'GAME · PM',
            title: 'Anti-V: Reboot',
            metric: '1→TEAM',
            metricLabel: '1인 개발에서 팀으로 성장',
            summary: '좋아하는 게임을 직접 만들며 기획의 출발점을 만들었습니다.',
            image: 'images/gallery/antiv_1.png',
            alt: 'Anti-V: Reboot 게임 플레이 화면',
            target: '#anti-v'
        },
        huddlers: {
            year: '2025',
            category: 'COMMUNITY',
            title: 'Game Huddlers',
            metric: '300',
            metricLabel: '게임 개발자 커뮤니티 멤버',
            summary: '게임을 좋아하는 사람들이 계속 만날 수 있는 커뮤니티를 만들었습니다.',
            image: 'images/gallery/me.jpeg',
            alt: 'Game Huddlers 커뮤니티 발표 현장',
            target: '#game-huddlers'
        },
        town1: {
            year: '2025',
            category: 'EXHIBITION',
            title: 'Seoul Game Town 1',
            metric: '565%',
            metricLabel: '크라우드 펀딩 달성률',
            summary: '게임과 관객이 만나는 오프라인 자리를 직접 기획하고 운영했습니다.',
            image: 'images/gallery/seoulgametown_1.jpeg',
            alt: '서울게임타운 1 전시 현장',
            target: '#exhibition'
        },
        logitech: {
            year: '2026',
            category: 'BRAND EXPERIENCE',
            title: 'Logitech × UNITE Seoul',
            metric: '800+',
            metricLabel: '현장 체험 게임 플레이',
            summary: '게임의 언어로 제품 기능을 누구나 참여할 수 있는 경험으로 바꿨습니다.',
            image: 'images/gallery/logitech_mx_master4_gameplay.png',
            alt: 'MX Master 4 Actions Ring 체험 게임 화면',
            target: '#logitech'
        },
        town2: {
            year: '2026',
            category: 'EXHIBITION',
            title: 'Seoul Game Town 2',
            metric: '488%',
            metricLabel: '크라우드 펀딩 달성률',
            summary: '전시를 판교로 확장하며 창작자와 관객의 두 번째 만남을 만들었습니다.',
            image: 'images/gallery/seoulgametowin_2.jpeg',
            alt: '서울게임타운 2 전시 현장',
            target: '#exhibition'
        },
        aicon: {
            year: '2025',
            category: 'GLOBAL B2B',
            title: 'GAME AiCON Seoul',
            metric: '2025',
            metricLabel: '서울에서 열린 글로벌 게임 행사',
            summary: '게임 산업의 서로 다른 역할이 서울에서 만나는 장면을 기획했습니다.',
            image: 'images/gallery/aicone_1.jpeg',
            alt: 'GAME AiCON Seoul 행사 현장',
            target: '#game-aicon'
        },
        mmca: {
            year: '2026',
            category: 'CULTURE',
            title: 'MMCA Advisory Panel',
            metric: '13TH',
            metricLabel: '국립현대미술관 고객자문단',
            summary: '게임에서 익힌 경험 설계의 관점을 관람객과 미술관으로 확장했습니다.',
            image: 'images/gallery/mmca_advisory_session.jpg',
            alt: '국립현대미술관 고객자문단 활동 현장',
            target: '#mmca'
        }
    };

    if (timeline) {
        const activityButtons = timeline.querySelectorAll('[data-activity-key]');
        const timelineLink = timeline.querySelector('[data-timeline-link]');
        const timelineImage = timeline.querySelector('[data-timeline-image]');
        const timelineYear = timeline.querySelector('[data-timeline-year]');
        const timelineCategory = timeline.querySelector('[data-timeline-category]');
        const timelineMetric = timeline.querySelector('[data-timeline-metric]');
        const timelineMetricLabel = timeline.querySelector('[data-timeline-metric-label]');
        const timelineTitle = timeline.querySelector('[data-timeline-title]');
        const timelineSummary = timeline.querySelector('[data-timeline-summary]');
        let activityTransitionTimer = null;

        function showActivity(key) {
            const activity = activityData[key];
            if (!activity) return;
            activityButtons.forEach(function (button) {
                const isSelected = button.dataset.activityKey === key;
                button.setAttribute('aria-pressed', String(isSelected));
                button.classList.toggle('is-active', isSelected);
            });
            timeline.classList.add('is-changing');
            window.clearTimeout(activityTransitionTimer);
            activityTransitionTimer = window.setTimeout(function () {
                timelineImage.src = activity.image;
                timelineImage.alt = activity.alt;
                timelineYear.textContent = activity.year;
                timelineCategory.textContent = activity.category;
                timelineMetric.textContent = activity.metric;
                timelineMetricLabel.textContent = activity.metricLabel;
                timelineTitle.textContent = activity.title;
                timelineSummary.textContent = activity.summary;
                timelineLink.href = activity.target;
                timeline.classList.remove('is-changing');
            }, 110);
        }

        activityButtons.forEach(function (button) {
            ['mouseenter', 'focus', 'click'].forEach(function (eventName) {
                button.addEventListener(eventName, function () {
                    showActivity(button.dataset.activityKey);
                });
            });
        });
    }

    const brandHero = document.querySelector('[data-brand-hero]');
    if (brandHero) {
        const brandItems = [
            { name: 'Anti-V: Reboot', role: 'Game · PM', target: '#anti-v' },
            { name: 'GAME AiCON Seoul', role: 'B2B · Organizer', target: '#game-aicon' },
            { name: 'Logitech', role: 'Brand Experience', target: '#logitech' },
            { name: 'UNITE Seoul', role: 'Interactive Exhibition', target: '#logitech' },
            { name: 'Seoul Game Town 1·2', role: 'Exhibition', target: '#exhibition' },
            { name: 'MMCA Advisory', role: 'Culture', target: '#mmca' },
            { name: 'BUD Community', role: 'Community', target: '#archive' },
            { name: 'Maple Camp', role: 'Award · 2025', target: '#awards' },
            { name: 'STOVE Crew', role: 'Creator Program', target: '#archive' }
        ];
        const slides = Array.from(brandHero.querySelectorAll('[data-brand-slide]'));
        const brandLink = brandHero.querySelector('[data-brand-link]');
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        let activeIndex = 0;
        let autoplayTimer = null;
        let transitionTimer = null;
        let isVisible = true;
        let isBooting = true;

        function showBrandItem(index, animate) {
            const nextIndex = (index + brandItems.length) % brandItems.length;
            const previousSlide = slides[activeIndex];
            const nextSlide = slides[nextIndex];
            window.clearTimeout(transitionTimer);

            slides.forEach(function (slide) {
                if (slide !== previousSlide && slide !== nextSlide) slide.classList.remove('is-active', 'is-entering', 'is-exiting');
            });

            if (animate && previousSlide !== nextSlide) {
                previousSlide.classList.remove('is-active');
                previousSlide.classList.add('is-exiting');
                nextSlide.classList.remove('is-active', 'is-exiting');
                nextSlide.classList.add('is-entering');
                void nextSlide.offsetHeight;
                nextSlide.classList.add('is-active');
                brandLink.classList.remove('is-switching');
                void brandLink.offsetHeight;
                brandLink.classList.add('is-switching');
                transitionTimer = window.setTimeout(function () {
                    previousSlide.classList.remove('is-exiting');
                    nextSlide.classList.remove('is-entering');
                    brandLink.classList.remove('is-switching');
                }, 370);
            } else {
                slides.forEach(function (slide) { slide.classList.remove('is-active', 'is-entering', 'is-exiting'); });
                nextSlide.classList.add('is-active');
            }

            activeIndex = nextIndex;
            const item = brandItems[activeIndex];
            brandLink.href = item.target;
            brandLink.setAttribute('aria-label', item.name + ' 활동 보기');
        }

        function stopAutoplay() {
            window.clearInterval(autoplayTimer);
            autoplayTimer = null;
        }

        function startAutoplay() {
            stopAutoplay();
            if (reducedMotion.matches || !isVisible || isBooting) return;
            autoplayTimer = window.setInterval(function () {
                showBrandItem(activeIndex + 1, true);
            }, 1450);
        }

        brandLink.addEventListener('keydown', function (event) {
            if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
                event.preventDefault();
                showBrandItem(activeIndex + (event.key === 'ArrowRight' ? 1 : -1), true);
                startAutoplay();
            }
        });
        reducedMotion.addEventListener('change', startAutoplay);

        function finishBoot() {
            if (!isBooting) return;
            isBooting = false;
            brandHero.classList.remove('is-booting');
            brandHero.classList.add('is-ready');
            showBrandItem(0, false);
            startAutoplay();
        }

        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver(function (entries) {
                isVisible = entries[0].isIntersecting;
                if (isVisible) startAutoplay();
                else stopAutoplay();
            }, { threshold: .25 });
            observer.observe(brandHero);
        } else {
            startAutoplay();
        }
        if (reducedMotion.matches) finishBoot();
        else window.setTimeout(finishBoot, 1000);
    }
});

window.addEventListener('load', function () {
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!hasFinePointer || prefersReducedMotion || !window.cursoreffects) {
        return;
    }

    new window.cursoreffects.followingDotCursor({
        color: ['#111111a6']
    });
});
