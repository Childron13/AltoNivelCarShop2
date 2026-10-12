// 9 Core Automotive Services Data
    const SERVICES_DATA = [
      {
        id: 'polarizado',
        title: 'Polarizado Tradicional',
        icon: 'fa-sun',
        price: 120000,
        desc: 'Película oscurecedora para brindar privacidad inmediata, protección solar básica y elegancia visual.'
      },
      {
        id: 'seguridad',
        title: 'Película de Seguridad',
        icon: 'fa-shield-halved',
        price: 220000,
        desc: 'Lámina reforzada anti-impacto que previene el estallido de vidrios ante intentos de atraco o accidentes.'
      },
      {
        id: 'nanoceramica',
        title: 'Película Nanocerámica',
        icon: 'fa-temperature-arrow-down',
        price: 380000,
        desc: 'Tecnología térmica de máxima gama que rechaza hasta el 99% de los rayos infrarrojos y UV sin oscurecer en exceso.'
      },
      {
        id: 'sonido',
        title: 'Instalación de Sonido',
        icon: 'fa-volume-high',
        price: 150000,
        desc: 'Montaje de pantallas Android, amplificadores, plantas, subwoofers y altavoces con cableado profesional.'
      },
      {
        id: 'camaras',
        title: 'Cámaras de Seguridad (Dashcams)',
        icon: 'fa-video',
        price: 180000,
        desc: 'Sistemas de grabación frontal y posterior con visión nocturna y sensor de movimiento de parqueo 24/7.'
      },
      {
        id: 'sensores',
        title: 'Sensores y Cámara de Reversa',
        icon: 'fa-bullseye',
        price: 160000,
        desc: 'Asistente de parqueo completo con sensores sonoros perimétricos y cámara a color con líneas guía.'
      },
      {
        id: 'pdr',
        title: 'Desabollado sin Pintura (PDR)',
        icon: 'fa-hammer',
        price: 140000,
        desc: 'Extracción especializada de hundimientos y portazos conservando la pintura original de fábrica.'
      },
      {
        id: 'ppf',
        title: 'Protección de Pintura (PPF)',
        icon: 'fa-car-side',
        price: 450000,
        desc: 'Lámina transparente autoregenerativa contra golpes de piedras, rayones y residuos corrosivos.'
      },
      {
        id: 'detailing',
        title: 'Detailing y Estética Automotriz',
        icon: 'fa-spray-can-sparkles',
        price: 250000,
        desc: 'Restauración profunda de cojinería a vapor, corrección de barniz con brillo espejo y sellado cerámico.'
      }
    ];

    // Carousel Works and Testimonials Data
    const CAROUSEL_DATA = [
      {
        image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=800',
        title: 'Instalación Nanocerámica Térmica',
        car: 'BMW X5 2024',
        client: 'Mauricio Narváez',
        city: 'Pasto, Nariño',
        review: 'El cambio en la temperatura interior es increíble cuando viajo hacia la costa. Trabajo impecable, rápido y con la garantía escrita oficial.',
        rating: 5
      },
      {
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800',
        title: 'Protección PPF Full Frontal',
        car: 'Porsche Macan',
        client: 'Camilo Restrepo',
        city: 'Bogotá, D.C.',
        review: 'Aproveché mi viaje por el sur del país para colocarle el PPF a mi camioneta. Excelente atención, terminados invisibles de primer nivel.',
        rating: 5
      },
      {
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800',
        title: 'Desabollado PDR sin Pintar',
        car: 'Toyota Hilux Edition',
        client: 'Diana Rosero',
        city: 'Ipiales, Nariño',
        review: 'Tenía un golpe feo en la puerta por un portazo. En ALTO NIVEL CAR SHOP me lo dejaron intacto sin tener que pintar la pieza.',
        rating: 5
      },
      {
        image: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=800',
        title: 'Detailing Cerámico & Pantalla Android',
        car: 'Mercedes-Benz C200',
        client: 'Felipe Caicedo',
        city: 'Cali, Valle del Cauca',
        review: 'Excelente servicio técnico. Me instalaron la cámara de reversa con sonido de alta calidad y la pintura quedó brillante como un espejo.',
        rating: 5
      },
      {
        image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800',
        title: 'Película de Seguridad & Sensores',
        car: 'Mazda CX-30',
        client: 'Andrés Popayán',
        city: 'Popayán, Cauca',
        review: 'Súper amables y profesionales. Agendé por la página web, me recibieron a la hora acordada y en un par de horas todo estaba listo.',
        rating: 5
      },
      {
        image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=800',
        title: 'Polarizado Nanocerámico Completo',
        car: 'Chevrolet Colorado',
        client: 'Sonia Burbano',
        city: 'Túquerres, Nariño',
        review: '100% recomendados. El polarizado nanocerámico protege mi vista del sol fuerte en carretera sin perder visibilidad en la noche.',
        rating: 5
      }
    ];

    const APPOINTMENTS_KEY = 'altonivel_appointments_v2';
    let appointmentsList = [];
    let activeFilter = 'Todas';

    // Initialize Page
    window.addEventListener('DOMContentLoaded', () => {
      renderServicesGrid();
      renderCarousel();
      loadAppointments();
      checkURLHashRoute();
      setMinBookingDate();
      initMobileMenu();
      initAdminDotTrigger();
    });

    window.addEventListener('hashchange', checkURLHashRoute);

    function checkURLHashRoute() {
      if (window.location.pathname.replace(/\/+$/, '').endsWith('/admin')) {
        openAdminModal();
      }
    }

    function initMobileMenu() {
      const toggle = document.getElementById('mobile-menu-toggle');
      const menu = document.getElementById('mobile-menu');
      if (!toggle || !menu) return;

      const closeMenu = () => {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Abrir menú de navegación');
        toggle.innerHTML = '<i class="fa-solid fa-bars text-lg" aria-hidden="true"></i>';
      };

      toggle.addEventListener('click', () => {
        const isOpen = menu.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', String(isOpen));
        toggle.setAttribute('aria-label', isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
        toggle.innerHTML = isOpen
          ? '<i class="fa-solid fa-xmark text-xl" aria-hidden="true"></i>'
          : '<i class="fa-solid fa-bars text-lg" aria-hidden="true"></i>';
      });

      menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
      window.addEventListener('resize', () => {
        if (window.innerWidth >= 1280) closeMenu();
      });
      document.addEventListener('keydown', event => {
        if (event.key === 'Escape') closeMenu();
      });
    }

    function initAdminDotTrigger() {
      const trigger = document.getElementById('admin-dot-trigger');
      if (trigger) trigger.addEventListener('click', openAdminModal);
    }

    function setMinBookingDate() {
      const today = new Date().toISOString().split('T')[0];
      const dateInput = document.getElementById('booking-date');
      if (dateInput) dateInput.min = today;
    }

    // Render 9 Core Services
    function renderServicesGrid() {
      const grid = document.getElementById('services-grid');
      grid.innerHTML = '';

      SERVICES_DATA.forEach(s => {
        const card = document.createElement('div');
        card.className = "glass-card glass-card-hover p-6 rounded-3xl transition-all duration-300 flex flex-col justify-between group";
        
        card.innerHTML = `
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <div class="w-12 h-12 rounded-2xl bg-electric-500/10 border border-electric-500/30 text-neon-cyan flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                <i class="fa-solid ${s.icon}"></i>
              </div>
            </div>

            <h3 class="font-display font-bold text-lg text-white group-hover:text-electric-400 transition-colors">${s.title}</h3>
            <p class="text-slate-400 text-xs leading-relaxed">${s.desc}</p>
          </div>

          <div class="pt-6 mt-4 border-t border-slate-800/80 flex items-center justify-between">
            <div>
              <span class="text-[10px] text-slate-500 uppercase block">Desde</span>
              <span class="font-display font-bold text-base text-electric-400">$ ${s.price.toLocaleString('es-CO')} <span class="text-[10px] text-slate-400 font-sans">COP</span></span>
            </div>

            <button onclick="preselectService('${s.title}')" class="px-3.5 py-2 rounded-xl bg-electric-500/20 hover:bg-electric-500 text-electric-400 hover:text-slate-950 font-bold text-xs transition-all flex items-center gap-1.5">
              <span>Agendar</span>
              <i class="fa-solid fa-arrow-right text-[10px]"></i>
            </button>
          </div>
        `;
        grid.appendChild(card);
      });
    }

    function preselectService(title) {
      const select = document.getElementById('booking-service');
      if (select) select.value = title;
      const section = document.getElementById('agendar');
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    }

    // Render Works & Reviews Carousel
    function renderCarousel() {
      const track = document.getElementById('carousel-track');
      track.innerHTML = '';
      const marquee = document.createElement('div');
      marquee.className = 'reviews-marquee gap-5 py-2';

      [...CAROUSEL_DATA, ...CAROUSEL_DATA].forEach((item) => {
        const slide = document.createElement('article');
        slide.className = 'review-card glass-card border border-electric-500/30 rounded-3xl overflow-hidden';
        
        slide.innerHTML = `
          <div class="grid sm:grid-cols-2 gap-5 items-center p-5 sm:p-6">
            <div class="h-52 sm:h-64 rounded-2xl overflow-hidden relative border border-electric-500/30">
              <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover">
              <div class="absolute top-3 left-3 bg-obsidian-950/80 backdrop-blur px-3 py-1 rounded-full text-neon-cyan font-bold text-xs border border-electric-500/30">
                <i class="fa-solid fa-camera mr-1"></i> ${item.car}
              </div>
            </div>

            <div class="space-y-4">
              <div class="flex text-amber-400 text-sm gap-1">
                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
              </div>

              <h3 class="font-display font-bold text-xl text-white">${item.title}</h3>
              <p class="text-slate-300 text-xs sm:text-sm italic leading-relaxed">"${item.review}"</p>

              <div class="pt-3 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <strong class="text-white text-sm block">${item.client}</strong>
                  <span class="text-xs text-electric-400 font-medium"><i class="fa-solid fa-location-dot mr-1"></i>${item.city}</span>
                </div>
                <span class="bg-electric-500/10 text-neon-cyan border border-electric-500/30 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">Cliente Verificado</span>
              </div>
            </div>
          </div>
        `;
        marquee.appendChild(slide);
      });
      track.appendChild(marquee);
    }

    // Load Appointments from LocalStorage
    function loadAppointments() {
      const stored = localStorage.getItem(APPOINTMENTS_KEY);
      if (stored) {
        appointmentsList = JSON.parse(stored);
      } else {
        appointmentsList = [
          {
            id: 'cit-101',
            service: 'Película Nanocerámica',
            date: new Date().toISOString().split('T')[0],
            time: '08:00 AM',
            name: 'Mauricio Narváez',
            phone: '3014570751',
            car: 'Toyota Hilux 2024 - HXZ 123',
            notes: 'Nanocerámica térmica laterales',
            status: 'Confirmada',
            createdAt: new Date().toISOString()
          },
          {
            id: 'cit-102',
            service: 'Desabollado sin Pintura (PDR)',
            date: new Date().toISOString().split('T')[0],
            time: '02:30 PM',
            name: 'Patricia Coral',
            phone: '3014570751',
            car: 'Kia Picanto - KLM 456',
            notes: 'Golpe pequeño puerta derecha',
            status: 'Pendiente',
            createdAt: new Date().toISOString()
          }
        ];
        saveAppointments();
      }
      renderAdminTable();
    }

    function saveAppointments() {
      localStorage.setItem(APPOINTMENTS_KEY, JSON.stringify(appointmentsList));
      updateAdminKPIs();
    }

    // Appointment Submission to WhatsApp +57 301 457 0751
    function handleAppointmentSubmit(e) {
      e.preventDefault();

      const service = document.getElementById('booking-service').value;
      const date = document.getElementById('booking-date').value;
      const time = document.getElementById('booking-time').value;
      const name = document.getElementById('booking-name').value;
      const phone = document.getElementById('booking-phone').value;
      const car = document.getElementById('booking-car').value;
      const notes = document.getElementById('booking-notes').value || 'Sin observaciones';

      const newAppointment = {
        id: 'cit-' + Date.now().toString().slice(-4),
        service,
        date,
        time,
        name,
        phone,
        car,
        notes,
        status: 'Pendiente',
        createdAt: new Date().toISOString()
      };

      appointmentsList.unshift(newAppointment);
      saveAppointments();

      let msg = `🚗 *NUEVA RESERVA DE CITA - ALTO NIVEL CAR SHOP*\n\n`;
      msg += `👤 *Cliente:* ${name}\n`;
      msg += `📞 *Teléfono:* ${phone}\n`;
      msg += `🚘 *Vehículo:* ${car}\n`;
      msg += `🛠 *Servicio:* ${service}\n`;
      msg += `📅 *Fecha:* ${date}\n`;
      msg += `⏰ *Hora:* ${time}\n`;
      msg += `📝 *Notas:* ${notes}\n\n`;
      msg += `📍 *Sede:* Cra 33 NRO 8-06 Las Acacias, Pasto\n`;
      msg += `Solicito confirmación de agenda. ¡Muchas gracias!`;

      const whatsappURL = `https://wa.me/573014570751?text=${encodeURIComponent(msg)}`;
      
      showToast("¡Cita registrada! Redirigiendo a WhatsApp...");
      document.getElementById('appointment-form').reset();

      setTimeout(() => {
        window.open(whatsappURL, '_blank');
      }, 1000);
    }

    // Admin Control Panel Logic
    function openAdminModal(e) {
      if (e) e.preventDefault();
      document.getElementById('admin-login-modal').classList.remove('hidden');
    }

    function closeAdminLoginModal() {
      document.getElementById('admin-login-modal').classList.add('hidden');
    }

    function handleAdminLogin(e) {
      e.preventDefault();
      const pass = document.getElementById('admin-pass-input').value;
      
      if (pass === 'admin123') {
        closeAdminLoginModal();
        document.getElementById('admin-pass-input').value = '';
        document.getElementById('admin-dashboard-modal').classList.remove('hidden');
        renderAdminTable();
        showToast("Panel Administrador Activado");
      } else {
        showToast("Contraseña incorrecta");
      }
    }

    function closeAdminDashboard() {
      document.getElementById('admin-dashboard-modal').classList.add('hidden');
      if (window.location.pathname.replace(/\/+$/, '').endsWith('/admin')) {
        history.pushState("", document.title, window.location.pathname.replace(/\/admin\/?$/, '/') + window.location.search);
      }
    }

    function updateAdminKPIs() {
      const total = appointmentsList.length;
      const pending = appointmentsList.filter(a => a.status === 'Pendiente').length;
      const confirmed = appointmentsList.filter(a => a.status === 'Confirmada').length;

      const revenue = appointmentsList.reduce((acc, curr) => {
        if (curr.status !== 'Cancelada') {
          const match = SERVICES_DATA.find(s => s.title.toLowerCase().includes(curr.service.toLowerCase()));
          return acc + (match ? match.price : 150000);
        }
        return acc;
      }, 0);

      document.getElementById('kpi-total').innerText = total;
      document.getElementById('kpi-pending').innerText = pending;
      document.getElementById('kpi-confirmed').innerText = confirmed;
      document.getElementById('kpi-revenue').innerText = `$ ${revenue.toLocaleString('es-CO')} COP`;
    }

    function filterAdminTable(status, btnElement) {
      activeFilter = status;
      document.querySelectorAll('.admin-filter-btn').forEach(b => {
        b.classList.remove('bg-electric-500', 'text-slate-950');
        b.classList.add('bg-obsidian-950', 'text-slate-400');
      });
      btnElement.classList.add('bg-electric-500', 'text-slate-950');
      btnElement.classList.remove('bg-obsidian-950', 'text-slate-400');
      renderAdminTable();
    }

    function renderAdminTable() {
      updateAdminKPIs();
      const tbody = document.getElementById('admin-appointments-tbody');
      tbody.innerHTML = '';

      const searchTerm = (document.getElementById('admin-search')?.value || '').toLowerCase();

      let filtered = appointmentsList.filter(app => {
        const matchesFilter = activeFilter === 'Todas' || app.status === activeFilter;
        const matchesSearch = app.name.toLowerCase().includes(searchTerm) || 
                              app.car.toLowerCase().includes(searchTerm) ||
                              app.phone.includes(searchTerm) ||
                              app.service.toLowerCase().includes(searchTerm);
        return matchesFilter && matchesSearch;
      });

      if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" class="p-8 text-center text-slate-500">No hay citas en este estado.</td></tr>`;
        return;
      }

      filtered.forEach(app => {
        const tr = document.createElement('tr');
        tr.className = "hover:bg-obsidian-800/50 transition-colors";

        let statusBadge = '';
        if (app.status === 'Pendiente') statusBadge = `<span class="bg-amber-500/20 text-amber-400 px-2.5 py-1 rounded-full font-bold">Pendiente</span>`;
        else if (app.status === 'Confirmada') statusBadge = `<span class="bg-green-500/20 text-green-400 px-2.5 py-1 rounded-full font-bold">Confirmada</span>`;
        else if (app.status === 'Completada') statusBadge = `<span class="bg-electric-500/20 text-electric-400 px-2.5 py-1 rounded-full font-bold">Completada</span>`;
        else statusBadge = `<span class="bg-red-500/20 text-red-400 px-2.5 py-1 rounded-full font-bold">Cancelada</span>`;

        tr.innerHTML = `
          <td class="p-4 font-bold text-white">
            ${app.name}
            <span class="block text-[10px] text-slate-400 font-normal"><i class="fa-brands fa-whatsapp text-green-400 mr-1"></i>${app.phone}</span>
          </td>
          <td class="p-4 text-slate-300">${app.car}</td>
          <td class="p-4 text-electric-400 font-semibold">${app.service}</td>
          <td class="p-4 font-mono">${app.date} <span class="text-slate-400 block">${app.time}</span></td>
          <td class="p-4">${statusBadge}</td>
          <td class="p-4 text-right space-x-1">
            <select onchange="updateAppointmentStatus('${app.id}', this.value)" class="bg-obsidian-950 border border-slate-700 text-slate-200 rounded px-2 py-1 text-[11px]">
              <option value="Pendiente" ${app.status === 'Pendiente' ? 'selected' : ''}>Pendiente</option>
              <option value="Confirmada" ${app.status === 'Confirmada' ? 'selected' : ''}>Confirmada</option>
              <option value="Completada" ${app.status === 'Completada' ? 'selected' : ''}>Completada</option>
              <option value="Cancelada" ${app.status === 'Cancelada' ? 'selected' : ''}>Cancelada</option>
            </select>
            <button onclick="deleteAppointment('${app.id}')" class="p-1.5 rounded bg-red-500/20 hover:bg-red-500 text-red-400 hover:text-white transition-colors" title="Eliminar">
              <i class="fa-solid fa-trash"></i>
            </button>
          </td>
        `;
        tbody.appendChild(tr);
      });
    }

    function updateAppointmentStatus(id, newStatus) {
      const item = appointmentsList.find(a => a.id === id);
      if (item) {
        item.status = newStatus;
        saveAppointments();
        renderAdminTable();
        showToast(`Estado cambiado a ${newStatus}`);
      }
    }

    function deleteAppointment(id) {
      appointmentsList = appointmentsList.filter(a => a.id !== id);
      saveAppointments();
      renderAdminTable();
      showToast("Cita eliminada correctamente");
    }

    function openManualBookingModal() {
      document.getElementById('manual-booking-modal').classList.remove('hidden');
    }

    function closeManualBookingModal() {
      document.getElementById('manual-booking-modal').classList.add('hidden');
    }

    function handleManualBookingSubmit(e) {
      e.preventDefault();
      const name = document.getElementById('manual-name').value;
      const phone = document.getElementById('manual-phone').value;
      const car = document.getElementById('manual-car').value;
      const service = document.getElementById('manual-service').value;
      const date = document.getElementById('manual-date').value;
      const time = document.getElementById('manual-time').value;

      const manualApp = {
        id: 'cit-' + Date.now().toString().slice(-4),
        service,
        date,
        time,
        name,
        phone,
        car,
        notes: 'Creada manualmente en panel',
        status: 'Confirmada',
        createdAt: new Date().toISOString()
      };

      appointmentsList.unshift(manualApp);
      saveAppointments();
      closeManualBookingModal();
      renderAdminTable();
      showToast("Cita manual creada");
    }

    function showToast(msg) {
      const container = document.getElementById('toast-container');
      const toast = document.createElement('div');
      toast.className = "glass-card px-4 py-3 rounded-2xl text-white text-xs font-bold border border-electric-500/40 shadow-neon-blue flex items-center gap-2 pointer-events-auto animate-float-subtle";
      toast.innerHTML = `<i class="fa-solid fa-circle-check text-electric-400"></i> ${msg}`;
      container.appendChild(toast);
      setTimeout(() => toast.remove(), 3200);
    }
