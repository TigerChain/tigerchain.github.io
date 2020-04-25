var gitalk = new Gitalk({
  "clientID": "0ca9f84fc8ea0536e2d3",
  "clientSecret": "502093771b7a1a37768c04ce6191ace747752dd7",
  "repo": "jsblog",
  "owner": "tigerchain",
  "admin": ["tigerchain"],
  "id": window.location.pathname,
  "distractionFreeMode": false
});
gitalk.render("gitalk-container");