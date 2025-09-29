# Zerus Carnage

based on starter project [vite-threejs-ts-starter](https://github.com/defmech/vite-threejs-ts-starter)

playing with AI to build a game, see `rag` folder for more.

play it [HERE](https://bresleveloper.github.io/ZerusCarnage_01/)

## Getting started
basic description - based on starcraft 2, you start as a larvae in Zerus. go eat bushes or other zerg units to collect minerals, gas, or essence and evolve!

some base rules:
* larvae can only eat bushes (colored dots)
* drones can also eat trees
* lings cant eat the above but can eat larvae and drones


## Deploy
* `npm run build`
* remove 1st slash before `assets` in `dist/index.html`
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
