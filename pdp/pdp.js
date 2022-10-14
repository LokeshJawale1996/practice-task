
    let slides = document.getElementsByClassName("small");

    let forward = document.querySelector(".next");
    let back = document.querySelector(".prev");
    var img1 = document.querySelector(".img1");
    var big1 = document.querySelector(".big1");
    var img2 = document.querySelector(".img2");
    var big2 = document.querySelector(".big2");
    var img3 = document.querySelector(".img3");
    var big3 = document.querySelector(".big3");
    var img4 = document.querySelector(".img4");
    var big4 = document.querySelector(".big4");

    img1.addEventListener("click", function () {
      if (big1.classList.contains("hidden")) {
        big1.classList.remove("hidden");
        big2.classList.add("hidden");
        big3.classList.add("hidden");
        big4.classList.add("hidden");
        img1.classList.add("border");
        img2.classList.remove("border");
        img3.classList.remove("border");
        img4.classList.remove("border");
      } else {
        big1.classList.add("hidden");
      }
    });
    img2.addEventListener("click", function () {
      if (big2.classList.contains("hidden")) {
        big2.classList.remove("hidden");
        big1.classList.add("hidden");
        big3.classList.add("hidden");
        big4.classList.add("hidden");
        img2.classList.add("border");
        img1.classList.remove("border");
        img3.classList.remove("border");
        img4.classList.remove("border");
      } else {
        big2.classList.add("hidden");
      }
    });
    img3.addEventListener("click", function () {
      if (big3.classList.contains("hidden")) {
        big3.classList.remove("hidden");
        big1.classList.add("hidden");
        big2.classList.add("hidden");
        big4.classList.add("hidden");
        img3.classList.add("border");
        img1.classList.remove("border");
        img2.classList.remove("border");
        img4.classList.remove("border");
      } else {
        big3.classList.add("hidden");
      }
    });
    img4.addEventListener("click", function () {
      if (big1.classList.contains("hidden")) {
        big4.classList.remove("hidden");
        big1.classList.add("hidden");
        big2.classList.add("hidden");
        big3.classList.add("hidden");
        img4.classList.add("border");
        img1.classList.remove("border");
        img2.classList.remove("border");
        img3.classList.remove("border");

        console.log("hello loki");
      } else {
        big4.classList.add("hidden");
      }
    });

    forward.addEventListener("click", function () {
      // slides[i].style.display = "block";
      if (img1.classList.contains("border")) {
        img2.classList.add("border");
        img1.classList.remove("border");
        big2.classList.remove("hidden");
        big1.classList.add("hidden");
        big3.classList.add("hidden");
        big4.classList.add("hidden");
      } else if (img2.classList.contains("border")) {
        img3.classList.add("border");
        img2.classList.remove("border");
        big3.classList.remove("hidden");
        big1.classList.add("hidden");
        big2.classList.add("hidden");
        big4.classList.add("hidden");
      } else if (img3.classList.contains("border")) {
        img4.classList.add("border");
        img3.classList.remove("border");
        big4.classList.remove("hidden");
        big1.classList.add("hidden");
        big2.classList.add("hidden");
        big3.classList.add("hidden");
      } else {
        img1.classList.add("border");
        img4.classList.remove("border");
        big1.classList.remove("hidden");
        big2.classList.add("hidden");
        big3.classList.add("hidden");
        big4.classList.add("hidden");
      }
    });

    back.addEventListener("click", function () {
      // slides[i].style.display = "block";
      if (img1.classList.contains("border")) {
        img4.classList.add("border");
        img1.classList.remove("border");
        big4.classList.remove("hidden");
        big1.classList.add("hidden");
        big2.classList.add("hidden");
        big3.classList.add("hidden");
      } else if (img2.classList.contains("border")) {
        img1.classList.add("border");
        img2.classList.remove("border");
        big1.classList.remove("hidden");
        big2.classList.add("hidden");
        big3.classList.add("hidden");
        big4.classList.add("hidden");
      } else if (img3.classList.contains("border")) {
        img2.classList.add("border");
        img3.classList.remove("border");
        big2.classList.remove("hidden");
        big1.classList.add("hidden");
        big3.classList.add("hidden");
        big4.classList.add("hidden");
      } else {
        img3.classList.add("border");
        img4.classList.remove("border");
        big3.classList.remove("hidden");
        big1.classList.add("hidden");
        big2.classList.add("hidden");
        big4.classList.add("hidden");
      }
    });

    // counter
    var data = 1;

    //printing default value of data that is 0 in h2 tag
    document.getElementById("counting").innerText = data;
    var qnty =document.querySelector(".cart-qnt");

    //creation of increment function
    function increment() {
      if (data < 9) {
        data = data + 1;
      }
      document.getElementById("counting").innerText = data;
      qnty.innerHTML =data;
    }
    //creation of decrement function
    function decrement() {
      if (data > 1) {
        data = data - 1;
      }
      document.getElementById("counting").innerText = data;
      qnty.innerHTML =data;
    }

    // hideDesc function
    var removeDesc = document.querySelector(".removeDesc");
    var desc = document.querySelector(".desc-text");
    removeDesc.addEventListener("click", function () {
      if (desc.classList.contains("hdd")) {
        desc.classList.remove("hdd");
      } else {
        desc.classList.add("hdd");
      }
    });
    // hideSpec function
    var removeSpec = document.querySelector(".removeSpec");
    var spec = document.querySelector(".spec-data");
    removeSpec.addEventListener("click", function () {
      if (spec.classList.contains("desc-hdd")) {
        spec.classList.remove("desc-hdd");
      } else {
        spec.classList.add("desc-hdd");
      }
    });

    // hideCert function
    var removeCert = document.querySelector(".removeCert");
    var cert = document.querySelector(".cert-data");
    removeCert.addEventListener("click", function () {
      if (cert.classList.contains("cert-hdd")) {
        cert.classList.remove("cert-hdd");
      } else {
        cert.classList.add("cert-hdd");
      }
    });
