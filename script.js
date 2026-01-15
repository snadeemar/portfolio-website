<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2685.3">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; -webkit-text-stroke: #000000}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; -webkit-text-stroke: #000000; min-height: 14.0px}
    span.s1 {font-kerning: none}
  </style>
</head>
<body>
<p class="p1"><span class="s1">// Wait for the DOM to fully load</span></p>
<p class="p1"><span class="s1">document.addEventListener('DOMContentLoaded', () =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const button = document.getElementById('actionButton');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const messageDisplay = document.getElementById('displayMessage');</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>// Add a click event listener</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>button.addEventListener('click', () =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>const hours = new Date().getHours();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>let greeting;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>if (hours &lt; 12) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>greeting = "Good morning! Ready to code?";</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>} else if (hours &lt; 18) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>greeting = "Good afternoon! Project is looking great.";</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>greeting = "Good evening! Wrapping up for the day?";</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>messageDisplay.textContent = greeting;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>console.log("Greeting updated based on time of day.");</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>});</span></p>
<p class="p1"><span class="s1">});</span></p>
</body>
</html>
