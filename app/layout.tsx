import Main from './components/Main';
import Header from './components/Header';

import '../app/assets/css/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="rounded-lg bg-black px-6 py-8 shadow-xl ring-1 ring-slate-900/5">
        <Main>
          <div className="grid items-start justify-center gap-8">
            <Header />
            {children}
          </div>
        </Main>
      </body>
    </html>
  );
}
