# Jawahar Bharanitharan - Portfolio Website

A modern, responsive portfolio website showcasing my experience as a Mechatronics Engineer specializing in automotive systems, EV diagnostics, and process automation.

## 🚀 Live Demo

Visit: [https://JAWAHAR-Eng.github.io](https://JAWAHAR-Eng.github.io)

## ✨ Features

- **Modern Design**: Technical-industrial aesthetic with distinctive typography and color scheme
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Engaging scroll animations and transitions
- **Interactive Elements**: Hover effects, animated statistics, and dynamic navigation
- **Performance Optimized**: Fast loading with clean, efficient code
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## 📁 Project Structure

```
JAWAHAR-Eng.github.io/
│
├── index.html          # Main HTML file
├── assets/
│   ├── css/
│   │   └── style.css   # Main stylesheet
│   ├── js/
│   │   └── script.js   # JavaScript for interactions
│   ├── images/         # Image assets (optional)
│   └── resume/
│       └── Jawahar_Bharanitharan_Resume.pdf  # Your resume PDF
```

## 🛠️ Setup Instructions

### 1. Clone or Download Repository

```bash
git clone https://github.com/JAWAHAR-Eng/JAWAHAR-Eng.github.io.git
cd JAWAHAR-Eng.github.io
```

### 2. Add Your Files

Place the following files in their respective directories:

- **index.html** → Root directory
- **style.css** → `assets/css/`
- **script.js** → `assets/js/`
- **Your Resume PDF** → `assets/resume/Jawahar_Bharanitharan_Resume.pdf`

### 3. Optional: Add Images

If you want to add your photo or project images:
- Create `assets/images/` directory
- Add images there
- Update image paths in `index.html`

### 4. Customize Content

Edit `index.html` to:
- Update any personal information
- Add or remove projects
- Modify sections as needed

### 5. Test Locally

Open `index.html` in your browser to test:

```bash
# On macOS
open index.html

# On Linux
xdg-open index.html

# On Windows
start index.html
```

Or use a local server:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Then visit: http://localhost:8000
```

### 6. Deploy to GitHub Pages

1. **Commit and Push**:
```bash
git add .
git commit -m "Initial portfolio setup"
git push origin main
```

2. **Enable GitHub Pages**:
   - Go to repository Settings
   - Navigate to "Pages" section
   - Under "Source", select "main" branch
   - Select root folder (/)
   - Click "Save"

3. **Access Your Site**:
   - Your site will be live at: `https://JAWAHAR-Eng.github.io`
   - It may take a few minutes to deploy

## 🎨 Customization Guide

### Colors

Edit CSS variables in `style.css`:

```css
:root {
    --color-primary: #00e5ff;      /* Primary accent color */
    --color-accent: #ff6b35;        /* Secondary accent */
    --color-bg: #0a0e14;            /* Background color */
    /* ... more variables */
}
```

### Typography

The portfolio uses:
- **Display Font**: Syne (headers)
- **Body Font**: IBM Plex Mono (text)

To change fonts, update the Google Fonts import in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap" rel="stylesheet">
```

### Sections

To add/remove sections:
1. Edit the HTML structure in `index.html`
2. Update navigation links
3. Adjust section numbers in `.section-number` spans

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🔧 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Grid, Flexbox, animations
- **JavaScript**: Vanilla JS for interactions
- **Google Fonts**: Syne, IBM Plex Mono

## 📄 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🐛 Troubleshooting

### Resume Not Downloading

Make sure:
1. PDF file exists at `assets/resume/Jawahar_Bharanitharan_Resume.pdf`
2. File name matches exactly (case-sensitive)
3. File permissions allow reading

### Fonts Not Loading

- Check internet connection (fonts load from Google Fonts)
- Verify font import link in `<head>` section
- Clear browser cache

### Animations Not Working

- Ensure JavaScript is enabled in browser
- Check browser console for errors
- Verify `script.js` is properly linked

### Mobile Menu Not Opening

- Check that JavaScript is loaded
- Verify `.nav-toggle` button exists
- Inspect browser console for errors

## 📝 Content Update Checklist

When updating your portfolio:

- [ ] Update work experience
- [ ] Add new projects
- [ ] Update skills and proficiencies
- [ ] Add new awards/certifications
- [ ] Update resume PDF
- [ ] Test all links
- [ ] Verify mobile responsiveness
- [ ] Check spelling and grammar
- [ ] Optimize images (if added)
- [ ] Update meta descriptions

## 🚀 Performance Tips

1. **Optimize Images**: Use WebP format, compress images
2. **Minify CSS/JS**: Use minification tools for production
3. **Enable Caching**: Configure cache headers on server
4. **Lazy Loading**: Implement for images if you add many
5. **CDN**: Consider using a CDN for faster global access

## 📞 Support

For questions or issues:
- **Email**: bjawahar10@gmail.com
- **LinkedIn**: [linkedin.com/in/jawahar-b](https://www.linkedin.com/in/jawahar-b/)

## 📄 License

This portfolio template is free to use for personal purposes. Please provide attribution if you use significant portions of the design/code.

---

**Built with precision and passion** | © 2024 Jawahar Bharanitharan
