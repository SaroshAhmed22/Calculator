var y;
var op;
var z;
var x;
function getno(e) {

    z = document.getElementById("txtb")
    // console.log(e)
    x = e.innerHTML
    if (x == "AC") {
        return z.value = ""
    }
    else if (x == "CE") {
        var cee = z.value.slice(0, z.value.length - 1)
        z.value = cee
        return 0
    }



    else if (x == z.value.slice(z.value.length - 1, z.value.length ) && "+" == z.value.slice(z.value.length - 1, z.value.length) || x == '-' &&  "+" == z.value.slice(z.value.length - 1, z.value.length) || x == '*' &&  "+" == z.value.slice(z.value.length - 1, z.value.length) || x == '/' &&  "+" == z.value.slice(z.value.length - 1, z.value.length)){
        var e = z.value
        z.value = e
        return 0
    }
    else if (x == z.value.slice(z.value.length - 1, z.value.length ) && "-" == z.value.slice(z.value.length - 1, z.value.length)  || x == '*' &&  "-" == z.value.slice(z.value.length - 1, z.value.length) || x == '/' &&  "-" == z.value.slice(z.value.length - 1, z.value.length) || x == '+' &&  "-" == z.value.slice(z.value.length - 1, z.value.length)){
        var e = z.value
        z.value = e
        return 0
    }
    else if (x == z.value.slice(z.value.length - 1, z.value.length ) && "*" == z.value.slice(z.value.length - 1, z.value.length)  || x == '/' &&  "*" == z.value.slice(z.value.length - 1, z.value.length) || x == '+' &&  "*" == z.value.slice(z.value.length - 1, z.value.length)  || x == '-' &&  "*" == z.value.slice(z.value.length - 1, z.value.length)){
        var e = z.value
        z.value = e
        return 0
    }
    else if (x == z.value.slice(z.value.length - 1, z.value.length ) && "/" == z.value.slice(z.value.length - 1, z.value.length)  || x == '+' &&  "/" == z.value.slice(z.value.length - 1, z.value.length)  || x == '-' &&  "/" == z.value.slice(z.value.length - 1, z.value.length)  || x == '*' &&  "/" == z.value.slice(z.value.length - 1, z.value.length)){
        var e = z.value
        z.value = e
        return 0
    }


        //     return 0
        // }

        // else if (x == "-") {
            //     y = parseInt(z.value)
            //     z.value = ""

            //     return
            // }
            // else if (x == "*") {
                //     y = parseInt(z.value)

                //     z.value = ""
                //     return 0
                // }
    // else if (x == "/") {
        //     y = parseInt(z.value)
        //     z.value = ""
        //     return 0
        // }
    else if (x == "=") {
            var y = (z.value)

            // console.log(y)
            // console.log(typeof (y))
            z.value = eval(y)
            return 0
        }


    z.value += x
    // console.log(z)
    // console.log(z.value.slice(z.value.length - 1, z.value.length))
    // console.log(z.value.slice(z.value.length - 2, z.value.length - 1))
}

    // fn aadd(t){
        //     y = parseInt(z.value)
        //     z.value = ""

        //     z.value = z.value + y

        // }
