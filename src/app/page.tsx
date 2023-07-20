import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
         
          </div>
          <nav className="space-y-5">
            <a className="flex gap-3 items-center text-sm font-semibold text-zinc-200" href="">
              <HomeIcon />
              Home
            </a>
            <a className="flex gap-3 items-center text-sm font-semibold text-zinc-200" href="">
              <Search />
              Search
            </a>
            <a className="flex gap-3 items-center text-sm font-semibold text-zinc-200" href="">
              <Library />
              Your Library
            </a>
          </nav>

          <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
            <a className="text-sm text-zinc-400 hover:text-zinc-100" href="">Chill Vibes</a>
            <a className="text-sm text-zinc-400 hover:text-zinc-100" href="">Indie Roadtrip</a>
            <a className="text-sm text-zinc-400 hover:text-zinc-100" href="">Acoustic Bliss</a>
            <a className="text-sm text-zinc-400 hover:text-zinc-100" href="">Summer Beats</a>
            <a className="text-sm text-zinc-400 hover:text-zinc-100" href="">Throwback Jams</a>
            <a className="text-sm text-zinc-400 hover:text-zinc-100" href="">Late Night Jazz</a>
            <a className="text-sm text-zinc-400 hover:text-zinc-100" href="">Electronic Dreams</a>
            <a className="text-sm text-zinc-400 hover:text-zinc-100" href="">Mood Booster Mix</a>
            <a className="text-sm text-zinc-400 hover:text-zinc-100" href="">R&B Slow Jams</a>
            <a className="text-sm text-zinc-400 hover:text-zinc-100" href="">Workout Motivation</a>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex items-center gap-3">
            <button className="p-1 rounded-full bg-black/40">
              <ChevronLeft/>
            </button>
            <button className="p-1 rounded-full bg-black/20">
              <ChevronRight/>
            </button >
          </div>

          <h1 className="font-smibold text-3xl mt-10">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="bg-white/10 rounded overflow-hidden flex items-center gap-4 cursor-pointer hover:bg-white/20 transition-colors">
              <Image src="/alucinacao.jpg" alt="Capa do cd alucinação de Belchior" width={100} height={100}/>
            <strong>Alucinação</strong>
            </div>
            <div className="bg-white/10 rounded overflow-hidden flex items-center gap-4 cursor-pointer hover:bg-white/20 transition-colors"> 
              <Image src="/alucinacao.jpg" alt="Capa do cd alucinação de Belchior" width={100} height={100}/>
              <strong>Alucinação</strong>
            </div>
            <div className="bg-white/10 rounded overflow-hidden flex items-center gap-4 cursor-pointer hover:bg-white/20 transition-colors"> 
              <Image src="/alucinacao.jpg" alt="Capa do cd alucinação de Belchior" width={100} height={100}/>
              <strong>Alucinação</strong>
            </div>
            <div className="bg-white/10 rounded overflow-hidden flex items-center gap-4 cursor-pointer hover:bg-white/20 transition-colors"> 
              <Image src="/alucinacao.jpg" alt="Capa do cd alucinação de Belchior" width={100} height={100}/>
              <strong>Alucinação</strong>
            </div>
            <div className="bg-white/10 rounded overflow-hidden flex items-center gap-4 cursor-pointer hover:bg-white/20 transition-colors"> 
              <Image src="/alucinacao.jpg" alt="Capa do cd alucinação de Belchior" width={100} height={100}/>
              <strong>Alucinação</strong>
            </div>
            <div className="bg-white/10 rounded overflow-hidden flex items-center gap-4 cursor-pointer hover:bg-white/20 transition-colors"> 
              <Image src="/alucinacao.jpg" alt="capa album mamonas assassinas" width={100} height={100}/>
              <strong>Alucinação</strong>
            </div>
            
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        Footer
      </footer>
    </div>
  );
}
