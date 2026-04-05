document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Lucide Icons
    lucide.createIcons();

    // 2. Navigation Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. Scroll Reveal Logic (Neat Propagations)
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -100px 0px' };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));

    // 4. Background Animation: SOLID CYBER-ORB & DENSE PARTICLES
    const canvas = document.getElementById('bg-canvas');
    if (canvas && typeof THREE !== 'undefined') {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
        
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.position.z = 100;

        const mainGroup = new THREE.Group();
        scene.add(mainGroup);

        const updatePosition = () => {
            if (window.innerWidth > 768) {
                mainGroup.position.x = 40;
                mainGroup.position.y = 0;
            } else {
                mainGroup.position.x = 0;
                mainGroup.position.y = 30;
            }
        };
        updatePosition();
        
        // --- 1. THE SOLID CORE ---
        // Using an Icosahedron with flat shading for a professional "Solid" faceted look
        const coreGeom = new THREE.IcosahedronGeometry(25, 2);
        const coreMat = new THREE.MeshStandardMaterial({ 
            color: 0x0a192f, 
            metalness: 0.9, 
            roughness: 0.1,
            transparent: true,
            opacity: 0.4,
            emissive: 0x2dd4bf,
            emissiveIntensity: 0.8,
            flatShading: true 
        });
        const coreMesh = new THREE.Mesh(coreGeom, coreMat);
        mainGroup.add(coreMesh);

        // --- 2. THE FLOATING NODE LAYER ---
        // Semi-solid wireframe for depth without being "gaming" style
        const wireGeom = new THREE.IcosahedronGeometry(28, 1);
        const wireMat = new THREE.MeshStandardMaterial({ 
            color: 0x3b82f6, 
            wireframe: true, 
            transparent: true,
            opacity: 0.1,
            emissive: 0x3b82f6,
            emissiveIntensity: 0.5
        });
        const wireMesh = new THREE.Mesh(wireGeom, wireMat);
        mainGroup.add(wireMesh);

        // --- 3. DENSE NEURAL PARTICLES ---
        const particleCount = 4000;
        const particleGeom = new THREE.BufferGeometry();
        const posArray = new Float32Array(particleCount * 3);
        const colorArray = new Float32Array(particleCount * 3);
        const teal = new THREE.Color(0x2dd4bf);
        const blue = new THREE.Color(0x3b82f6);

        for (let i = 0; i < particleCount; i++) {
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            const r = 25 + Math.random() * 80;
            
            posArray[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            posArray[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            posArray[i * 3 + 2] = r * Math.cos(phi);
            
            const mixed = Math.random() > 0.5 ? teal : blue;
            colorArray[i * 3] = mixed.r;
            colorArray[i * 3 + 1] = mixed.g;
            colorArray[i * 3 + 2] = mixed.b;
        }
        
        particleGeom.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        particleGeom.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));
        
        const particleMat = new THREE.PointsMaterial({ 
            size: 0.6, 
            vertexColors: true, 
            transparent: true, 
            opacity: 0.3,
            blending: THREE.AdditiveBlending 
        });
        const particles = new THREE.Points(particleGeom, particleMat);
        mainGroup.add(particles);

        // --- 4. DIRECTIONAL PRO LIGHTING ---
        const p1 = new THREE.PointLight(0x2dd4bf, 4, 300); p1.position.set(100, 100, 100); scene.add(p1);
        const p2 = new THREE.PointLight(0x3b82f6, 4, 300); p2.position.set(-100, -100, 100); scene.add(p2);
        const amb = new THREE.AmbientLight(0xffffff, 0.05); scene.add(amb);

        let mX = 0, mY = 0;
        window.addEventListener('mousemove', (e) => {
            mX = (e.clientX / window.innerWidth) - 0.5;
            mY = (e.clientY / window.innerHeight) - 0.5;
        });

        function animateLoop() {
            requestAnimationFrame(animateLoop);
            const time = Date.now() * 0.0005;
            
            coreMesh.rotation.y += 0.002;
            coreMesh.rotation.x += 0.001;
            wireMesh.rotation.y -= 0.003;
            particles.rotation.y += 0.0005;
            
            // Hover Response Parallax
            mainGroup.position.x += (( (window.innerWidth > 768 ? 40 : 0) + mX * 20) - mainGroup.position.x) * 0.05;
            mainGroup.position.y += (( (window.innerWidth > 768 ? 0 : 30) - mY * 20) - mainGroup.position.y) * 0.05;
            
            renderer.render(scene, camera);
        }
        
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            updatePosition();
        });
        
        animateLoop();
    }

    // 5. Modal Logic
    window.previewCert = (link) => {
        const modal = document.getElementById('cert-modal');
        const content = document.getElementById('modal-content');
        const overlay = document.getElementById('modal-overlay');
        const iframe = document.getElementById('cert-iframe');
        const loader = document.getElementById('iframe-loader');

        document.body.style.overflow = 'hidden';
        iframe.classList.add('opacity-0');
        loader.classList.remove('hidden');
        iframe.src = link.replace('/view', '/preview');
        
        modal.classList.remove('hidden');
        setTimeout(() => {
            overlay.style.opacity = '1';
            content.style.transform = 'translateY(0) scale(1)';
            content.style.opacity = '1';
        }, 10);

        iframe.onload = () => {
            loader.classList.add('hidden');
            iframe.classList.remove('opacity-0');
        };
    };

    const hideModal = () => {
        const modal = document.getElementById('cert-modal');
        const content = document.getElementById('modal-content');
        const overlay = document.getElementById('modal-overlay');
        const iframe = document.getElementById('cert-iframe');

        overlay.style.opacity = '0';
        content.style.transform = 'translateY(40px) scale(0.95)';
        content.style.opacity = '0';
        
        setTimeout(() => {
            modal.classList.add('hidden');
            iframe.src = '';
            document.body.style.overflow = '';
        }, 300);
    };

    const closeBtn = document.getElementById('close-modal');
    if (closeBtn) closeBtn.addEventListener('click', hideModal);
    const overlayE = document.getElementById('modal-overlay');
    if (overlayE) overlayE.addEventListener('click', hideModal);

    // 6. Mobile Nav Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            let menu = document.getElementById('mobile-menu');
            if (!menu) {
                menu = document.createElement('div');
                menu.id = 'mobile-menu';
                menu.innerHTML = `
                    <a href="#hero">Home</a>
                    <a href="#about">About</a>
                    <a href="#certifications">Honors</a>
                    <a href="#skills">Expertise</a>
                    <a href="#experience">Journey</a>
                    <a href="#projects">Works</a>
                    <a href="#contact" style="color:var(--primary);">Let's Talk</a>`;
                navbar.after(menu);
                menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));
            }
            menu.classList.toggle('open');
        });
    }

    // 7. Form Refinement
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            const old = btn.innerHTML;
            btn.innerHTML = '<span>DISPATCHING...</span>';
            setTimeout(() => {
                alert('Connection established!');
                form.reset();
                btn.innerHTML = old;
            }, 1000);
        });
    }
});
