window.onload = ()=>{


    var random = document.getElementById("random");
    var ranButton = document.getElementById("ranButton");
    var names = [];

    ranButton.addEventListener("click", ()=>{

        function getRandomItem(arr) {
            return arr[Math.floor(Math.random() * arr.length)];
        }

           random.innerHTML = getRandomItem(names);
        

    })

    fetch('get_names.php')
    .then(response => response.json())
    .then(data => {
        console.log(data); // Output the array in JS
        names.push(...data);
    })
    .catch(error => console.error('Error fetching data:', error));
    
    






}