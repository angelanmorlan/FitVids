<!DOCTYPE html>
<html>
	<head>
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <title>Fluid Width Videos with Fitvids.js</title>
        <style>
          body {
            background: #ddd;
          }

          video {
            max-width: 100%;
            height: auto;
          }

          iframe,
          embed,
          object {
            max-width: 100%;
          }

          .container {
            width: 70%;
            padding: 5%;
            margin:0px auto;
            background:#fff;
            box-shadow: 0 5px 5px rgba(0, 0, 0, 0.5);
          }

          .vendor {
            padding: 2%;
            background: #d1eed1;
            margin-bottom: 2em;
          }

          .unsupported {
            background: #fddfde;
          }
        </style>
    </head>
    <body>
      <div class="container">
        <div class="vendor">
        	<iframe width="425" height="349" src="http://www.youtube.com/embed/FKWwdQu6_ok" frameborder="0" allowfullscreen></iframe>
	      </div>
	      <div class="vendor">
        	<iframe src="http://player.vimeo.com/video/25708134?title=0&amp;byline=0&amp;portrait=0" width="400" height="225" frameborder="0"></iframe>
        </div>
        <div class="vendor">
        	<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="437" height="288" id="viddler"><param name="movie" value="http://www.viddler.com/player/d6c37b62/" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="true" /><param name="flashvars" value="fake=1"/><embed src="http://www.viddler.com/player/d6c37b62/" width="437" height="288" type="application/x-shockwave-flash" allowScriptAccess="always" allowFullScreen="true" flashvars="fake=1" name="viddler" ></embed></object>
        </div>
        <div class="vendor">
        	<embed src="http://blip.tv/play/AYHCnikC" type="application/x-shockwave-flash" width="550" height="396" wmode="transparent" allowscriptaccess="always" allowfullscreen="true" ></embed>
        </div>
        <div class="vendor">
<iframe frameborder="0" height="410px" src="http://www.kickstarter.com/projects/30453381/the-shape-of-design/widget/video.html" width="480px"></iframe>
        </div>
        <div class="vendor">
          <iframe frameborder="0" height="380" src="http://www.kickstarter.com/projects/150422311/screencasting-a-complete-redesign/widget/card.html" width="220"></iframe>
        </div>
        <p>^^ The above kickstarter widget should fail.</p>
        <div class="vendor">
          <iframe width="520px" height="391px" src="http://socialcam.com/videos/XRMP3Y5t/embed?utm_campaign=web&utm_source=embed" frameborder="0" allowfullscreen></iframe>
        </div>
        <div class="vendor">
          <iframe class="fitvidsignore" src="http://player.vimeo.com/video/28523422?title=0&amp;byline=0&amp;portrait=0&amp;color=4584be" width="800/embed/?moog_width=800" height="450" frameborder="0"></iframe>
        </div>
        <p>^^ The above vimeo embed should fail. It has a class of 'fitvidsignore'.

      </div>

      <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
      <script src="jquery.fitvids.js"></script>
      <script>
        // Basic FitVids Test
        $(".container").fitVids();
        // Custom selector and No-Double-Wrapping Prevention Test
        $(".container").fitVids({ customSelector: "iframe[src^='http://socialcam.com']"});
      </script>
      </body>
  </html>