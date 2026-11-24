(() => {
  const style = document.createElement('style')
  style.id = 'bizamp-hero-readability-v10'
  style.textContent = [
    '#root header.fixed.inset-x-0.top-0[class~="bg-transparent"] { background:linear-gradient(180deg,rgba(12,12,12,.78) 0%,rgba(12,12,12,.48) 72%,rgba(12,12,12,.18) 100%) !important; color:#fff !important; box-shadow:none !important; -webkit-backdrop-filter:none !important; backdrop-filter:none !important; }',
    '#root header.fixed.inset-x-0.top-0[class~="bg-transparent"] nav > a:first-child, #root header.fixed.inset-x-0.top-0[class~="bg-transparent"] nav > div a:not([href="#contact"]:last-child) { color:#fff !important; opacity:1 !important; text-shadow:0 1px 8px rgba(0,0,0,.85) !important; }',
    '#root header.fixed.inset-x-0.top-0[class~="bg-transparent"] nav > a:first-child span { color:#efeee9 !important; }',
    '#root header.fixed.inset-x-0.top-0[class~="bg-transparent"] nav > div a[href="#contact"]:last-child { background:#efeee9 !important; color:#1d2833 !important; }'
  ].join('\n')
  document.head.appendChild(style)

  let heroObserver
  let heroGeneration = 0

  const installHeroContrast = () => {
    const hero = document.querySelector('#top')
    if (!hero || hero.dataset.bizampContrast === 'v10') return Boolean(hero)
    hero.dataset.bizampContrast = 'v10'

    const applyShade = image => {
      try {
        if (!image || !image.complete || !image.naturalWidth) throw new Error('Image not ready')
        const canvas = document.createElement('canvas')
        canvas.width = 32
        canvas.height = 20
        const context = canvas.getContext('2d', { willReadFrequently: true })
        if (!context) throw new Error('Canvas unavailable')
        context.drawImage(image, 0, 0, canvas.width, canvas.height)
        const pixels = context.getImageData(0, 0, canvas.width, canvas.height).data
        let total = 0
        let count = 0
        for (let y = 6; y < 20; y += 1) {
          for (let x = 0; x < 19; x += 1) {
            const offset = (y * canvas.width + x) * 4
            total += 0.2126 * pixels[offset] + 0.7152 * pixels[offset + 1] + 0.0722 * pixels[offset + 2]
            count += 1
          }
        }
        const brightness = total / count / 255
        const shade = Math.max(0.48, Math.min(0.78, 0.40 + brightness * 0.58))
        hero.style.setProperty('--hero-shade', shade.toFixed(2))
      } catch {
        hero.style.setProperty('--hero-shade', '0.62')
      }
    }

    const updateShade = () => {
      const images = Array.from(hero.querySelectorAll('img'))
      if (!images.length) return
      const image = images.sort((a, b) => Number(getComputedStyle(b).opacity) - Number(getComputedStyle(a).opacity))[0]
      const generation = ++heroGeneration
      if (image.complete && image.naturalWidth) {
        applyShade(image)
      } else {
        image.addEventListener('load', () => {
          if (generation === heroGeneration && hero.contains(image)) applyShade(image)
        }, { once: true })
        image.addEventListener('error', () => {
          if (generation === heroGeneration) hero.style.setProperty('--hero-shade', '0.62')
        }, { once: true })
      }
    }

    heroObserver = new MutationObserver(() => requestAnimationFrame(updateShade))
    heroObserver.observe(hero, { childList: true, subtree: true, attributes: true, attributeFilter: ['src', 'class', 'style'] })
    updateShade()
    return true
  }

  const updateEmailLink = () => {
    const emailLink = document.querySelector('#contact a[href^="mailto:"]')
    if (!emailLink) return false
    const recipient = emailLink.getAttribute('href').split('?')[0]
    emailLink.setAttribute('href', recipient + '?subject=Project%20enquiry%20for%20biz.amp')
    return true
  }

  const installWhenReady = () => {
    installHeroContrast()
    updateEmailLink()
  }
  installWhenReady()
  const appObserver = new MutationObserver(installWhenReady)
  appObserver.observe(document.documentElement, { childList: true, subtree: true })
  window.setTimeout(() => appObserver.disconnect(), 15000)
})()