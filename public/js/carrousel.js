window.addEventListener("load", () => {

    let opciones = {
        slidesToShow: 1,    //número de elementos a mostrar
        slidesToScroll: 1,  //Número de elementos al hacer scroll
        draggable: false,
        rewind: true,
        dots: '.carousel__indicadoresProyecto',
        arrows: {
            prev: '.carousel__anteriorProject',
            next: '.carousel__siguienteProject'
        },
        responsive: [
            {
                // screens greater than >= 775px
                breakpoint: 775,
                settings: {
                    // Set to `auto` and provide item width to adjust to viewport
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    itemWidth: 150,
                    duration: 0.25
                }
            }, {
                // screens greater than >= 1024px
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    itemWidth: 150,
                    duration: 0.25
                }
            }
        ]
    };
    slider = new Glider(document.querySelector(".carousel__listaProyects"), opciones);



    setInterval(() => {
        document.getElementById("flechaSig2").click();
    }, 10000);


});