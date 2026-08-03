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
            year: '2024—현재',
            category: 'GAME STUDIO',
            title: 'Cat Crunch Games',
            role: 'PM · 기획·사업 총괄',
            metric: '1·2위',
            metricLabel: 'STOVE 주간 게임',
            summary: '좋아하는 게임을 아이디어에 머물게 하지 않기 위해 직접 만들었습니다. 퍼즐 액션의 기획 구조와 사업 방향, 개발 일정과 전시 준비를 연결했습니다.',
            image: 'images/gallery/antiv_1.png',
            alt: 'Anti-V: Reboot 게임 플레이 화면',
            images: [
                { src: 'images/gallery/antiv_1.png', alt: '장은태가 참여한 Anti-V: Reboot 현장 인터뷰' },
                { src: 'images/gallery/7259BE58-8765-4726-9F64-CC3D5974900F_1_105_c.jpeg', alt: 'Anti-V: Reboot 전시 현장의 장은태와 개발팀' },
                { src: 'images/gallery/antiv_2.jpeg', alt: 'Anti-V: Reboot 전시 부스와 플레이 현장' },
                { src: 'images/gallery/stove_weekly_rank_1.png', alt: 'Anti-V: Reboot STOVE 주간 게임 1위 기록' }
            ],
            target: 'https://youtu.be/nxKyHyCmoQI?si=X5nl69MnRYazcXUD'
        },
        huddlers: {
            year: '2025—현재',
            category: 'COMMUNITY',
            title: 'Game Huddlers',
            role: '커뮤니티 설립·운영',
            metric: '300명',
            metricLabel: '게임 개발자 커뮤니티 멤버',
            summary: '한 번의 만남이 계속 이어지도록 게임 개발자 Discord 커뮤니티를 만들었습니다. 유타대학교와 협업해 연 3회 오프라인 행사를 운영합니다.',
            image: 'images/gallery/game-huddlers-people.jpg',
            alt: '장은태가 참여한 Game Huddlers 유타대학교 행사 현장',
            images: [
                { src: 'images/gallery/game-huddlers-people.jpg', alt: '장은태가 참여한 Game Huddlers 유타대학교 행사 현장' },
                { src: 'images/gallery/game-huddlers-utah-stage.jpg', alt: 'Game Huddlers와 유타대학교 협업 행사 무대' }
            ],
            target: 'https://discord.gg/jK9aqhKdnC'
        },
        logitech: {
            year: '2026',
            category: 'BRAND EXPERIENCE',
            title: 'Logitech × UNITE Seoul',
            role: '기획·개발·부스 운영',
            metric: '800+',
            metricLabel: '현장 체험 게임 플레이',
            summary: 'MX Master 4의 Actions Ring을 자연스럽게 이해하도록 30초 체험 게임을 직접 기획·개발했습니다. 게임의 언어로 제품 기능을 참여 가능한 경험으로 번역했습니다.',
            image: 'images/gallery/logitech-unite-presenter.webp',
            alt: 'Logitech × UNITE Seoul 현장에서 MX 제품을 소개하는 장은태',
            images: [
                { src: 'images/gallery/logitech-unite-presenter.webp', alt: 'Logitech × UNITE Seoul 현장에서 MX 제품을 소개하는 장은태' },
                { src: 'images/gallery/logitech-unite-venue.webp', alt: 'UNITE Seoul 행사장과 Logitech 체험 부스 전경' },
                { src: 'images/gallery/logitech-unite-playtest.webp', alt: '관람객이 MX Master 4 Actions Ring 체험 게임을 플레이하는 모습' }
            ],
            target: 'https://mx-master-4-master-reveal-seoul.game-digger22.chatgpt.site/'
        },
        town2: {
            year: '2025—현재',
            category: 'EXHIBITION',
            title: 'Seoul Game Town',
            role: '공동 기획·운영',
            metric: '1,810만원',
            metricLabel: '텀블벅 펀딩 성공',
            summary: '심사와 장르의 경계 없이 창작자가 관객을 만나는 인디게임 전시를 시작하고 판교까지 확장했습니다. 두 번의 행사를 통해 누적 1,810만 원 이상의 펀딩을 달성했으며 현재도 활동을 이어가고 있습니다.',
            image: 'images/gallery/seoulgametown_group.png',
            alt: '장은태가 참여한 서울게임타운 운영진과 참가자 단체 사진',
            images: [
                { src: 'images/gallery/seoulgametown_group.png', alt: '장은태가 참여한 서울게임타운 운영진과 참가자 단체 사진' },
                { src: 'images/gallery/seoulgametown_1.jpeg', alt: '서울게임타운 1 전시 현장' },
                { src: 'images/gallery/seoulgametowin_2.jpeg', alt: '서울게임타운 2 참여 현장' }
            ],
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
            alt: 'GAME AiCON Seoul 행사 현장의 장은태',
            images: [
                { src: 'images/gallery/aicone_1.jpeg', alt: 'GAME AiCON Seoul 행사 현장의 장은태' },
                { src: 'images/gallery/aicon_2.jpeg', alt: 'GAME AiCON Seoul 운영진 단체 사진' }
            ],
            target: 'https://www.gameaicon.com'
        },
        mmca: {
            year: '2026—현재',
            category: 'CULTURE',
            title: 'MMCA Advisory Panel',
            role: '국립현대미술관 고객자문단 13기',
            metric: '13TH',
            metricLabel: '국립현대미술관 고객자문단',
            summary: '《데이미언 허스트》와 《방혜자》 전시의 이동, 안내, 몰입과 쾌적도를 분석했습니다. 게임에서 익힌 경험 설계를 관람객과 미술관으로 확장해 개선안을 제안했습니다.',
            image: 'images/gallery/mmca.png',
            alt: '장은태가 참여한 국립현대미술관 고객자문단 단체 사진',
            images: [
                { src: 'images/gallery/mmca.png', alt: '장은태가 참여한 국립현대미술관 고객자문단 단체 사진' },
                { src: 'images/gallery/mmca_advisory_session.jpg', alt: '국립현대미술관 고객자문단 활동 발표 현장' },
                { src: 'images/gallery/mmca_presentation.png', alt: '국립현대미술관 고객자문단 제안 발표' }
            ],
            target: 'https://www.mmca.go.kr/'
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
            alt: '장은태가 참여한 Dota 2 Korea Viewing Party 운영진 단체 사진',
            images: [
                { src: 'images/gallery/dota2_viewing_party.png', alt: '장은태가 참여한 Dota 2 Korea Viewing Party 운영진 단체 사진' },
                { src: 'images/gallery/dota2_2.jpeg', alt: 'Dota 2 Korea Viewing Party 관객 현장' },
                { src: 'images/gallery/dota2_1.jpeg', alt: 'Dota 2 Korea Viewing Party 경기 관람 현장' }
            ],
            target: 'https://www.youtube.com/watch?v=t-WpQNAKYL8'
        },
        instagram: {
            year: '2024—현재',
            category: 'GAME MEDIA',
            title: 'Instagram @game_digger22',
            role: '게임 콘텐츠·활동 기록',
            metric: '1,300명',
            metricLabel: 'Instagram Followers',
            summary: '게임 개발, 행사와 커뮤니티 활동을 기록하며 game_digger22의 관점을 꾸준히 공유하고 있습니다. 프로젝트의 결과뿐 아니라 만드는 과정과 현장의 사람들을 연결합니다.',
            image: 'images/gallery/me.jpeg',
            alt: 'game_digger22 활동을 발표하는 장은태',
            images: [
                { src: 'images/gallery/me.jpeg', alt: 'game_digger22 활동을 발표하는 장은태' },
                { src: 'images/gamedigger22_logo.png', alt: 'game_digger22 로고' }
            ],
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
        let activityImageTimer = null;
        let activityImageTransitionTimer = null;
        let selectedActivityKey = null;
        let activityImageIndex = 0;
        const reducedActivityMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

        function getActivityImages(activity) {
            if (Array.isArray(activity.images) && activity.images.length) return activity.images;
            return [{ src: activity.image, alt: activity.alt }];
        }

        function setTimelineImage(slide, animate) {
            window.clearTimeout(activityImageTransitionTimer);
            if (!animate) {
                timelineImage.src = slide.src;
                timelineImage.alt = slide.alt;
                timeline.classList.remove('is-image-changing');
                return;
            }
            timeline.classList.add('is-image-changing');
            activityImageTransitionTimer = window.setTimeout(function () {
                timelineImage.src = slide.src;
                timelineImage.alt = slide.alt;
                timeline.classList.remove('is-image-changing');
            }, 150);
        }

        function startActivityImages(key, activity) {
            window.clearInterval(activityImageTimer);
            const images = getActivityImages(activity);
            activityImageIndex = 0;
            setTimelineImage(images[0], false);
            images.slice(1).forEach(function (slide) {
                const preload = new Image();
                preload.src = slide.src;
            });
            if (images.length < 2 || reducedActivityMotion.matches) return;
            activityImageTimer = window.setInterval(function () {
                if (selectedActivityKey !== key) return;
                activityImageIndex = (activityImageIndex + 1) % images.length;
                setTimelineImage(images[activityImageIndex], true);
            }, 1500);
        }

        function showActivity(key) {
            const activity = activityData[key];
            if (!activity) return;
            selectedActivityKey = key;
            window.clearInterval(activityImageTimer);
            activityButtons.forEach(function (button) {
                const isSelected = button.dataset.activityKey === key;
                button.setAttribute('aria-pressed', String(isSelected));
                button.classList.toggle('is-active', isSelected);
            });
            timeline.classList.add('is-changing');
            window.clearTimeout(activityTransitionTimer);
            activityTransitionTimer = window.setTimeout(function () {
                startActivityImages(key, activity);
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

        const initialActivity = timeline.querySelector('.timeline-activity.is-active') || activityButtons[0];
        if (initialActivity) showActivity(initialActivity.dataset.activityKey);
    }

    const inlineSlideshows = document.querySelectorAll('[data-auto-slideshow]');
    const reducedInlineMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    inlineSlideshows.forEach(function (image) {
        const sources = (image.dataset.slideSrcs || '').split('|').filter(Boolean);
        const alts = (image.dataset.slideAlts || '').split('|');
        if (sources.length < 2 || reducedInlineMotion.matches) return;
        sources.slice(1).forEach(function (source) {
            const preload = new Image();
            preload.src = source;
        });
        let index = 0;
        let transitionTimer = null;
        let slideshowTimer = null;

        function showInlineSlide(nextIndex, animate) {
            index = nextIndex;
            if (!animate) {
                image.src = sources[index];
                image.alt = alts[index] || alts[0] || '';
                image.classList.remove('is-slide-changing');
                return;
            }
            image.classList.add('is-slide-changing');
            window.clearTimeout(transitionTimer);
            transitionTimer = window.setTimeout(function () {
                image.src = sources[index];
                image.alt = alts[index] || alts[0] || '';
                image.classList.remove('is-slide-changing');
            }, 150);
        }

        function startInlineSlideshow() {
            window.clearInterval(slideshowTimer);
            showInlineSlide(0, false);
            slideshowTimer = window.setInterval(function () {
                showInlineSlide((index + 1) % sources.length, true);
            }, 1500);
        }

        function stopInlineSlideshow() {
            window.clearInterval(slideshowTimer);
            slideshowTimer = null;
            showInlineSlide(0, false);
        }

        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) startInlineSlideshow();
                    else stopInlineSlideshow();
                });
            }, { threshold: 0.35 });
            observer.observe(image);
        } else {
            startInlineSlideshow();
        }
    });

    const brandHero = document.querySelector('[data-brand-hero]');
    if (brandHero) {
        const brandItems = [
            { name: 'MMCA Advisory', role: 'Culture', target: '#activity-map', activityKey: 'mmca' },
            { name: 'Logitech', role: 'Brand Experience', target: '#activity-map', activityKey: 'logitech' },
            { name: 'UNITE Seoul', role: 'Interactive Exhibition', target: '#activity-map', activityKey: 'logitech' },
            { name: 'Seoul Game Town', role: 'Exhibition', target: '#activity-map', activityKey: 'town2' },
            { name: 'Cat Crunch Games', role: 'Game Studio', target: '#activity-map', activityKey: 'anti' },
            { name: 'GAME AiCON Seoul', role: 'B2B · Organizer', target: '#activity-map', activityKey: 'aicon' },
            { name: 'PlayX4', role: 'Cat Crunch Games Exhibition', target: '#activity-map', activityKey: 'anti' },
            { name: 'G-STAR', role: 'Cat Crunch Games Exhibition', target: '#activity-map', activityKey: 'anti' },
            { name: 'BIC Festival', role: 'Cat Crunch Games Exhibition', target: '#activity-map', activityKey: 'anti' }
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
