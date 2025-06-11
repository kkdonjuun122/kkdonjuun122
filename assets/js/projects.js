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
            title: '턴제 게임',
            // //demo : 'https://mporter.co',
            description: "말 그대로 턴제 게임입니다. 서로 차례를 주고 받으면서 행동을 수행합니다.",
            categories: ['favorites','game']
        },
        {
            image: 'assets/images/Security_guard2.png.png',
            title: '보안 위협 요소 찾기',
            ////demo : 'http://wall-e-jekyll.github.io/',
            description: "게임 내에서 컴퓨터를 조작하며 바이러스가 침투할 수 있는 요소를 찾아 제거하는 게임입니다.",
            categories: ['game','security']
        },
        {
            image: 'assets/images/Security_Tool.png.png',
            title: '보안 툴 만들기',
            //demo : false,
            description: "저만의 간단한 보안 툴을 만들어 보는 것입니다.",
            categories: ['favorites','security']
        },
        {
            image: 'assets/images/White_Black.png',
            title: '화이트 해커 & 블랙 해커',
            //demo : 'https://www.nagekar.com/mpw',
            description: "이 둘의 개념을 확실하게 배워 보고 싶습니다다.",
            categories: ['security']
            
        },
        /* 사용 안하는 애들, 일단 남겨둠
        {
            image: 'assets/images/social-share-count.jpeg',
            title: 'Social Share Count',
            //demo : false,
            description: "Ever wondered how many times a URL has been shared on popular social networks?",
            categories: ['security']
        },
        {
            image: 'assets/images/data-destroyer.png',
            title: 'Data Destroyer',
            //demo : false,
            description: "Native GUI wrapper for GNU coreutils tool 'dd'",
            categories: ['game']
        },
        {
            image: 'assets/images/raspberry-pi-monitor.png',
            title: 'Raspberry Pi Monitor',
            //demo : false,
            description: "Web based status monitor/smart mirror, displays system stats, weather and more.",
            categories: ['game']
        },
        {
            image: 'assets/images/s3scan.png',
            title: 'S3Scan',
            //demo : false,
            description: "Automate crawling of a website and find publicly open S3 buckets for takeover.",
            categories: ['security']
        },
        {
            image: 'assets/images/elementary.png',
            title: 'Elementary',
            //demo : 'https://elementary-jekyll.github.io/',
            description: "Elementary is a zero Javascript and minimal CSS ultra lightweight Jekyll theme for those of you who love simplicity.",
            categories: ['game']
        },
        {
            image: 'assets/images/soot-spirits.png',
            title: 'Soot Spirits',
            //demo : 'https://sootspirits.github.io',
            description: "A simple responsive two column Jekyll theme. Great for personal blog and basic portfolio website.",
            categories: ['game']
        },
        {
            image: 'assets/images/python-chat.png',
            title: 'Terminal Group Chat',
            //demo : false,
            description: "Simple terminal group chat based on native sockets using Python.",
            categories: ['native']
        },
        {
            image: 'assets/images/old-lcd.jpg',
            title: 'Reusing Old LCD Panel',
            //demo : false,
            description: "Reusing a dead laptop's LCD panel as a secondary monitor.",
            categories: ['diy']
        },
        {
            image: 'assets/images/nextcloud-enc.png',
            title: 'Encrypted Self-Hosted Cloud',
            //demo : false,    
            description: "Self hosted encrypted cloud setup with Nextcloud and GnuPG.",
            categories: ['diy', 'security']
        },
        {
            image: 'assets/images/google-cloud-backup.png',
            title: 'Encrypted Backups - Google Cloud',
            //demo : false,
            description: "Create automated encrypted incremental backups of data. Sync everything securely to Google Cloud.",
            categories: ['diy', 'security']
        },
        {
            image: 'assets/images/pi-cloud.jpg',
            title: 'Local Cloud - Raspberry Pi',
            //demo : false,
            description: "Host a local cloud server with a Raspberry Pi and a spare hard disk. Access data instantaneously on any device on the network.",
            categories: ['diy']
        },
        {
            image: 'assets/images/koalamate.png',
            title: 'Koalamate',
            //demo : false,
            description: "A cross-platform desktop application that serves as a Wolfram Alpha query place and notes taker.",
            categories: ['native']
        },
        */
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