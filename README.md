# Zerus Carnage

based on starter project [vite-threejs-ts-starter](https://github.com/defmech/vite-threejs-ts-starter)

playing with AI to build a game, see `rag` folder for more.

play it [HERE](https://bresleveloper.github.io/ZerusCarnage_01/)

## Getting started
basic description - based on starcraft 2, you start as a larvae in Zerus. go eat bushes or other zerg units to collect minerals, gas, or essence and evolve!

some base rules:
* unit standing on vespene geyser lose 5 HP and gain 10 gas per second
* larvae can only eat bushes (colored dots)
* drones can also eat trees
* lings and above cant eat trees and bushes but can eat larvae 
* after larva units can fight to death and eat the loser


### walkthrough
* eat bushes to evolve to drone
* eat trees, stand on gas geysers, heal, and again to get alot of resources
* you should get at least +5/+5 attack/defence
* morpth to zergling
* kill enemy units to harvest essence 
* buy absord and attack and kill 1 of 2 minibosses


## Deploy

TODO - fix and automate all this

* `npm run build`
* keep `resources` folder for new build. has some images.
* remove 1st slash before `assets` in `dist/index.html`
* rename all `/assets/` to `assets/` in `dist/assets/index-<guid>.js`
* rename `dist` to `docs` (delete old `docs` if exists)
* push to git


## Getting started

Install dependencies.
`npm install`

Start development server.
`npm run start`



## find rogue hosts:

in powershell `Get-CimInstance Win32_Process -Filter "Name = 'node.exe'" | Select-Object ProcessId, CommandLine`

then `taskkill /PID <pid> /F`

use `rogue.ps1`
