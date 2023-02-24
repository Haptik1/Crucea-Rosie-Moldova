let text = document.getElementById('clipboard').innerHTML;
  const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(text);}
      catch (err) {
      console.error('Failed to copy: ', err);
    };
  
  var tooltip = document.getElementById("crTooltip");
  tooltip.innerHTML = "Copied to clipboard";
};

function outFunc() {
  var tooltip = document.getElementById("crTooltip");
  tooltip.innerHTML = "Copy to clipboard";
};

            let text2 = document.getElementById('clipboard2').innerHTML;
  const copyContentSecond = async () => {
    try {
      await navigator.clipboard.writeText(text2);}
      catch (err) {
      console.error('Failed to copy: ', err);
    };
  
  var tooltip = document.getElementById("crTooltip2");
  tooltip.innerHTML = "Copied to clipboard";
};

function outFuncSecond() {
  var tooltip = document.getElementById("crTooltip2");
  tooltip.innerHTML = "Copy to clipboard";
}