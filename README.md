# 🚀 WORKLY - O Futuro dos Trabalhos Rápidos

**Encontra trabalho em minutos. Empresas encontram trabalhadores rapidamente.**

Workly é uma plataforma moderna de marketplace de trabalhos gig, desenvolvida em React + Vite + Tailwind CSS. Conecta trabalhadores com oportunidades locais em part-time, eventos, restauração, construção e muito mais.

## ✨ Features

- 🎯 **Trabalhos Reais**: Empresas verificadas com oportunidades ativas
- ⚡ **Resposta Rápida**: Comunica diretamente com quem contrata
- 📍 **Perto de Ti**: Encontra trabalho na tua zona em segundos
- 💰 **Transparente**: Salários claros e honestos
- 📱 **Responsive**: Funciona em desktop, tablet e mobile

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.2.0
- **Build Tool**: Vite 5.0.8
- **Styling**: Tailwind CSS 3.3.6
- **Language**: JavaScript (JSX)
- **Package Manager**: NPM

## 📁 Project Structure

```
workly-app/
├── src/
│   ├── components/
│   │   └── WorklyAppConcept.jsx    # Main application component
│   ├── App.jsx                      # Root component
│   ├── main.jsx                     # Entry point
│   └── index.css                    # Tailwind imports & global styles
├── index.html                       # HTML template
├── vite.config.js                   # Vite configuration
├── tailwind.config.js               # Tailwind CSS configuration
├── postcss.config.js                # PostCSS configuration
├── package.json                     # Dependencies & scripts
└── README.md                        # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Pajdo29/workly-app.git
   cd workly-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The app will open at `http://localhost:5173`

### Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## 📦 Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

## 🎨 Customization

### Colors
Modify the Tailwind color scheme in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#10b981', // emerald-500
    },
  },
}
```

### Jobs Data
Update the jobs array in `src/components/WorklyAppConcept.jsx`:

```javascript
const [jobs] = useState([
  {
    id: 1,
    title: 'Job Title',
    company: 'Company Name',
    pay: 'XX€/unit',
    location: 'City',
  },
  // Add more jobs...
]);
```

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 💬 Support

For questions or issues, please:
- Open an issue on GitHub
- Contact us through the app
- Visit our portfolio

## 👨‍💻 Author

**Pajdo29**
- GitHub: [@Pajdo29](https://github.com/Pajdo29)
- Website: [Your Portfolio]
- Email: [Your Email]

## 🙏 Acknowledgments

- React documentation
- Vite team for the amazing build tool
- Tailwind CSS for the utility-first CSS framework
- The open-source community

---

**WORKLY © 2026** — O futuro dos trabalhos rápidos e part-time.
