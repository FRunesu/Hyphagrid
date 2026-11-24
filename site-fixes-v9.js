(() => {
  const style = document.createElement('style')
  style.id = 'bizamp-hero-readability-v9'
  style.textContent = [
    '#root header.fixed.inset-x-0.top-0[class~="bg-transparent"] { background:linear-gradient(180deg,rgba(12,12,12,.78) 0%,rgba(12,12,12,.48) 72%,rgba(12,12,12,.18) 100%) !important; color:#fff !important; box-shadow:none !important; -webkit-backdrop-filter:none !important; backdrop-filter:none !important; }',
    '#root header.fixed.inset-x-0.top-0[class~="bg-transparent"] nav > a:first-child, #root header.fixed.inset-x-0.top-0[class~="bg-transparent"] nav > div a:not([href="#contact"]:last-child) { color:#fff !important; opacity:1 !important; text-shadow:0 1px 8px rgba(0,0,0,.85) !important; }',
    '#root header.fixed.inset-x-0.top-0[class~="bg-transparent"] nav > a:first-child span { color:#efeee9 !important; }',
    '#root header.fixed.inset-x-0.top-0[class~="bg-transparent"] nav > div a[href="#contact"]:last-child { background:#efeee9 !important; color:#1d2833 !important; }'
  ].join('\n')
  document.head.appendChild(style)

  const hero = document.querySelector('#top')
  if (hero) {
    let generation = 0
    const applyShade = (image) => {
      try {
        if (!image || !image.naturalWidth) throw new Error('Image not ready')
        const canvas = document.createElement('canvas')
        const width = 32
        const height = 20
        canvas.width = width
        canvas.height = height
        const context = canvas.getContext('2d', { willReadFrequently: true })
        if (!context) throw new Error('Canvas unavailable')
        context.drawImage(image, 0, 0, width, height)
        const pixels = context.getImageData(0, 0, width, height).data
        let total = 0
        let count = 0
        for (let y = 6; y < height; y += 1) {
          for (let x = 0; x < 19; x += 1) {
            const offset = (y * width + x) * 4
            total += 0.2126 * pixels[offset] + 0.7152 * pixels[offset + 1] + 0.0722 * pixels[offset + 2]
            count += 1
          }
        }
        const brightness = total / count / 255
        const shade = Math.max(0.48, Math.min(0.78, 0.44 + brightness * 0.55))
        hero.style.setProperty('--hero-shade', shade.toFixed(2))
      } catch {
        hero.style.setProperty('--hero-shade', '0.68')
      }
    }
    const updateShade = () => {
      const images = hero.querySelectorAll('img')
      const image = images[images.length - 1]
      if (!image) return
      const current = ++generation
      if (image.complete && image.naturalWidth) {
        applyShade(image)
      } else {
        image.addEventListener('load', () => {
          if (current === generation && hero.contains(image)) applyShade(image)
        }, { once: true })
        image.addEventListener('error', () => {
          if (current === generation) hero.style.setProperty('--hero-shade', '0.68')
        }, { once: true })
      }
    }
    const observer = new MutationObserver(() => requestAnimationFrame(updateShade))
    observer.observe(hero, { childList: true, subtree: true, attributes: true, attributeFilter: ['src'] })
    updateShade()
  }

  const emailLink = document.querySelector('#contact a[href^="mailto:"]')
  if (emailLink) emailLink.href = 'mailto:frunesu1.0@gmail.com?subject=Project%20enquiry%20for%20biz.amp'
})()
