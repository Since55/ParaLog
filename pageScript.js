
var totalHours = 0;
function setTotalHours(hours){
      var total = document.getElementById("total");
      totalHours = totalHours + hours     ;

      total.innerHTML = "Total hours: " + totalHours; 
}

function addNewFlight(){
      // get input values
      const date = document.getElementById('date1').value;
      const hours = +document.getElementById('hours').value;
      const paraglider = document.getElementById('paraglider').value;
      
      if( date == "" || hours == "" || paraglider == "" ){
            alert("Incorrect input!");
      } else {
            // get the html table
            // 0 = the first table
            var table = document.getElementsByTagName('table')[0];
            
            // add new empty row to the table
            // 0 = in the top 
            // table.rows.length = the end
            // table.rows.length/2+1 = the center
            var newRow = table.insertRow(table.rows.length/2+1);
            
            // add cells to the row
            var cel1 = newRow.insertCell(0);
            var cel2 = newRow.insertCell(1);
            var cel3 = newRow.insertCell(2);
            // add values to the cells
           
            cel1.innerHTML = date;
            cel2.innerHTML = hours;
            cel3.innerHTML = paraglider; 
            console.log(hours);
            setTotalHours(hours);
            return false;
      }
}

