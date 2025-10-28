# AI Agent Instructions for Mastering Nuxt Full Stack Project

## Project Architecture

This is a Nuxt.js full-stack application with the following key characteristics:

- **Framework**: Nuxt.js with TypeScript support
- **UI Framework**: @nuxt/ui module for styled components
- **Development Tools**: Nuxt DevTools enabled
- **Package Manager**: PNPM (workspace-based setup)

### Directory Structure

```
app/              # Core application code
├── app.vue       # Root component using UApp wrapper
├── assets/       # Static assets and global CSS
├── layouts/      # Page layouts (default layout available)
└── pages/        # File-based routing pages
server/           # Server-side code with separate tsconfig
templates/        # Template components and mock data
```

## Key Development Patterns

1. **Page Creation**
   - Pages follow file-based routing in `app/pages/`
   - Must be wrapped in `<template>` tags
   - Example: `chat.vue` creates `/chat` route

2. **Layout System**
   - Default layout in `app/layouts/default.vue`
   - Provides consistent page structure with `main-content` styling
   - Custom layouts should maintain responsive design patterns

3. **Styling Conventions**
   - Global CSS in `assets/css/main.css`
   - Component styles use `<style scoped>` with CSS variables
   - Uses `--ui-bg` and similar UI module variables

## Development Workflow

1. **Setup & Installation**
   ```bash
   pnpm install
   ```

2. **Development**
   ```bash
   pnpm dev   # Starts dev server at http://localhost:3000
   ```

3. **Production**
   ```bash
   pnpm build    # Build for production
   pnpm preview  # Preview production build
   ```

## Integration Points

1. **Nuxt Modules**
   - `@nuxt/ui`: Primary UI component library
   - `@nuxt/eslint`: Built-in linting support

2. **TypeScript**
   - Server code has separate `tsconfig.json` in `server/`
   - Main `tsconfig.json` in root for client-side code

## Common Tasks

1. **Adding New Pages**
   - Create new `.vue` file in `app/pages/`
   - Include required template structure
   - No manual route configuration needed

2. **Styling Updates**
   - Prefer scoped styles using `<style scoped>`
   - Global styles go in `assets/css/main.css`
   - Use UI module variables for consistency