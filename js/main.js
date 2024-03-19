function perfumeria () {

    let nombre = prompt ("Bienvenidos a Parfums de L'âme, como es tu nombre?");
    alert("muy buenos dias " + nombre + ", en que podemos ayudarte?");

    let Opciones;
    do {
        Opciones = prompt("Que tipo de fragancias estas buscando?\n"+
            "\n"+
            "1. Fragancias nacionales\n"+
            "2. Fragancias semiselectivas\n"+
            "3. Fragancias importadas\n"+
            "4. Fragancias nicho\n"+
            "\n"+
            "0. Presione para salir");

        switch (Opciones) {
            case "1":
                alert("Contamos con kevin, Boos, La Dolfina, Gieso");
                break;
            case "2":
                alert("Contamos con Adolfo Dominguez, Natura, O Boticario, Beneton");
                break;
            case "3":
                alert("Contamos con Dior, Chanel, Guerlain, Versace");
                break;
            case "4":
                alert("Contamos con Tom Ford, Parfums d Marly, Creed, Amouage, Xerjof");
                break;
            case "0":
                alert("Te esperamos muy pronto con los mejores precios")
                break;
            default:
                alert("vuelve a ingresar una opcion");
        } 

        let seguir = prompt("¿Quieres averiguar por alguna fragancia mas ingresa si ó no?");

        if (seguir !== null && seguir.toLowerCase() !== "si") {
            alert("Gracias por elegir Parfums de L'âme");
            break;
        }

    } while (true);

}
perfumeria ();
