$(function () {
    function creat_card (data) {
        return `
            <div class="card col-lg-2 col-md-3 col-sm-4 col-xs-6">
                <div class="inner">
                    <div class="top">
                        <img src="${data.src}" width="100%" alt="">
                        <div class="numbers">
                            <i class="fa fa-eye" aria-hidden="true"></i>
                            <span>6.741</span>
                            <i class="fa fa-comment" aria-hidden="true"></i>
                            <span>23</span>
                            <i class="fa fa-heart" aria-hidden="true"></i>
                            <span>600</span>
                        </div>
                        <div class="mark">
                            <h3>Medium Illustration</h3>
                            <p>I had the pleasure to work with Medium on an editorial illustration about quitting your job. I attached a larger version, check it out.</p>
                        </div>
                    </div>
                    <div class="bottom">
                        <img src="./image/user01.png" alt="">
                        <span>${data.name}</span>
                    </div>
                </div>
            </div>    
        `
    }

    let data = [
        {src: 'https://cdn.dribbble.com/users/99875/screenshots/4963849/gogi.gif', name: 'Nick Stater'},
        {src: 'https://cdn.dribbble.com/users/31752/screenshots/4964655/women_s-health_1x.jpg', name: 'RADIO'},
        {src: 'https://cdn.dribbble.com/users/31752/screenshots/4964681/medium_illustration_1x.jpg', name: 'RADIO'},
        {src: 'https://cdn.dribbble.com/users/31752/screenshots/4964673/slack_meet_email_v2_1x.png', name: 'RADIO'},
        {src: 'https://cdn.dribbble.com/users/33827/screenshots/4960998/rev_1x.jpg', name: 'RADIO'},
        {src: 'https://cdn.dribbble.com/users/31752/screenshots/4964656/women_s-health-badge_1x.jpg', name: 'RADIO'},
        {src: 'https://cdn.dribbble.com/users/1401165/screenshots/4963760/cover_1x.png', name: 'RADIO'},
        {src: 'https://cdn.dribbble.com/users/2738/screenshots/4963798/haunted_happy_tree_1x.jpg', name: 'RADIO'},
        {src: 'https://cdn.dribbble.com/users/237483/screenshots/4938088/hoops-alt_1x.png', name: 'RADIO'},
        {src: 'https://cdn.dribbble.com/users/516449/screenshots/4954510/ccccccc.gif', name: 'RADIO'},
        {src: 'https://cdn.dribbble.com/users/4598/screenshots/4964488/moon_01_1x.png', name: 'RADIO'},
        {src: 'https://cdn.dribbble.com/users/1695776/screenshots/4966075/___1x.png', name: 'RADIO'},
        {src: 'https://cdn.dribbble.com/users/99875/screenshots/4963849/gogi.gif', name: 'Nick Stater'},
        {src: 'https://cdn.dribbble.com/users/31752/screenshots/4964655/women_s-health_1x.jpg', name: 'RADIO'},
        {src: 'https://cdn.dribbble.com/users/31752/screenshots/4964681/medium_illustration_1x.jpg', name: 'RADIO'},
        {src: 'https://cdn.dribbble.com/users/31752/screenshots/4964673/slack_meet_email_v2_1x.png', name: 'RADIO'},
        {src: 'https://cdn.dribbble.com/users/33827/screenshots/4960998/rev_1x.jpg', name: 'RADIO'},
        {src: 'https://cdn.dribbble.com/users/31752/screenshots/4964656/women_s-health-badge_1x.jpg', name: 'RADIO'},
        {src: 'https://cdn.dribbble.com/users/1401165/screenshots/4963760/cover_1x.png', name: 'RADIO'},
        {src: 'https://cdn.dribbble.com/users/2738/screenshots/4963798/haunted_happy_tree_1x.jpg', name: 'RADIO'},
        {src: 'https://cdn.dribbble.com/users/237483/screenshots/4938088/hoops-alt_1x.png', name: 'RADIO'},
        {src: 'https://cdn.dribbble.com/users/516449/screenshots/4954510/ccccccc.gif', name: 'RADIO'},
    ]

    data.map(item=>{
        let card = creat_card(item)
        $('.center').append(card)
    })

    $('.fa-list-ul').on('click', function () {
        $('.header-mobile .slider').toggleClass('show')
    })
})