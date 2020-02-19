function output(){

    var year =document.getElementById("year").value;
    var yy =parseInt(year);
    var day =document.getElementById("day").value;
    var dd = parseInt(day);
    var month =document.getElementById("month").value;
    var mm =parseInt(month);
    var days =["Sunday", "Monday", "Tuesday" , "Wednesday",  "Thursday" , "Friday" , "Saturday"];
    var femaleNames =["Akosua", "Adwoa" , "Abenaa" ,"Akua", "Yaa", "Afua","Ama"];
    var maleNames =["Kwasi", "Kwadwo", "Kwabena", "Kwaku" ,"Yaw", "Kofi", "kwame"];
    var cc = (yy - 1) / 100 + 1;
    var  result =(((cc/4)-2*cc-1)+((26*(mm+1/10))+dd)%7);
    if(document.getElementById('gender').checked) {
        var gender = 'male';
    }
    else{ 
        var gender = 'female'; 
      }
      if(dd < 1 || dd > 31) {
          alert('invalid day');
      }
      else  if (mm < 1 || mm  > 12){
        alert('invalid month');
    }
      else if (Math.ceil(result) == 1 && gender === 'female') {
        document.getElementById("outcome").innerHTML =
        alert("Born on a " + days[1] + ",your akan name is " + femaleNames[1]);
        }
       else if (Math.ceil(result) && gender=== 'female'){
          document.getElementById("outcome"). innerHTML =
          alert("Born on a " + days[2] +  ",your akan name is " + femaleNames[2])
        }
        else if(Math.ceil(result) && gender === 'female') {
            document.getElementById("outcome").innerHTML =
            alert("Born on a " + days[3] + ",your akan name is " + femaleNames[3])
        }
        else if (Math.ceil(result) && gender === 'female'){
            document.getElementById("outcome").innerHTML =
            alert("Born on a " + days[4] + ",your akan name is " + femaleNames[4])
        }
        else if (Math.ceil(result) && gender === 'female') {
            document.getElementById("outcome").innerHTML =
            alert("Born on a " + days[5] +", your akan name is " + femaleNames[5])
        }
         if(Math.ceil(result) == gender === 'female'){
            document.getElementById("outcome").innerHTML =
            alert("Born on a " + days[6] +", your akan name is " + femaleNames[6])
        }
        else if (Math.ceil(result) && gender === 'female'){
            document.getElementById("outcome").innerHTML =
            alert("Born on a " + days[0] + ", your akan name is " + femaleNames[0])
        }
        else if (Math.ceil(result) && gender === 'male'){
            document.getElementById("outcome").innerHTML =
            alert("Born on a " + days[1] + ", your akan name is " + maleNames[1])
        }
          else if (Math.ceil(result) && gender === 'male'){
            document.getElementById("outcome").innerHTML =
            alert("Born on a " + days[2] + ", your akan name is " + maleNames[2])
          } 
          else if (Math.ceil(result) && gender === 'male'){
            document.getElementById("outcome").innerHTML =
            alert("Born on a " + days[3] + ", your akan name is " + maleNames[3])
          }
          else if (Math.ceil(result) && gender === 'male'){
            document.getElementById("outcome").innerHTML =
            alert("Born on a " + days[4] + ", your akan name is " + maleNames[4])
          }
           else if (Math.ceil(result) && gender === 'male'){
            document.getElementById("outcome").innerHTML =
            alert("Born on a " + days[5] + ", your akan name is " + maleNames[5])
         }
         else if (Math.ceil(result) && gender === 'male'){
            document.getElementById("outcome").innerHTML =
            alert("Born on a " + days[6] + ", your akan name is " + maleNames[6])
         }
         else if (Math.ceil(result) && gender === 'male'){
            document.getElementById("outcome").innerHTML =
            alert("Born on a " + days[0] + ", your akan name is " + maleNames[0])
         }
         else{
           alert("Please enter your full Infomation!")

         }
        }

       

        