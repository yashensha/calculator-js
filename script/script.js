         function allZero()
         {
            document.getElementById("history").value = ""
        }

            // All-numbers-event-listsening
         function btnClick(val)
         {
            document.getElementById("history").value = document.getElementById("history").value + val
         }

         function clickEqual()
         {
             var text = document.getElementById("history").value
            var result = eval(text);
            document.getElementById('history').value = result
             
         }
         
         //js file ends here
