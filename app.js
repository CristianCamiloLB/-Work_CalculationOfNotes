const prom = () => {
    let note1 = document.getElementById('note1').value
    let note2 = document.getElementById('note2').value
    let note3 = document.getElementById('note3').value

      let average = (parseFloat(note1) + parseFloat(note2) + parseFloat(note3))/3
      alert('el promedio de sus notas es: '+ average)

      if(average<2.1){
      alert('para poder recuperar le hace falta: '+ (2.1-average))
    }
 
     if(average<3.49) {
      alert('para pasar le hace falta: '+ (3.49-average))
    }
     if(average<4.5) {
      alert('para pasar con honores le hace falta: '+ (4.5-average))
    }
} 

