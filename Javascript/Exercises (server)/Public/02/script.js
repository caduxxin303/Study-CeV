function setImg(imgPath, gender, age) {
  document.querySelector('#wedet').innerHTML = `We detected ${gender}, with ${age} years old.`   
  document.querySelector('#result').insertAdjacentElement('beforeend', document.createElement('img'))
  document.querySelector('img').setAttribute('src', `${imgPath}` , 'alt', "Image")
  Object.assign(document.querySelector('img').style, {
  borderRadius: '50%',
  width: '100%',
  marginTop: '20px'
  })
}

function verify() {
  var yearNow = new Date().getFullYear()
  var yourYear = document.querySelector('input#birthy').value
  if (yourYear.length == 0 || yourYear > yearNow || yourYear < 0) {
    document.querySelector('#wedet').innerHTML = "Check it up and try again."
  } else {
    var age = yearNow - yourYear
    if (document.getElementsByName('gender')[0].checked) {
      var gender = 'male'
    } else if (document.getElementsByName('gender')[1].checked) {
      var gender = 'female'
    }
    if (age < 12) {
      var imgPath = `/images/${gender}/kid.jpg`
      setImg(imgPath, gender, age)
    } else if (age < 18) {
      var imgPath = `/images/${gender}/teen.jpg`
      setImg(imgPath, gender, age)
    } else if (age < 60) {
      var imgPath = `/images/${gender}/adult.jpg`
      setImg(imgPath, gender, age)
    } else if (age < 100) {
      var imgPath = `/images/${gender}/old.jpg`
      setImg(imgPath, gender, age)
    } else {
      document.querySelector('#wedet').innerHTML = "WE DON'T BELIEVE YOU"
    }
  }
}