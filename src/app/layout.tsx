import React from 'react';
// The original imports for Next.js fonts and global CSS were causing build errors
// in this environment, so they have been removed to allow the component to compile.
// Tailwind CSS provides a default font stack, so the layout will still be styled.

export const metadata = {
  title: "SmartEddy Technologies - IT Services",
  description: "Comprehensive IT services including Cloud Computing, AI, App & Web Development, and Data Science.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/*
          Using a standard Google Fonts import for a more reliable font-loading method.
          The 'Inter' font is used for a modern, clean look consistent with the
          other components.
        */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        {/*
          A simple internal style block to define the antialiased body class
          since the external CSS file cannot be imported directly.
        */}
        <style dangerouslySetInnerHTML={{ __html: `
          body {
            font-family: 'Inter', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
        `}} />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
