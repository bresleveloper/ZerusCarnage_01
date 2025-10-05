# Story Images

This folder contains background images for the story screens that appear before each level.

## Required Images

### Level 1: Zerus Awakening
- **Filename**: `level01_zerus.jpg`
- **Theme**: Primal jungle world of Zerus
- **Recommended Resolution**: 1920x1080 or higher
- **Description**: Should depict a dark, alien jungle environment with purple/green tones matching the Zerg aesthetic
- **Text Overlay Position**: Bottom (ensure lower portion can accommodate semi-transparent text box)

## Image Guidelines

1. **Resolution**: Minimum 1920x1080, higher resolutions preferred for modern displays
2. **File Format**: JPEG (for photos) or PNG (for graphics with transparency)
3. **File Size**: Keep under 500KB for fast loading (use compression tools)
4. **Composition**: Leave appropriate space for text box overlay based on configured position
5. **Color Palette**: Match StarCraft Zerg aesthetic (purples, greens, organic textures)
6. **Atmosphere**: Dark, ominous, but still readable with text overlay

## Adding New Story Images

When adding images for new levels:

1. Name files as `levelXX_description.jpg` (e.g., `level02_evolution.jpg`)
2. Optimize file size before adding to repository
3. Update `src/ZerusCarnage/LevelStoryScreens.ts` with the new configuration
4. Test that text overlay is readable against the image background

## Image Sources

Consider using:
- StarCraft official artwork (ensure licensing allows)
- AI-generated images with appropriate prompts
- Stock photos with Zerg-themed editing
- Custom digital art

## Current Status

**Level 1**: Image needed - add `level01_zerus.jpg` to this folder

For testing purposes, the story screen will still display with the text overlay even if the image is missing, but will show a broken image placeholder.
