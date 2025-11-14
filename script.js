// Wait until the page loads
document.getElementById("status").addEventListener("click", function(){
let isUserReady = confirm("Are you ready?");
  console.log(isUserReady);

  if (isUserReady){
  alert("User ready!");
  document.getElementById("result").style.display = "block";
  const button = document.getElementById("btn");
  } else {
    document.getElementById("result").style.display = "none";
  };
});

