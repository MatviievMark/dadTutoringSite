import localFont from "next/font/local";
import "./globals.css";


const inter = localFont({
  src: [
    { path: './fonts/InterDisplay-Regular.woff2', weight: '400', style: 'normal' },
    { path: './fonts/InterDisplay-Medium.woff2', weight: '500', style: 'normal' },
    { path: './fonts/InterDisplay-SemiBold.woff2', weight: '600', style: 'normal' },
    { path: './fonts/InterDisplay-Bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-inter'
});

const poppins = localFont({
  src: [
    { path: './fonts/poppins-regular.woff2', weight: '400', style: 'normal' },
    { path: './fonts/poppins-medium.woff2', weight: '500', style: 'normal' },
    { path: './fonts/poppins-semibold.woff2', weight: '600', style: 'normal' },
    { path: './fonts/poppins-bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-poppins'
});

export const metadata = {
  title: "Max's Tutoring",
  description: "Professional math tutoring services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}