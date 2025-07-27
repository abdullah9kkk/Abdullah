(function(){
  const overlay = document.createElement("div");
  overlay.style = "position:fixed;top:0;left:0;width:100%;height:100%;"
                + "background:rgba(0,0,0,0.6);z-index:9999;display:flex;"
                + "align-items:center;justify-content:center;";
  const panel = document.createElement("div");
  panel.style = "background:white;padding:20px;border-radius:12px;"
                + "text-align:center;font-family:sans-serif;max-width:300px;";
  panel.innerHTML = `
    <h3>Abdullah Khan Tool</h3>
    <input id="lic" value="121212" style="width:80%;padding:8px;margin:10px 0;">
    <br><button id="btn">Save Settings</button>
  `;
  overlay.appendChild(panel);
  document.body.appendChild(overlay);
  document.getElementById("btn").onclick = function(){
    const lic = document.getElementById("lic").value.trim();
    if(lic !== "121212") return alert("Invalid license");
    overlay.remove();
    try {
      const nameEl = document.querySelector(".usermenu__info-name");
      nameEl && (nameEl.innerText = "LIVE", nameEl.style.color = "green");
      const balEl = document.querySelector(".usermenu__info-balance");
      balEl && (balEl.innerText = "$10,000.00");
      const levels = document.querySelector(".usermenu__info-levels");
      levels && (levels.innerHTML = '<svg class="icon-profile-level-standart"><use xlink:href="/profile/images/spritemap.svg#icon-profile-level-vip"></use></svg>');
      [...document.getElementsByClassName("sidebar__button")].forEach((b,i)=> {
        if(i==1) b.classList.add("active"); if(i==2) b.classList.remove("active");
      });
    } catch(e){}
  };
})();
