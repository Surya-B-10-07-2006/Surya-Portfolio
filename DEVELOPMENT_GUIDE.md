# Development Guide - Surya's Portfolio

## Quick Start

1. **Start Development Server:**
   ```bash
   npm run dev
   ```
   This will start the server at `http://localhost:8080`

2. **Make Changes:**
   - Edit any `.tsx` or `.css` file
   - Changes will automatically reload in the browser
   - No need to restart the server

## Common Issues & Solutions

### If Pages Become Blank:

1. **Check Console Errors:**
   - Open browser developer tools (F12)
   - Look for red error messages in the Console tab
   - Fix any syntax errors

2. **Check Import Statements:**
   - Make sure all imports are correct
   - Example: `import Component from './Component'`

3. **Check Export Statements:**
   - Each component must have: `export default ComponentName`
   - Make sure the export is at the bottom of the file

4. **Restart Development Server:**
   ```bash
   # Stop server (Ctrl+C)
   npm run dev
   ```

### File Structure:
```
src/
├── components/     # Reusable components
├── pages/         # Page components
├── assets/        # Images, fonts, etc.
├── lib/           # Utilities
└── hooks/         # Custom React hooks
```

### Making Changes Safely:

1. **Small Changes First:**
   - Test with small text changes
   - Verify the change appears in browser

2. **Component Changes:**
   - Edit one component at a time
   - Save the file and check browser

3. **Styling Changes:**
   - Edit CSS classes in components
   - Changes apply immediately

## Hot Reload Tips:

- ✅ **Works:** Text changes, CSS changes, component logic
- ✅ **Works:** Adding/removing components
- ❌ **May need restart:** Package.json changes, new dependencies

## Git Workflow:

1. **Make changes locally**
2. **Test changes in browser**
3. **Commit changes:**
   ```bash
   git add .
   git commit -m "Description of changes"
   git push origin main
   ```

## Troubleshooting:

### If hot reload stops working:
```bash
# Stop server and restart
npm run dev
```

### If you see build errors:
```bash
# Check for syntax errors
npm run build
```

### If components don't load:
- Check import paths (use `@/` for src directory)
- Verify component names match file names
- Check for missing dependencies

## Common Components:

- `Hero.tsx` - Main landing section
- `About.tsx` - About section
- `Skills.tsx` - Skills section
- `Projects.tsx` - Projects section
- `Contact.tsx` - Contact section
- `Navigation.tsx` - Navigation bar

## Styling:

- Uses Tailwind CSS
- Custom CSS in `src/index.css`
- Component-specific styles in each component file

## Need Help?

1. Check browser console for errors
2. Restart development server
3. Check file syntax
4. Verify imports/exports 