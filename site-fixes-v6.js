(() => {
  const style = document.createElement('style')
  style.id = 'hyphagrid-fixes-v6'
  style.textContent = `
    #root header.fixed.inset-x-0.top-0 {
      background: rgba(245, 242, 235, .97) !important;
      color: #18211e !important;
      box-shadow: 0 1px 0 rgba(24, 33, 30, .08);
      -webkit-backdrop-filter: blur(14px);
      backdrop-filter: blur(14px);
    }

    #root header.fixed.inset-x-0.top-0 nav > div a[href="#contact"] {
      background: #18211e !important;
      color: #fff !important;
    }

    @media (min-width: 768px) and (max-width: 1150px) {
      #top h1 {
        max-width: 100% !important;
        font-size: clamp(3.1rem, 7vw, 5rem) !important;
        line-height: 1.02 !important;
      }
      #top > div.relative.z-10 {
        padding-bottom: clamp(2rem, 5vh, 3rem) !important;
      }
    }

    @media (max-width: 767px) {
      #top h1 {
        max-width: 100% !important;
        font-size: clamp(2.6rem, 11vw, 3.6rem) !important;
        line-height: 1.02 !important;
      }
      #top > div.relative.z-10 {
        padding-bottom: 2rem !important;
      }
      #top > div.relative.z-10 > div.mt-12 {
        margin-top: 1.5rem !important;
      }
    }
  `
  document.head.appendChild(style)

  const updateContact = () => {
    const contact = document.querySelector('#contact')
    if (!contact) return

    const emailLink = contact.querySelector('a[href^="mailto:"]')
    if (emailLink) {
      const labelNode = [...emailLink.childNodes].find(
        (node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim()
      )
      if (labelNode && labelNode.textContent.trim() !== 'Email biz.amp') {
        labelNode.textContent = 'Email biz.amp'
      } else if (!labelNode) {
        emailLink.append(document.createTextNode('Email biz.amp'))
      }
      emailLink.setAttribute('aria-label', 'Email biz.amp')
    }

    const copyright = [...contact.querySelectorAll('footer p')].find((p) => p.textContent.includes('©'))
    if (copyright) {
      const withoutYear = copyright.textContent.replace(/©\s*\d{4}\s*/, '© ')
      if (withoutYear !== copyright.textContent) copyright.textContent = withoutYear
    }
  }

  const root = document.getElementById('root')
  if (root) {
    updateContact()
    new MutationObserver(updateContact).observe(root, { childList: true, subtree: true })
  }
})()
