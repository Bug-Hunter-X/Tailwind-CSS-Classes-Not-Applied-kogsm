```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

```html
<!-- index.html -->
<!DOCTYPE html>
<html>
<head>
  <title>Tailwind CSS Bug</title>
  <link href="output.css" rel="stylesheet">
</head>
<body>
  <div class="bg-red-500 p-4">This is a div</div>
</body>
</html>
```
To use this solution, you must first build your css with `npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch`.