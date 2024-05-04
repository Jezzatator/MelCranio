import React from "react";

const Contact = () => {
  const isDarkMode = () => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      console.log("DARK");
      return darkRawHTML;
    }
    console.log("LIGHT");
    return rawHTML;
  };

  const darkRawHTML = `
  
  <iframe
  id="JotFormIFrame-241242340611340"
  title="Clone of Contact"
  onload="window.parent.scrollTo(0,0)"
  allowtransparency="true"
  allow="geolocation; microphone; camera; fullscreen"
  src="https://form.jotform.com/241242340611340"
  frameborder="0"
  style="min-width:100%;max-width:100%;height:539px;border:none;"
  scrolling="no"
>
</iframe>
<script src='https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js'></script>
<script>window.jotformEmbedHandler("iframe[id='JotFormIFrame-241242340611340'", "https://form.jotform.com/")</script>

  `;

  const rawHTML = `

  <script type="text/javascript" src="https://form.jotform.com/jsform/240363435011342"></script>
    `;

  return (
    <div className="flex justify-center items-center h-full w-full mt-10 dark:hidden">
      <div className="w-full h-full text-left">
        <div
          dangerouslySetInnerHTML={{
            __html: isDarkMode(),
          }}
        ></div>
      </div>
    </div>
  );
};

export default Contact;
