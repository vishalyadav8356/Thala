   var btn = document.querySelector("button");
    var input = document.querySelector("input");

    btn.addEventListener("click", () => {
      if (input.value === "") {
        bala();
      } else {
        if (!isNaN(input.value)) {
          var a = input.value;
          var sum = 0;
          var arr = a.split("");
          for (let i = 0; i < a.length; i++) {
            sum += parseInt(a[i]);
          }
          if (sum == 7) {
            thala();
          } else {
            bala();
          }
        } else {
          if (input.value.length == 7) {
            thala();
          } else {
            bala();
          }
        }
      }
    });
    function thala() {
      document.querySelector("h1").innerText = "Thala For A Reason !!";
      var audio = new Audio("bole jo.mp3");
      audio.play();
    }
    function bala() {
      input.value = "";
      document.querySelector("h1").innerText = "Kya kar rha hai bhai tu ?";
      var audio = new Audio("tenge tenge.mp3");
      audio.play();
      setTimeout(() => {
        document.querySelector("h1").innerText = "Is It Thala ?";
      }, 9000);
    }
