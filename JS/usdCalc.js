/*    var bottom;
    $.getJSON('https://www.floatrates.com/daily/bgn.json', function(data) {
    bottom = data.usd.rate;
    // JSON result in `data` variable
});*/

document.addEventListener("DOMContentLoaded", async function () {
  $("body > div > div.product-flex > div.right > div.item").append(
    '<button class="usd">USD</button>'
    );
    $("body > div > div.product-flex > div.right > div.item").append(
      '<button class="bgn">BGN</button>'
      );
      var price;
      var usdRate;
      var textOfPUSD, textOfPUSD2;
      var textOfPBGN, textOfPBGN2;
      function getData() {
        $.getJSON("https://www.floatrates.com/daily/bgn.json", function (data) {
          usdRate = data.usd.rate;
        });
      }
      await getData();
      console.log(usdRate);
      
      /*function waitforshit(callback) {
    if (usdRate != "") {
      // call the callback to notify other code
      setTimeout(callback, 1000);
    }
    //waitforshit();
  }*/
  var changeCurrencyToUSD = function () {
    textOfPUSD = textOfPBGN = $(
      "body > div > div.product-flex > div.right > div.item > p:nth-child(2)"
    ).text();
    textOfPUSD2 = textOfPBGN2 = $(
      "body > div > div.product-flex > div.right > div.item > p:nth-child(3)"
    ).text();
    var currencyLength;
    if (
      window.location.href.includes("IT") ||
      window.location.href.includes("EN")
    )
      currencyLength = 3;
    else currencyLength = 2;
    var flag = 0;
    for (var i = 0; flag != 1 && i < textOfPUSD.length; i++) {
      //console.log(textOfPUSD[i]);
      if (
        isNaN(textOfPUSD[i]) &&
        textOfPUSD[i] != "." &&
        textOfPUSD[i] != ","
      ) {
        var temp = textOfPUSD.replace(",", ".");
        price = parseFloat(temp.slice(0, i));
        //console.log(price);
        var priceRated = price * usdRate;
        priceRated = Math.round((priceRated + Number.EPSILON) * 100) / 100;
        textOfPUSD = priceRated + "$" + textOfPUSD.slice(i + currencyLength);
        flag = 1;
      }
    }
    flag = 0;
    var startUSD2 = textOfPUSD2.indexOf(" - ") + 3;
    for (var i = startUSD2; flag != 1 && i < textOfPUSD2.length; i++) {
      //console.log(textOfPUSD2[i]);
      if (
        isNaN(textOfPUSD2[i]) &&
        textOfPUSD2[i] != "." &&
        textOfPUSD2[i] != ","
      ) {
        var temp = textOfPUSD2.replace(",", ".");
        price = parseFloat(temp.slice(startUSD2, i));
        //console.log(price);
        var priceRated = price * usdRate;
        priceRated = Math.round((priceRated + Number.EPSILON) * 100) / 100;
        textOfPUSD2 =
          textOfPUSD2.slice(0, startUSD2) +
          priceRated +
          "$" +
          textOfPUSD2.slice(i + currencyLength);
        flag = 1;
      }
    }

    //console.log(usdRate);
    // console.log(priceRated);

    //console.log(priceRated);
    /*if (
      window.location.href.includes("IT") ||
      window.location.href.includes("EN")
    ) {
      document.body.innerHTML = document.body.innerHTML.replace(
        document
          .querySelectorAll(".product-flex>.right>.item>p")[0]
          .innerText.match(/^(.*).{19}/i)[1]
          .trim(),
        priceRated
      );
    } else {*/
    /*document.body.innerHTML = document.body.innerHTML.replace(
        document.querySelectorAll(".product-flex>.right>.item>p")[0].innerText.match(/^(.*).{19}/i)[1].trim(),
        priceRated
      );*/
    /*var flag = 0;
      textOfPUSD = textOfPBGN = $("body > div > div.product-flex > div.right > div.item > p:nth-child(2)").text();
      for(var i = 0; flag != 1; i++)
      {
        if(isNaN(textOfPUSD[i]) && textOfPUSD[i]!=".")
        {
          
          textOfPUSD = parseFloat() + textOfPUSD.slice(i)
          flag = 1;
        }
      }*/
    $(document).ready(function () {
      //document.querySelectorAll(".product-flex>.right>.item>p")[0].innerText.match(/^(.*).{19}/i)[1].trim().firstChild.nodeValue = priceRated;
      $(
        "body > div > div.product-flex > div.right > div.item > p:nth-child(2)"
      ).text(textOfPUSD);
      $(
        "body > div > div.product-flex > div.right > div.item > p:nth-child(3)"
      ).text(textOfPUSD2);
      document.getElementsByClassName("usd")[0].style.display = "none";
      document.getElementsByClassName("bgn")[0].style.display = "block";
    });
  };
  var changeCurrencyToBGN = function () {
    /*if (
      window.location.href.includes("IT") ||
      window.location.href.includes("EN")
    ) {
      document.body.innerHTML = document.body.innerHTML.replace(
        document
          .querySelectorAll(".product-flex>.right>.item>p")[0]
          .innerText.match(/^(.*).{19}/i)[1]
          .trim(),
        price
      );
    } else {
      console.log(document.querySelectorAll(".product-flex>.right>.item>p")[0].innerText.match(/^(.*).{20}/i)[1]);
      document.body.innerHTML = document.body.innerHTML.replace(
        document
          .querySelectorAll(".product-flex>.right>.item>p")[0]
          .innerText.match(/^(.*).{19}/i)[1]
          .trim(),
        price
      );*/
    //document.querySelectorAll(".product-flex>.right>.item>p")[0].innerText.match(/^(.*).{19}/i)[1].trim().firstChild.nodeValue = priceRated;
    $(document).ready(function () {
      //document.querySelectorAll(".product-flex>.right>.item>p")[0].innerText.match(/^(.*).{19}/i)[1].trim().firstChild.nodeValue = priceRated;
      $(
        "body > div > div.product-flex > div.right > div.item > p:nth-child(2)"
      ).text(textOfPBGN);
      $(
        "body > div > div.product-flex > div.right > div.item > p:nth-child(3)"
      ).text(textOfPBGN2);
      document.getElementsByClassName("bgn")[0].style.display = "none";
      document.getElementsByClassName("usd")[0].style.display = "block";
    });
  };
  document
    .getElementsByClassName("usd")[0]
    .addEventListener("click", changeCurrencyToUSD);
  document
    .getElementsByClassName("bgn")[0]
    .addEventListener("click", changeCurrencyToBGN);
});
