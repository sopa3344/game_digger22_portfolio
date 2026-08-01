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
            summary: '좋아하는 마음을 실제 플레이 경험으로 완성했습니다.',
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
            summary: '유타대학교와 협업하며 개발자의 다음 프로젝트를 연결합니다.',
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
            summary: '심사와 장르의 경계 없이 모든 게임이 존중받는 전시를 열었습니다.',
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
            summary: 'MX Master 4의 기능을 30초의 직관적인 플레이로 번역했습니다.',
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
            summary: '두 번째 전시를 판교로 확장해 더 많은 창작자와 관객을 만났습니다.',
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
            summary: '개발사, 퍼블리셔, 투자자와 인디 스튜디오를 한자리에 연결했습니다.',
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
            summary: '관람객의 눈으로 미술관의 경험을 다시 보았습니다.',
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

    const carousel = document.querySelector('[data-logo-carousel]');
    if (carousel) {
        const viewport = carousel.querySelector('[data-carousel-window]');
        const cards = Array.from(carousel.querySelectorAll('.logo-card'));
        const previousButton = carousel.querySelector('[data-carousel-prev]');
        const nextButton = carousel.querySelector('[data-carousel-next]');
        const currentLabel = carousel.querySelector('[data-carousel-current]');
        const progress = carousel.querySelector('[data-carousel-progress]');
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        let activeIndex = 0;
        let autoplayTimer = null;
        let isVisible = true;

        function nearestCardIndex() {
            const left = viewport.scrollLeft;
            const start = cards[0].offsetLeft;
            let closest = 0;
            let distance = Infinity;
            cards.forEach(function (card, index) {
                const nextDistance = Math.abs((card.offsetLeft - start) - left);
                if (nextDistance < distance) {
                    closest = index;
                    distance = nextDistance;
                }
            });
            return closest;
        }

        function updateCarouselStatus(index) {
            activeIndex = Math.max(0, Math.min(index, cards.length - 1));
            currentLabel.textContent = String(activeIndex + 1).padStart(2, '0');
            progress.style.width = (((activeIndex + 1) / cards.length) * 100) + '%';
        }

        function goToCard(index, behavior) {
            const nextIndex = (index + cards.length) % cards.length;
            viewport.scrollTo({
                left: cards[nextIndex].offsetLeft - cards[0].offsetLeft,
                behavior: behavior || (reducedMotion.matches ? 'auto' : 'smooth')
            });
            updateCarouselStatus(nextIndex);
        }

        function stopAutoplay() {
            window.clearInterval(autoplayTimer);
            autoplayTimer = null;
        }

        function startAutoplay() {
            stopAutoplay();
            if (reducedMotion.matches || !isVisible) return;
            autoplayTimer = window.setInterval(function () {
                goToCard(activeIndex + 1);
            }, 4600);
        }

        previousButton.addEventListener('click', function () {
            goToCard(activeIndex - 1);
            startAutoplay();
        });
        nextButton.addEventListener('click', function () {
            goToCard(activeIndex + 1);
            startAutoplay();
        });
        viewport.addEventListener('scroll', function () {
            window.requestAnimationFrame(function () {
                updateCarouselStatus(nearestCardIndex());
            });
        }, { passive: true });
        viewport.addEventListener('keydown', function (event) {
            if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
                event.preventDefault();
                goToCard(activeIndex + (event.key === 'ArrowRight' ? 1 : -1));
            }
        });
        carousel.addEventListener('mouseenter', stopAutoplay);
        carousel.addEventListener('mouseleave', startAutoplay);
        carousel.addEventListener('focusin', stopAutoplay);
        carousel.addEventListener('focusout', startAutoplay);
        viewport.addEventListener('pointerdown', stopAutoplay);
        viewport.addEventListener('pointerup', startAutoplay);
        reducedMotion.addEventListener('change', startAutoplay);

        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver(function (entries) {
                isVisible = entries[0].isIntersecting;
                if (isVisible) startAutoplay();
                else stopAutoplay();
            }, { threshold: .25 });
            observer.observe(carousel);
        } else {
            startAutoplay();
        }
        updateCarouselStatus(0);
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
