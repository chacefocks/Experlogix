# Sunrise Medical Web Configurator

This is a web-based configurator application for Sunrise Medical products.

## File Structure

```
├── index.html                    # Main HTML file
├── assets/                       # All assets organized by type
│   ├── css/                      # Stylesheets
│   │   ├── Calendar.css
│   │   ├── ComboBox.css
│   │   ├── Core.css
│   │   ├── MSCRM60-Borders.css
│   │   ├── SearchBox.css
│   │   └── customtopimage.css
│   ├── js/                       # JavaScript files
│   │   ├── Calendar.js
│   │   ├── ComboBox.js
│   │   ├── Dialog-Modal.js
│   │   ├── Dialog-Overlay.js
│   │   ├── Format-Fraction.js
│   │   ├── Format-Telephone.js
│   │   ├── JSControlsCore.js
│   │   ├── JSObjects.js
│   │   ├── SearchBox.js
│   │   ├── Tooltip.js
│   │   ├── WindowUtil.js
│   │   ├── customjavascript.js
│   │   ├── jquery-ui-1.11.2.min.js
│   │   ├── jquery.min.js
│   │   ├── kendo.culture.en-US.min.js
│   │   ├── kendo.web.min.js
│   │   ├── WebConfig.js
│   │   ├── formats.js            # Converted from .ashx
│   │   ├── lists.js              # Converted from .ashx
│   │   └── strings.js            # Converted from .ashx
│   ├── images/                   # All image files
│   │   ├── *.png                 # Button and UI images
│   │   ├── *.gif                 # Product images
│   │   └── sunrise-logo.png
│   └── saved_resource.html       # Iframe content
└── README.md                     # This file
```

## Changes Made

1. **Organized files into logical directories**:
   - `assets/css/` - All CSS files
   - `assets/js/` - All JavaScript files  
   - `assets/images/` - All image files

2. **Updated all file references** in:
   - Main HTML file
   - CSS files (for image references)
   - Maintained relative path structure

3. **Converted .ashx files to .js** for better organization:
   - `Formats.ashx` → `formats.js`
   - `Lists.ashx` → `lists.js` 
   - `Strings.ashx` → `strings.js`

4. **Cleaned up file extensions**:
   - Removed `.download` extensions from JavaScript files
   - Maintained original functionality

## Usage

Open `index.html` in a web browser. All asset references have been updated to use the new organized structure.