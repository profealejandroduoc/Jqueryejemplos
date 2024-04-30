
$(document).ready(function () {
    $.getJSON('https://mindicador.cl/api', function () {

        console.log("esperando....");
        //console.log([data]);
        //$("#dolar").text("Valor dolar: $"+data.dolar.valor);
        //$("#spin").addClass("spinner-grow spinner-grow-sm");
        //$("#spintext").text("Cargando...");
    }).fail(function () {
        $("#spin").hide();
        $("#spintext").hide();

        $("#dolar").removeClass("h5");
        $("#dolar").css("font-size", "10px");
        $("#dolar").text("Error al cargar datos");

    }).done(function (data) {
        $("#spin").hide();
        $("#spintext").hide();
        $("#spinuf").hide();
        $("#spintextuf").hide();
        $("#spinutm").hide();
        $("#spintextutm").hide();
        $("#dolar").text("Valor dolar: $" + data.dolar.valor);
        $("#uf").text("Valor UF: $" + data.uf.valor);
        $("#utm").text("Valor UTM: $" + data.utm.valor);
    });
});


$(document).ready(function () {

    $("#btncomida").click(function (e) {
        e.preventDefault();
        let letra=$("#letra").val();
        console.log(letra);

        $.getJSON('https://www.themealdb.com/api/json/v1/1/search.php?f='+letra, function (data) {

            console.log([data]);

            console.log(data.meals.length);
            if (data.meals.length>0)
            {
                console.log("comidita...");
                console.log([data.meals[0].strMealThumb]);
               
                $("#foto").attr("src", data.meals[0].strMealThumb);
                $("#strMeal").text(data.meals[0].strMeal);
                $("#instrucciones").text(data.meals[0].strInstructions);
                $("#tuto").attr("href", data.meals[0].strYoutube);
            }
        });

    });

});

