// Returns minimum number of planes need to hire to
//reach arr[n-1](Destination) from arr[0](Staring point)
function minPlanesToHire(arr) {
  let n = arr.length;
  // The number of planes needed to
  // reach the starting index is 0
  if (n <= 1) return 0;
  // Return -1 if not possible to fly from starting point
  if (arr[0] == 0) return -1;
  // initialization
  // stores all time the maximal
  // reachable index in the array.
  let maxReach = arr[0];
  // stores the units of fuel
  // we can still use
  let fuelUnits = arr[0];
  // stores the number of planes hired
  // necessary to reach that maximal
  // reachable position.
  let planesHired = 1;
  // Start traversing array
  let i = 1;
  for (i = 1; i < n; i++) {
    // Check if we have reached the destination
    if (i == n - 1) return planesHired;
    // updating maxReach
    maxReach = Math.max(maxReach, i + arr[i]);
    // we use a fuel units to get to the current location
    fuelUnits--;
    // If no further fuel left
    if (fuelUnits == 0) {
      // we must have used a hired plane
      planesHired++;
      // Check if the current index/position or lesser index
      // is the maximum reach point from the previous indexes
      if (i >= maxReach) return -1;
      // re-initialize the fuelUnits to the amount
      // of fuelUnits to reach maxReach from position i.
      fuelUnits = maxReach - i;
    }
  }
  return -1;
}

//Handles the inputs
function getInput(event) {
  let numbersString = document.querySelector("#getInput").value;
  var numbersArray = numbersString.split(",").map(function (num) {
    return parseInt(num, 10); // Convert to integer
  });
  console.log("ans", minPlanesToHire(numbersArray));
  const totalPlanesHired = minPlanesToHire(numbersArray);
  loading(totalPlanesHired);
}

//Loading function
function loading(totalPlanesHired) {
  const planeImage = document.querySelector(".plane-image");
  planeImage.classList.add("rotate-plane");
  setTimeout(() => {
    planeImage.classList.remove("rotate-plane");
    planeImage.style.display = "none";
    document.querySelector(".result").innerHTML = totalPlanesHired;
  }, 2000);
}

//Resets the input
function resetInput() {
  const planeImage = document.querySelector(".plane-image");
  document.querySelector("#getInput").value = "";
  document.querySelector(".result").innerHTML = "";
  planeImage.style.display = "block";
}
