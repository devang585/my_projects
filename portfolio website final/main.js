alert('hii, this website is little big and it needs a little good pc to run properly. If it works slow for any reason or you want its source code mail me at devangs585@gmail.com')



let sendmail = () => {
    var params = {
        from_name: document.querySelectorAll('#form input')[0].value,
        from_name2: document.querySelectorAll('#form input')[1].value,
        email_id: document.querySelectorAll('#form input')[2].value,
        message: document.querySelector('#form textarea').value
    }
    emailjs.send("service_oo9rxnt", "template_rvhqkwk", params).then(function (res) {
        alert("mail sent")
    })
}

// pop up
let btn1 = document.querySelector('#project_div .projects:nth-child(1) div button:nth-child(1)');
let btn2 = document.querySelector('#project_div .projects:nth-child(2) div button:nth-child(1)');
let btn3 = document.querySelector('#project_div .projects:nth-child(3) div button:nth-child(1)');
let btn4 = document.querySelector('#project_div .projects:nth-child(4) div button:nth-child(1)');
let popup1 = document.querySelector('#portfolio main:nth-child(1)');
let popup2 = document.querySelector('#portfolio main:nth-child(2)');
let popup3 = document.querySelector('#portfolio main:nth-child(3)');
let popup4 = document.querySelector('#portfolio main:nth-child(4)');
btn1.onclick = () => {
    popup1.classList.add('pop-up');
}
btn2.onclick = () => {
    popup2.classList.add('pop-up');
}
btn3.onclick = () => {
    popup3.classList.add('pop-up');
}
btn4.onclick = () => {
    popup4.classList.add('pop-up');
}


let cencle1 = document.querySelector('#portfolio main:nth-child(1) h2 span');
let cencle2 = document.querySelector('#portfolio main:nth-child(2) h2 span');
let cencle3 = document.querySelector('#portfolio main:nth-child(3) h2 span');
let cencle4 = document.querySelector('#portfolio main:nth-child(4) h2 span');

cencle1.onclick = () => {
    popup1.classList.remove('pop-up');
};
cencle2.onclick = () => {
    popup2.classList.remove('pop-up');
};
cencle3.onclick = () => {
    popup3.classList.remove('pop-up');
};
cencle4.onclick = () => {
    popup4.classList.remove('pop-up');
};


// nav res button setup
let nav = document.querySelectorAll('header #nav ul li');
let checkbox = document.querySelector('header input:nth-child(2)');
nav[0].onclick = () => {
    checkbox.checked = false;
}
nav[1].onclick = () => {
    checkbox.checked = false;
}
nav[2].onclick = () => {
    checkbox.checked = false;
}
nav[3].onclick = () => {
    checkbox.checked = false;
}
nav[4].onclick = () => {
    checkbox.checked = false;
}


// new theme
let inp_theme = document.querySelector('#nav input');
let icon_theme = document.querySelector('#nav label');
icon_theme.onclick = () => {
    if (inp_theme.checked == false) {
        document.body.style.background = '#161623';
        document.body.style.color = 'white';
        document.querySelectorAll('header #nav ul li')[0].classList.add('li_black');
        document.querySelectorAll('header #nav ul li')[1].classList.add('li_black');
        document.querySelectorAll('header #nav ul li')[2].classList.add('li_black');
        document.querySelectorAll('header #nav ul li')[3].classList.add('li_black');
        document.querySelectorAll('header #nav ul li')[4].classList.add('li_black');
        document.querySelector('#main #main_details button').classList.add('contact_btn_black');
        document.querySelectorAll('#project_div .projects')[0].classList.add('projects_black');
        document.querySelectorAll('#project_div .projects')[1].classList.add('projects_black');
        document.querySelectorAll('#project_div .projects')[2].classList.add('projects_black');
        document.querySelectorAll('#project_div .projects')[3].classList.add('projects_black');
        document.querySelectorAll('#about #timeline .checkpoints')[0].classList.add('checkpoints_black');
        document.querySelectorAll('#about #timeline .checkpoints')[1].classList.add('checkpoints_black');
        document.querySelectorAll('#about #timeline .checkpoints')[2].classList.add('checkpoints_black');
        document.querySelectorAll('#about #timeline .checkpoints')[3].classList.add('checkpoints_black');
        document.querySelectorAll('#about #timeline .checkpoints')[4].classList.add('checkpoints_black');
        document.querySelectorAll('#about #timeline .checkpoints')[5].classList.add('checkpoints_black');
        document.querySelector('.contact').classList.add('contact_black');
        document.querySelectorAll('#mainskill .skills')[0].classList.add('skills_black');
        document.querySelectorAll('#portfolio main')[0].classList.add('main_black');
        document.querySelectorAll('#portfolio main')[1].classList.add('main_black');
        document.querySelectorAll('#portfolio main')[2].classList.add('main_black');
        icon_theme.innerHTML = '<ion-icon name="moon"></ion-icon>'
        icon_theme.classList.add('moon_black');
        document.querySelector('header #nav').style.background = '#161623';
        document.querySelector('header #nav label').classList.add('label_black_res');

        VanillaTilt.init((document.getElementsByClassName('projects')[0]), {
            max: 25,
            speed: 10
        });
        VanillaTilt.init((document.getElementsByClassName('projects')[1]), {
            max: 25,
            speed: 10
        });
        VanillaTilt.init((document.getElementsByClassName('projects')[2]), {
            max: 25,
            speed: 10
        });
        VanillaTilt.init((document.querySelector('.contact')), {
            max: 5,
            speed: 10
        });

    }
    else if (inp_theme.checked == true) {
        document.body.style.background = '#e3f0fa';
        icon_theme.innerHTML = '<ion-icon name="sunny"></ion-icon>'
        document.body.style.color = 'black';



        document.querySelectorAll('header #nav ul li')[0].classList.remove('li_black');
        document.querySelectorAll('header #nav ul li')[1].classList.remove('li_black');
        document.querySelectorAll('header #nav ul li')[2].classList.remove('li_black');
        document.querySelectorAll('header #nav ul li')[3].classList.remove('li_black');
        document.querySelectorAll('header #nav ul li')[4].classList.remove('li_black');
        document.querySelector('#main #main_details button').classList.remove('contact_btn_black');
        document.querySelectorAll('#project_div .projects')[0].classList.remove('projects_black');
        document.querySelectorAll('#project_div .projects')[1].classList.remove('projects_black');
        document.querySelectorAll('#project_div .projects')[2].classList.remove('projects_black');
        document.querySelectorAll('#project_div .projects')[3].classList.remove('projects_black');
        document.querySelectorAll('#about #timeline .checkpoints')[0].classList.remove('checkpoints_black');
        document.querySelectorAll('#about #timeline .checkpoints')[1].classList.remove('checkpoints_black');
        document.querySelectorAll('#about #timeline .checkpoints')[2].classList.remove('checkpoints_black');
        document.querySelectorAll('#about #timeline .checkpoints')[3].classList.remove('checkpoints_black');
        document.querySelectorAll('#about #timeline .checkpoints')[4].classList.remove('checkpoints_black');
        document.querySelectorAll('#about #timeline .checkpoints')[5].classList.remove('checkpoints_black');
        document.querySelector('.contact').classList.remove('contact_black');
        document.querySelectorAll('#mainskill .skills')[0].classList.remove('skills_black')
        document.querySelectorAll('#portfolio main')[0].classList.remove('main_black');
        document.querySelectorAll('#portfolio main')[1].classList.remove('main_black');
        document.querySelectorAll('#portfolio main')[2].classList.remove('main_black');
        icon_theme.innerHTML = '<ion-icon name="sunny"></ion-icon>'
        icon_theme.classList.remove('moon_black');
        document.querySelector('header #nav').style.background = '#e3f0fa';
        document.querySelector('header #nav label').classList.remove('label_black_res');
    }
}