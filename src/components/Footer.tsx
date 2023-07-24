import { Heart, Laptop2, LayoutList, Maximize2, Mic2, Play, Repeat, Shuffle, SkipBack, SkipForward, Volume1 } from 'lucide-react'

import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-zinc-900 border-t border-zinc-700 p-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <Image
                    src="/alucinacao.jpg"
                    alt="Capa do cd alucinação de Belchior"
                    width={56}
                    height={56}
                />
                <div className="flex flex-col">
                    <strong className="font-normal">Pequeno mapa do tempo</strong>
                    <span className="text-xs text-zinc-500 font-normal">Belchior</span>
                </div>

                <Heart className="w-4 ml-2" />
            </div>
            <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-6">
                    <Shuffle size={20} className="text-zinc-200" />
                    <SkipBack size={20} className="text-zinc-200" />

                    <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black ml-auto  ">
                        <Play />
                    </button>
                    <SkipForward size={20} className="text-zinc-200" />
                    <Repeat size={20} className="text-zinc-200" />
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-xs text-zinc-400">0:31</span>
                    <div className="h-1 rounded-full w-96 bg-zinc-600 mr-2">
                        <div className="bg-zinc-200 w-40 rounded-full  h-1"></div>
                    </div>
                    <span className="text-xs text-zinc-400">2:14</span>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <Mic2 size={20} />
                <LayoutList size={20} />
                <Laptop2 size={20} />
                <div className="flex items-center gap-2">
                    <Volume1 size={20} />
                    <div className="h-1 rounded-full w-24 bg-zinc-600 mr-2">
                        <div className="bg-zinc-200 w-5 rounded-full  h-1"></div>
                    </div>
                </div>
                <Maximize2 size={20} />
            </div>
        </footer>
    )
}

export default Footer