(() => {
  const style = document.createElement('style')
  style.id = 'bizamp-hero-nav-v8'
  style.textContent = `
    #root header.fixed.inset-x-0.top-0[class~="bg-transparent"] {
      background: transparent !important;
      color: #fff !important;
      box-shadow: none !important;
      -webkit-backdrop-filter: none !important;
      backdrop-filter: none !important;
    }

    #root header.fixed.inset-x-0.top-0[class*="bg-cream/95"] {
      background: rgba(245, 242, 235, .97) !important;
      color: #18211e !important;
      box-shadow: 0 1px 0 rgba(24, 33, 30, .08) !important;
      -webkit-backdrop-filter: blur(14px) !important;
      backdrop-filter: blur(14px) !important;
    }

    #root header.fixed.inset-x-0.top-0[class~="bg-transparent"] nav > div a[href="#contact"]:not(:last-child),
    #root header.fixed.inset-x-0.top-0[class*="bg-cream/95"] nav > div a[href="#contact"]:not(:last-child) {
      background: transparent !important;
      color: inherit !important;
    }

    #root header.fixed.inset-x-0.top-0[class~="bg-transparent"] nav > div a[href="#contact"]:last-child {
      background: #fff !important;
      color: #18211e !important;
    }

    #root header.fixed.inset-x-0.top-0[class*="bg-cream/95"] nav > div a[href="#contact"]:last-child {
      background: #18211e !important;
      color: #fff !important;
    }
  `
  document.head.appendChild(style)
})()
