document.addEventListener('DOMContentLoaded', function () {
    const map = document.querySelector('.activity-map');
    const mapButtons = document.querySelectorAll('[data-map-project]');
    const mapLines = document.querySelectorAll('[data-map-line]');
    const detailNumber = document.querySelector('.map-detail-number');
    const detailTitle = document.querySelector('.map-detail-title');
    const detailDescription = document.querySelector('.map-detail-description');
    const detailLink = document.querySelector('.map-detail-link');

    const projectData = {
        anti: {
            number: '01',
            title: 'Anti-V: Reboot',
            description: '게임 PM · 사업 총괄 · 데프캣 스튜디오',
            linkText: '게임동아 보도 ↗',
            href: 'https://game.donga.com/120615/'
        },
        aicon: {
            number: '02',
            title: 'GAME AiCON Seoul',
            description: '글로벌 게임 B2B 행사 · Organizer',
            linkText: 'PocketGamer.biz 보도 ↗',
            href: 'https://www.pocketgamer.biz/game-aicon-seoul-brings-together-developers-publishers-investors-and-more-next-week/'
        },
        logitech: {
            number: '03',
            title: 'Logitech × UNITE Seoul',
            description: 'MX Master 4 체험 게임 · 30초 · 800회 이상 플레이',
            linkText: '체험 게임 보기 ↗',
            href: 'https://mx-master-4-master-reveal-seoul.game-digger22.chatgpt.site/'
        },
        town: {
            number: '04',
            title: 'Seoul Game Town 1·2',
            description: '인디게임 전시 공동 기획·운영 · 누적 펀딩 1,810만 원+',
            linkText: '머니투데이 보도 ↗',
            href: 'https://www.mt.co.kr/industry/2026/07/08/2026070715375551305'
        },
        huddlers: {
            number: '05',
            title: 'Game Huddlers',
            description: '게임 개발자 300명 · 유타대학교 협업 · 연 3회 행사',
            linkText: 'Discord 참여하기 ↗',
            href: 'https://discord.gg/jK9aqhKdnC'
        },
        mmca: {
            number: '06',
            title: 'MMCA Advisory Panel',
            description: '국립현대미술관 제13기 고객자문단 · 관람 경험 개선',
            linkText: '국립현대미술관 ↗',
            href: 'https://www.mmca.go.kr/'
        }
    };

    function selectProject(key) {
        const project = projectData[key];
        if (!project || !map) return;

        map.dataset.active = key;
        mapButtons.forEach(function (button) {
            const isSelected = button.dataset.mapProject === key;
            button.classList.toggle('is-active', isSelected);
            button.setAttribute('aria-pressed', String(isSelected));
        });
        mapLines.forEach(function (line) {
            line.classList.toggle('is-active', line.dataset.mapLine === key);
        });

        detailNumber.textContent = project.number;
        detailTitle.textContent = project.title;
        detailDescription.textContent = project.description;
        detailLink.textContent = project.linkText;
        detailLink.href = project.href;
    }

    mapButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            selectProject(button.dataset.mapProject);
        });
    });

    selectProject('anti');
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
