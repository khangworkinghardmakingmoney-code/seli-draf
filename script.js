document.addEventListener('DOMContentLoaded', () => {
  // Toolbar & General elements
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
  const themeLabel = document.getElementById('themeLabel');
  const copyCodeBtn = document.getElementById('copyCodeBtn');
  const toggleSectionBtn = document.getElementById('toggleSectionBtn');
  const sectionLabel = document.getElementById('sectionLabel');
  const toast = document.getElementById('toast');

  /* -------------------------------------------------------------------------- */
  /* 3. TOOLBAR ACTIONS & THEME SWITCHER                                        */
  /* -------------------------------------------------------------------------- */

  // Toggle Dark / Light Mode
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

      if (isDark) {
        document.documentElement.removeAttribute('data-theme');
        themeLabel.textContent = 'Chế độ Nền tối';
        themeIcon.innerHTML = `<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>`;
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeLabel.textContent = 'Chế độ Nền sáng';
        themeIcon.innerHTML = `<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m4.93 19.07 1.41-1.41"/><path d="m17.66 6.34 1.41-1.41"/>`;
      }
    });
  }

  // Smooth scroll between sections
  let viewingMarquee = true;
  if (toggleSectionBtn) {
    toggleSectionBtn.addEventListener('click', () => {
      const targetId = viewingMarquee ? 'seli-testimonials' : 'seli-trusted-marquee';
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
      viewingMarquee = !viewingMarquee;
      sectionLabel.textContent = viewingMarquee ? 'Xem Wide Slider' : 'Xem Trusted Marquee';
    });
  }

  // Copy HTML code for the Trusted Marquee section
  if (copyCodeBtn) {
    copyCodeBtn.addEventListener('click', () => {
      const section = document.getElementById('seli-trusted-marquee');
      if (!section) return;

      navigator.clipboard.writeText(section.outerHTML).then(() => {
        showToast('Đã sao chép mã HTML Trusted Marquee section!');
      }).catch(() => {
        showToast('Đã sao chép!');
      });
    });
  }

  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
  }

  /* -------------------------------------------------------------------------- */
  /* HERO SECTION PARALLAX & INTERACTIONS                                       */
  /* -------------------------------------------------------------------------- */
  /* HERO SECTION INTERACTIVE BACKGROUND TEXTURE & PARALLAX MOVEMENT            */
  /* -------------------------------------------------------------------------- */
  const seliHeroSection = document.getElementById('seli-hero');
  const seliDiagonalTexture = document.getElementById('seliDiagonalTexture');
  const glowOrange = document.getElementById('glowOrange');
  const glowNavy = document.getElementById('glowNavy');
  const seliCursorGlow = document.getElementById('seliCursorGlow');
  const cardFeature1 = document.getElementById('cardFeature1');
  const cardFeature2 = document.getElementById('cardFeature2');
  const cardFeature3 = document.getElementById('cardFeature3');
  const cardFeature4 = document.getElementById('cardFeature4');
  const btnStartSeli = document.getElementById('btnStartSeli');
  const btnExploreSeli = document.getElementById('btnExploreSeli');

  if (btnStartSeli) {
    btnStartSeli.addEventListener('click', (e) => {
      e.preventDefault();
      openReportModal('demo');
    });
  }

  if (seliHeroSection) {
    seliHeroSection.addEventListener('mousemove', (e) => {
      const rect = seliHeroSection.getBoundingClientRect();
      const relativeX = e.clientX - rect.left;
      const relativeY = e.clientY - rect.top;

      const normX = (relativeX / rect.width) - 0.5;
      const normY = (relativeY / rect.height) - 0.5;

      // 1. Move Cursor Spotlight Glow
      if (seliCursorGlow) {
        seliCursorGlow.style.left = `${relativeX}px`;
        seliCursorGlow.style.top = `${relativeY}px`;
      }

      // 2. Parallax Shift on Diagonal Background Texture
      if (seliDiagonalTexture) {
        seliDiagonalTexture.style.transform = `translate3d(${normX * 52}px, ${normY * 34}px, 0) rotate(${normX * 1.8}deg)`;
      }

      // 3. Counter-shift Radial Ambient Glows
      if (glowOrange) {
        glowOrange.style.transform = `translate3d(${normX * -35}px, ${normY * -25}px, 0)`;
      }
      if (glowNavy) {
        glowNavy.style.transform = `translate3d(${normX * 30}px, ${normY * 20}px, 0)`;
      }

      // 4. Floating Feature Cards Micro-Parallax
      if (window.innerWidth > 980) {
        if (cardFeature1) cardFeature1.style.transform = `translate3d(${normX * -20}px, ${normY * -15}px, 0)`;
        if (cardFeature2) cardFeature2.style.transform = `translate3d(${normX * 22}px, ${normY * -18}px, 0)`;
        if (cardFeature3) cardFeature3.style.transform = `translate3d(${normX * -18}px, ${normY * 20}px, 0)`;
        if (cardFeature4) cardFeature4.style.transform = `translate3d(${normX * 25}px, ${normY * 18}px, 0)`;
      }
    });

    seliHeroSection.addEventListener('mouseleave', () => {
      if (seliDiagonalTexture) seliDiagonalTexture.style.transform = `translate3d(0px, 0px, 0) rotate(0deg)`;
      if (glowOrange) glowOrange.style.transform = `translate3d(0px, 0px, 0)`;
      if (glowNavy) glowNavy.style.transform = `translate3d(0px, 0px, 0)`;
      if (cardFeature1) cardFeature1.style.transform = `translate3d(0px, 0px, 0)`;
      if (cardFeature2) cardFeature2.style.transform = `translate3d(0px, 0px, 0)`;
      if (cardFeature3) cardFeature3.style.transform = `translate3d(0px, 0px, 0)`;
      if (cardFeature4) cardFeature4.style.transform = `translate3d(0px, 0px, 0)`;
    });
  }

  /* -------------------------------------------------------------------------- */
  /* SCIENTIFIC FOUNDATION SECTION INTERACTIVE MOUSE SPOTLIGHT & PARALLAX GLOW  */
  /* -------------------------------------------------------------------------- */
  const scienceSection = document.getElementById('seli-scientific-foundation');
  const scienceCursorGlow = document.getElementById('seliCursorGlowScience');
  const scienceDiagonalTexture = document.getElementById('seliDiagonalTextureScience');
  const scienceGlowOrange = document.getElementById('glowOrangeScience');
  const scienceGlowNavy = document.getElementById('glowNavyScience');

  if (scienceSection) {
    scienceSection.addEventListener('mousemove', (e) => {
      const rect = scienceSection.getBoundingClientRect();
      const relativeX = e.clientX - rect.left;
      const relativeY = e.clientY - rect.top;

      const normX = (relativeX / rect.width) - 0.5;
      const normY = (relativeY / rect.height) - 0.5;

      // 1. Move Cursor Spotlight Glow
      if (scienceCursorGlow) {
        scienceCursorGlow.style.left = relativeX + 'px';
        scienceCursorGlow.style.top = relativeY + 'px';
      }

      // 2. Parallax Shift on Diagonal Background Texture
      if (scienceDiagonalTexture) {
        scienceDiagonalTexture.style.transform = 'translate3d(' + (normX * 45) + 'px, ' + (normY * 30) + 'px, 0) rotate(' + (normX * 1.5) + 'deg)';
      }

      // 3. Counter-shift Radial Ambient Glows
      if (scienceGlowOrange) {
        scienceGlowOrange.style.transform = 'translate3d(' + (normX * -30) + 'px, ' + (normY * -20) + 'px, 0)';
      }
      if (scienceGlowNavy) {
        scienceGlowNavy.style.transform = 'translate3d(' + (normX * 25) + 'px, ' + (normY * 18) + 'px, 0)';
      }
    });

    scienceSection.addEventListener('mouseleave', () => {
      if (scienceDiagonalTexture) scienceDiagonalTexture.style.transform = 'translate3d(0px, 0px, 0) rotate(0deg)';
      if (scienceGlowOrange) scienceGlowOrange.style.transform = 'translate3d(0px, 0px, 0)';
      if (scienceGlowNavy) scienceGlowNavy.style.transform = 'translate3d(0px, 0px, 0)';
    });
  }


  /* -------------------------------------------------------------------------- */
  /* GLOBAL SYNCHRONIZED AUTO-CYCLING FOR LEADERSHIP PROFILES                   */
  /* -------------------------------------------------------------------------- */
  const radarPolygon = document.getElementById('radarPolygon');
  const nodeTop = document.getElementById('nodeTop');
  const nodeRight = document.getElementById('nodeRight');
  const nodeBottom = document.getElementById('nodeBottom');
  const nodeLeft = document.getElementById('nodeLeft');

  const candMarker1 = document.getElementById('candMarker1');
  const candMarker2 = document.getElementById('candMarker2');
  const candMarker3 = document.getElementById('candMarker3');
  const candMarker4 = document.getElementById('candMarker4');

  const donutArc = document.getElementById('donutArc');
  const donutScoreText = document.getElementById('donutScoreText');
  const FULL_CIRCUMFERENCE = 364.42;
  const markerYPositions = [28, 58, 88, 118];

  // 4 Coordinated Leadership Profiles across all feature cards
  const leadershipProfiles = [
    {
      // Profile 0: Lãnh đạo Tương tác & Gắn kết
      radar: {
        polygon: "120,24 185,60 120,96 55,60",
        top: { cx: 120, cy: 24 }, right: { cx: 185, cy: 60 }, bottom: { cx: 120, cy: 96 }, left: { cx: 55, cy: 60 }
      },
      teamMarkers: [235, 295, 270, 220],
      donut: { total: "6.4", scoreRatio: 0.64 }
    },
    {
      // Profile 1: Lãnh đạo Bản lĩnh & Chiến lược
      radar: {
        polygon: "120,12 195,60 120,86 68,60",
        top: { cx: 120, cy: 12 }, right: { cx: 195, cy: 60 }, bottom: { cx: 120, cy: 86 }, left: { cx: 68, cy: 60 }
      },
      teamMarkers: [310, 285, 245, 260],
      donut: { total: "7.8", scoreRatio: 0.78 }
    },
    {
      // Profile 2: Lãnh đạo Cân bằng & Thích ứng
      radar: {
        polygon: "120,18 188,60 120,92 52,60",
        top: { cx: 120, cy: 18 }, right: { cx: 188, cy: 60 }, bottom: { cx: 120, cy: 92 }, left: { cx: 52, cy: 60 }
      },
      teamMarkers: [270, 275, 285, 280],
      donut: { total: "8.2", scoreRatio: 0.82 }
    },
    {
      // Profile 3: Lãnh đạo Truyền cảm hứng
      radar: {
        polygon: "120,14 178,60 120,94 46,60",
        top: { cx: 120, cy: 14 }, right: { cx: 178, cy: 60 }, bottom: { cx: 120, cy: 94 }, left: { cx: 46, cy: 60 }
      },
      teamMarkers: [295, 260, 325, 305],
      donut: { total: "7.1", scoreRatio: 0.71 }
    }
  ];

  /* -------------------------------------------------------------------------- */
  /* STAGGERED / ALTERNATING (XEN KẼ) AUTO-CYCLING FOR BENTO FEATURE CARDS     */
  /* -------------------------------------------------------------------------- */
  let idxCard1 = 0;
  let idxCard2 = 1;
  let idxCard3 = 2;

  function updateCard1(index) {
    const prof = leadershipProfiles[index];
    if (!prof) return;
    if (radarPolygon) radarPolygon.setAttribute('points', prof.radar.polygon);
    if (nodeTop) { nodeTop.setAttribute('cx', prof.radar.top.cx); nodeTop.setAttribute('cy', prof.radar.top.cy); }
    if (nodeRight) { nodeRight.setAttribute('cx', prof.radar.right.cx); nodeRight.setAttribute('cy', prof.radar.right.cy); }
    if (nodeBottom) { nodeBottom.setAttribute('cx', prof.radar.bottom.cx); nodeBottom.setAttribute('cy', prof.radar.bottom.cy); }
    if (nodeLeft) { nodeLeft.setAttribute('cx', prof.radar.left.cx); nodeLeft.setAttribute('cy', prof.radar.left.cy); }
  }

  function updateCard2(index) {
    const prof = leadershipProfiles[index];
    if (!prof) return;
    if (candMarker1) candMarker1.style.transform = `translate(${prof.teamMarkers[0]}px, ${markerYPositions[0]}px)`;
    if (candMarker2) candMarker2.style.transform = `translate(${prof.teamMarkers[1]}px, ${markerYPositions[1]}px)`;
    if (candMarker3) candMarker3.style.transform = `translate(${prof.teamMarkers[2]}px, ${markerYPositions[2]}px)`;
    if (candMarker4) candMarker4.style.transform = `translate(${prof.teamMarkers[3]}px, ${markerYPositions[3]}px)`;
  }

  function updateCard3(index) {
    const prof = leadershipProfiles[index];
    if (!prof) return;
    if (donutArc) {
      const dashLength = (prof.donut.scoreRatio * FULL_CIRCUMFERENCE).toFixed(1);
      donutArc.setAttribute('stroke-dasharray', `${dashLength} ${FULL_CIRCUMFERENCE}`);
    }
    if (donutScoreText) donutScoreText.textContent = prof.donut.total;
  }

  // Initial render with offset profiles for natural visual variety
  updateCard1(idxCard1);
  updateCard2(idxCard2);
  updateCard3(idxCard3);

  // Staggered interval: Every 1.6 seconds, morph ONE card in alternating sequence (Card 1 -> Card 2 -> Card 3)
  let activeCardSeq = 0;
  setInterval(() => {
    if (activeCardSeq === 0) {
      idxCard1 = (idxCard1 + 1) % leadershipProfiles.length;
      updateCard1(idxCard1);
    } else if (activeCardSeq === 1) {
      idxCard2 = (idxCard2 + 1) % leadershipProfiles.length;
      updateCard2(idxCard2);
    } else {
      idxCard3 = (idxCard3 + 1) % leadershipProfiles.length;
      updateCard3(idxCard3);
    }
    activeCardSeq = (activeCardSeq + 1) % 3;
  }, 1000);

  /* -------------------------------------------------------------------------- */
  /* PROBLEM STATEMENT TYPEWRITER ANIMATION EFFECT                              */
  /* -------------------------------------------------------------------------- */
  const typewriterEl = document.getElementById('statementTypewriterText');
  const typewriterPhrases = [
    "Họ sẽ giúp tổ chức thành công — hay trở thành rào cản cho sự tăng trưởng?",
    "Họ sẽ nâng cao năng lực đội ngũ — hay khiến tổ chức càng phụ thuộc vào mình?",
    "Dưới áp lực cao, họ sẽ củng cố niềm tin — hay tạo ra xung đột và làm mất người?"
  ];

  if (typewriterEl) {
    let phraseIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    const typingSpeed = 40;
    const deletingSpeed = 22;
    const pauseTime = 2200;

    function typeStep() {
      const currentPhrase = typewriterPhrases[phraseIdx];

      if (isDeleting) {
        charIdx--;
        typewriterEl.textContent = `"${currentPhrase.substring(0, charIdx)}"`;
      } else {
        charIdx++;
        typewriterEl.textContent = `"${currentPhrase.substring(0, charIdx)}"`;
      }

      let timeout = isDeleting ? deletingSpeed : typingSpeed;

      if (!isDeleting && charIdx === currentPhrase.length) {
        timeout = pauseTime;
        isDeleting = true;
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        phraseIdx = (phraseIdx + 1) % typewriterPhrases.length;
        timeout = 450;
      }

      setTimeout(typeStep, timeout);
    }

    typeStep();
  }

  /* -------------------------------------------------------------------------- */
  /* BENTO PHOTO CARDS 3D FLIP LOGIC (FREE TOGGLE FLIP/CLOSE ANY CARD)          */
  /* -------------------------------------------------------------------------- */
  const bentoGrid = document.querySelector('.statement-photos-bento');
  const photoItems = document.querySelectorAll('.statement-photos-bento .photo-bento-item');
  const card4Inner = document.querySelector('.photo-item-4 .flip-card-inner');

  if (photoItems.length > 0) {
    photoItems.forEach((item) => {
      // Toggle flip/close freely on click
      item.addEventListener('click', () => {
        const inner = item.querySelector('.flip-card-inner');
        if (inner) {
          if (inner.classList.contains('is-flipped') || inner.classList.contains('is-flipped-default')) {
            inner.classList.remove('is-flipped', 'is-flipped-default');
          } else {
            inner.classList.add('is-flipped');
          }
        }
      });

      // Hover preview effect
      item.addEventListener('mouseenter', () => {
        const inner = item.querySelector('.flip-card-inner');
        if (inner && !inner.classList.contains('is-flipped-default')) {
          inner.classList.add('is-flipped');
        }
      });

      item.addEventListener('mouseleave', () => {
        const inner = item.querySelector('.flip-card-inner');
        if (inner && !inner.classList.contains('is-flipped-default')) {
          inner.classList.remove('is-flipped');
        }
      });
    });

    if (bentoGrid) {
      bentoGrid.addEventListener('mouseleave', () => {
        // Restore Card 04 as the default flipped card when mouse leaves grid
        photoItems.forEach((item) => {
          const inner = item.querySelector('.flip-card-inner');
          if (inner && !item.classList.contains('photo-item-4')) {
            inner.classList.remove('is-flipped', 'is-flipped-default');
          }
        });

        if (card4Inner) {
          card4Inner.classList.add('is-flipped-default');
        }
      });
    }
  }

  /* -------------------------------------------------------------------------- */
  /* 3-TAB CONNECTED ARROW STEP CONTROL LOGIC                                   */
  /* -------------------------------------------------------------------------- */
  const tabBtns = document.querySelectorAll('.seli-arrow-tab');
  const tabPanels = document.querySelectorAll('.seli-tab-panel');

  if (tabBtns.length > 0) {
    tabBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const targetTabId = btn.getAttribute('data-tab');

        // Deactivate all tab buttons
        tabBtns.forEach((b) => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });

        // Hide all tab panels
        tabPanels.forEach((panel) => {
          panel.classList.remove('active');
        });

        // Activate clicked tab button
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');

        // Show target tab panel
        const targetPanel = document.getElementById(targetTabId);
        if (targetPanel) {
          targetPanel.classList.add('active');
        }
      });
    });
  }


  /* -------------------------------------------------------------------------- */
  /* FAQ SINGLE-COLUMN ACCORDION INTERACTIVE CONTROL (EXCLUSIVE 1 OPEN AT A TIME)*/
  /* -------------------------------------------------------------------------- */
  const faqItems = document.querySelectorAll('.faq-accordion-item');

  if (faqItems.length > 0) {
    faqItems.forEach((item) => {
      const btn = item.querySelector('.faq-question-btn');
      if (btn) {
        btn.addEventListener('click', () => {
          const isCurrentlyActive = item.classList.contains('active');

          // Close all FAQ items (Exclusive single open)
          faqItems.forEach((other) => {
            other.classList.remove('active');
            const otherBtn = other.querySelector('.faq-question-btn');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          });

          // Toggle current item
          if (!isCurrentlyActive) {
            item.classList.add('active');
            btn.setAttribute('aria-expanded', 'true');
          }
        });
      }
    });
  }

  /* CTA Button Event Listeners */
  const btnCtaExperience = document.getElementById('btnCtaExperience');

  if (btnCtaExperience) {
    btnCtaExperience.addEventListener('click', () => {
      showToast('Đang khởi tạo phiên Trải nghiệm Mini SELI cho doanh nghiệp...');
    });
  }



  /* Pricing & Consultation Buttons Click Handler -> Opens Modal Form */
  document.addEventListener('click', (e) => {
    const pkgBtn = e.target.closest('.btn-pkg-contact');
    if (pkgBtn) {
      e.preventDefault();
      const cardTitle = pkgBtn.closest('.pricing-card')?.querySelector('.pkg-title')?.textContent?.trim() || '';
      const modalTitleEl = document.getElementById('modalReportTitle');
      if (modalTitleEl && cardTitle) {
        modalTitleEl.textContent = 'Đăng ký tư vấn gói ' + cardTitle;
      }
      openReportModal('pricing');
      return;
    }

    const ctaBtn = e.target.closest('.btn-nav-primary, [href="#demo"], [href="#seli-contact"]');
    if (ctaBtn) {
      e.preventDefault();
      openReportModal('demo');
      return;
    }
  });



  /* Bento Carousel Slider Controller (2 Slides) */
  const bentoSliderTrack = document.getElementById('bentoSliderTrack');
  const bentoPrevBtn = document.getElementById('bentoPrevBtn');
  const bentoNextBtn = document.getElementById('bentoNextBtn');
  const bentoDots = document.querySelectorAll('.bento-dot');
  let currentBentoSlide = 0;
  const totalBentoSlides = 2;

  function updateBentoSlide(slideIndex) {
    currentBentoSlide = slideIndex;
    if (bentoSliderTrack) {
      bentoSliderTrack.style.transform = 'translateX(-' + (currentBentoSlide * 50) + '%)';
    }
    bentoDots.forEach((dot, index) => {
      if (index === currentBentoSlide) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  if (bentoPrevBtn) {
    bentoPrevBtn.addEventListener('click', () => {
      const nextIndex = (currentBentoSlide - 1 + totalBentoSlides) % totalBentoSlides;
      updateBentoSlide(nextIndex);
    });
  }

  if (bentoNextBtn) {
    bentoNextBtn.addEventListener('click', () => {
      const nextIndex = (currentBentoSlide + 1) % totalBentoSlides;
      updateBentoSlide(nextIndex);
    });
  }

  bentoDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      updateBentoSlide(index);
    });
  });


  /* -------------------------------------------------------------------------- */
  /* -------------------------------------------------------------------------- */

  /* -------------------------------------------------------------------------- */
  /* REPORT ECOSYSTEM 4-TAB CONTROL LOGIC                                      */
  /* -------------------------------------------------------------------------- */
  const reportTabBtns = document.querySelectorAll('.report-tab-btn');
  const reportPanels = document.querySelectorAll('.report-panel');

  if (reportTabBtns.length > 0) {
    reportTabBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-report-tab');

        // Deactivate all tab buttons and hide all panels
        reportTabBtns.forEach((b) => b.classList.remove('active'));
        reportPanels.forEach((p) => p.classList.remove('active'));

        // Activate clicked tab button
        btn.classList.add('active');

        // Show target panel
        if (targetTab === 'personal') {
          document.getElementById('reportPanelPersonal')?.classList.add('active');
        } else if (targetTab === 'employer') {
          document.getElementById('reportPanelEmployer')?.classList.add('active');
        } else if (targetTab === 'team') {
          document.getElementById('reportPanelTeam')?.classList.add('active');
        } else if (targetTab === 'executive') {
          document.getElementById('reportPanelExecutive')?.classList.add('active');
        }
      });
    });
  }

  /* REPORT DOWNLOAD MODAL & LEAD CAPTURE FORM CONTROLLER (3 REPORTS)           */
  /* -------------------------------------------------------------------------- */
  const reportDownloadModal = document.getElementById('reportDownloadModal');
  const btnCloseReportModal = document.getElementById('btnCloseReportModal');
  const formReportDownload = document.getElementById('formReportDownload');

  const btnPersonalReportSample = document.getElementById('btnPersonalReportSample');
  const btnEmployerReportSample = document.getElementById('btnEmployerReportSample');
  const btnTeamReportSample = document.getElementById('btnTeamReportSample');
  const btnExecutiveDashboard = document.getElementById('btnExecutiveDashboard');

  let currentActiveReportType = 'employer';

  function openReportModal(reportType) {
    showScrollPopup();
  }

  function closeReportModal() {
    const modalTarget = document.getElementById('reportDownloadModal');
    if (modalTarget) {
      modalTarget.classList.remove('active');
      modalTarget.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  if (btnPersonalReportSample) {
    btnPersonalReportSample.addEventListener('click', (e) => {
      e.preventDefault();
      openReportModal('personal');
    });
  }

  if (btnEmployerReportSample) {
    btnEmployerReportSample.addEventListener('click', (e) => {
      e.preventDefault();
      openReportModal('employer');
    });
  }

  if (btnTeamReportSample) {
    btnTeamReportSample.addEventListener('click', (e) => {
      e.preventDefault();
      openReportModal('team');
    });
  }

  if (btnExecutiveDashboard) {
    btnExecutiveDashboard.addEventListener('click', (e) => {
      e.preventDefault();
      openReportModal('executive');
    });
  }

  if (btnCloseReportModal) {
    btnCloseReportModal.addEventListener('click', () => {
      closeReportModal();
    });
  }

  document.addEventListener('click', (e) => {
    const modalTarget = document.getElementById('reportDownloadModal');
    if (modalTarget && e.target === modalTarget) {
      closeReportModal();
    }
  });

  if (formReportDownload) {
    formReportDownload.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('leadName')?.value.trim() || 'bạn';

      // Show thank-you toast notification (no automatic PDF download per request)
      showToast('Cảm ơn ' + name + '! Đội ngũ SELI đã tiếp nhận thông tin và sẽ gửi tư vấn cho bạn qua email.');

      // Reset form & close modal after short delay
      setTimeout(() => {
        formReportDownload.reset();
        closeReportModal();
      }, 1400);
    });
  }

  /* -------------------------------------------------------------------------- */
  /* 3-PAGE REPORT GALLERY SLIDER CONTROLLER                                   */
  /* -------------------------------------------------------------------------- */
  const galleryWrappers = document.querySelectorAll('.report-gallery-wrapper');
  if (galleryWrappers.length > 0) {
    galleryWrappers.forEach((wrapper) => {
      const imgEl = wrapper.querySelector('.gallery-current-img');
      const prevBtn = wrapper.querySelector('.gallery-prev-btn');
      const nextBtn = wrapper.querySelector('.gallery-next-btn');
      const dots = wrapper.querySelectorAll('.g-dot');
      const currentNumEl = wrapper.querySelector('.g-current-num');

      if (!imgEl) return;

      let pages = [];
      try {
        pages = JSON.parse(imgEl.getAttribute('data-pages') || '[]');
      } catch (err) {
        pages = [imgEl.src];
      }

      const initialPageAttr = wrapper.getAttribute('data-initial-page');
      let currentIndex = initialPageAttr !== null ? parseInt(initialPageAttr, 10) : 1;

      const updateGallery = (index) => {
        if (index < 0) index = pages.length - 1;
        if (index >= pages.length) index = 0;

        currentIndex = index;

        imgEl.style.opacity = '0.35';
        setTimeout(() => {
          imgEl.src = pages[currentIndex];
          imgEl.style.opacity = '1';
        }, 100);

        if (currentNumEl) {
          currentNumEl.textContent = currentIndex + 1;
        }

        dots.forEach((dot, idx) => {
          if (idx === currentIndex) {
            dot.classList.add('active');
          } else {
            dot.classList.remove('active');
          }
        });
      };

      if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          updateGallery(currentIndex - 1);
        });
      }

      if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          updateGallery(currentIndex + 1);
        });
      }

      dots.forEach((dot) => {
        dot.addEventListener('click', (e) => {
          e.stopPropagation();
          const targetIdx = parseInt(dot.getAttribute('data-index') || '0', 10);
          updateGallery(targetIdx);
        });
      });
    });
  }


  /* Science Section Consultation CTA Handler */
  const btnScienceConsult = document.getElementById('btnScienceConsult');
  if (btnScienceConsult) {
    btnScienceConsult.addEventListener('click', (e) => {
      e.preventDefault();
      openReportModal('science');
    });
  }

  /* Embedded Inline Lead Form Handler */
  const formInlineLead = document.getElementById('formInlineLead');
  if (formInlineLead) {
    formInlineLead.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('inlineLeadName')?.value.trim() || 'bạn';
      const phone = document.getElementById('inlineLeadPhone')?.value.trim() || '';

      showToast('Cảm ơn ' + name + '! SELI đã nhận thông tin tư vấn và sẽ liên hệ với bạn qua SĐT ' + phone + ' trong thời gian sớm nhất.');

      setTimeout(() => {
        formInlineLead.reset();
      }, 1200);
    });
  }

  /* Consultation Button Handler -> Opens Modal Popup */
  const btnCtaConsult = document.getElementById('btnCtaConsult');
  if (btnCtaConsult) {
    btnCtaConsult.addEventListener('click', (e) => {
      e.preventDefault();
      openReportModal('demo');
    });
  }

  /* Report Sample Image Lightbox Zoom Controller */
  const reportImageCards = document.querySelectorAll('.report-image-card');
  const imageLightboxModal = document.getElementById('imageLightboxModal');
  const lightboxImage = document.getElementById('lightboxImage');
  const btnCloseLightbox = document.getElementById('btnCloseLightbox');

  if (reportImageCards.length > 0 && imageLightboxModal && lightboxImage) {
    reportImageCards.forEach((card) => {
      card.addEventListener('click', () => {
        const imgEl = card.querySelector('img');
        if (imgEl) {
          lightboxImage.src = imgEl.src;
          imageLightboxModal.classList.add('active');
          imageLightboxModal.setAttribute('aria-hidden', 'false');
          document.body.style.overflow = 'hidden';
        }
      });
    });

    const closeLightbox = () => {
      imageLightboxModal.classList.remove('active');
      imageLightboxModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    };

    if (btnCloseLightbox) {
      btnCloseLightbox.addEventListener('click', closeLightbox);
    }

    imageLightboxModal.addEventListener('click', (e) => {
      if (e.target === imageLightboxModal || e.target.classList.contains('seli-lightbox-content')) {
        closeLightbox();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && imageLightboxModal.classList.contains('active')) {
        closeLightbox();
      }
    });
  }

  /* ==========================================================================
     50% SCROLL & 3-MINUTE RE-APPEARANCE POPUP CONTROLLER
     ========================================================================== */
  const seliScrollPopup = document.getElementById('seliScrollPopup');
  const btnClosePopup = document.getElementById('btnClosePopup');
  const popupConsultForm = document.getElementById('popupConsultForm');

  let hasShownScrollPopup = false;
  let isPopupCurrentlyOpen = false;
  let popup3MinTimer = null;

  function showScrollPopup() {
    if (seliScrollPopup && !isPopupCurrentlyOpen) {
      seliScrollPopup.classList.add('active');
      seliScrollPopup.setAttribute('aria-hidden', 'false');
      isPopupCurrentlyOpen = true;
      document.body.style.overflow = 'hidden';
    }
  }

  function closeScrollPopup() {
    if (seliScrollPopup && isPopupCurrentlyOpen) {
      seliScrollPopup.classList.remove('active');
      seliScrollPopup.setAttribute('aria-hidden', 'true');
      isPopupCurrentlyOpen = false;
      document.body.style.overflow = '';

      // Clear any existing timer
      if (popup3MinTimer) clearTimeout(popup3MinTimer);

      // Re-appear after user spends 3 minutes (180,000 ms) on the site after closing
      popup3MinTimer = setTimeout(() => {
        showScrollPopup();
      }, 180000);
    }
  }

  // Trigger 1: Scroll to 50% of the website
  window.addEventListener('scroll', () => {
    if (hasShownScrollPopup || isPopupCurrentlyOpen) return;

    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    if (docHeight > 0 && (scrollTop / docHeight) >= 0.5) {
      hasShownScrollPopup = true;
      showScrollPopup();
    }
  });

  // Event Listeners for Closing Popup
  if (btnClosePopup) {
    btnClosePopup.addEventListener('click', closeScrollPopup);
  }

  if (seliScrollPopup) {
    seliScrollPopup.addEventListener('click', (e) => {
      if (e.target === seliScrollPopup) {
        closeScrollPopup();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isPopupCurrentlyOpen) {
      closeScrollPopup();
    }
  });

  if (popupConsultForm) {
    popupConsultForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Cảm ơn bạn! Đội ngũ SELI sẽ liên hệ với bạn trong thời gian sớm nhất.');
      closeScrollPopup();
    });
  }

  // Trigger: All CTA buttons across the page open the same Popup Modal Form
  // EXCEPT the final inline form submission button (#btnInlineSubmit)
  document.addEventListener('click', (e) => {
    const ctaTarget = e.target.closest(
      '.btn-nav-primary, .btn-nav-outline, #btnStartSeli, #btnStatementCta, ' +
      '.btn-view-report-sample, #btnScienceConsult, .btn-pkg-contact, .btn-cta-experience, ' +
      'a[href="#demo"], a[href="#contact"], a[href="#login"]'
    );

    if (ctaTarget && !ctaTarget.closest('#seliScrollPopup') && !ctaTarget.matches('#btnInlineSubmit')) {
      e.preventDefault();
      showScrollPopup();
    }
  });

  /* ==========================================================================
     HERO BENTO CARDS MOBILE SLIDER CONTROLLER
     ========================================================================== */
  const heroBentoTrack = document.getElementById('heroBentoSliderTrack');
  const heroBentoDots = document.querySelectorAll('.hero-bento-dot');

  if (heroBentoTrack && heroBentoDots.length > 0) {
    heroBentoTrack.addEventListener('scroll', () => {
      const cardWidth = heroBentoTrack.firstElementChild ? heroBentoTrack.firstElementChild.offsetWidth + 16 : 280;
      const activeIndex = Math.min(
        heroBentoDots.length - 1,
        Math.max(0, Math.round(heroBentoTrack.scrollLeft / cardWidth))
      );

      heroBentoDots.forEach((dot, index) => {
        if (index === activeIndex) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    });

    heroBentoDots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        const cards = heroBentoTrack.querySelectorAll('.seli-bento-card');
        if (cards[index]) {
          cards[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
      });
    });
  }

});
