import { HomeIcon, Library, Search } from 'lucide-react'
import React from 'react'

const SideBar = () => {
    return (
        <aside className="w-72 bg-zinc-950 p-6">
            <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <nav className="space-y-5">
                <a
                    className="flex gap-3 items-center text-sm font-semibold text-zinc-200"
                    href=""
                >
                    <HomeIcon />
                    Home
                </a>
                <a
                    className="flex gap-3 items-center text-sm font-semibold text-zinc-200"
                    href=""
                >
                    <Search />
                    Search
                </a>
                <a
                    className="flex gap-3 items-center text-sm font-semibold text-zinc-200"
                    href=""
                >
                    <Library />
                    Your Library
                </a>
            </nav>

            <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
                <a className="text-sm text-zinc-400 hover:text-zinc-100" href="">
                    Chill Vibes
                </a>
                <a className="text-sm text-zinc-400 hover:text-zinc-100" href="">
                    Indie Roadtrip
                </a>
                <a className="text-sm text-zinc-400 hover:text-zinc-100" href="">
                    Acoustic Bliss
                </a>
                <a className="text-sm text-zinc-400 hover:text-zinc-100" href="">
                    Summer Beats
                </a>
                <a className="text-sm text-zinc-400 hover:text-zinc-100" href="">
                    Throwback Jams
                </a>
                <a className="text-sm text-zinc-400 hover:text-zinc-100" href="">
                    Late Night Jazz
                </a>
                <a className="text-sm text-zinc-400 hover:text-zinc-100" href="">
                    Electronic Dreams
                </a>
                <a className="text-sm text-zinc-400 hover:text-zinc-100" href="">
                    Mood Booster Mix
                </a>
                <a className="text-sm text-zinc-400 hover:text-zinc-100" href="">
                    R&B Slow Jams
                </a>
                <a className="text-sm text-zinc-400 hover:text-zinc-100" href="">
                    Workout Motivation
                </a>
            </nav>
        </aside>
    )
}

export default SideBar