/*
    Feladat 1
    Az alkalmazás írja ki a számokat 1-től 10-ig (az 1 és a 10 is kerüljön kiírásra).

    Feladat 2
    Alakítsa át a programot úgy, hogy a felhasználó megadhasson egy egynél nagyobb számot.
    A számokat 1-től a megadott számig írja ki.
    Amennyiben nem 1-nél nagyobb számot ad meg a felhasználó akkor hibaüzenetet írjon ki, és ne történjen számkiírás.

    Feladat 3
    A felhasználó minimumot is adhasson meg.
    A kiírás minimumtól maximumig történjen.
    Ellenőrizze, hogy a megadott maximum nagyobb-e a megadott minimumnál.
    Ha a maximum kisebb vagy egyenlő a minimummal akkor hibaüzenetet írjon ki, és ne történjen számkiírás.
*/
document.getElementById("btn").addEventListener("click", generatenumber);

function generatenumber(){

    const a = parseInt(document.getElementById("a").value);
    const b = parseInt(document.getElementById("b").value);
    let text = "";

    console.log(a);
    console.log(b);

    /*
    //Feladat 1
    for (let i = 1; i <= 10; i++) {
        console.log(i);  
    }

    //Feladat 2
    for (let i = a; i <= 10; i++) {
        if(a <= 0) {
            console.log("Nem lehet negativ!")
            return
        }
        else {
            console.log(i);
        }  
    }
    */

    //Feladat 3
    if (b < a) {
        console.log("A maximum nagyobb a minimumnál!");
        text = "A maximum nagyobb a minimumnál!";
    }
    else {
        for (let i = a; i <= b; i++) {
            console.log(i);
            text += i + ", ";
        }
        
    }
    
    document.getElementById("output").innerHTML = text;


}