import Link from 'next/link'

import Navbar from '@/components/partials/navbar';
import { NotFoundBackground } from './_assets';

export default function NotFound() {
  return (
    <main>
      <header>
        <Navbar />
      </header>
      <div className="relative min-h-[1000px] min-w-0 max-w-2xl flex flex-col items-center justify-center px-4 py-16 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-16 mt-12">
        <NotFoundBackground className="absolute max-w-[850px] h-full -z-20 " />

        <div className="flex h-full flex-col items-center justify-center text-center mt-[-80px]">
          <h1 className="mt-3 font-display font-semibold text-3xl tracking-tight text-gray-800 dark:text-white">
            Pagina Niet Gevonden
          </h1>
          <p className="mt-2 text-sm text-gray-700 dark:text-slate-400 max-w-[391px]">
          De pagina die je zoekt is nog niet beschikbaar, excuses voor het ongemak.
          </p>
          <Link
            href="/"
            className="mt-8 text-base leading-6 font-semibold text-slate-600"
          >
            <span className="font-normal">Keer terug naar de</span> homepagina
          </Link>

        </div>
      </div>
    </main>
  )
}


