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
      background: rgba(239, 238, 233, .97) !important;
      color: #1d2833 !important;
      box-shadow: 0 1px 0 rgba(29, 40, 51, .08) !important;
      -webkit-backdrop-filter: blur(14px) !important;
      backdrop-filter: blur(14px) !important;
    }

    #root header.fixed.inset-x-0.top-0[class~="bg-transparent"] nav > div a[href="#contact"]:not(:last-child),
    #root header.fixed.inset-x-0.top-0[class*="bg-cream/95"] nav > div a[href="#contact"]:not(:last-child) {
      background: transparent !important;
      color: inherit !important;
    }

    #root header.fixed.inset-x-0.top-0[class~="bg-transparent"] nav > div a[href="#contact"]:last-child {
      background: #efeee9 !important;
      color: #1d2833 !important;
    }

    #root header.fixed.inset-x-0.top-0[class*="bg-cream/95"] nav > div a[href="#contact"]:last-child {
      background: #1d2833 !important;
      color: #fff !important;
    }
  `
  document.head.appendChild(style)
})()
