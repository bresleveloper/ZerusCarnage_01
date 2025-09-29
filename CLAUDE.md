# CLAUDE.md
This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Instructions

you are an expert game developer that masters the THREE.js application built with TypeScript and Vite trio platform. you also always try to develop in a very modular way to simplify future development.

## Project Overview

This is a **vite-threejs-ts-starter** project - a basic THREE.js application built with TypeScript and Vite. It includes two demo modes: a basic 3D scene with a rotating cube and shadows, and a shader-based demo using GLSL shaders. the demo's are here to provide examples and inspiration to how to develop foreward.

you should never touch the examples. aslo the main.js should always stay clean and only provide option to call a new module like Shader.js or Demo.js.

## Development Commands

### Core Development
- `npm run start` - Start development server with network access (--host flag)
- `npm run build` - Build for production (runs TypeScript compiler + Vite build)
- `npm run serve` - Preview production build with network access

### Code Quality
- `npm run pretty` - Format TypeScript, HTML, and SCSS files using Prettier

## Project Architecture

### Entry Points
- **Main Entry**: `src/main.ts` - Application initialization on DOMContentLoaded
- **Demo Toggle**: Comment/uncomment import lines in `main.ts` to switch between:
  - `Demo.ts` - Standard 3D scene (default)
  - `Shader.ts` - GLSL shader demo

### Core Classes

#### Demo.ts (Standard 3D Scene)
- Sets up WebGL renderer with shadow mapping (PCFSoftShadowMap)
- Creates perspective camera and orbit controls
- Implements dual-light system for realistic shadows
- Contains animated rotating cube with plane for shadow casting
- Includes canvas export functionality (press 'e' key)

#### Shader.ts (GLSL Demo)
- Implements custom shader material using raw GLSL imports
- Uses orthographic camera setup
- Shader files located in `src/glsl/` directory:
  - `vertexShader.glsl`
  - `fragmentShader.glsl`
- Includes time-based uniforms for animations

### Technology Stack
- **THREE.js v0.134.0** - 3D graphics library
- **TypeScript 4.3.2** - Type safety and modern JavaScript features
- **Vite 7.1.7** - Fast development server and build tool
- **Sass 1.43.5** - CSS preprocessing
- **Prettier 2.5.0** - Code formatting

### Key Features
- OrbitControls for camera navigation
- Stats.js integration for performance monitoring
- Shadow mapping with configurable quality settings
- Canvas export functionality (press 'e' key in either demo)
- Responsive window resize handling
- GLSL shader support with raw imports

### File Structure
```
src/
├── main.ts          # Entry point and demo switcher
├── Demo.ts          # Standard 3D scene with cube/shadows
├── Shader.ts        # GLSL shader demonstration
├── glsl/            # GLSL shader files
│   ├── vertexShader.glsl
│   └── fragmentShader.glsl
├── style.scss       # Main stylesheet
└── vite-env.d.ts    # TypeScript declarations
```

### Configuration Notes
- TypeScript configured with strict mode and modern ES modules
- Vite handles GLSL file imports with `?raw` suffix
- Prettier configured for consistent code formatting
- Development server runs with `--host` for network accessibility

### Special Project Context
The `RAG/` directory contains StarCraft 2 game rules and lore and other documentation, which are to be reference material for a potential StarCraft 2-themed application development.

## Development Tips
- Toggle between demos by editing import statements in `main.ts`
- Both demos support the same 'e' key export functionality
- Shadow quality can be adjusted in Demo.ts via mapSize, cameraNear, cameraFar variables
- GLSL shaders can be modified in the `src/glsl/` directory with hot reloading