$(document).ready(() => {
    render_projects('favorites');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/Turn_game.png',
            title: '턴제 게임 (예정)',
            // //demo : 'https://mporter.co',
            description: "말 그대로 턴제 게임입니다. 서로 차례를 주고 받으면서 행동을 수행합니다.",
            categories: ['favorites','game']
        },
        {
            image: 'assets/images/Security_guard2.png.png',
            title: '보안 위협 요소 찾기 (예정) ',
            ////demo : 'http://wall-e-jekyll.github.io/',
            description: "게임 내에서 컴퓨터를 조작하며 바이러스가 침투할 수 있는 요소를 찾아 제거하는 게임입니다.",
            categories: ['game','security']
        },
        {
            image: 'assets/images/Security_Tool.png.png',
            title: '보안 툴 만들기 (예정)',
            //demo : false,
            description: "저만의 간단한 보안 툴을 만들어 보는 것입니다.",
            categories: ['favorites','security']
        },
        {
            image: 'assets/images/White_Black.png',
            title: '화이트 해커 & 블랙 해커 (예정)',
            //demo : 'https://www.nagekar.com/mpw',
            description: "이 둘의 개념을 확실하게 배워 보고 싶습니다.",
            categories: ['security']
        },
        {
            image: 'assets/images/Unity.png',
            title: 'Unity 기반 모바일 게임 만들기 (예정)',
            //demo : false,
            description: "Unity를 사용하여 모바일 게임을 만들고 싶습니다다.",
            categories: ['game','favorites']
        },
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2>${project.title}</h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">Demo</a>` : ''}</p>
                    </article>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}