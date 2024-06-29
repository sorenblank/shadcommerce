# Fonts

This document explains how to add and use custom fonts in your Next.js project.

## Using Google Fonts

We are using Google Fonts in our project, and we manage them through the `next/font` package. Below are the steps and code snippets to demonstrate how to add and use these fonts.

### Step-by-Step Guide

### 1. Install the Required Package

Ensure you have `next/font` installed. This package helps in managing fonts in a Next.js project.

```sh
npm install next/font
# or
yarn add next/font
```

### 2. Add Fonts in `fonts.ts`

Create a `fonts.ts` file in the `src/styles` directory. This file imports and configures the Google Fonts.

```typescript
import { Lexend, Lexend_Giga, Lexend_Deca } from "next/font/google";

const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" });
const lexend_giga = Lexend_Giga({ subsets: ["latin"], variable: "--font-lexend-giga" });
const lexend_decagram = Lexend_Deca({ subsets: ["latin"], variable: "--font-lexend-decagram" });

export const fonts = { lexend, lexend_giga, lexend_decagram };
```

### 3. Configure Tailwind CSS

Update your `tailwind.config.js` to include the custom font variables.

```javascript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      ....., // Other configurations
      fontFamily: {
        Lexend: ["var(--font-lexend)", "sans-serif"],
        LexendGiga: "var(--font-lexend-giga)",
        LexendDeca: "var(--font-lexend-decagram)",
      },
    },
  },
  plugins: [],
};

export default config;
```

### 4. Update the Root Layout

Apply the font variables in the `layout.tsx` file within the `src/app` directory. This ensures that the fonts are applied globally.

```typescript
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fonts.lexend.variable} ${fonts.lexend_giga.variable} ${fonts.lexend_decagram.variable}`}>
        {children}
      </body>
    </html>
  );
}
```

### 5. Using Fonts in Your Components

You can now use the fonts defined in your Tailwind configuration throughout your application. For example:

```javascript
export default function HomePage() {
  return (
    <div className="font-Lexend">
      <h1 className="text-4xl font-LexendGiga">Welcome to Safe App</h1>
      <p className="font-LexendDeca">This is a sample application using custom Google Fonts.</p>
    </div>
  );
}
```

### Summary

- **Step 1**: Install the `next/font` package.
- **Step 2**: Define and configure fonts in `fonts.ts`.
- **Step 3**: Update the `tailwind.config.js` to include custom font variables.
- **Step 4**: Apply the font variables globally in `layout.tsx`.
- **Step 5**: Use the custom fonts in your components using Tailwind CSS classes.

By following these steps, you can easily add and use custom fonts in your Next.js project, enhancing the overall typography and design consistency.