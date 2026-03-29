document.addEventListener('DOMContentLoaded', () => {
    // 1. THREE.JS BACKGROUND
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
        canvas: document.querySelector('#bg-canvas'),
        antialias: true,
        alpha: true 
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.z = 25;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xa78bfa, 2, 100);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    const pinkLight = new THREE.PointLight(0xec4899, 2, 100);
    pinkLight.position.set(-10, -10, -10);
    scene.add(pinkLight);

    // Geometry - Floating Torus Knot
    const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
    const material = new THREE.MeshStandardMaterial({ 
        color: 0x1f2937, 
        roughness: 0.1, 
        metalness: 0.8,
        wireframe: true 
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 100;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.05,
        color: 0xa78bfa,
        transparent: true,
        opacity: 0.8
    });
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Mouse Movement Tracking
    let mouseX = 0;
    let mouseY = 0;
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX / window.innerWidth - 0.5;
        mouseY = e.clientY / window.innerHeight - 0.5;
    });

    // Animation Loop
    function animate() {
        requestAnimationFrame(animate);
        mesh.rotation.x += 0.005;
        mesh.rotation.y += 0.005;

        // Subtle parallax
        const targetX = mouseX * 20;
        const targetY = -mouseY * 20;
        mesh.position.x += (targetX - mesh.position.x) * 0.05;
        mesh.position.y += (targetY - mesh.position.y) * 0.05;

        particlesMesh.rotation.y += 0.001;
        particlesMesh.rotation.x += 0.001;

        renderer.render(scene, camera);
    }
    animate();

    // Handle Resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // 2. GSAP ANIMATIONS
    gsap.registerPlugin(ScrollTrigger);

    // Entrance Reveal
    gsap.from('#hero-title', { opacity: 0, y: 50, duration: 1.5, ease: 'power4.out', delay: 0.2 });
    gsap.from('#hero-desc', { opacity: 0, y: 30, duration: 1.5, ease: 'power4.out', delay: 0.5 });
    gsap.from('.cta-btn', { opacity: 0, scale: 0.8, duration: 1, ease: 'back.out(1.7)', stagger: 0.2, delay: 1 });
    gsap.from('#profile-img', { opacity: 0, scale: 0, duration: 1.2, ease: 'elastic.out(1, 0.75)', delay: 0.8 });

    // Navbar Scroll Effect
    gsap.to('.glass-nav', {
        backgroundColor: 'rgba(7, 7, 10, 0.95)',
        borderBottom: '1px solid rgba(167, 139, 250, 0.2)',
        scrollTrigger: {
            trigger: 'body',
            start: 'top -50',
            end: 'top -100',
            scrub: true
        }
    });

    // Section Reveals
    const sections = document.querySelectorAll('.reveal-section');
    sections.forEach(section => {
        gsap.from(section, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    });

    // Card Hover Tilt (Manual without library)
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        });
    });
});
