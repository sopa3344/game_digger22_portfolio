document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('[data-site-header]');
    function updateHeader() {
        if (header) header.classList.toggle('is-condensed', window.scrollY > 16);
    }
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });

    const map = document.querySelector('.activity-map');
    const mapButtons = document.querySelectorAll('[data-map-project]');
    const mapLines = document.querySelectorAll('[data-map-line]');
    const detailNumber = document.querySelector('.map-detail-number');
    const detailTitle = document.querySelector('.map-detail-title');
    const detailDescription = document.querySelector('.map-detail-description');
    const detailLink = document.querySelector('.map-detail-link');
    const previewImage = document.querySelector('.map-preview-image');
    const previewNumber = document.querySelector('.map-preview-number');
    const previewTitle = document.querySelector('.map-preview-title');
    const previewSummary = document.querySelector('.map-preview-summary');

    const projectData = {
        anti: {
            number: '01',
            title: 'Anti-V: Reboot',
            description: '게임 PM · 사업 총괄 · 데프캣 스튜디오',
            previewNumber: '01 / GAME',
            summary: '좋아하는 마음을 게임으로 완성했습니다.',
            image: 'images/gallery/antiv_1.png',
            target: '#anti-v'
        },
        aicon: {
            number: '02',
            title: 'GAME AiCON Seoul',
            description: '글로벌 게임 B2B 행사 · Organizer',
            previewNumber: '02 / EXHIBITION',
            summary: '아시아의 게임 산업을 서울에서 연결했습니다.',
            image: 'images/gallery/aicone_1.jpeg',
            target: '#game-aicon'
        },
        logitech: {
            number: '03',
            title: 'Logitech × UNITE Seoul',
            description: 'MX Master 4 체험 게임 · 30초 · 800회 이상 플레이',
            previewNumber: '03 / BRAND EXPERIENCE',
            summary: '제품의 기능을 30초의 플레이로 번역했습니다.',
            image: 'images/gallery/logitech_mx_master4_gameplay.png',
            target: '#logitech'
        },
        town: {
            number: '04',
            title: 'Seoul Game Town 1·2',
            description: '인디게임 전시 공동 기획·운영 · 누적 펀딩 1,810만 원+',
            previewNumber: '04 / EXHIBITION',
            summary: '모든 게임이 존중받는 전시장을 만들었습니다.',
            image: 'images/gallery/seoulgametown_group.png',
            target: '#exhibition'
        },
        huddlers: {
            number: '05',
            title: 'Game Huddlers',
            description: '게임 개발자 300명 · 유타대학교 협업 · 연 3회 행사',
            previewNumber: '05 / COMMUNITY',
            summary: '개발자 300명이 서로의 다음 프로젝트를 돕습니다.',
            image: 'images/gallery/me.jpeg',
            target: '#game-huddlers'
        },
        mmca: {
            number: '06',
            title: 'MMCA Advisory Panel',
            description: '국립현대미술관 제13기 고객자문단 · 관람 경험 개선',
            previewNumber: '06 / CULTURE',
            summary: '관람객의 눈으로 미술관의 경험을 다시 보았습니다.',
            image: 'images/gallery/mmca_advisory_session.jpg',
            target: '#mmca'
        }
    };

    function showProject(key) {
        const project = projectData[key];
        if (!project || !map) return;

        map.dataset.active = key;
        map.classList.add('has-preview');
        mapButtons.forEach(function (button) {
            const isSelected = button.dataset.mapProject === key;
            button.classList.toggle('is-active', isSelected);
        });
        mapLines.forEach(function (line) {
            line.classList.toggle('is-active', line.dataset.mapLine === key);
        });

        detailNumber.textContent = project.number;
        detailTitle.textContent = project.title;
        detailDescription.textContent = project.description;
        detailLink.textContent = '상세 활동으로 이동 ↓';
        detailLink.href = project.target;
        detailLink.hidden = false;

        previewImage.src = project.image;
        previewNumber.textContent = project.previewNumber;
        previewTitle.textContent = project.title;
        previewSummary.textContent = project.summary;
    }

    function clearProject() {
        if (!map) return;
        map.classList.remove('has-preview');
        map.removeAttribute('data-active');
        mapButtons.forEach(function (button) {
            button.classList.remove('is-active');
        });
        mapLines.forEach(function (line) {
            line.classList.remove('is-active');
        });
        detailNumber.textContent = '—';
        detailTitle.textContent = '활동을 선택해 보세요.';
        detailDescription.textContent = '클릭하면 해당 프로젝트의 상세 기록으로 이동합니다.';
        detailLink.hidden = true;
    }

    mapButtons.forEach(function (button) {
        button.addEventListener('mouseenter', function () {
            showProject(button.dataset.mapProject);
        });
        button.addEventListener('focus', function () {
            showProject(button.dataset.mapProject);
        });
    });

    if (map) {
        map.addEventListener('mouseleave', clearProject);
        map.addEventListener('focusout', function () {
            window.setTimeout(function () {
                if (!map.contains(document.activeElement)) clearProject();
            }, 0);
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
