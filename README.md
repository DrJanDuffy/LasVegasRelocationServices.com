# Las Vegas Relocation Services - LasVegasRelocationServices.com

A comprehensive website for Dr. Jan Duffy and the Berkshire Hathaway Services Relocation Services Team, providing professional relocation services in Las Vegas and surrounding areas.

## 🏠 About

Las Vegas Relocation Services is your trusted partner for seamless transitions to the Las Vegas area. With Dr. Jan Duffy at the helm and backed by the prestigious Berkshire Hathaway brand, we offer comprehensive relocation solutions for individuals, families, and corporations.

## ✨ Features

- **Professional Relocation Services**: Complete end-to-end relocation support
- **Berkshire Hathaway Expertise**: Industry-leading standards and resources
- **Local Market Knowledge**: Deep understanding of Las Vegas real estate
- **Corporate Relocation**: Specialized services for business relocations
- **Family Support**: Comprehensive assistance for family moves
- **Real Estate Integration**: Seamless property search and acquisition
- **Responsive Design**: Mobile-first, accessible design
- **SEO Optimized**: Built for search engine visibility
- **Performance Focused**: Fast loading and smooth user experience

## 🛠 Tech Stack

- **Framework**: Next.js 14.2.5 (App Router)
- **Language**: TypeScript 5.6.3
- **Styling**: Tailwind CSS 3.4.4
- **Animations**: Framer Motion 11.0.8
- **Icons**: Lucide React & Heroicons
- **UI Components**: Headless UI
- **Deployment**: Vercel / GitHub Pages
- **Analytics**: Google Analytics, Google Tag Manager
- **Real Estate**: RealScout Integration

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Global styles
│   ├── relocating-from/   # City-specific relocation pages
│   │   ├── los-angeles/
│   │   ├── san-diego/
│   │   ├── san-francisco/
│   │   └── ...
│   └── services/          # Service detail pages
│       ├── corporate-relocation/
│       ├── family-relocation/
│       ├── luxury-relocation/
│       └── ...
├── components/            # Reusable UI components
│   ├── Hero.tsx          # Hero section
│   ├── Services.tsx      # Services showcase
│   ├── About.tsx         # About Dr. Jan Duffy
│   ├── Team.tsx          # Team members
│   ├── Testimonials.tsx  # Client reviews
│   ├── Contact.tsx       # Contact form
│   ├── CTA.tsx           # Call-to-action
│   └── ui/               # Base UI components
├── lib/                  # Utility functions
│   ├── utils.ts          # Helper functions
│   ├── constants.ts      # App constants
│   └── types.ts          # TypeScript types
├── types/                # Type definitions
└── public/               # Static assets
    ├── images/           # Images and photos
    ├── icons/            # Icon files
    └── documents/        # PDFs and docs
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/DrJanDuffy/LasVegasRelocationServices.com.git
   cd LasVegasRelocationServices.com
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` with your configuration:
   ```env
   NEXT_PUBLIC_SITE_URL=https://lasvegasrelocationservices.com
   NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
   NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID=GTM_ID
   NEXT_PUBLIC_FACEBOOK_PIXEL_ID=PIXEL_ID
   REALSCOUT_API_KEY=your_realscout_api_key
   CONTACT_EMAIL=dr.jan.duffy@berkshirehathaway.com
   CONTACT_PHONE=+1-702-XXX-XXXX
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
- `npm run format` - Format code with Prettier
- `npm run analyze` - Analyze bundle size

## 🎨 Customization

### Colors & Typography

The design system uses a carefully selected color palette and typography:

- **Primary Colors**: Professional blues and grays
- **Accent Colors**: Warm yellows and oranges
- **Typography**: Playfair Display (headings), Inter (body text)

### Content Updates

1. **Team Information**: Update `src/components/Team.tsx`
2. **Services**: Modify `src/components/Services.tsx`
3. **Contact Details**: Edit `src/components/Contact.tsx`
4. **Images**: Replace placeholder images in `public/images/`

### RealScout Integration

To integrate RealScout property search:

1. Add your RealScout API key to `.env.local`
2. Configure RealScout web components in relevant pages
3. Customize the property search interface

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your GitHub repository to Vercel**
2. **Configure environment variables** in Vercel dashboard
3. **Deploy automatically** on every push to main branch

### GitHub Pages

1. **Build the project**
   ```bash
   npm run build
   npm run export
   ```

2. **Deploy to GitHub Pages** using GitHub Actions

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload** the `out/` folder to your hosting provider

## 🔧 Configuration

### SEO Settings

- **Meta Tags**: Configured in `src/app/layout.tsx`
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Twitter-specific meta tags
- **Structured Data**: JSON-LD for rich snippets
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Search engine crawling rules

### Analytics

- **Google Analytics**: Track user behavior and conversions
- **Google Tag Manager**: Manage marketing tags and pixels
- **Facebook Pixel**: Facebook advertising optimization

### Performance

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic route-based code splitting
- **Bundle Analysis**: Built-in bundle size analysis
- **Lighthouse**: Performance monitoring and optimization

## 📱 Responsive Design

The website is built with a mobile-first approach:

- **Mobile**: Optimized for smartphones and tablets
- **Desktop**: Enhanced experience for larger screens
- **Touch-Friendly**: Optimized for touch interactions
- **Fast Loading**: Optimized for slower connections

## ♿ Accessibility

Built with accessibility in mind:

- **WCAG 2.1 AA Compliance**: Meeting accessibility standards
- **Semantic HTML**: Proper heading structure and landmarks
- **ARIA Labels**: Screen reader support
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: High contrast ratios
- **Alt Text**: Descriptive image alt text

## 🔍 SEO Features

- **Meta Tags**: Comprehensive meta information
- **Structured Data**: Rich snippets for search results
- **Sitemap**: XML sitemap for search engines
- **Robots.txt**: Crawling instructions
- **Performance**: Core Web Vitals optimization
- **Mobile**: Mobile-first indexing support

## 📊 Performance

- **Lighthouse Score**: Target 90+ across all metrics
- **Core Web Vitals**: Optimized for user experience
- **Bundle Size**: Minimal JavaScript bundle
- **Image Optimization**: WebP and AVIF support
- **Caching**: Strategic caching strategies

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

## 📄 License

This project is proprietary and confidential. All rights reserved by Dr. Jan Duffy and Berkshire Hathaway Services Relocation Services Team.

## 📞 Contact

- **Dr. Jan Duffy**
- **Berkshire Hathaway Services Relocation Services Team**
- **Email**: dr.jan.duffy@berkshirehathaway.com
- **Phone**: +1-702-XXX-XXXX
- **Website**: [LasVegasRelocationServices.com](https://lasvegasrelocationservices.com)

## 🙏 Acknowledgments

- **Berkshire Hathaway**: For brand partnership and resources
- **Next.js Team**: For the amazing framework
- **Tailwind CSS**: For the utility-first CSS framework
- **Framer Motion**: For smooth animations
- **RealScout**: For real estate integration capabilities

---

**Built with ❤️ for the Las Vegas community**
