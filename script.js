/* ═══════════════════════════════════════════════
   PROJECT DATA
   Edit this to add/change/remove projects.
═══════════════════════════════════════════════ */
const PROJECTS = [
  {
    id: 'gazelle',
    category: 'professional',
    title: 'Gazelle',
    role: 'CGI Developer',
    image: 'images/gazelle/OrangeLogo_comp.png',
    description: 'Full CGI product visualisation for Gazelle, one of the Netherlands\' most iconic bicycle brands. Delivered photorealistic hero renders across multiple model lines, from classic city bikes to modern e-bikes, with zero photography involved.',
    responsibilities: [
      'Handling and cleaning technical CAD data to be renderable in V-Ray.',
      'Helped set up a configurator system which generates bike variations based on sub-assemblies.',
      'Developed photorealistic material setups which are saved in a massive library to maintain consistency and faster production.',
      'Produced 360° turntable sequences for interactive product viewers.',
      'Delivered hero stills and variant renders for web and print campaigns.',
      'Extracted more usabilty by creating a similar workflow for closer detail shots, giving the consumer a closer look at a bikes USP\'s.',
    ],
    software: ['3ds Max', 'V-Ray', 'Photoshop',],
    details: [
      'images/gazelle/ArroyoMotor_comp.png',
      'images/gazelle/ArroyoSfeer_comp.png',
      'images/gazelle/EasyFlow_Band_comp.png',
      'images/gazelle/GrenobleBlueBattery_comp.png',
      'images/gazelle/GrenobleBlueBrakeDisc_comp.png',
      'images/gazelle/OrangeLogo_comp.png',
    ],
    slideshow: [
      'images/gazelle/TourFront.jpg',
      'images/gazelle/TourSide.jpg',
      'images/gazelle/Ultimate_front.jpg',
      'images/gazelle/Ultimate_side.jpg',
    ],
    frames360: (function() {
      var f = [];
      for (var i = 2; i <= 33; i++) {
        f.push('images/gazelle/360/360_EclipseC380LTDpinegreenmat_1559-1_H.RGB_color.' + String(i).padStart(4,'0') + '.png');
      }
      return f;
    })(),
  },
  {
    id: 'wehkamp',
    category: 'professional',
    title: 'Wehkamp — Virtual Production',
    role: 'Unreal Artist / Unreal Operator',
    image: 'images/wehkamp/WehkampMainImage.png',
    description: 'Worked as Unreal Artist and on-set Unreal Operator for a major virtual production television commercial campaign for Wehkamp. The shoot took place in the VP studio at Lukkien with its dedicated LED screen, with a real-time Unreal Engine environment projected live behind the talent.',
    responsibilities: [
      'Built and optimised a real-time \'Dutch neighbourhood\' environment in Unreal Engine 5 for LED volume production with Renderstream and Disguise.',
      'Operated Unreal Engine live on set, responding to director and DP requests in real time.',
      'Managed lighting consistency between LED volume and physical set dressing.',
      'Provided a visually pleasing result for both the video and photography teams.',
    ],
    software: ['Unreal Engine 5', '3dsMax', 'Disguise'],
    // YouTube embed — replace with your video ID if needed
    youtube: 'M3jbEuHwapw',
    // Two-column slideshows — add image paths to these arrays
    // after placing your images in the folders below
    slideshowLeft: {
      label: 'Unreal Renders',
      // Add paths like: 'images/wehkamp/unreal/render_01.jpg'
        images: [
            'images/wehkamp/unreal/01_Garden2Render.jpg',
            'images/wehkamp/unreal/02_OverallShot.jpg',
        ],
    },
    slideshowRight: {
      label: 'BTS',
      // Add paths like: 'images/wehkamp/bts/bts_01.jpg'
        images: [
            'images/wehkamp/bts/01_BTS.jpg',
            'images/wehkamp/bts/02_BTS.jpg',
            'images/wehkamp/bts/03_BTS.jpg',
            'images/wehkamp/bts/04_BTS.jpg',
            'images/wehkamp/bts/05_BTS.jpg',
        ],
    },
  },
  {
    id: 'sabic',
    category: 'professional',
    title: 'Sabic — Virtual Production',
    role: 'Unreal Artist / Unreal Operator',
    image: 'images/sabic/SABICMainImage.jpg',
      description: 'Worked as Unreal Artist and on-set Unreal Operator for a Virtual Production commercial campaign for SABIC, the largest petrochemical company in the Middle East. This production used a combination of my Unreal supermarket environment together with AI generated video backplates as backgrounds.',
    responsibilities: [
      'Built and optimised a real-time Arabic supermarket environment in Unreal Engine 5 for LED volume production.',
      'Operated Unreal Engine live on set, making real-time adjustments for director and DP.',
      'Managed colour and lighting consistency across multiple shooting environments.',
      'Collaborated with gaffer, lighting crew and disguise operator to ensure visual matches of foreground and background with both the Unreal level and video backplates.',
      'Generated fitting video backplates that convey the director\'s mood and create the illusion of realism.',
    ],
      software: ['Unreal Engine 5', '3dsMax', 'Disguise', 'Nano Banana', 'Photoshop'],
    slideshow: [
      'images/sabic/25073883_SABIC Convenience.mp4',
      'images/sabic/25073883_SABIC_ Safety.mp4',
    ],
    slideshowLeft: {
      label: 'Unreal Renders',
      images: [
        'images/sabic/Sabic_Butchery_Unreal.jpeg',
        'images/sabic/Sabic_Drinks_Unreal.jpeg',
        'images/sabic/Sabic_EmptyStore_Unreal.jpeg',
        'images/sabic/Sabic_Overall_Unreal.jpeg',
        'images/sabic/Sabic_Window_Unreal.jpeg',
      ],
    },
    slideshowRight: {
      label: 'BTS',
      images: [
        'images/sabic/BTS_Sabic1.jpeg',
        'images/sabic/BTS_Sabic2.jpeg',
        'images/sabic/BTS_Sabic3.jpeg',
        'images/sabic/BTS_Sabic4.jpeg',
      ],
    },
  },
  {
    id: 'rituals',
    category: 'professional',
    title: 'Rituals',
    role: 'CGI Developer',
    image: 'images/rituals/RitualsMainImage.jpg',
    description: 'CGI work for Rituals, the premium Dutch cosmetics and lifestyle brand. Delivered high-end product visualisations from gift sets to product pack shots combining photoreal modelling, texture and material work. These two giftsets are two examples out of many product renders I created for Rituals.',
    responsibilities: [
      'Modelled hard-surface or organic shapes',
      'Developed detailed material setups for glass, liquid, plastic, and packaging surfaces.',
      'Worked closely with the art director to convey metals and shines correctly.',
      'Set up and lit studio environments to match brand aesthetic.',
      'Delivered final renders and compositing passes for post-production.',
    ],
    software: ['3ds Max', 'V-Ray', 'Photoshop'],
    textOnly: true,   // no right-side panel in the top row — text spans full width
    slideshowLeft: {
      label: 'Egg Giftset',
      images: [
        'images/rituals/egg/RitualsSportEasterEgg.jpg',
        'images/rituals/egg/RitualsEggWireframe.jpg',
        'images/rituals/egg/RitualsRibbonAni1.mp4',
        'images/rituals/egg/RitualsRibbonAni4.jpg',
      ],
    },
    slideshowRight: {
      label: 'Suncare Trail Set',
      images: [
        'images/rituals/suncare/TrailSunCareSetRituals.jpg',
        'images/rituals/suncare/TotalWireframe2.jpg',
        'images/rituals/suncare/PouchModelling.mp4',
        'images/rituals/suncare/PouchModelling4.jpg',
        'images/rituals/suncare/clickMaleWireFrame1.mp4',
        'images/rituals/suncare/clickMaleWireFrame7.jpg',
      ],
    },
  },
  {
    id: 'instapro',
    category: 'professional',
    title: 'Instapro — Virtual Production',
    role: 'Unreal Artist / Unreal Operator',
    image: 'images/InstaPro/HomeStarsMain.png',
    description: 'Created real-time street environments for the InstaPro campaign, shot on an LED volume stage. Built two distinct location variants — a Canadian and a UK street scene — collaborating closely with the director and DP to iterate live on set.',
    responsibilities: [
      'Built two distinct Unreal street environments: Canadian and UK variants',
      'Operated Unreal Engine live on set for real-time director feedback',
      'Managed lighting and atmosphere consistency across shoot days',
    ],
    software: ['Unreal Engine 5', 'nDisplay', 'Live Link', 'Megascans'],
    youtubeList: ['nQ0WsMUIPtg', '51eVyeUVxhE'],
    slideshowLeft: {
      label: 'Unreal Renders',
      images: [
        'images/InstaPro/Unreal_InstaProCAN_Street.jpeg',
        'images/InstaPro/Unreal_InstaProUK_Street.jpeg',
      ],
    },
    slideshowRight: {
      label: 'BTS',
      images: [
        'images/InstaPro/BTS_InstaPro_CAN_SET.jpeg',
        'images/InstaPro/BTS_InstaPro_SET.jpeg',
        'images/InstaPro/BTS_InstaPro_UK_Set.jpeg',
      ],
    },
  },
  {
    id: 'pcg-study',
    category: 'personal',
    title: 'PCG Study — Forrested Shed',
    role: 'Personal Project',
    image: 'images/Pers_PCGTEST/AcesNatureDay_Screen.png',
    description: 'A personal study exploring Unreal Engine 5\'s Procedural Content Generation (PCG) system. Built a forested scene where large trees and bushes are procedurally placed, allowing the foliage to respond dynamically when paths or anchor points are moved. Also used the project to practice cinematic lighting, producing both a day and night render sequence.',
    responsibilities: [
      'Built a forested environment using the PCG system for procedural foliage placement',
      'Configured PCG graphs so trees and bushes adapt when paths are repositioned',
      'Produced day and night render sequences to practise cinematic lighting setups',
      'Explored DaVinci Resolve to colour grade final renders in ACES colour space',
    ],
    software: ['Unreal Engine 5', 'Da Vinci Resolve'],
    slideshow: [
      'images/Pers_PCGTEST/AcesNatureDayScene.mp4',
      'images/Pers_PCGTEST/AcesNatureNightScene.mp4',
    ],
    slideshowLeft: {
      label: 'PCG Setup',
      images: [
        'images/Pers_PCGTEST/PCG_Graph.jpg',
        'images/Pers_PCGTEST/CutUpPCG_Showcase.mp4',
      ],
    },
    slideshowRight: {
      label: 'Build Process',
      images: [
        'images/Pers_PCGTEST/BuildUpScreenshots/GIF_BuildUp4.gif',
        'images/Pers_PCGTEST/BuildUpScreenshots/GIF_SeedChange.gif',
      ],
    },
  },
  {
    id: 'train',
    category: 'personal',
    title: 'Train Modelling',
    role: 'Personal Project',
    image: 'images/Pers_Train/TRAIN_WIREFRAME_WIP.jpg',
    description: 'A personal project modelling, rigging, and animating a detailed train in 3ds Max, textured in Substance Painter and rendering in V-Ray. Currently exploring how to bring the asset into Unreal Engine for real-time rendering.',
    responsibilities: [
      'Modelled the full train from reference in 3ds Max',
      'Rigged moving parts for animation',
      'Texturing in Substance Painter',
      'Planning to render stills and sequences in V-Ray',
      'Exploring bringing the asset into Unreal Engine',
    ],
    software: ['3ds Max', 'Substance Painter', 'V-Ray', 'Unreal Engine 5'],
    slideshow: [
      'images/Pers_Train/TRAIN_WIREFRAME.jpg',
      'images/Pers_Train/trainanimation.mp4',
    ],
  },
]


/* ═══════════════════════════════════════════════
   SOFTWARE & TOOLS — link + logo lookup
   Key = software name with spaces/punctuation stripped, lowercased.
   Add a `logo` (image URL) or `mono` (short text fallback) for
   any software that doesn't have a public brand icon.
═══════════════════════════════════════════════ */
const SOFTWARE_INFO = {
  unrealengine5:     { url: 'https://www.unrealengine.com/',                                                                                              logo: 'https://cdn.simpleicons.org/unrealengine/8A8A9A' },
  '3dsmax':          { url: 'https://www.autodesk.com/products/3ds-max/overview',                                                                         logo: 'https://cdn.simpleicons.org/autodesk/8A8A9A' },
  maya:              { url: 'https://www.autodesk.com/products/maya/overview',                                                                            logo: 'https://cdn.simpleicons.org/autodeskmaya/8A8A9A' },
  disguise:          { url: 'https://www.disguise.one/en/',                                                                                                mono: 'D' },
  vray:              { url: 'https://www.chaos.com/vray',                                                                                                 mono: 'V' },
  substancepainter:  { url: 'https://www.adobe.com/products/substance3d/apps/painter.html',                                                                mono: 'SP' },
  photoshop:         { url: 'https://www.adobe.com/products/photoshop.html',                                                                              mono: 'Ps' },
  premierepro:       { url: 'https://www.adobe.com/products/premiere.html',                                                                               mono: 'Pr' },
  aftereffects:      { url: 'https://www.adobe.com/products/aftereffects.html',                                                                           mono: 'Ae' },
  nanobanana:        { url: 'https://ai.google.dev/',                                                                                                     logo: 'https://cdn.simpleicons.org/google/8A8A9A' },
  ndisplay:          { url: 'https://dev.epicgames.com/documentation/en-us/unreal-engine/render-to-multiple-displays-with-ndisplay-in-unreal-engine',     logo: 'https://cdn.simpleicons.org/epicgames/8A8A9A' },
  livelink:          { url: 'https://dev.epicgames.com/documentation/en-us/unreal-engine/live-link-in-unreal-engine',                                     logo: 'https://cdn.simpleicons.org/epicgames/8A8A9A' },
  megascans:         { url: 'https://www.fab.com/',                                                                                                       logo: 'https://cdn.simpleicons.org/epicgames/8A8A9A' },
  pcgframework:      { url: 'https://dev.epicgames.com/documentation/en-us/unreal-engine/procedural-content-generation--pcg--framework-in-unreal-engine', logo: 'https://cdn.simpleicons.org/unrealengine/8A8A9A' },
  lumen:             { url: 'https://dev.epicgames.com/documentation/en-us/unreal-engine/lumen-global-illumination-and-reflections-in-unreal-engine',     logo: 'https://cdn.simpleicons.org/unrealengine/8A8A9A' },
  nanite:            { url: 'https://dev.epicgames.com/documentation/en-us/unreal-engine/nanite-virtualized-geometry-in-unreal-engine',                   logo: 'https://cdn.simpleicons.org/unrealengine/8A8A9A' },
  davinciresolve:    { url: 'https://www.blackmagicdesign.com/products/davinciresolve',                                                                   logo: 'https://cdn.simpleicons.org/davinciresolve/8A8A9A' },
}

function softwareKey(name) {
  return name.toLowerCase().replace(/[^a-z0-9]/g, '')
}

function renderSoftwareTag(name, wrapperClass) {
  const info = SOFTWARE_INFO[softwareKey(name)]
  const icon = info && info.logo
    ? `<img src="${info.logo}" alt="" class="tag-icon" loading="lazy" />`
    : `<span class="tag-icon tag-icon--mono">${(info && info.mono) || name.charAt(0)}</span>`

  if (info && info.url) {
    return `<a href="${info.url}" target="_blank" rel="noopener noreferrer" class="${wrapperClass}" title="${name}">${icon}<span class="tag-label">${name}</span></a>`
  }
  return `<span class="${wrapperClass}" title="${name}">${icon}<span class="tag-label">${name}</span></span>`
}


// Turn the static About-section skill tags into clickable, logo'd links
document.querySelectorAll('.skills-grid .skill-tag').forEach(tag => {
  tag.outerHTML = renderSoftwareTag(tag.textContent.trim(), 'skill-tag')
})


/* ═══════════════════════════════════════════════
   NAV — scroll state + active section
═══════════════════════════════════════════════ */
const nav          = document.getElementById('nav')
const sectionTitle = document.getElementById('navSectionTitle')
const navLinks     = document.querySelectorAll('.nav-links a')
const sections     = ['hero', 'about', 'projects', 'contact']
const sectionNames = { hero: 'Home', about: 'About Me', projects: 'Projects', contact: 'Contact' }

let currentSection = 'hero'

function updateNav() {
  const scrollY = window.scrollY

  // scrolled state
  nav.classList.toggle('scrolled', scrollY > 60)

  // find active section
  let active = 'hero'
  for (const id of sections) {
    const el = document.getElementById(id)
    if (el && scrollY >= el.offsetTop - 120) active = id
  }

  if (active !== currentSection) {
    currentSection = active

    // animate section title out, change, animate in
    sectionTitle.classList.add('changing')
    setTimeout(() => {
      sectionTitle.textContent = sectionNames[active]
      sectionTitle.classList.remove('changing')
    }, 200)

    // update active link
    navLinks.forEach(a => {
      a.classList.toggle('active', a.dataset.scroll === active)
    })
  }
}

window.addEventListener('scroll', updateNav, { passive: true })
updateNav() // run once on load


/* ═══════════════════════════════════════════════
   SMOOTH SCROLL for all nav/anchor links
═══════════════════════════════════════════════ */
function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

document.querySelectorAll('a[href^="#"], [data-scroll]').forEach(el => {
  el.addEventListener('click', e => {
    const id = el.dataset.scroll || el.getAttribute('href')?.replace('#', '')
    if (!id) return
    e.preventDefault()
    scrollTo(id)
    // close mobile menu if open
    document.getElementById('mobileMenu')?.classList.remove('open')
  })
})


/* ═══════════════════════════════════════════════
   MOBILE BURGER
═══════════════════════════════════════════════ */
document.getElementById('navBurger')?.addEventListener('click', () => {
  document.getElementById('mobileMenu')?.classList.toggle('open')
})


/* ═══════════════════════════════════════════════
   INTERSECTION OBSERVER — reveal on scroll
═══════════════════════════════════════════════ */
const observer = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) } }),
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
)
document.querySelectorAll('.reveal').forEach(el => observer.observe(el))


/* ═══════════════════════════════════════════════
   BUILD PROJECT CARDS
═══════════════════════════════════════════════ */
const grid = document.getElementById('projectsGrid')

function buildCards(category) {
  grid.innerHTML = ''
  PROJECTS.filter(p => p.category === category).forEach(project => {
    const card = document.createElement('article')
    card.className = 'project-card'
    card.setAttribute('role', 'button')
    card.setAttribute('tabindex', '0')
    card.setAttribute('aria-label', `View project: ${project.title}`)

    card.innerHTML = `
      <div class="card-image">
        ${project.image ? `<img src="${project.image}" alt="${project.title}" loading="lazy" />` : '<span class="card-image-placeholder">Project Image</span>'}
        <span class="card-badge">${project.category === 'professional' ? 'Professional' : 'Personal'}</span>
      </div>
      <div class="card-body">
        <div>
          <h3 class="card-title">${project.title}</h3>
          <p class="card-role">${project.role}</p>
        </div>
        <svg class="card-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
          <path d="M3 13L13 3M13 3H5M13 3v8"/>
        </svg>
      </div>
    `

    card.addEventListener('click', () => openModal(project))
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openModal(project) })

    grid.appendChild(card)
  })
}

// Filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('filter-btn--active'))
    btn.classList.add('filter-btn--active')
    buildCards(btn.dataset.filter)
  })
})

buildCards('professional') // default


/* ═══════════════════════════════════════════════
   MODAL — full screen with slideshow + 360
═══════════════════════════════════════════════ */
const backdrop = document.getElementById('modalBackdrop')
const modal    = document.getElementById('modal')

/* ── Slideshow ── */
let slideImages  = []
let slideIndex   = 0

function buildSlideshow(images, poster) {
  const track = document.getElementById('slideTrack')
  const dots  = document.getElementById('slideDots')
  track.innerHTML = ''
  dots.innerHTML  = ''

  slideImages = images || []
  currentSlideshowImages = slideImages
  slideIndex  = 0

  if (!slideImages.length) {
    track.innerHTML = '<span class="slide-placeholder">No images</span>'
    return
  }

  // only images go into the lightbox source list
  currentSlideshowImages = slideImages.filter(s => !isVideo(s))

  slideImages.forEach((src, i) => {
    const el = createSlideMedia(src, 'Project slide', i, poster)
    if (i === 0) {
      el.classList.add('active')
    }
    track.appendChild(el)

    const dot = document.createElement('button')
    dot.className = 'slide-dot' + (i === 0 ? ' active' : '')
    dot.setAttribute('aria-label', 'Go to slide ' + (i + 1))
    dot.addEventListener('click', () => goToSlide(i))
    dots.appendChild(dot)
  })
}

function goToSlide(index) {
  const track  = document.getElementById('slideTrack')
  const media  = track.querySelectorAll('img, video')
  const dots   = document.querySelectorAll('#slideDots .slide-dot')
  media.forEach(el => {
    el.classList.remove('active')
    if (el.tagName === 'VIDEO') { el.pause(); el.currentTime = 0 }
  })
  dots.forEach(d => d.classList.remove('active'))
  slideIndex = (index + slideImages.length) % slideImages.length
  const active = media[slideIndex]
  if (active) {
    active.classList.add('active')
  }
  if (dots[slideIndex]) dots[slideIndex].classList.add('active')
}

document.getElementById('slidePrev')?.addEventListener('click', () => goToSlide(slideIndex - 1))
document.getElementById('slideNext')?.addEventListener('click', () => goToSlide(slideIndex + 1))

/* ── 360 viewer ── */
let frames360    = []
let frameImages  = []
let framesLoaded = 0

function build360(framePaths) {
  const canvas  = document.getElementById('viewer360')
  const bar     = document.getElementById('viewerBar')
  const section = document.getElementById('modal360')
  const hint    = document.getElementById('viewerHint')

  frames360   = framePaths || []
  frameImages = []
  framesLoaded = 0

  if (!frames360.length) {
    section.style.display = 'none'
    return
  }
  section.style.display = ''

  const ctx = canvas.getContext('2d')

  // preload all frames
  frames360.forEach((src, i) => {
    const img = new Image()
    img.onload = function() {
      framesLoaded++
      frameImages[i] = img
      // set canvas size from first loaded frame
      if (i === 0) {
        canvas.width  = img.naturalWidth
        canvas.height = img.naturalHeight
        ctx.drawImage(img, 0, 0)
      }
    }
    img.src = src
  })

  function drawFrame(idx) {
    const img = frameImages[Math.round(idx)]
    if (img && canvas.width) ctx.drawImage(img, 0, 0)
  }

  // scrubber
  bar.min   = 0
  bar.max   = frames360.length - 1
  bar.value = 0
  bar.addEventListener('input', function() {
    drawFrame(parseInt(this.value))
    if (hint) hint.classList.add('hidden')
  })

  // hide hint after first interaction
  bar.addEventListener('change', () => { if (hint) hint.classList.add('hidden') })
}

/* ── Dual slideshow (left + right independent) ── */
const dualState = {
  left:  { images: [], index: 0 },
  right: { images: [], index: 0 },
}

function isVideo(src) {
  return /\.(mp4|webm|ogg)$/i.test(src)
}


function createSlideMedia(src, label, index, poster) {
  if (isVideo(src)) {
    const v = document.createElement('video')
    v.src = src
    v.muted = true
    v.loop  = true
    v.controls = true
    v.playsInline = true
    v.preload = 'metadata'
    if (poster) v.poster = poster
    v.setAttribute('aria-label', label + ' video ' + (index + 1))
    return v
  } else {
    const img = document.createElement('img')
    img.src = src
    img.alt = label + ' ' + (index + 1)
    img.loading = 'lazy'
    return img
  }
}

function buildDualSlideshow(side, images, label) {
  const track = document.getElementById(side === 'left' ? 'dualTrackLeft' : 'dualTrackRight')
  const dots  = document.getElementById(side === 'left' ? 'dualDotsLeft'  : 'dualDotsRight')
  const lbl   = document.getElementById(side === 'left' ? 'dualLabelLeft' : 'dualLabelRight')

  if (lbl && label) lbl.textContent = label
  dualState[side].images = images || []
  dualState[side].index  = 0
  track.innerHTML = ''
  dots.innerHTML  = ''

  if (!dualState[side].images.length) {
    track.innerHTML = '<span class="slide-placeholder">No images yet</span>'
    return
  }

  dualState[side].images.forEach((src, i) => {
    const el = createSlideMedia(src, label, i)
    if (i === 0) {
      el.classList.add('active')
    }
    track.appendChild(el)

    const dot = document.createElement('button')
    dot.className = 'slide-dot' + (i === 0 ? ' active' : '')
    dot.setAttribute('aria-label', 'Slide ' + (i + 1))
    dot.addEventListener('click', () => goDualSlide(side, i))
    dots.appendChild(dot)
  })

  // click track to open lightbox (images only)
  track.onclick = function(e) {
    if (e.target.tagName === 'VIDEO') return // let video handle its own click
    const srcs = dualState[side].images.filter(s => !isVideo(s))
    const idx  = dualState[side].images.filter(s => !isVideo(s)).indexOf(dualState[side].images[dualState[side].index])
    if (srcs.length) openLightbox(srcs, Math.max(0, idx))
  }
}

function goDualSlide(side, index) {
  const track   = document.getElementById(side === 'left' ? 'dualTrackLeft' : 'dualTrackRight')
  const dots    = document.getElementById(side === 'left' ? 'dualDotsLeft'  : 'dualDotsRight')
  const media   = track.querySelectorAll('img, video')
  const dotEls  = dots.querySelectorAll('.slide-dot')
  const len     = dualState[side].images.length
  if (!len) return

  dualState[side].index = (index + len) % len

  media.forEach(el => {
    el.classList.remove('active')
    if (el.tagName === 'VIDEO') { el.pause(); el.currentTime = 0 }
  })
  dotEls.forEach(d => d.classList.remove('active'))

  const activeEl = media[dualState[side].index]
  if (activeEl) {
    activeEl.classList.add('active')
  }
  if (dotEls[dualState[side].index]) dotEls[dualState[side].index].classList.add('active')
}

// Wire dual prev/next buttons
document.querySelectorAll('.dual-slide-wrap .slide-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation()
    const side = btn.dataset.target
    const dir  = btn.classList.contains('slide-btn--prev') ? -1 : 1
    goDualSlide(side, dualState[side].index + dir)
  })
})

/* ── YouTube carousel ── */
let ytList  = []
let ytIndex = 0

function buildYoutubeCarousel(ids) {
  ytList  = ids || []
  ytIndex = 0
  const nav  = document.getElementById('ytCarouselNav')
  const dots = document.getElementById('ytDots')
  const yt   = document.getElementById('modalYoutube')

  yt.src = ytList.length ? 'https://www.youtube.com/embed/' + ytList[0] + '?rel=0' : ''

  if (ytList.length > 1) {
    nav.style.display = ''
    dots.innerHTML = ''
    ytList.forEach((_, i) => {
      const d = document.createElement('button')
      d.className = 'slide-dot' + (i === 0 ? ' active' : '')
      d.setAttribute('aria-label', 'Video ' + (i + 1))
      d.addEventListener('click', () => goYt(i))
      dots.appendChild(d)
    })
  } else {
    nav.style.display = 'none'
  }
}

function goYt(index) {
  if (!ytList.length) return
  ytIndex = (index + ytList.length) % ytList.length
  document.getElementById('modalYoutube').src =
    'https://www.youtube.com/embed/' + ytList[ytIndex] + '?rel=0'
  document.querySelectorAll('#ytDots .slide-dot').forEach((d, i) => {
    d.classList.toggle('active', i === ytIndex)
  })
}

document.getElementById('ytPrev')?.addEventListener('click', () => goYt(ytIndex - 1))
document.getElementById('ytNext')?.addEventListener('click', () => goYt(ytIndex + 1))

/* ── Open / close ── */
function openModal(project) {
  // Text
  document.getElementById('modalTitle').textContent = project.title
  document.getElementById('modalRole').textContent  = project.role
  document.getElementById('modalBadge').textContent = project.category === 'professional' ? 'Professional' : 'Personal'
  document.getElementById('modalDesc').textContent  = project.description

  document.getElementById('modalList').innerHTML =
    project.responsibilities.map(r => `<li>${r}</li>`).join('')

  document.getElementById('modalTags').innerHTML =
    project.software.map(s => renderSoftwareTag(s, 'modal-tag')).join('')

  // ── Right panel: YouTube OR slideshow OR nothing (textOnly) ──
  const youtubeWrap   = document.getElementById('modalYoutubeWrap')
  const slideshowWrap = document.getElementById('modalSlideshow')
  const youtubeFrame  = document.getElementById('modalYoutube')
  const modalTop      = document.querySelector('.modal-top')

  if (project.textOnly) {
    youtubeWrap.style.display   = 'none'
    slideshowWrap.style.display = 'none'
    youtubeFrame.src = ''
    modalTop.classList.add('modal-top--text-only')
  } else if (project.youtube || project.youtubeList) {
    const ids = project.youtubeList || [project.youtube]
    youtubeWrap.style.display   = ''
    slideshowWrap.style.display = 'none'
    modalTop.classList.remove('modal-top--text-only')
    buildYoutubeCarousel(ids)
  } else {
    youtubeWrap.style.display   = 'none'
    slideshowWrap.style.display = ''
    youtubeFrame.src = ''
    modalTop.classList.remove('modal-top--text-only')
    buildSlideshow(project.slideshow || [], project.image)
  }

  // ── Dual slideshows ──
  const dualSection = document.getElementById('modalDualSlideshow')
  if (project.slideshowLeft || project.slideshowRight) {
    dualSection.style.display = ''
    buildDualSlideshow('left',  (project.slideshowLeft  || {}).images, (project.slideshowLeft  || {}).label)
    buildDualSlideshow('right', (project.slideshowRight || {}).images, (project.slideshowRight || {}).label)
  } else {
    dualSection.style.display = 'none'
  }

  // 360
  build360(project.frames360 || [])

  // Detail grid
  buildDetails(project.details || [])

  // Show modal
  backdrop.classList.add('open')
  modal.classList.add('open')
  modal.scrollTop = 0
  document.body.style.overflow = 'hidden'

  requestAnimationFrame(() => requestAnimationFrame(() => {
    backdrop.classList.add('visible')
    modal.classList.add('visible')
  }))
}

function closeModal() {
  backdrop.classList.remove('visible')
  modal.classList.remove('visible')
  // Stop YouTube video immediately
  const yt = document.getElementById('modalYoutube')
  if (yt) yt.src = ''
  // Pause any playing slideshow videos
  document.querySelectorAll('#dualTrackLeft video, #dualTrackRight video, #slideTrack video').forEach(v => {
    v.pause(); v.currentTime = 0
  })
  setTimeout(() => {
    backdrop.classList.remove('open')
    modal.classList.remove('open')
    document.body.style.overflow = ''
    // reset viewer bar
    const bar = document.getElementById('viewerBar')
    if (bar) bar.value = 0
    const hint = document.getElementById('viewerHint')
    if (hint) hint.classList.remove('hidden')
  }, 380)
}

document.getElementById('modalClose')?.addEventListener('click', closeModal)
backdrop.addEventListener('click', closeModal)
window.addEventListener('keydown', e => {
  if (lightbox.classList.contains('open')) return // lightbox handles its own keys
  if (!modal.classList.contains('open')) return
  if (e.key === 'Escape') closeModal()
  if (e.key === 'ArrowLeft')  goToSlide(slideIndex - 1)
  if (e.key === 'ArrowRight') goToSlide(slideIndex + 1)
})

/* ── Make slideshow track clickable ── */
let currentSlideshowImages = []

document.getElementById('slideTrack')?.addEventListener('click', function(e) {
  if (e.target.tagName === 'VIDEO') return
  const active = this.querySelector('img.active')
  if (active && currentSlideshowImages.length) {
    const imgIndex = currentSlideshowImages.indexOf(slideImages[slideIndex])
    openLightbox(currentSlideshowImages, Math.max(0, imgIndex))
  }
})


/* ═══════════════════════════════════════════════
   DETAIL IMAGES GRID
═══════════════════════════════════════════════ */
function buildDetails(images) {
  const grid    = document.getElementById('detailsGrid')
  const section = document.getElementById('modalDetails')
  grid.innerHTML = ''

  if (!images || !images.length) {
    section.style.display = 'none'
    return
  }
  section.style.display = ''

  images.forEach((src, i) => {
    const thumb = document.createElement('div')
    thumb.className = 'detail-thumb'
    thumb.setAttribute('role', 'button')
    thumb.setAttribute('tabindex', '0')
    thumb.setAttribute('aria-label', 'View detail image ' + (i + 1))

    const img = document.createElement('img')
    img.src     = src
    img.alt     = 'Detail ' + (i + 1)
    img.loading = 'lazy'
    thumb.appendChild(img)

    thumb.addEventListener('click', () => openLightbox(images, i))
    thumb.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openLightbox(images, i) })

    grid.appendChild(thumb)
  })
}


/* ═══════════════════════════════════════════════
   LIGHTBOX
═══════════════════════════════════════════════ */
const lightbox        = document.getElementById('lightbox')
const lightboxImg     = document.getElementById('lightboxImg')
const lightboxCounter = document.getElementById('lightboxCounter')
const lightboxPrev    = document.getElementById('lightboxPrev')
const lightboxNext    = document.getElementById('lightboxNext')

let lightboxImages = []
let lightboxIndex  = 0

function openLightbox(images, index) {
  lightboxImages = images
  lightboxIndex  = index

  lightbox.classList.add('open')
  requestAnimationFrame(() => requestAnimationFrame(() => lightbox.classList.add('visible')))
  document.body.style.overflow = 'hidden'
  showLightboxFrame(index)
}

function showLightboxFrame(index) {
  lightboxIndex = (index + lightboxImages.length) % lightboxImages.length
  lightboxImg.style.opacity = '0'

  setTimeout(() => {
    lightboxImg.src = lightboxImages[lightboxIndex]
    lightboxImg.style.opacity = '1'
  }, 150)

  lightboxCounter.textContent = (lightboxIndex + 1) + ' / ' + lightboxImages.length

  // hide nav arrows if only 1 image
  if (lightboxImages.length <= 1) {
    lightboxPrev.classList.add('hidden')
    lightboxNext.classList.add('hidden')
  } else {
    lightboxPrev.classList.remove('hidden')
    lightboxNext.classList.remove('hidden')
  }
}

function closeLightbox() {
  lightbox.classList.remove('visible')
  setTimeout(() => {
    lightbox.classList.remove('open')
    // don't re-enable scroll — modal may still be open
  }, 280)
}

lightboxPrev?.addEventListener('click', () => showLightboxFrame(lightboxIndex - 1))
lightboxNext?.addEventListener('click', () => showLightboxFrame(lightboxIndex + 1))
document.getElementById('lightboxClose')?.addEventListener('click', closeLightbox)
lightbox?.addEventListener('click', e => { if (e.target === lightbox) closeLightbox() })

window.addEventListener('keydown', e => {
  if (!lightbox.classList.contains('open')) return
  if (e.key === 'Escape')      closeLightbox()
  if (e.key === 'ArrowLeft')   showLightboxFrame(lightboxIndex - 1)
  if (e.key === 'ArrowRight')  showLightboxFrame(lightboxIndex + 1)
})
