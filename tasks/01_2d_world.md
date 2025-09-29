# 2D Jungle World Module Development Plan

## Overview
Create a new module `JungleWorld.ts` following the existing architecture patterns (Demo.ts/Shader.ts) that renders a 2D jungle environment with camera-based movement using WASD/Arrow keys.

## Technical Approach
- **Camera Setup**: Use THREE.OrthographicCamera for true 2D view
- **Movement System**: Implement keyboard input handling for WASD/Arrow keys to move camera position
- **Jungle Environment**: Create procedural or tile-based jungle terrain using THREE.js planes with jungle textures
- **Rendering**: Use standard THREE.js materials and textures for jungle elements (trees, foliage, ground)

## Implementation Tasks

### 1. Create Core Module Structure
- Create `src/JungleWorld.ts` following existing class patterns from Demo.ts and Shader.ts
- Implement basic THREE.js scene setup with OrthographicCamera instead of PerspectiveCamera
- Add Stats integration and canvas export ('e' key) functionality matching existing modules
- Set up animation loop with requestAnimationFrame

### 2. Implement 2D Camera Movement System
- Add keyboard event listeners for WASD/Arrow keys in initListeners() method
- Implement smooth camera movement by updating camera.position.x and camera.position.y
- Add configurable movement speed (e.g., 0.1 units per frame)
- Add camera bounds to prevent infinite scrolling beyond jungle boundaries
- Ensure proper camera matrix updates in animation loop

### 3. Create Jungle Environment
- Design simple tile-based jungle using THREE.PlaneGeometry for ground tiles
- Create jungle assets using basic THREE.js geometries:
  - Trees: THREE.CylinderGeometry for trunks + THREE.SphereGeometry for canopy
  - Bushes: Multiple small THREE.SphereGeometry instances
  - Ground: Large textured planes with jungle floor appearance
- Implement basic procedural generation or static layout for jungle elements
- Use THREE.MeshBasicMaterial or THREE.MeshLambertMaterial with jungle-themed colors
- Add simple ambient lighting for visibility

### 4. Integration & Testing
- Update `src/main.ts` import options to include JungleWorld alongside Demo and Shader
- Test movement controls responsiveness and smoothness
- Verify camera bounds work correctly
- Ensure performance remains smooth with jungle elements
- Maintain consistent TypeScript code style with existing modules

### 5. Documentation
- Create `tasks/01_2d_world.md` with this detailed implementation plan
- Document movement controls (WASD/Arrow keys) and export feature ('e' key)
- Include technical notes about camera setup and jungle generation approach

## Technical Specifications

### Camera Configuration
```typescript
// OrthographicCamera setup for 2D view
this.camera = new THREE.OrthographicCamera(
  window.innerWidth / -2,   // left
  window.innerWidth / 2,    // right
  window.innerHeight / 2,   // top
  window.innerHeight / -2,  // bottom
  1,                        // near
  1000                      // far
);
```

### Movement System
- Movement speed: 5 units per second
- Smooth interpolation using delta time
- Camera bounds: -100 to +100 units in both X and Y axes
- Key mapping: WASD or Arrow keys for 4-directional movement

### Jungle Elements
- Ground plane: 200x200 units with forest green material
- Trees: 20-30 randomly placed instances
- Bushes: 50-100 small vegetation elements
- Simple color scheme: various greens, browns for natural jungle appearance

## File Structure
```
src/
├── JungleWorld.ts        # New main module (primary deliverable)
├── main.ts              # Updated with JungleWorld import option
└── (existing files...)

tasks/
└── 01_2d_world.md       # This planning document
```

## Key Design Principles
- **Simplicity**: Focus on core 2D movement and basic jungle visuals
- **Consistency**: Follow existing code patterns from Demo.ts and Shader.ts
- **Modularity**: Maintain clean class structure for easy future expansion
- **Performance**: Keep jungle elements lightweight for smooth movement
- **No Characters**: Pure camera-based exploration as requested

This plan creates a minimal but complete 2D jungle exploration experience that fits seamlessly into the existing vite-threejs-ts-starter architecture.