/* Application Logic for Slide presentations viewer - app.js */

document.addEventListener('DOMContentLoaded', () => {
  // Variables de Estado
  let currentWeek = 'semana-1';
  let currentDay = 'lunes';
  let currentSlideIndex = 0;
  let isPresenterMode = false;
  let isFullscreen = false;
  let isEditMode = false;

  // Elementos del DOM
  const sidebar = document.getElementById('sidebar');
  const slideViewport = document.getElementById('slide-viewport');
  const progressBar = document.getElementById('progress-bar');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const slideCounter = document.getElementById('slide-counter');
  const presenterPanel = document.getElementById('presenter-panel');
  const togglePresenterBtn = document.getElementById('toggle-presenter-btn');
  const toggleFullscreenBtn = document.getElementById('toggle-fullscreen-btn');
  const toggleSidebarBtn = document.getElementById('toggle-sidebar-btn');
  const toggleEditBtn = document.getElementById('toggle-edit-btn');
  const closePresenterBtn = document.getElementById('close-presenter-btn');
  const classInfoTitle = document.getElementById('class-info-title');
  const searchInput = document.getElementById('search-input');
  const navList = document.getElementById('nav-list');
  const presenterNotesBody = document.getElementById('presenter-notes-body');

  // Cargar estado guardado de localStorage
  const savedState = localStorage.getItem('slides_viewer_state');
  if (savedState) {
    try {
      const parsed = JSON.parse(savedState);
      currentWeek = parsed.week || currentWeek;
      currentDay = parsed.day || currentDay;
      currentSlideIndex = parsed.slideIndex || 0;
      isPresenterMode = parsed.presenterMode || false;
    } catch (e) {
      console.error('Error al cargar estado:', e);
    }
  }

  // Renderizar menú de navegación lateral
  function renderNavigation() {
    navList.innerHTML = '';
    
    for (const weekKey in slidesData) {
      const week = slidesData[weekKey];
      const weekGroup = document.createElement('div');
      weekGroup.className = 'week-group';
      
      const weekTitle = document.createElement('div');
      weekTitle.className = 'week-title';
      weekTitle.textContent = week.title;
      weekGroup.appendChild(weekTitle);
      
      const daysContainer = document.createElement('div');
      daysContainer.className = 'days-container';
      
      for (const dayKey in week.days) {
        const day = week.days[dayKey];
        const dayItem = document.createElement('div');
        dayItem.className = `day-item ${weekKey === currentWeek && dayKey === currentDay ? 'active' : ''}`;
        dayItem.dataset.week = weekKey;
        dayItem.dataset.day = dayKey;
        
        const dayDisplayName = dayKey.charAt(0).toUpperCase() + dayKey.slice(1);
        
        dayItem.innerHTML = `<span class="day-name">${dayDisplayName}:</span> <span class="day-title-text">${day.title.split(': ')[1] || day.title}</span>`;
        
        dayItem.addEventListener('click', () => {
          selectDay(weekKey, dayKey);
        });
        
        daysContainer.appendChild(dayItem);
      }
      
      weekGroup.appendChild(daysContainer);
      navList.appendChild(weekGroup);
    }
  }

  // Seleccionar clase/día
  function selectDay(weekKey, dayKey) {
    currentWeek = weekKey;
    currentDay = dayKey;
    currentSlideIndex = 0;
    
    document.querySelectorAll('.day-item').forEach(item => {
      if (item.dataset.week === weekKey && item.dataset.day === dayKey) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
    
    renderCurrentSlide();
    saveState();
  }

  // Renderizar contenido de la diapositiva activa
  function renderCurrentSlide(direction = 'none') {
    const week = slidesData[currentWeek];
    const day = week.days[currentDay];
    
    classInfoTitle.innerHTML = `${week.title} &mdash; <span style="color: var(--yellow);">${day.title}</span>`;
    
    const slides = day.slides || [];
    if (slides.length === 0) {
      slideViewport.innerHTML = `
        <div class="slide-wrapper slide-title-layout">
          <div class="slide-content">
            <h3>Clase en construcción</h3>
            <h2>${day.title}</h2>
            <p>Contenido programático asignado en el temario general.</p>
          </div>
        </div>`;
      prevBtn.disabled = true;
      nextBtn.disabled = true;
      slideCounter.textContent = '0 / 0';
      progressBar.style.width = '0%';
      presenterNotesBody.innerHTML = '<p>No hay notas disponibles para esta clase.</p>';
      return;
    }

    const slide = slides[currentSlideIndex];
    
    // Contenedor principal de la slide
    const slideElement = document.createElement('div');
    slideElement.className = `slide-wrapper slide-${slide.layout}-layout ${isEditMode ? 'edit-active' : ''}`;
    
    const formattedNum = String(currentSlideIndex + 1).padStart(2, '0');
    slideElement.innerHTML = `
      <div class="slide-indicator-container">
        <div class="slide-number">${formattedNum}</div>
        <div class="slide-color-bar">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="slide-footer">
        <span class="slide-breadcrumb">${day.title}</span>
      </div>
    `;

    const slideContentEl = document.createElement('div');
    slideContentEl.className = 'slide-content';

    // Inserción según plantilla
    if (slide.layout === 'title') {
      const weekIndex = parseInt(currentWeek.split('-')[1]) || 1;
      const dayKeys = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'];
      const dayIndex = dayKeys.indexOf(currentDay);
      const classNumber = (weekIndex - 1) * 5 + dayIndex + 1;
      
      const isQuestion = slide.title.includes("?") || slide.title.toLowerCase().includes("actividad") || slide.title.toLowerCase().includes("práctica");
      const brandPillHtml = isQuestion ? 
        `<div class="brand-pill-button">@lexpinonline | Lexpin Cursos Online</div>` :
        `<div class="class-pill">MÓDULO 1 &bull; CLASE ${classNumber} (45 MIN)</div>`;
        
      slideContentEl.innerHTML = `
        <div class="slide-title-wrapper ${isQuestion ? 'question-slide' : ''}">
          ${brandPillHtml}
          <h2>${slide.title}</h2>
          <div class="subtitle">${slide.content || ''}</div>
          ${!isQuestion && slide.subtitle ? `<div class="brand-pill-button" style="margin-top: 4.5vh;">${slide.subtitle}</div>` : ''}
        </div>
      `;
    } else if (slide.layout === 'quote') {
      slideContentEl.innerHTML = `
        <div class="slide-quote-layout">
          <span class="quote-mark open">“</span>
          <blockquote class="quote-text">${slide.content}</blockquote>
          <span class="quote-mark close">”</span>
          <div class="quote-author">— ${slide.title}</div>
        </div>
      `;
    } else if (slide.layout === 'split') {
      let mediaHtml = '';
      if (slide.media) {
        if (slide.media.trim().startsWith('<svg') || slide.media.trim().startsWith('&lt;svg')) {
          mediaHtml = `<div class="diagram-canvas">${slide.media}</div>`;
        } else {
          mediaHtml = `<img src="${slide.media}" alt="${slide.title}">`;
        }
      }
      
      slideContentEl.innerHTML = `
        <div class="slide-split-layout">
          <div class="slide-text-side">
            <h2>${slide.title}</h2>
            <div class="slide-text-body">${slide.content}</div>
          </div>
          <div class="slide-media-side">
            ${mediaHtml}
          </div>
        </div>
      `;
    } else if (slide.layout === 'grid') {
      let cardsHtml = '';
      let gridClass = 'grid-3-cols';
      if (slide.cards) {
        gridClass = slide.cards.length === 3 ? 'grid-3-cols' : (slide.cards.length === 4 ? 'grid-4-cols' : 'grid-2-cols');
        cardsHtml = slide.cards.map((card, cardIndex) => {
          const iconHtml = card.icon ? 
            `<div class="card-icon-container">
              <span class="card-icon">${card.icon}</span>
             </div>` : '';
          const numHtml = (!card.icon && card.num) ? `<div class="card-num">${card.num}</div>` : '';
          return `
            <div class="card" data-index="${cardIndex}">
              ${iconHtml}
              ${numHtml}
              <div class="card-title">${card.title}</div>
              <div class="card-desc">${card.desc}</div>
            </div>
          `;
        }).join('');
      }
      
      slideContentEl.innerHTML = `
        <div class="slide-grid-layout">
          <h2>${slide.title}</h2>
          <div class="grid-subcontent">${slide.content || ''}</div>
          <div class="cards-container ${gridClass}">
            ${cardsHtml}
          </div>
        </div>
      `;
    } else {
      slideContentEl.innerHTML = `
        <h2>${slide.title}</h2>
        <div>${slide.content || ''}</div>
      `;
    }

    // ── MODO EDICIÓN ────────────────────────────────────────────────────────
    if (isEditMode) {

      // Helper: guardar posición + tamaño en slide.positions
      function saveElPos(el, posKey) {
        slide.positions = slide.positions || {};
        const posVal = Array.isArray(posKey)
          ? (slide.positions[posKey[0]]?.[posKey[1]] || {})
          : (slide.positions[posKey] || {});
        posVal.left = parseFloat(el.style.left) || posVal.left || 0;
        posVal.top  = parseFloat(el.style.top)  || posVal.top  || 0;
        if (el.style.width)  posVal.width  = parseFloat(el.style.width);
        if (el.style.height) posVal.height = parseFloat(el.style.height);
        if (Array.isArray(posKey)) {
          slide.positions[posKey[0]] = slide.positions[posKey[0]] || [];
          slide.positions[posKey[0]][posKey[1]] = posVal;
        } else {
          slide.positions[posKey] = posVal;
        }
        return posVal;
      }

      // Helper: crear elemento draggable con handle + resize handles
      function makeDraggable(el, posKey, label) {
        el.classList.add('draggable-el');

        // Etiqueta de arrastre (arriba)
        const handle = document.createElement('div');
        handle.className = 'drag-handle';
        handle.textContent = `⠿ ${label}`;
        el.appendChild(handle);

        // Restaurar posición y tamaño guardados
        const getPos = () => {
          if (!slide.positions) return null;
          if (Array.isArray(posKey)) return slide.positions[posKey[0]]?.[posKey[1]] || null;
          return slide.positions[posKey] || null;
        };
        const savedPos = getPos();
        if (savedPos) {
          el.style.position = 'absolute';
          el.style.left   = `${savedPos.left}%`;
          el.style.top    = `${savedPos.top}%`;
          el.style.margin = '0';
          el.style.zIndex = '200';
          if (savedPos.width)  el.style.width  = `${savedPos.width}%`;
          if (savedPos.height) el.style.height = `${savedPos.height}%`;
        }

        // ── Drag por handle ──────────────────────────────────────────
        let dragging = false, startX, startY, startLeft, startTop;

        handle.addEventListener('mousedown', (e) => {
          if (e.button !== 0) return;
          dragging = true;
          el.classList.add('is-dragging');
          handle.style.cursor = 'grabbing';

          const pRect = el.closest('.slide-wrapper').getBoundingClientRect();
          if (el.style.position !== 'absolute') {
            const elRect = el.getBoundingClientRect();
            startLeft = elRect.left - pRect.left;
            startTop  = elRect.top  - pRect.top;
            el.style.position = 'absolute';
            el.style.left   = `${(startLeft / pRect.width)  * 100}%`;
            el.style.top    = `${(startTop  / pRect.height) * 100}%`;
            el.style.margin = '0';
            el.style.zIndex = '200';
          } else {
            startLeft = (parseFloat(el.style.left) / 100) * pRect.width;
            startTop  = (parseFloat(el.style.top)  / 100) * pRect.height;
          }
          startX = e.clientX; startY = e.clientY;
          e.preventDefault(); e.stopPropagation();

          const onMove = (me) => {
            const p = el.closest('.slide-wrapper').getBoundingClientRect();
            el.style.left = `${((startLeft + me.clientX - startX) / p.width)  * 100}%`;
            el.style.top  = `${((startTop  + me.clientY - startY) / p.height) * 100}%`;
          };
          const onUp = () => {
            dragging = false; el.classList.remove('is-dragging'); handle.style.cursor = 'grab';
            saveElPos(el, posKey);
            document.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseup', onUp);
          };
          document.addEventListener('mousemove', onMove);
          document.addEventListener('mouseup', onUp);
        });

        // ── Resize handles ───────────────────────────────────────────
        // dir: which edges are resized. startFn computes startW/H/L/T.
        const resizeDefs = [
          { cls: 'rh-n',  cursor: 'n-resize',  edges: ['n'] },
          { cls: 'rh-s',  cursor: 's-resize',  edges: ['s'] },
          { cls: 'rh-e',  cursor: 'e-resize',  edges: ['e'] },
          { cls: 'rh-w',  cursor: 'w-resize',  edges: ['w'] },
          { cls: 'rh-se', cursor: 'se-resize', edges: ['s','e'] },
          { cls: 'rh-sw', cursor: 'sw-resize', edges: ['s','w'] },
        ];

        resizeDefs.forEach(({ cls, cursor, edges }) => {
          const rh = document.createElement('div');
          rh.className = `resize-handle ${cls}`;
          rh.style.cursor = cursor;
          el.appendChild(rh);

          rh.addEventListener('mousedown', (e) => {
            if (e.button !== 0) return;
            e.preventDefault(); e.stopPropagation();

            const pRect = el.closest('.slide-wrapper').getBoundingClientRect();

            // Asegurarse de que el elemento tiene position absolute antes de medir
            if (el.style.position !== 'absolute') {
              const elRect = el.getBoundingClientRect();
              el.style.position = 'absolute';
              el.style.left   = `${((elRect.left - pRect.left) / pRect.width)  * 100}%`;
              el.style.top    = `${((elRect.top  - pRect.top)  / pRect.height) * 100}%`;
              el.style.margin = '0';
              el.style.zIndex = '200';
            }

            const startX  = e.clientX;
            const startY  = e.clientY;
            const startW  = el.offsetWidth;
            const startH  = el.offsetHeight;
            const startL  = (parseFloat(el.style.left) / 100) * pRect.width;
            const startT  = (parseFloat(el.style.top)  / 100) * pRect.height;

            el.classList.add('is-resizing');

            const onMove = (me) => {
              const p  = el.closest('.slide-wrapper').getBoundingClientRect();
              const dx = me.clientX - startX;
              const dy = me.clientY - startY;

              if (edges.includes('e')) {
                el.style.width = `${(Math.max(60, startW + dx) / p.width) * 100}%`;
              }
              if (edges.includes('w')) {
                const newW = Math.max(60, startW - dx);
                el.style.width = `${(newW / p.width) * 100}%`;
                el.style.left  = `${((startL + dx) / p.width) * 100}%`;
              }
              if (edges.includes('s')) {
                el.style.height = `${(Math.max(40, startH + dy) / p.height) * 100}%`;
              }
              if (edges.includes('n')) {
                const newH = Math.max(40, startH - dy);
                el.style.height = `${(newH / p.height) * 100}%`;
                el.style.top    = `${((startT + dy) / p.height) * 100}%`;
              }
            };
            const onUp = () => {
              el.classList.remove('is-resizing');
              saveElPos(el, posKey);
              document.removeEventListener('mousemove', onMove);
              document.removeEventListener('mouseup', onUp);
            };
            document.addEventListener('mousemove', onMove);
            document.addEventListener('mouseup', onUp);
          });
        });
      }


      // Hacer campos editables (solo texto, sin conflicto con drag)
      const makeEditable = (selector, onSave) => {
        const el = slideContentEl.querySelector(selector);
        if (!el) return;
        el.setAttribute('contenteditable', 'true');
        el.addEventListener('blur', () => onSave(el.innerHTML));
      };

      // Aplicar edición + drag según layout
      const h2 = slideContentEl.querySelector('h2');
      if (h2) {
        h2.setAttribute('contenteditable', 'true');
        h2.addEventListener('blur', () => { slide.title = h2.innerHTML; });
        makeDraggable(h2, 'title', 'Título');
      }

      if (slide.layout === 'title') {
        makeEditable('.subtitle', v => { slide.content = v; });
        const subEl = slideContentEl.querySelector('.subtitle');
        if (subEl) makeDraggable(subEl, 'content', 'Subtítulo');
        const pillEl = slideContentEl.querySelector('.class-pill, .brand-pill-button');
        if (pillEl) makeDraggable(pillEl, 'pill', 'Píldora');

      } else if (slide.layout === 'quote') {
        makeEditable('.quote-text', v => { slide.content = v; });
        makeEditable('.quote-author', v => { slide.title = v.replace(/^—\s*/, ''); });
        const qtEl = slideContentEl.querySelector('.quote-text');
        const qaEl = slideContentEl.querySelector('.quote-author');
        if (qtEl) makeDraggable(qtEl, 'quote', 'Cita');
        if (qaEl) makeDraggable(qaEl, 'author', 'Autor');

      } else if (slide.layout === 'split') {
        // En split: NO hacemos contenteditable dentro del contenedor draggable
        // En su lugar, añadimos un botón "✏️ Editar texto" encima de la columna de texto
        const textBodyEl = slideContentEl.querySelector('.slide-text-body');
        const textSide = slideContentEl.querySelector('.slide-text-side');
        const mediaSide = slideContentEl.querySelector('.slide-media-side');

        if (textBodyEl && textSide) {
          // Botón de edición flotante sobre la columna
          const editTextBtn = document.createElement('button');
          editTextBtn.className = 'edit-text-panel-btn';
          editTextBtn.textContent = '✏️ Editar texto columna';
          textSide.style.position = 'relative';
          textSide.appendChild(editTextBtn);

          editTextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            // Si ya hay un panel abierto, no abrir otro
            if (document.getElementById('text-edit-panel')) return;

            const panel = document.createElement('div');
            panel.id = 'text-edit-panel';
            panel.className = 'text-edit-panel';
            panel.innerHTML = `
              <div class="text-edit-panel-inner">
                <h4>✏️ Editar columna de texto</h4>
                <p style="font-size:12px;color:rgba(255,255,255,0.5);margin-bottom:8px">Podés usar HTML: &lt;p&gt;, &lt;ul&gt;&lt;li&gt;, &lt;strong&gt;, &lt;em&gt;</p>
                <textarea id="text-edit-area">${(slide.content || '').replace(/</g, '&lt;')}</textarea>
                <div class="text-edit-actions">
                  <button class="editor-btn" id="text-edit-cancel">Cancelar</button>
                  <button class="editor-btn accent-btn" id="text-edit-apply">✓ Aplicar</button>
                </div>
              </div>
            `;
            document.body.appendChild(panel);

            const textarea = panel.querySelector('#text-edit-area');
            textarea.value = slide.content || '';
            setTimeout(() => textarea.focus(), 50);

            panel.querySelector('#text-edit-cancel').addEventListener('click', () => panel.remove());
            panel.querySelector('#text-edit-apply').addEventListener('click', () => {
              slide.content = textarea.value;
              panel.remove();
              renderCurrentSlide();
            });
            // Cerrar con Ctrl+Enter
            textarea.addEventListener('keydown', (ke) => {
              if (ke.key === 'Enter' && ke.ctrlKey) {
                slide.content = textarea.value;
                panel.remove();
                renderCurrentSlide();
              }
              ke.stopPropagation(); // prevenir navegación de slides
            });
          });
        }

        // Drag de columnas (sin envolver todo el textSide para no bloquear el botón)
        if (mediaSide) makeDraggable(mediaSide, 'media', 'Columna imagen');

      } else if (slide.layout === 'grid') {
        makeEditable('.grid-subcontent', v => { slide.content = v; });
        const subEl = slideContentEl.querySelector('.grid-subcontent');
        if (subEl) makeDraggable(subEl, 'subcontent', 'Subtítulo grid');
        slideContentEl.querySelectorAll('.card').forEach((cardEl, idx) => {
          const ctEl = cardEl.querySelector('.card-title');
          const cdEl = cardEl.querySelector('.card-desc');
          if (ctEl) { ctEl.setAttribute('contenteditable', 'true'); ctEl.addEventListener('blur', () => { slide.cards[idx].title = ctEl.innerHTML; }); }
          if (cdEl) { cdEl.setAttribute('contenteditable', 'true'); cdEl.addEventListener('blur', () => { slide.cards[idx].desc = cdEl.innerHTML; }); }
          makeDraggable(cardEl, ['cards', idx], `Tarjeta ${idx + 1}`);
        });
      }
    }
    // ── FIN MODO EDICIÓN ─────────────────────────────────────────────────────

    slideElement.appendChild(slideContentEl);

    // ── TOOLBAR DEL EDITOR ───────────────────────────────────────────────────
    if (isEditMode) {
      const toolbar = document.createElement('div');
      toolbar.className = 'editor-toolbar';
      const layouts = ['title', 'quote', 'split', 'grid'];
      const layoutOpts = layouts.map(l => `<option value="${l}" ${slide.layout === l ? 'selected' : ''}>${l.toUpperCase()}</option>`).join('');

      toolbar.innerHTML = `
        <div class="editor-group">
          <label>Plantilla:</label>
          <select id="edit-layout-select">${layoutOpts}</select>
        </div>
        ${slide.layout === 'split' ? `
          <div class="editor-group" style="flex:1">
            <label>Imagen URL:</label>
            <input type="text" id="edit-media-input" value="${(slide.media || '').replace(/"/g, '&quot;')}" placeholder="URL o ruta de imagen" style="flex:1;min-width:150px;background:#0f1622;color:#fff;border:1px solid #2d3748;padding:3px 8px;border-radius:4px;font-size:13px;">
          </div>
        ` : ''}
        ${slide.layout === 'grid' ? `
          <div class="editor-group">
            <button class="editor-btn" id="edit-add-card">+ Tarjeta</button>
            <button class="editor-btn" id="edit-del-card" style="color:var(--coral)">- Tarjeta</button>
          </div>
        ` : ''}
        <div class="editor-group" style="margin-left:auto">
          <button class="editor-btn" id="edit-reset-pos" style="color:var(--teal)">↺ Resetear posiciones</button>
          <button class="editor-btn accent-btn" id="edit-export-json">💾 Exportar JSON</button>
        </div>
      `;
      slideElement.appendChild(toolbar);

      toolbar.querySelector('#edit-layout-select').addEventListener('change', (e) => {
        slide.layout = e.target.value;
        if (slide.layout === 'grid' && !slide.cards) {
          slide.cards = [{ num: '01', title: 'Nueva Tarjeta 1', desc: 'Descripción editable.' }, { num: '02', title: 'Nueva Tarjeta 2', desc: 'Descripción editable.' }];
        }
        renderCurrentSlide();
      });

      if (slide.layout === 'split') {
        const mi = toolbar.querySelector('#edit-media-input');
        const applyMedia = () => { slide.media = mi.value; renderCurrentSlide(); };
        mi.addEventListener('blur', applyMedia);
        mi.addEventListener('keydown', (e) => { if (e.key === 'Enter') applyMedia(); });
      }

      if (slide.layout === 'grid') {
        toolbar.querySelector('#edit-add-card').addEventListener('click', () => {
          slide.cards.push({ num: String(slide.cards.length + 1).padStart(2, '0'), title: 'Nueva Tarjeta', desc: 'Contenido editable.' });
          renderCurrentSlide();
        });
        toolbar.querySelector('#edit-del-card').addEventListener('click', () => {
          if (slide.cards.length > 1) { slide.cards.pop(); renderCurrentSlide(); }
        });
      }

      toolbar.querySelector('#edit-reset-pos').addEventListener('click', () => {
        delete slide.positions;
        renderCurrentSlide();
      });

      // Exportar JSON — Modal propio (evita bloqueo de clipboard en file://)
      toolbar.querySelector('#edit-export-json').addEventListener('click', () => {
        const json = JSON.stringify(slidesData, null, 2);

        // Crear modal
        const modal = document.createElement('div');
        modal.className = 'json-export-modal';
        modal.innerHTML = `
          <div class="json-export-modal-inner">
            <h3>📋 Exportar JSON de Diapositivas</h3>
            <p>Seleccioná todo el texto del recuadro (Ctrl+A) y copialo (Ctrl+C), luego pegalo en el chat de Antigravity para guardar los cambios.</p>
            <textarea id="json-export-textarea" readonly>${json.replace(/</g, '&lt;')}</textarea>
            <div class="modal-actions">
              <button class="editor-btn" id="json-select-all">Seleccionar Todo (Ctrl+A)</button>
              <button class="editor-btn accent-btn" id="json-close-modal">Cerrar</button>
            </div>
          </div>
        `;
        document.body.appendChild(modal);

        const textarea = modal.querySelector('#json-export-textarea');
        // Seleccionar automáticamente
        setTimeout(() => { textarea.select(); }, 50);

        modal.querySelector('#json-select-all').addEventListener('click', () => { textarea.select(); });
        modal.querySelector('#json-close-modal').addEventListener('click', () => { modal.remove(); });
        modal.addEventListener('click', (e) => { if (e.target === modal) modal.remove(); });
      });
    }
    // ── FIN TOOLBAR ───────────────────────────────────────────────────────────

    slideElement.classList.add(`slide-${slide.layout}-layout`);


    // Animación de entrada y reemplazo
    if (direction === 'next') {
      slideElement.classList.add('slide-enter-right');
    } else if (direction === 'prev') {
      slideElement.classList.add('slide-enter-left');
    }

    const oldSlide = slideViewport.querySelector('.slide-wrapper');
    if (oldSlide) {
      if (direction === 'next') oldSlide.classList.add('slide-exit-left');
      else if (direction === 'prev') oldSlide.classList.add('slide-exit-right');
      
      setTimeout(() => {
        oldSlide.remove();
        slideViewport.appendChild(slideElement);
        setTimeout(() => {
          slideElement.classList.remove('slide-enter-right', 'slide-enter-left');
        }, 50);
      }, varSpeedTime());
    } else {
      slideViewport.appendChild(slideElement);
    }

    // Contadores y barra de progreso
    prevBtn.disabled = currentSlideIndex === 0;
    nextBtn.disabled = currentSlideIndex === slides.length - 1;
    slideCounter.textContent = `${currentSlideIndex + 1} / ${slides.length}`;
    
    const progressPercent = ((currentSlideIndex + 1) / slides.length) * 100;
    progressBar.style.width = `${progressPercent}%`;

    renderPresenterNotes(slide);
  }

  function varSpeedTime() {
    const computed = getComputedStyle(document.documentElement).getPropertyValue('--transition-speed');
    return parseFloat(computed) * 1000 || 300;
  }

  function renderPresenterNotes(slide) {
    if (slide.notes) {
      presenterNotesBody.innerHTML = slide.notes;
    } else {
      presenterNotesBody.innerHTML = '<h3>Notas de la Clase</h3><p>Guíe la clase enfocándose en la participación activa y los temas de la retícula y composición visual.</p>';
    }
  }

  function nextSlide() {
    const day = slidesData[currentWeek].days[currentDay];
    const slides = day.slides || [];
    if (currentSlideIndex < slides.length - 1) {
      currentSlideIndex++;
      renderCurrentSlide('next');
      saveState();
    }
  }

  function prevSlide() {
    if (currentSlideIndex > 0) {
      currentSlideIndex--;
      renderCurrentSlide('prev');
      saveState();
    }
  }

  function saveState() {
    const stateObj = {
      week: currentWeek,
      day: currentDay,
      slideIndex: currentSlideIndex,
      presenterMode: isPresenterMode
    };
    localStorage.setItem('slides_viewer_state', JSON.stringify(stateObj));
  }

  function togglePresenterMode() {
    isPresenterMode = !isPresenterMode;
    if (isPresenterMode) {
      presenterPanel.classList.remove('hidden');
      togglePresenterBtn.classList.add('active');
    } else {
      presenterPanel.classList.add('hidden');
      togglePresenterBtn.classList.remove('active');
    }
    saveState();
  }

  function toggleFullscreen() {
    isFullscreen = !isFullscreen;
    if (isFullscreen) {
      document.body.classList.add('fullscreen');
      toggleFullscreenBtn.classList.add('active');
      toggleFullscreenBtn.textContent = 'Salir de Pantalla Completa';
      
      const docEl = document.documentElement;
      if (docEl.requestFullscreen) docEl.requestFullscreen();
    } else {
      document.body.classList.remove('fullscreen');
      toggleFullscreenBtn.classList.remove('active');
      toggleFullscreenBtn.textContent = 'Pantalla Completa';
      
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(err => console.log(err));
      }
    }
  }

  function toggleSidebar() {
    sidebar.classList.toggle('collapsed');
  }

  // Buscador en temario
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    const dayItems = document.querySelectorAll('.day-item');
    const weekGroups = document.querySelectorAll('.week-group');
    
    if (query === '') {
      dayItems.forEach(item => item.style.display = 'flex');
      weekGroups.forEach(group => group.style.display = 'block');
      return;
    }
    
    weekGroups.forEach(group => {
      let groupHasMatches = false;
      const days = group.querySelectorAll('.day-item');
      
      days.forEach(dayItem => {
        const weekKey = dayItem.dataset.week;
        const dayKey = dayItem.dataset.day;
        const dayData = slidesData[weekKey].days[dayKey];
        
        let matches = dayData.title.toLowerCase().includes(query);
        
        if (!matches && dayData.slides) {
          matches = dayData.slides.some(slide => {
            const inTitle = slide.title && slide.title.toLowerCase().includes(query);
            const inContent = slide.content && slide.content.toLowerCase().includes(query);
            const inNotes = slide.notes && slide.notes.toLowerCase().includes(query);
            return inTitle || inContent || inNotes;
          });
        }
        
        if (matches) {
          dayItem.style.display = 'flex';
          groupHasMatches = true;
        } else {
          dayItem.style.display = 'none';
        }
      });
      
      group.style.display = groupHasMatches ? 'block' : 'none';
    });
  });

  // Event Listeners
  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);
  if (toggleEditBtn) {
    toggleEditBtn.addEventListener('click', () => {
      isEditMode = !isEditMode;
      if (isEditMode) {
        toggleEditBtn.classList.add('active');
        toggleEditBtn.textContent = '✏️ Salir Edición';
      } else {
        toggleEditBtn.classList.remove('active');
        toggleEditBtn.textContent = 'Modo Edición';
      }
      renderCurrentSlide();
    });
  }
  togglePresenterBtn.addEventListener('click', togglePresenterMode);
  toggleFullscreenBtn.addEventListener('click', toggleFullscreen);
  toggleSidebarBtn.addEventListener('click', toggleSidebar);
  closePresenterBtn.addEventListener('click', togglePresenterMode);

  // Navegación por teclado
  document.addEventListener('keydown', (e) => {
    if (document.activeElement && (
      document.activeElement.tagName === 'INPUT' || 
      document.activeElement.tagName === 'TEXTAREA' || 
      document.activeElement.hasAttribute('contenteditable')
    )) {
      return;
    }

    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
      e.preventDefault();
      nextSlide();
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      e.preventDefault();
      prevSlide();
    } else if (e.key === 'Escape' && isFullscreen) {
      toggleFullscreen();
    } else if (e.key === 'p' || e.key === 'P') {
      togglePresenterMode();
    }
  });

  document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement && isFullscreen) {
      isFullscreen = false;
      document.body.classList.remove('fullscreen');
      toggleFullscreenBtn.classList.remove('active');
      toggleFullscreenBtn.textContent = 'Pantalla Completa';
    }
  });

  // Inicialización
  renderNavigation();
  renderCurrentSlide();
  
  if (isPresenterMode) {
    presenterPanel.classList.remove('hidden');
    togglePresenterBtn.classList.add('active');
  }
});