let saniye = (Number )( prompt("saniye değerinizi girin"))

let saat = saniye / 3600 
  alert(saat + " saat")
  let dakika = (saniye / 60) % 60
  alert( dakika + " dakikanız")
  let geriyeKalan = dakika % 60
  alert("kalan saniyeniz " + geriyeKalan)
