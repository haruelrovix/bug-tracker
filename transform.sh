babel --presets react src --watch --out-dir static

browserify static/app.js > static/bundle.js