import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "slick-carousel/slick/slick.css";
import "./assets/main.css";
// import ChatWidget from "./Chatbot/ChatWidget"

const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--body-color-font',
});
const dm_sans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--heading-font',
});

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
    <html lang="en">
      <head>
        <meta name="author" content="Themeservices" />
        <link rel="icon" href="/assets/img\Home Icons/Small Logo.svg" sizes="any" />
      </head>
      <body className={`${plus_jakarta_sans.variable} ${dm_sans.variable}`}>
        {children}
        {/* <ChatWidget/> */}
      </body>
    </html>
  );
}
