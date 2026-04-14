# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Vue 2.x-based GIS (Geographic Information System) application that integrates SuperMap for 2D and 3D map visualization. The application supports map layer management, spatial queries, measurement tools, and various map interactions.

## Build Commands

```bash
# Install dependencies (do NOT use cnpm - causes hot reload issues)
npm install

# Start development server on port 8080
npm run serve

# Build for production
npm run build

# Build for production with analyze mode
npm run build:prod

# Run ESLint
npm run lint

# Fix ESLint issues automatically
npm run lint:fix
```

## Environment Configuration

Environment variables are loaded from:
- `.env` - Default (not committed)
- `.env.local` - Local overrides (not committed)
- `.env.development` - Development mode
- `.env.production` - Production mode

**Important**: Variables must start with `VUE_APP_` to be accessible in client code.

Example `.env.local`:
```
VUE_APP_API_URL=http://localhost:2021/api/
```

## Project Architecture

### Tech Stack
- **Framework**: Vue 2.6 with Vue CLI 3
- **State Management**: Vuex 3
- **Routing**: Vue Router 3 with lazy-loaded routes
- **UI Library**: Element UI 2.13
- **CSS Preprocessor**: Less / Sass
- **HTTP Client**: Axios with custom interceptors
- **GIS Libraries**: SuperMap iClient (Classic, Leaflet, MapboxGL), Cesium for 3D

### Key Directories

```
src/
├── views/           # Page components
│   ├── onemap/      # Map-related components (2D/3D map containers, tools)
│   ├── Supermap2D.vue    # Main 2D map entry
│   ├── Supermap3D.vue    # Main 3D map entry (Cesium)
│   └── index.vue    # Dashboard
├── components/      # Reusable components
│   └── SvgIcon/     # SVG icon component
├── router/          # Vue Router configuration
├── store/           # Vuex store
├── http/            # Axios configuration and interceptors
├── utils/           # Utility classes
├── styles/          # Global SCSS/CSS styles
├── icons/           # SVG icons (loaded via svg-sprite-loader)
└── excel/           # Excel export utilities
```

### Webpack Aliases (vue.config.js)
- `@` → `src/`
- `@c` → `src/components/`
- `excel` → `src/excel/`

### SuperMap Integration

The application uses multiple SuperMap libraries:
- **2D Maps**: `@supermap/iclient-leaflet` for Leaflet-based maps
- **3D Maps**: `@supermap/iclient-classic` with Cesium
- **Vue Components**: `@supermap/vue-iclient-mapboxgl`

SuperMap JavaScript libraries are loaded globally via `<script>` tags in `public/index.html`:
- Cesium (`Build/Cesium/Cesium.js`)
- SuperMap Classic (`js/SuperMap-7.1-11828.js`)

### Configuration Files (public/)

Map configurations are stored as global JavaScript variables loaded in `index.html`:
- `config.js` - General application configuration
- `layerConfig.js` - Map layer configurations
- `gumeiLayer.js` - Specific layer definitions for Gumei area
- `gwLayer.js` - Layer definitions for another region

These are accessed as `window.config` in Vue components.

### HTTP Configuration

Axios is configured in `src/http/index.js`:
- Base URL: Loaded from `VUE_APP_API_URL` environment variable
- Request/response interceptors for token handling
- Custom response code handling (401, 403, 404)

Access via `this.$http` in components.

**API Methods** (src/http/api.js):
```javascript
import { get, post } from '@/http/api';
get('/endpoint', { param: 'value' }).then(res => { ... });
post('/endpoint', { data: 'value' }).then(res => { ... });
```

### Component Communication Pattern

The `onemap` components use a state-based communication pattern:
- Parent (Index2D/Index3D) maintains a `state` object
- Child components emit events like `@setState`, `@toggleComponent`
- Props are passed down as `baseProps`, `queryProps`, etc.

### SVG Icons

SVG icons are managed via `svg-sprite-loader`:
- Place SVG files in `src/icons/svg/`
- Use `<svg-icon icon-class="name" />` component
- Icons are automatically bundled via webpack

### Important Notes

1. **Do not use cnpm** for package installation - it breaks hot module replacement
2. CSS hot reloading is enabled in development (`css.extract: false` in vue.config.js for dev)
3. The app uses `runtimeCompiler: true` for dynamic component rendering
4. ESLint is disabled during save (`lintOnSave: false`) - use `npm run lint` manually
5. Global jQuery is available (loaded in index.html)

### Code Style Guidelines

1. **Props**: Don't use both `required: true` and `default` - they're mutually exclusive
2. **Console logs**: Use ESLint warnings for console/debugger statements
3. **Environment variables**: All client-side env vars must start with `VUE_APP_`
4. **HTTP**: Use the provided `get`/`post` methods from `src/http/api.js`
5. **Utils**: Use the static methods in `src/utils/index.js` for common operations
