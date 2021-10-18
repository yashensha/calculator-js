         function allZero()
         {
            document.getElementById("history").innerHTML = ""
            document.getElementById("op").innerHTML = ""
        }

            // All-numbers-event-listsening
         function btnClick(val)
         {
            document.getElementById("history").innerHTML = document.getElementById("history").innerHTML + val 
         }

         function operatorClick(val)
         {
             document.getElementById("op").innerHTML = val
         }
