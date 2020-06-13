// build time:Fri Jun 05 2020 20:28:27 GMT+0800 (GMT+08:00)
var gitalk=new Gitalk({clientID:"0ca9f84fc8ea0536e2d3",clientSecret:"502093771b7a1a37768c04ce6191ace747752dd7",repo:"jsblog",owner:"tigerchain",admin:["tigerchain"],id:window.location.pathname,distractionFreeMode:false});gitalk.render("gitalk-container");
//rebuild by neat <script>
        document.querySelectorAll('.github-emoji')
          .forEach(el => {
            if (!el.dataset.src) { return; }
            const img = document.createElement('img');
            img.style = 'display:none !important;';
            img.src = el.dataset.src;
            img.addEventListener('error', () => {
              img.remove();
              el.style.color = 'inherit';
              el.style.backgroundImage = 'none';
              el.style.background = 'none';
            });
            img.addEventListener('load', () => {
              img.remove();
            });
            document.body.appendChild(img);
          });
      </script>