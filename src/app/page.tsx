import Footer from "@/components/Footer";
import SideBar from "@/components/SideBar";
import {

  ChevronLeft,
  ChevronRight,
  Play
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <SideBar />
        <main className="flex-1 p-6">
          <div className="flex items-center gap-3">
            <button className="p-1 rounded-full bg-black/40">
              <ChevronLeft />
            </button>
            <button className="p-1 rounded-full bg-black/20">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-smibold text-3xl mt-10">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="bg-white/10 rounded overflow-hidden flex items-center gap-4 cursor-pointer hover:bg-white/20 transition-colors group">
              <Image
                src="/alucinacao.jpg"
                alt="Capa do cd alucinação de Belchior"
                width={100}
                height={100}
              />
              <strong>Alucinação</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </div>
            <div className="bg-white/10 rounded group overflow-hidden flex items-center gap-4 cursor-pointer hover:bg-white/20 transition-colors">
              <Image
                src="/alucinacao.jpg"
                alt="Capa do cd alucinação de Belchior"
                width={100}
                height={100}
              />
              <strong>Alucinação</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </div>
            <div className="bg-white/10 rounded group overflow-hidden flex items-center gap-4 cursor-pointer hover:bg-white/20 transition-colors">
              <Image
                src="/alucinacao.jpg"
                alt="Capa do cd alucinação de Belchior"
                width={100}
                height={100}
              />
              <strong>Alucinação</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </div>
            <div className="bg-white/10 rounded group overflow-hidden flex items-center gap-4 cursor-pointer hover:bg-white/20 transition-colors">
              <Image
                src="/alucinacao.jpg"
                alt="Capa do cd alucinação de Belchior"
                width={100}
                height={100}
              />
              <strong>Alucinação</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </div>
            <div className="bg-white/10 rounded group overflow-hidden flex items-center gap-4 cursor-pointer hover:bg-white/20 transition-colors">
              <Image
                src="/alucinacao.jpg"
                alt="Capa do cd alucinação de Belchior"
                width={100}
                height={100}
              />
              <strong>Alucinação</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </div>
            <div className="bg-white/10 rounded group overflow-hidden flex items-center gap-4 cursor-pointer hover:bg-white/20 transition-colors">
              <Image
                src="/alucinacao.jpg"
                alt="Capa do cd alucinação de Belchior"
                width={100}
                height={100}
              />
              <strong>Alucinação</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </div>
          </div>

          <h2 className="font-smibold  mt-10">Made for Alisson Ramon</h2>

          <div className="grid grid-cols-8 gap-4 mt-4">
            <div className="bg-white/5 p-3 cursor-pointer hover:bg-white/10 transition-colors rounded-md flex flex-col gap-2">
              <Image
                src="/alucinacao.jpg"
                alt="Capa do cd alucinação de Belchior"
                className="w-full"
                width={100}
                height={100}
              />
              <strong className="font-semibold ">Alucinação</strong>
              <span className="text-sm text-zinc-500">Belchior</span>
            </div>
            <div className="bg-white/5 p-3 cursor-pointer hover:bg-white/10 transition-colors rounded-md flex flex-col gap-2">
              <Image
                src="/alucinacao.jpg"
                alt="Capa do cd alucinação de Belchior"
                className="w-full"
                width={100}
                height={100}
              />
              <strong className="font-semibold ">Alucinação</strong>
              <span className="text-sm text-zinc-500">Belchior</span>
            </div>
            <div className="bg-white/5 p-3 cursor-pointer hover:bg-white/10 transition-colors rounded-md flex flex-col gap-2">
              <Image
                src="/alucinacao.jpg"
                alt="Capa do cd alucinação de Belchior"
                className="w-full"
                width={100}
                height={100}
              />
              <strong className="font-semibold ">Alucinação</strong>
              <span className="text-sm text-zinc-500">Belchior</span>
            </div>
            <div className="bg-white/5 p-3 cursor-pointer hover:bg-white/10 transition-colors rounded-md flex flex-col gap-2">
              <Image
                src="/alucinacao.jpg"
                alt="Capa do cd alucinação de Belchior"
                className="w-full"
                width={100}
                height={100}
              />
              <strong className="font-semibold ">Alucinação</strong>
              <span className="text-sm text-zinc-500">Belchior</span>
            </div>
            <div className="bg-white/5 p-3 cursor-pointer hover:bg-white/10 transition-colors rounded-md flex flex-col gap-2">
              <Image
                src="/alucinacao.jpg"
                alt="Capa do cd alucinação de Belchior"
                className="w-full"
                width={100}
                height={100}
              />
              <strong className="font-semibold ">Alucinação</strong>
              <span className="text-sm text-zinc-500">Belchior</span>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
