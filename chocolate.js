document.body.innerHTML = `
  <head>
    <link rel="stylesheet" href="TemplateData/style.css">
    <script src="TemplateData/UnityProgress.js"></script>
    <script src="TemplateData/unityloader41.js"></script>
    <script>
        var gameInstance = UnityLoader.instantiate("gameContainer", "Build/slope.json", { onProgress: UnityProgress, Module: { onRuntimeInitialized: function() { UnityProgress(gameInstance, "complete") } } });
    </script>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2541434264715219"
     crossorigin="anonymous"></script>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2541434264715219"
     crossorigin="anonymous"></script>
</head>
    <div class="webgl-content">
        <div id="gameContainer" style="width: 100%; height: 100%; margin: 0;"></div>
    </div>
    <!-- <a title="GDPR-compliant Web Analytics" href="https://clicky.com/101393847"><img alt="Clicky" src="//static.getclicky.com/media/links/badge.gif" border="0" /></a> -->
    <script async src="//static.getclicky.com/101393847.js"></script>
    <noscript><p><img alt="Clicky" width="1" height="1" src="//in.getclicky.com/101393847ns.gif" /></p></noscript>
`;
