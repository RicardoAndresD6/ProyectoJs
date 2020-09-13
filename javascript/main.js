$(document).ready(function () {

    //Slider-----------------------------------------------------------------------
    if (window.location.href.indexOf('index') > -1) {
        $('.galeria').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            responsive: true
        });

    }
    //Posts------------------------------------------------------------------------
    if (window.location.href.indexOf('index') > -1) {
        var posts = [
            {
                tittle: 'Prueba 1',
                date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat dui et eros rutrum, a feugiat orci scelerisque.Nullam sed nisl non nibh blandit porttitor sit amet sed sapien.Fusce volutpat velit nec urna eleifend, id fringilla odio tincidunt.Phasellus quis nisi eget justo accumsan fermentum.Nullam fringilla tempor purus, eu ornare orci rhoncus id.Nunc nec est lectus.Cras quis neque nibh.Pellentesque euismod, massa nec egestas gravida, elit odio imperdiet turpis, vitae consequat enim ante vel justo.'
            },
            {
                tittle: 'Prueba 2',
                date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat dui et eros rutrum, a feugiat orci scelerisque.Nullam sed nisl non nibh blandit porttitor sit amet sed sapien.Fusce volutpat velit nec urna eleifend, id fringilla odio tincidunt.Phasellus quis nisi eget justo accumsan fermentum.Nullam fringilla tempor purus, eu ornare orci rhoncus id.Nunc nec est lectus.Cras quis neque nibh.Pellentesque euismod, massa nec egestas gravida, elit odio imperdiet turpis, vitae consequat enim ante vel justo.'
            },
            {
                tittle: 'Prueba 3',
                date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat dui et eros rutrum, a feugiat orci scelerisque.Nullam sed nisl non nibh blandit porttitor sit amet sed sapien.Fusce volutpat velit nec urna eleifend, id fringilla odio tincidunt.Phasellus quis nisi eget justo accumsan fermentum.Nullam fringilla tempor purus, eu ornare orci rhoncus id.Nunc nec est lectus.Cras quis neque nibh.Pellentesque euismod, massa nec egestas gravida, elit odio imperdiet turpis, vitae consequat enim ante vel justo.'
            },
            {
                tittle: 'Prueba 4',
                date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat dui et eros rutrum, a feugiat orci scelerisque.Nullam sed nisl non nibh blandit porttitor sit amet sed sapien.Fusce volutpat velit nec urna eleifend, id fringilla odio tincidunt.Phasellus quis nisi eget justo accumsan fermentum.Nullam fringilla tempor purus, eu ornare orci rhoncus id.Nunc nec est lectus.Cras quis neque nibh.Pellentesque euismod, massa nec egestas gravida, elit odio imperdiet turpis, vitae consequat enim ante vel justo.'
            },
            {
                tittle: 'Prueba 5',
                date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat dui et eros rutrum, a feugiat orci scelerisque.Nullam sed nisl non nibh blandit porttitor sit amet sed sapien.Fusce volutpat velit nec urna eleifend, id fringilla odio tincidunt.Phasellus quis nisi eget justo accumsan fermentum.Nullam fringilla tempor purus, eu ornare orci rhoncus id.Nunc nec est lectus.Cras quis neque nibh.Pellentesque euismod, massa nec egestas gravida, elit odio imperdiet turpis, vitae consequat enim ante vel justo.'
            },
            {
                tittle: 'Prueba 6',
                date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat dui et eros rutrum, a feugiat orci scelerisque.Nullam sed nisl non nibh blandit porttitor sit amet sed sapien.Fusce volutpat velit nec urna eleifend, id fringilla odio tincidunt.Phasellus quis nisi eget justo accumsan fermentum.Nullam fringilla tempor purus, eu ornare orci rhoncus id.Nunc nec est lectus.Cras quis neque nibh.Pellentesque euismod, massa nec egestas gravida, elit odio imperdiet turpis, vitae consequat enim ante vel justo.'
            },
        ];

        posts.forEach((item, index) => {
            var post = `
                 <article class="post">
                    <h2>${item.tittle}</h2>
                     <span class="date">${item.date}</span>
                     <p>
                        ${item.content}
                    </p>
                     <a href="#" class="button-more">Leer más</a>
                </article>
            `;

            $("#posts").append(post);

        });
    }


    //Selector de tema----------------------------------------------------------
    var theme = $("#theme");

    $("#to-green").click(function () {
        theme.attr("href", "css/green.css")
    });

    $("#to-red").click(function () {
        theme.attr("href", "css/red.css")
    });


    $("#to-blue").click(function () {
        theme.attr("href", "css/blue.css")
    });

    //Scroll arriba de la web-------------------------------------------------------
    $('.subir').click(function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 500);

        return false;
    });

    //Login falso

    $("#login form").submit(function () {
        var form_name = $("#form_name").val();

        localStorage.setItem("form_name", form_name);

    });

    var form_name = localStorage.getItem("form_name");

    if (form_name != null && form_name != undefined) {
        var about_parrafo = $("#about p");

        about_parrafo.html("<br/><strong>Bienvenido " + form_name + "</strong>");
        about_parrafo.append("<a href='#' id='logout'>Cerrar sesion</a>");

        $("#login").hide();

        $("#logout").click(function () {
            localStorage.clear();
            location.reload();
        });

    }

    //Acordeon--------------------------------------------------------------------

    if (window.location.href.indexOf('about') > -1){
        $("#acordeon").accordion();
    }

    //Reloj--------------------------------------------------------------------------
    if (window.location.href.indexOf('reloj') > -1){

        setInterval(function(){
            
        var reloj = moment().format("hh:mm:ss");
        $("#reloj").html(reloj);

        },1000);
    }

    //Validation----------------------------------------------------------------------
    if (window.location.href.indexOf('contact') > -1){

        $("form input[name='date']").datepicker({
            dateFormat: 'dd-mm-yy'
        });

        $.validate({
            lang: 'es',
            errorMessagePosition: 'top',
            scrollToTopOnError: true
        });
    }

});