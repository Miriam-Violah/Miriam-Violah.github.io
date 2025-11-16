/* ====================== style.css ====================== */
/* RESET */

* { margin:0; padding:0; box-sizing:border-box; font-family: Arial, sans-serif; }
  body { overflow-x: hidden; color: white; background: #0d0d0d; }

/* HEADER */
header {
position: fixed;
top: 0;
left: 0;
right: 0;
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px 50px;
z-index: 1000;
}

.logo { font-size: 28px; font-weight: bold; }
.nav-right { display: flex; gap: 25px; }
.nav-right a { color: white; text-decoration: none; font-size: 18px; transition: 0.3s; }
.nav-right a:hover { opacity: 0.7; }

/* HERO SECTION */
.hero {
position: relative;
width: 100%;
height: 100vh;
overflow: hidden;
}

.bg-video {
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
min-width: 100%;
min-height: 100%;
object-fit: cover;
z-index: 0;
}

.overlay {
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
text-align: center;
width: 90%;
max-width: 700px;
z-index: 10;
}

.overlay h1 { font-size: 48px; margin-bottom: 15px; font-weight: bold; }
.overlay h2 { font-size: 28px; margin-bottom: 15px; }
.overlay p { font-size: 20px; margin-bottom: 25px; opacity: 0.85; }

.btn {
display: inline-block;
margin-top: 15px;
padding: 12px 32px;
border-radius: 30px;
font-weight: bold;
background: linear-gradient(90deg,#ffcc00,#ff9900);
color: black;
text-decoration: none;
font-size: 18px;
transition: 0.3s;
}
.btn:hover { transform: scale(1.05); }

/* SOCIAL ICONS */
.socials { margin-top: 30px; display: flex; justify-content: center; gap: 25px; }

/* Email icon like Gmail */
.email-icon {
width: 40px;
height: 40px;
border-radius: 50%;
background: white;
color: #d93025; /* Gmail red */
display: flex;
justify-content: center;
align-items: center;
font-size: 18px;
border: 2px solid #d93025;
}

/* Instagram official gradient */
.ig-icon {
width: 40px;
height: 40px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
font-size: 18px;
color: white;
background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
}

/* RESPONSIVE */
@media (max-width:768px) {
.overlay h1 { font-size: 32px; }
.overlay h2 { font-size: 22px; }
.overlay p { font-size: 16px; }
.btn { font-size: 16px; padding: 10px 25px; }
header { flex-direction: column; padding: 10px 20px; }
.nav-right { flex-direction: column; gap: 15px; margin-top: 10px; }
}

<script>
  const form = document.querySelector("form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { "Accept": "application/json" },
    });

    if (response.ok) {
      alert("Message sent successfully!");
      form.reset();
    } else {
      alert("Error—please try again.");
    }
  });
</script>
