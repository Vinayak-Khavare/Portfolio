# Personal Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. Features a clean design, smooth animations, and mobile-friendly layout.

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional design with smooth animations
- **Interactive Elements**: Hover effects, smooth scrolling, and form validation
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Contact Form**: Functional contact form with validation
- **Social Links**: Easy integration with social media profiles
- **SEO Friendly**: Proper meta tags and semantic HTML

## 📁 File Structure

```
Portfolio/
├── sources/
├── index.html        # Main portfolio page
├── styles.css        # Styling
├── script.js         # Frontend logic & form handling
│
└── api/
    └── send-email.js # Vercel serverless function (handles email securely)
```

## 🛠️ Setup Instructions

1. **Download/Clone** the files to your local machine
2. **Open** `index.html` in your web browser
3. **Customize** the content as needed (see customization guide below)
4. **Deploy** to your preferred hosting service

## 🎨 Customization Guide

### Personal Information

Edit the following sections in `index.html`:

#### Hero Section

```html
<!-- Update your name -->
<h1 class="hero-title">
    Hi, I'm <span class="highlight">Your Name</span>
</h1>

<!-- Update your title -->
<p class="hero-subtitle">Full Stack Developer & Creative Problem Solver</p>

<!-- Update your description -->
<p class="hero-description">
    I build beautiful, functional, and user-centered digital experiences. 
    Passionate about clean code and innovative solutions.
</p>
```

#### Social Links

```html
<!-- Update your GitHub profile -->
<a href="https://github.com/yourusername" target="_blank" class="social-link">
    <i class="fab fa-github"></i>
</a>

<!-- Update your LinkedIn profile -->
<a href="https://linkedin.com/in/yourusername" target="_blank" class="social-link">
    <i class="fab fa-linkedin"></i>
</a>

<!-- Update your email -->
<a href="mailto:your.email@example.com" class="social-link">
    <i class="fas fa-envelope"></i>
</a>
```

### About Section

Update the about text and statistics:

```html
<div class="about-text">
    <p>
        <!-- Your personal description -->
    </p>
    <div class="about-stats">
        <div class="stat">
            <h3>3+</h3>
            <p>Years Experience</p>
        </div>
        <!-- Add more stats as needed -->
    </div>
</div>
```

### Projects Section

Replace the sample projects with your own:

```html
<div class="project-card">
    <div class="project-image">
        <!-- Add your project image or placeholder -->
    </div>
    <div class="project-content">
        <h3 class="project-title">Your Project Name</h3>
        <p class="project-description">
            <!-- Project description -->
        </p>
        <div class="project-tech">
            <span class="tech-tag">Technology 1</span>
            <span class="tech-tag">Technology 2</span>
        </div>
        <div class="project-links">
            <a href="your-github-link" class="project-link" target="_blank">
                <i class="fab fa-github"></i> Code
            </a>
            <a href="your-live-link" class="project-link" target="_blank">
                <i class="fas fa-external-link-alt"></i> Live
            </a>
        </div>
    </div>
</div>
```

### Skills Section

Update the skills to match your expertise:

```html
<div class="skill-category">
    <h3 class="category-title">Frontend</h3>
    <div class="skill-items">
        <div class="skill-item">
            <i class="fab fa-html5"></i>
            <span>HTML5</span>
        </div>
        <!-- Add more skills -->
    </div>
</div>
```

### Contact Information

Update your contact details:

```html
<div class="contact-details">
    <div class="contact-item">
        <i class="fas fa-envelope"></i>
        <span>your.email@example.com</span>
    </div>
    <div class="contact-item">
        <i class="fas fa-map-marker-alt"></i>
        <span>Your Location</span>
    </div>
    <div class="contact-item">
        <i class="fas fa-phone"></i>
        <span>+1 (555) 123-4567</span>
    </div>
</div>
```

## 🎯 Adding Your Own Projects

1. **Duplicate** the project card structure
2. **Replace** the placeholder content with your project details
3. **Add** your project images (replace the placeholder divs)
4. **Update** the technology tags to match your project stack
5. **Link** to your GitHub repository and live demo

## 🖼️ Adding Images

To add your own images:

1. **Create** an `images` folder in your project
2. **Add** your images to the folder
3. **Replace** the placeholder divs with `<img>` tags:

```html
<!-- Replace this -->
<div class="project-placeholder">
    <i class="fas fa-laptop-code"></i>
</div>

<!-- With this -->
<img src="images/your-project-image.jpg" alt="Project Name" class="project-image">
```

## 🌐 Deployment Options

### GitHub Pages

1. Create a new repository on GitHub
2. Upload your files to the repository
3. Go to Settings > Pages
4. Select source branch (usually `main`)
5. Your site will be available at `https://yourusername.github.io/repository-name`

### Netlify

1. Drag and drop your project folder to [Netlify](https://netlify.com)
2. Your site will be deployed instantly
3. You'll get a unique URL

### Vercel

1. Connect your GitHub repository to [Vercel](https://vercel.com)
2. Vercel will automatically deploy your site
3. You'll get a unique URL

## 🎨 Customizing Colors

To change the color scheme, edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #fbbf24;
    --text-color: #333;
    --background-color: #ffffff;
}
```

## 📱 Mobile Optimization

The website is already optimized for mobile devices, but you can:

1. **Test** on different screen sizes
2. **Adjust** font sizes if needed
3. **Optimize** images for mobile loading
4. **Test** touch interactions

## 🔧 Advanced Customization

### Adding New Sections

To add a new section:

1. **Add** the HTML structure
2. **Style** it in CSS
3. **Add** any JavaScript functionality
4. **Update** the navigation menu

### Custom Animations

The website includes several animations:

- Fade-in effects on scroll
- Hover animations
- Typing animation for the hero title
- Smooth scrolling

You can modify these in the CSS and JavaScript files.

## 📞 Contact Form

The contact form is currently set up for demonstration. To make it functional:

1. **Use a form service** like Formspree, Netlify Forms, or EmailJS
2. **Replace** the form action URL
3. **Test** the form submission

## 🚀 Performance Tips

1. **Optimize images** before uploading
2. **Minify CSS and JavaScript** for production
3. **Use a CDN** for external resources
4. **Enable compression** on your hosting service

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📞 Support

If you need help customizing your portfolio, feel free to:

- Check the code comments for guidance
- Look at the HTML structure for examples
- Modify the CSS to match your preferences

---

**Happy coding! 🎉**
