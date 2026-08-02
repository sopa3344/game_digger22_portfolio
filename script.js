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
            role: 'PM · 기획·사업 총괄',
            metric: '1·2위',
            metricLabel: 'STOVE 주간 게임',
            summary: '좋아하는 게임을 아이디어에 머물게 하지 않기 위해 직접 만들었습니다. 퍼즐 액션의 기획 구조와 사업 방향, 개발 일정과 전시 준비를 연결했습니다.',
            image: 'images/gallery/antiv_1.png',
            alt: 'Anti-V: Reboot 게임 플레이 화면',
            target: 'https://youtu.be/nxKyHyCmoQI?si=X5nl69MnRYazcXUD'
        },
        huddlers: {
            year: '2025',
            category: 'COMMUNITY',
            title: 'Game Huddlers',
            role: '커뮤니티 설립·운영',
            metric: '300명',
            metricLabel: '게임 개발자 커뮤니티 멤버',
            summary: '한 번의 만남이 계속 이어지도록 게임 개발자 Discord 커뮤니티를 만들었습니다. 유타대학교와 협업해 연 3회 오프라인 행사를 운영합니다.',
            image: 'images/gallery/me.jpeg',
            alt: 'Game Huddlers 커뮤니티 발표 현장',
            target: 'https://discord.gg/jK9aqhKdnC'
        },
        town1: {
            year: '2025',
            category: 'EXHIBITION',
            title: 'Seoul Game Town 1',
            role: '공동 기획·운영',
            metric: '565%',
            metricLabel: '크라우드 펀딩 달성률',
            summary: '심사와 장르의 경계 없이 창작자가 관객을 만나는 인디게임 전시를 공동 기획했습니다. 좋아하는 게임들이 존중받는 첫 번째 오프라인 자리를 만들었습니다.',
            image: 'images/gallery/seoulgametown_1.jpeg',
            alt: '서울게임타운 1 전시 현장',
            target: 'https://tumblbug.com/seoulgametown'
        },
        logitech: {
            year: '2026',
            category: 'BRAND EXPERIENCE',
            title: 'Logitech × UNITE Seoul',
            role: '기획·개발·부스 운영',
            metric: '800+',
            metricLabel: '현장 체험 게임 플레이',
            summary: 'MX Master 4의 Actions Ring을 자연스럽게 이해하도록 30초 체험 게임을 직접 기획·개발했습니다. 게임의 언어로 제품 기능을 참여 가능한 경험으로 번역했습니다.',
            image: 'images/gallery/logitech_mx_master4_gameplay.png',
            alt: 'MX Master 4 Actions Ring 체험 게임 화면',
            target: 'https://mx-master-4-master-reveal-seoul.game-digger22.chatgpt.site/'
        },
        town2: {
            year: '2026',
            category: 'EXHIBITION',
            title: 'Seoul Game Town 2',
            role: '공동 기획·운영',
            metric: '488%',
            metricLabel: '크라우드 펀딩 달성률',
            summary: '첫 전시의 경험을 판교로 확장해 창작자와 관객의 두 번째 만남을 만들었습니다. 두 번의 행사를 통해 누적 1,810만 원 이상의 펀딩을 달성했습니다.',
            image: 'images/gallery/seoulgametowin_2.jpeg',
            alt: '서울게임타운 2 전시 현장',
            target: 'https://tumblbug.com/seoulgametown2'
        },
        aicon: {
            year: '2025',
            category: 'GLOBAL B2B',
            title: 'GAME AiCON Seoul',
            role: '행사 기획·운영',
            metric: 'B2B',
            metricLabel: '글로벌 게임 네트워킹',
            summary: '글로벌 퍼블리셔, 개발사, 투자자와 인디 스튜디오가 연결되는 자리를 직접 기획하고 운영했습니다. 게임을 만드는 사람들의 만남을 설계했습니다.',
            image: 'images/gallery/aicone_1.jpeg',
            alt: 'GAME AiCON Seoul 행사 현장',
            target: 'https://www.gameaicon.com'
        },
        mmca: {
            year: '2026',
            category: 'CULTURE',
            title: 'MMCA Advisory Panel',
            role: '국립현대미술관 고객자문단 13기',
            metric: '13TH',
            metricLabel: '국립현대미술관 고객자문단',
            summary: '《데이미언 허스트》와 《방혜자》 전시의 이동, 안내, 몰입과 쾌적도를 분석했습니다. 게임에서 익힌 경험 설계를 관람객과 미술관으로 확장해 개선안을 제안했습니다.',
            image: 'images/gallery/mmca_advisory_session.jpg',
            alt: '국립현대미술관 고객자문단 활동 현장',
            target: 'https://www.mmca.go.kr/'
        },
        ambassador: {
            year: '2026—현재',
            category: 'AMBASSADOR',
            title: 'Logitech Ambassador',
            role: '콘텐츠 제작·현장 운영',
            metric: '2026—',
            metricLabel: '현재 활동 중',
            summary: '게임과 디지털 창작자의 관점으로 Logitech 제품과 경험을 소개합니다. 콘텐츠 제작과 현장 활동을 통해 브랜드와 사용자 사이의 접점을 넓히고 있습니다.',
            image: 'images/gallery/logitech_mx_master4_leaderboard.png',
            alt: 'Logitech Ambassador 활동과 MX Master 4 체험 게임 리더보드',
            target: 'https://www.logitech.com/ko-kr'
        },
        bud: {
            year: '2025—현재',
            category: 'COMMUNITY',
            title: 'BUD Community',
            role: '커뮤니티 운영',
            metric: '2025—',
            metricLabel: '현재 활동 중',
            summary: '게임을 좋아하는 사람들이 관계를 이어갈 수 있도록 BUD 커뮤니티를 운영하고 있습니다. 온라인 소통과 활동 기록을 통해 지속적인 만남의 기반을 만들고 있습니다.',
            image: 'images/project_category_icons/BUD.jpg',
            alt: 'BUD 커뮤니티 로고',
            target: 'https://www.instagram.com/budwgame/'
        },
        dota: {
            year: '2025—현재',
            category: 'COMMUNITY EVENT',
            title: 'Dota 2 Korea Viewing Party',
            role: '행사 기획·운영',
            metric: '2025—',
            metricLabel: '현재 활동 중',
            summary: 'Dota 2를 좋아하는 사람들이 함께 경기를 보고 교류하는 국내 오프라인 뷰잉 파티를 기획·운영하고 있습니다. 게임을 중심으로 팬들의 만남을 실제 공간으로 확장했습니다.',
            image: 'images/gallery/dota2_viewing_party.png',
            alt: 'Dota 2 Korea Viewing Party 현장',
            target: 'https://www.youtube.com/watch?v=t-WpQNAKYL8'
        },
        instagram: {
            year: '2024—현재',
            category: 'GAME MEDIA',
            title: 'Instagram @game_digger22',
            role: '게임 콘텐츠·활동 기록',
            metric: '1,200+',
            metricLabel: 'Instagram Followers',
            summary: '게임 개발, 행사와 커뮤니티 활동을 기록하며 game_digger22의 관점을 꾸준히 공유하고 있습니다. 프로젝트의 결과뿐 아니라 만드는 과정과 현장의 사람들을 연결합니다.',
            image: 'images/gamedigger22_logo.png',
            alt: 'game_digger22 로고',
            target: 'https://www.instagram.com/game_digger22/'
        }
    };

    let selectTimelineActivity = null;
    if (timeline) {
        const activityButtons = timeline.querySelectorAll('[data-activity-key]');
        const timelineLink = timeline.querySelector('[data-timeline-link]');
        const timelineImage = timeline.querySelector('[data-timeline-image]');
        const timelineYear = timeline.querySelector('[data-timeline-year]');
        const timelineCategory = timeline.querySelector('[data-timeline-category]');
        const timelineMetric = timeline.querySelector('[data-timeline-metric]');
        const timelineMetricLabel = timeline.querySelector('[data-timeline-metric-label]');
        const timelineTitle = timeline.querySelector('[data-timeline-title]');
        const timelineRole = timeline.querySelector('[data-timeline-role]');
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
                timelineRole.textContent = activity.role;
                timelineSummary.textContent = activity.summary;
                timelineLink.href = activity.target;
                timeline.classList.remove('is-changing');
            }, 110);
        }
        selectTimelineActivity = showActivity;

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
            { name: 'Anti-V: Reboot', role: 'Game · PM', target: '#activity-map', activityKey: 'anti' },
            { name: 'GAME AiCON Seoul', role: 'B2B · Organizer', target: '#activity-map', activityKey: 'aicon' },
            { name: 'Logitech', role: 'Brand Experience', target: '#activity-map', activityKey: 'logitech' },
            { name: 'UNITE Seoul', role: 'Interactive Exhibition', target: '#activity-map', activityKey: 'logitech' },
            { name: 'Seoul Game Town 1·2', role: 'Exhibition', target: '#activity-map', activityKey: 'town2' },
            { name: 'MMCA Advisory', role: 'Culture', target: '#activity-map', activityKey: 'mmca' },
            { name: 'BUD Community', role: 'Community', target: '#activity-map', activityKey: 'bud' },
            { name: 'Maple Camp', role: 'Award · 2025', target: '#awards' },
            { name: 'STOVE Crew', role: 'Creator Program', target: '#activity-map' }
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
        brandLink.addEventListener('click', function () {
            const item = brandItems[activeIndex];
            if (item.activityKey && selectTimelineActivity) selectTimelineActivity(item.activityKey);
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
