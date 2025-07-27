#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Checking for common errors...\n');

// Check for missing exports
const checkExports = () => {
  const srcDir = path.join(__dirname, 'src');
  const componentsDir = path.join(srcDir, 'components');
  const pagesDir = path.join(srcDir, 'pages');
  
  const directories = [componentsDir, pagesDir];
  
  directories.forEach(dir => {
    if (fs.existsSync(dir)) {
      const files = fs.readdirSync(dir).filter(file => file.endsWith('.tsx'));
      
      files.forEach(file => {
        const filePath = path.join(dir, file);
        const content = fs.readFileSync(filePath, 'utf8');
        
        // Check for export default
        if (!content.includes('export default')) {
          console.log(`❌ Missing export default in: ${file}`);
        } else {
          console.log(`✅ ${file} - Export found`);
        }
        
        // Check for React import
        if (!content.includes('import React') && !content.includes('from \'react\'')) {
          console.log(`⚠️  ${file} - No React import (may be using JSX without import)`);
        }
      });
    }
  });
};

// Check for syntax errors in main files
const checkMainFiles = () => {
  const mainFiles = [
    'src/main.tsx',
    'src/App.tsx',
    'src/pages/Index.tsx'
  ];
  
  mainFiles.forEach(file => {
    const filePath = path.join(__dirname, file);
    if (fs.existsSync(filePath)) {
      console.log(`✅ ${file} - Exists`);
    } else {
      console.log(`❌ ${file} - Missing!`);
    }
  });
};

// Check package.json
const checkPackageJson = () => {
  const packagePath = path.join(__dirname, 'package.json');
  if (fs.existsSync(packagePath)) {
    const packageData = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
    
    if (packageData.scripts && packageData.scripts.dev) {
      console.log('✅ package.json - dev script found');
    } else {
      console.log('❌ package.json - Missing dev script');
    }
  } else {
    console.log('❌ package.json - Missing!');
  }
};

// Run checks
checkPackageJson();
checkMainFiles();
checkExports();

console.log('\n🎯 Quick fixes if pages are blank:');
console.log('1. Check browser console for errors (F12)');
console.log('2. Restart development server: npm run dev');
console.log('3. Clear browser cache');
console.log('4. Check for syntax errors in modified files');
console.log('5. Verify all imports are correct'); 