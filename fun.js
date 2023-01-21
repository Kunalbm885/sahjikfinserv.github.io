
 function openPage(){
  window.open("career.php","_self")
};


function openSide() {

  document.getElementById("mySidebar").style.transform = "translateX(0vw)";
  document.body.style.overflow = "hidden";
}
function closeSide() {

  document.getElementById("mySidebar").style.transform = "translateX(-100vw)";
  document.body.style.overflow = "overlay";
}

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 500, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });
  


  function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "kunalwaghmare885@gmail.om",
        Password : "fnwfxwndmwpzafqn",
        To : 'support@spotezy.in',
        From : document.getElementById("email").value,
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
  }



  window.addEventListener("scroll" ,function(){
    var header =document.querySelector("nav");
    header.classList.toggle("sticky",window.scrollY>50)

  })


  // $("#content-toast").fadeIn('slow').animate({opacity: 1.0}, 1500).effect("pulsate", { times: 2 }, 800).fadeOut('slow'); 


  $("#content-toast").show();
  setTimeout(function() { $("#myElem").hide(); }, 5000);



  emailjs.init("vxSzcrmEQGIbJMkeu");
window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    emailjs.sendForm('service_gaonob8', 'template_yvccp1g', this)
      .then(function() {
        $("form")[0].reset();
        alert("Email Set Sucessfully !")
      }, function(error) {
        console.log('FAILED...', error);
      });
  });
}