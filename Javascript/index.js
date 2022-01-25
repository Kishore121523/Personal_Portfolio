//Navbar display function
const nav = document.querySelector("nav");
const up = document.getElementById("go-up")
const sectionOne = document.querySelector("#home-section");
const sectionOneOptions = {
    rootMargin: "-20px 0px 0px 0px",
};
const sectionOneObserver = new IntersectionObserver(function(
        entries,
        sectionOneObserver
    ) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                nav.classList.add("nav-close");
                up.className = "text-icon-up-close";
            } else {
                nav.classList.remove("nav-close");
                up.classList.remove("text-icon-up-close");
                up.className = "text-icon-up-open";
            }
        });
    },
    sectionOneOptions);
sectionOneObserver.observe(sectionOne);

// Mail Send Function
function sendMail() {
    Email.send({
        SecureToken: "b9409e6f-9fd5-47cd-b3ee-6f7c0ad00783",
        To: "contactkishorework@gmail.com",
        From: `${document.getElementById("email").value}`,
        Subject: `Sender Name - ${document.getElementById("name").value}`,
        Body: `${document.getElementById("message").value}`,
    });
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    // .then((message) => alert(message));
}

// TypeWriter Animation
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
        delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName("typewrite");
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute("data-type");
        var period = elements[i].getAttribute("data-period");
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

function myFunction() {
    document.getElementById("myForm").reset();
}

// animate on scroll
AOS.init();

//cursor animation
var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove", function(e) {
    cursor.style.cssText = cursor2.style.cssText =
        "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});

//init scrollspy
$("body").scrollspy({ target: "#main-nav" });

// Add smooth scrolling
$("#main-nav a").on("click", function(e) {
    // Check for a hash value
    if (this.hash !== "") {
        // Prevent default behavior
        e.preventDefault();

        // Store hash
        const hash = this.hash;

        // Animate smooth scroll
        $("html, body").animate({
                scrollTop: $(hash).offset().top,
            },
            900,
            function() {
                // Add hash to URL after scroll
                window.location.hash = hash;
            }
        );
    }
});