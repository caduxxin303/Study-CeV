function change() {
  var main_image = document.querySelector("img")
  var time = new Date().toLocaleTimeString({hour: "2-digit"})
  var hour = new Date().getHours()
  document.querySelector("span").innerHTML = `${time}`
  if (hour >= 6 && hour <= 12) {
    main_image.src = "./images/morning.jpg"
    document.body.style.background = "wheat"
    document.querySelector("h1").style.color = "wheat"
  } else if (hour >= 13 && hour <= 18) {
    main_image.src = "images/afternoon.jpg"
    document.body.style.background = "coral"
    document.body.header.h1.style.color = "coral"
  } else {
    main_image.src = "images/night.jpg"
    document.body.style.background = "darkblue"
    document.querySelector("h1").style.color = "darkblue"
  }
}
setInterval(change, 500)
