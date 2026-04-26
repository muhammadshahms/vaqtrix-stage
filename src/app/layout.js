import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "slick-carousel/slick/slick.css";
import "@/assets/main.css";
// import ChatWidget from "./Chatbot/ChatWidget"

export const metadata = {
  title: {
    absolute: '',
    default: 'Vaqtrix - Digital Marketing Agency',
    template: '%s | Digtek - Digital Marketing Agency NextJS Template',
  },
  description: 'Digtek - Digital Marketing Agency NextJS Template',
  openGraph: {
    title: 'Digtek - Digital Marketing Agency NextJS Template',
    description: 'Digtek - Digital Marketing Agency NextJS Template',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="author" content="Themeservices" />
        <link rel="icon" href="/assets/img/Home Icons/Small Logo.svg" sizes="any" />
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                function stripInjectedAttrs() {
                  try {
                    var targets = [document.documentElement, document.body].filter(Boolean);
                    var scripts = Array.prototype.slice.call(document.querySelectorAll("script"));
                    targets = targets.concat(scripts);

                    var patterns = [/^__processed_/i, /^bis_register$/i, /^bis_use$/i];

                    for (var i = 0; i < targets.length; i++) {
                      var node = targets[i];
                      var hasBisMarker =
                        node.hasAttribute &&
                        (node.hasAttribute("bis_use") || node.hasAttribute("bis_register"));
                      var attrs = Array.prototype.slice.call(node.attributes || []);
                      for (var j = 0; j < attrs.length; j++) {
                        var name = attrs[j].name;
                        if (hasBisMarker && (/^type$/i.test(name) || /^charset$/i.test(name))) {
                          node.removeAttribute(name);
                          continue;
                        }
                        for (var k = 0; k < patterns.length; k++) {
                          if (patterns[k].test(name)) {
                            node.removeAttribute(name);
                            break;
                          }
                        }
                      }
                    }
                  } catch (e) {}
                }

                stripInjectedAttrs();
                document.addEventListener("DOMContentLoaded", stripInjectedAttrs, { once: true });
              })();
            `,
          }}
        />
      </head>
      <body
        className=""
        style={{
          "--body-color-font": "'Plus Jakarta Sans', sans-serif",
          "--heading-font": "'DM Sans', sans-serif",
        }}
        suppressHydrationWarning
      >
        {children}
        {/* <ChatWidget/> */}
      </body>
    </html>
  );
}
