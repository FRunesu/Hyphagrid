(() => {
  const brandName = 'biz.amp'
  const title = 'biz.amp — Websites, Marketing, AI Chatbots & Data Analytics'

  const updatePageMetadata = () => {
    if (document.title !== title) document.title = title

    const description = document.querySelector('meta[name="description"]')
    if (description) {
      const content = 'biz.amp builds premium websites, AI chatbots, marketing engines and data analytics for businesses in construction, law, hospitality, retail, finance and beyond.'
      if (description.content !== content) description.content = content
    }

    const socialTitle = document.querySelector('meta[property="og:title"]')
    if (socialTitle && socialTitle.content !== title) socialTitle.content = title
  }

  const setFirstTextNode = (element, text) => {
    const node = [...element.childNodes].find(
      (child) => child.nodeType === Node.TEXT_NODE && child.textContent.trim()
    )
    if (node) {
      if (node.textContent !== text) node.textContent = text
    } else {
      element.append(document.createTextNode(text))
    }
  }

  const updateBranding = () => {
    const root = document.getElementById('root')
    if (!root) return

    const brandLink = root.querySelector('header nav a[href="#top"]')
    if (brandLink && brandLink.textContent.replace(/\s/g, '') !== brandName) {
      const accent = brandLink.querySelector('span')
      setFirstTextNode(brandLink, 'biz')
      if (accent) {
        if (accent.textContent !== '.amp') accent.textContent = '.amp'
      } else {
        const accentPart = document.createElement('span')
        accentPart.className = 'text-accent'
        accentPart.textContent = '.amp'
        brandLink.append(accentPart)
      }
    }

    const contact = root.querySelector('#contact')
    if (contact) {
      const emailLink = contact.querySelector('a[href^="mailto:"]')
      if (emailLink) {
        setFirstTextNode(emailLink, 'Email biz.amp')
        emailLink.setAttribute('aria-label', 'Email biz.amp')
      }

      const copyright = [...contact.querySelectorAll('footer p')].find((p) => p.textContent.includes('©'))
      if (copyright) {
        const next = copyright.textContent
          .replace(/©\s*\d{4}\s*/, '© ')
          .replace(/Hyphagrid/gi, brandName)
        if (copyright.textContent !== next) copyright.textContent = next
      }
    }

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT)
    let node
    while ((node = walker.nextNode())) {
      if (node.parentElement?.closest('header nav a[href="#top"], a[href^="mailto:"], #contact footer p')) continue
      const next = node.textContent.replace(/Hyphagrid/gi, brandName)
      if (node.textContent !== next) node.textContent = next
    }
  }

  const applyUpdates = () => {
    updatePageMetadata()
    updateBranding()
  }

  applyUpdates()
  const root = document.getElementById('root')
  if (root) {
    new MutationObserver(applyUpdates).observe(root, {
      childList: true,
      subtree: true,
      characterData: true,
    })
  }
})()
