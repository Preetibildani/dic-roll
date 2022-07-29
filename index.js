 // grenrate rendom no.
    // user 1 --->
    let FRN = Math.floor(Math.random()*6)+1
    let FDI = "assets/dice" + FRN + ".png";
    document.querySelectorAll("img")[0].setAttribute("src",FDI)


  //   user 2---->
    let SRN = Math.floor(Math.random()*6)+1
    let SDI = "assets/dice" + SRN + ".png";
    document.querySelectorAll("img")[1].setAttribute("src",SDI)

      // user3---->
    let TRN = Math.floor(Math.random()*6)+1
    let TDI = "assets/dice" + TRN + ".png";
    document.querySelectorAll("img")[2].setAttribute("src",TDI)


    if(FRN>SRN && FRN > TRN ){
      document.querySelector("h1").innerHTML="The winner is User 1"
    }

    else if(SRN>FRN && SRN > TRN ){
      document.querySelector("h1").innerHTML="The winner is User 2"
    }
    else if(TRN>FRN && TRN > SRN ){
      document.querySelector("h1").innerHTML="The winner is User 3"
    }
    else {
      document.querySelector("h1").innerHTML="Draw"
    }
