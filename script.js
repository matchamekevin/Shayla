// Variables globales pour les animations
let particles = [];
let floatingElements = [];
let mouseFollowers = [];
let waveElements = [];
let animationFrameId;
let mouseX = 0;
let mouseY = 0;
let isMusicPlaying = false;
let isRevealing = false;

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    initParticles();
});

// Création des particules de fond ultra-dynamiques
function initParticles() {
    const container = document.querySelector('.particles-container');
    const particleCount = 80;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        // Position aléatoire
        const x = Math.random() * 100;
        const y = Math.random() * 100;

        particle.style.left = x + '%';
        particle.style.top = y + '%';

        // Taille et couleur variables
        const size = Math.random() * 8 + 3;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';

        // Couleurs romantiques
        const colors = ['#6b5b95', '#b8b2cc', '#8a7fb0'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.opacity = Math.random() * 0.6 + 0.2;

        // Formes variées
        if (Math.random() > 0.7) {
            particle.style.borderRadius = '50%';
        } else if (Math.random() > 0.5) {
            particle.style.borderRadius = '0';
        } else {
            particle.style.borderRadius = Math.random() * 50 + '%';
        }

        container.appendChild(particle);

        particles.push({
            element: particle,
            x: x,
            y: y,
            baseX: x,
            baseY: y,
            speedX: (Math.random() - 0.5) * 0.8,
            speedY: (Math.random() - 0.5) * 0.8,
            rotation: 0,
            rotationSpeed: (Math.random() - 0.5) * 3,
            scale: 1,
            scaleSpeed: (Math.random() - 0.5) * 0.02,
            amplitude: Math.random() * 20 + 10,
            frequency: Math.random() * 0.02 + 0.01,
            phase: Math.random() * Math.PI * 2
        });
    }
}

// Éléments flottants partout sur l'écran
function initFloatingElements() {
    const emojis = ['✨', '💫', '🌟', '⭐', '🎇', '🎆', '💖', '💕', '💓', '💗', '💘', '💝', '💞', '💟', '🌸', '🌺', '🌻', '🌹', '🌷', '🌼', '💐', '🎀', '🎈', '🎊'];
    const shaylaImages = ['shayla/3b28e5a8-559d-4434-bfcc-8735a610fb76.jpg', 'shayla/IMG-20240815-WA0060.jpg', 'shayla/acb7d39b-ce10-419c-933c-e285a8efcbee.jpg'];
    const container = document.body;

    for (let i = 0; i < 35; i++) {
        const element = document.createElement('div');

        // Alterner entre emojis et images de Shayla
        if (i % 8 === 0 && shaylaImages.length > 0) { // Une image tous les 8 éléments
            const img = document.createElement('img');
            img.src = shaylaImages[Math.floor(Math.random() * shaylaImages.length)];
            img.style.width = '60px';
            img.style.height = '60px';
            img.style.borderRadius = '50%';
            img.style.objectFit = 'cover';
            img.style.filter = 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))';
            element.appendChild(img);
        } else {
            element.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
        }

        element.style.position = 'fixed';
        element.style.fontSize = (Math.random() * 25 + 15) + 'px';
        element.style.left = Math.random() * 100 + '%';
        element.style.top = Math.random() * 100 + '%';
        element.style.pointerEvents = 'none';
        element.style.zIndex = '2';
        element.style.opacity = Math.random() * 0.4 + 0.2;
        element.style.userSelect = 'none';
        element.style.filter = element.querySelector('img') ? '' : 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))';

        container.appendChild(element);

        floatingElements.push({
            element: element,
            x: parseFloat(element.style.left),
            y: parseFloat(element.style.top),
            baseX: parseFloat(element.style.left),
            baseY: parseFloat(element.style.top),
            speedX: (Math.random() - 0.5) * 0.4,
            speedY: (Math.random() - 0.5) * 0.4,
            rotation: 0,
            rotationSpeed: (Math.random() - 0.5) * 2,
            amplitude: Math.random() * 30 + 15,
            frequency: Math.random() * 0.015 + 0.005,
            phase: Math.random() * Math.PI * 2,
            floatOffset: Math.random() * Math.PI * 2
        });
    }
}

// Éléments qui suivent la souris
function initMouseFollowers() {
    const followerEmojis = ['💕', '✨', '🌟', '💖', '💫'];
    const container = document.body;

    for (let i = 0; i < 5; i++) {
        const follower = document.createElement('div');
        follower.innerHTML = followerEmojis[i % followerEmojis.length];
        follower.style.position = 'fixed';
        follower.style.fontSize = '24px';
        follower.style.pointerEvents = 'none';
        follower.style.zIndex = '1000';
        follower.style.opacity = '0.7';
        follower.style.transition = 'all 0.3s ease';
        follower.style.filter = 'drop-shadow(0 0 8px rgba(255,107,157,0.5))';

        container.appendChild(follower);

        mouseFollowers.push({
            element: follower,
            x: 0,
            y: 0,
            targetX: 0,
            targetY: 0,
            delay: i * 0.1,
            scale: 1 - i * 0.1
        });
    }
}

// Effets de vagues/ondulations
function initWaveEffects() {
    const waveContainer = document.createElement('div');
    waveContainer.style.position = 'fixed';
    waveContainer.style.top = '0';
    waveContainer.style.left = '0';
    waveContainer.style.width = '100%';
    waveContainer.style.height = '100%';
    waveContainer.style.pointerEvents = 'none';
    waveContainer.style.zIndex = '1';
    waveContainer.style.overflow = 'hidden';

    for (let i = 0; i < 3; i++) {
        const wave = document.createElement('div');
        wave.style.position = 'absolute';
        wave.style.bottom = (i * 20) + '%';
        wave.style.left = '0';
        wave.style.width = '200%';
        wave.style.height = '30%';
        wave.style.background = `linear-gradient(45deg, rgba(255,107,157,${0.05 - i * 0.02}) 0%, rgba(79, 172, 254,${0.05 - i * 0.02}) 100%)`;
        wave.style.borderRadius = '50% 50% 0 0';
        wave.style.transform = 'translateX(-50%)';
        wave.style.animation = `wave ${3 + i}s ease-in-out infinite`;

        waveContainer.appendChild(wave);
        waveElements.push(wave);
    }

    document.body.appendChild(waveContainer);
}

// Suivi de la souris
function initMouseTracking() {
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        // Mettre à jour les suiveurs de souris
        mouseFollowers.forEach((follower, index) => {
            follower.targetX = mouseX + Math.sin(Date.now() * 0.001 + index) * 20;
            follower.targetY = mouseY + Math.cos(Date.now() * 0.001 + index) * 20;
        });
    });
}

// Boucle d'animation principale (uniquement après révélation)
function startMainAnimationLoop() {
    // Ne rien faire si le contenu n'est pas encore révélé
    if (!document.getElementById('mainContent').classList.contains('revealing')) return;

    const time = Date.now() * 0.001;

    function animate() {
        // Animer les particules avec mouvement complexe
        particles.forEach((particle, index) => {
            // Mouvement sinusoïdal
            particle.x = particle.baseX + Math.sin(time * particle.frequency + particle.phase) * particle.amplitude;
            particle.y = particle.baseY + Math.cos(time * particle.frequency * 0.7 + particle.phase) * particle.amplitude * 0.8;

            // Mouvement linéaire
            particle.x += particle.speedX;
            particle.y += particle.speedY;

            // Rebondir sur les bords
            if (particle.x < 0 || particle.x > 100) particle.speedX *= -1;
            if (particle.y < 0 || particle.y > 100) particle.speedY *= -1;

            // Rotation et échelle
            particle.rotation += particle.rotationSpeed;
            particle.scale += particle.scaleSpeed;
            if (particle.scale > 1.5 || particle.scale < 0.5) particle.scaleSpeed *= -1;

            // Appliquer les transformations
            particle.element.style.left = particle.x + '%';
            particle.element.style.top = particle.y + '%';
            particle.element.style.transform = `rotate(${particle.rotation}deg) scale(${particle.scale})`;

            // Interaction avec la souris
            const distance = Math.sqrt(
                Math.pow(mouseX - (particle.x / 100 * window.innerWidth), 2) +
                Math.pow(mouseY - (particle.y / 100 * window.innerHeight), 2)
            );

            if (distance < 100) {
                const force = (100 - distance) / 100;
                particle.element.style.opacity = Math.min(1, particle.element.style.opacity + force * 0.5);
            }
        });

        // Animer les éléments flottants
        floatingElements.forEach((element, index) => {
            // Mouvement flottant complexe
            const floatX = Math.sin(time * element.frequency + element.floatOffset) * element.amplitude;
            const floatY = Math.cos(time * element.frequency * 1.3 + element.floatOffset) * element.amplitude * 0.7;

            element.x = element.baseX + floatX + element.speedX;
            element.y = element.baseY + floatY + element.speedY;

            // Rebondir sur les bords
            if (element.x < -5 || element.x > 105) element.speedX *= -1;
            if (element.y < -5 || element.y > 105) element.speedY *= -1;

            element.rotation += element.rotationSpeed;

            element.element.style.left = element.x + '%';
            element.element.style.top = element.y + '%';
            element.element.style.transform = `rotate(${element.rotation}deg) scale(${1 + Math.sin(time * 2 + index) * 0.1})`;
        });

        // Animer les suiveurs de souris
        mouseFollowers.forEach(follower => {
            follower.x += (follower.targetX - follower.x) * 0.1;
            follower.y += (follower.targetY - follower.y) * 0.1;

            follower.element.style.left = follower.x - 12 + 'px';
            follower.element.style.top = follower.y - 12 + 'px';
            follower.element.style.transform = `scale(${follower.scale}) rotate(${time * 50}deg)`;
        });

        animationFrameId = requestAnimationFrame(animate);
    }

    animate();
}

// Fonction pour créer des cœurs qui tombent (améliorée)
function createHearts() {
    const container = document.body;
    const heartCount = 30;

    for (let i = 0; i < heartCount; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = getRandomHeart();
            heart.style.position = 'fixed';
            heart.style.left = Math.random() * window.innerWidth + 'px';
            heart.style.top = '-60px';
            heart.style.fontSize = (Math.random() * 40 + 25) + 'px';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '9999';
            heart.style.opacity = '1';
            heart.style.filter = 'drop-shadow(0 0 15px rgba(255,107,157,0.8)) blur(0.5px)';

            container.appendChild(heart);

            const duration = Math.random() * 4 + 3;
            const xMove = (Math.random() - 0.5) * 400;
            const rotation = Math.random() * 720;
            const scale = Math.random() * 0.5 + 0.5;

            heart.animate([
                {
                    transform: 'translateY(0) translateX(0) rotate(0deg) scale(1)',
                    opacity: 1,
                    filter: 'drop-shadow(0 0 15px rgba(255,107,157,0.8)) blur(0.5px)'
                },
                {
                    transform: `translateY(${window.innerHeight + 100}px) translateX(${xMove}px) rotate(${rotation}deg) scale(${scale})`,
                    opacity: 0,
                    filter: 'drop-shadow(0 0 5px rgba(255,107,157,0.3)) blur(2px)'
                }
            ], {
                duration: duration * 1000,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            });

            setTimeout(() => {
                heart.remove();
            }, duration * 1000);
        }, i * 80);
    }

    // Effets supplémentaires
    animateButton();
    createShockwave();
    if (Math.random() > 0.6) createConfetti();
}

function getRandomHeart() {
    const hearts = ['💕', '💖', '💗', '💓', '💘', '💝', '💞', '💟', '❤️', '💛', '💚', '💙', '💜', '🤍', '🤎'];
    return hearts[Math.floor(Math.random() * hearts.length)];
}

function animateButton() {
    const button = event.target.closest('.love-button');
    if (!button) return;

    button.style.animation = 'superBounce 0.8s ease';
    setTimeout(() => {
        button.style.animation = '';
    }, 800);

    createButtonParticles(button);
}

function createButtonParticles(button) {
    const rect = button.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        particle.innerHTML = ['✨', '💫', '🌟'][Math.floor(Math.random() * 3)];
        particle.style.position = 'fixed';
        particle.style.left = centerX + 'px';
        particle.style.top = centerY + 'px';
        particle.style.fontSize = '18px';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '10000';
        particle.style.opacity = '1';

        document.body.appendChild(particle);

        const angle = (i / 12) * Math.PI * 2;
        const distance = 60;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        particle.animate([
            {
                transform: 'translate(0, 0) scale(1) rotate(0deg)',
                opacity: 1
            },
            {
                transform: `translate(${x}px, ${y}px) scale(0.3) rotate(180deg)`,
                opacity: 0
            }
        ], {
            duration: 1000,
            easing: 'ease-out'
        });

        setTimeout(() => particle.remove(), 1000);
    }
}

function createShockwave() {
    const shockwave = document.createElement('div');
    shockwave.style.position = 'fixed';
    shockwave.style.left = mouseX - 50 + 'px';
    shockwave.style.top = mouseY - 50 + 'px';
    shockwave.style.width = '100px';
    shockwave.style.height = '100px';
    shockwave.style.border = '2px solid rgba(255,107,157,0.6)';
    shockwave.style.borderRadius = '50%';
    shockwave.style.pointerEvents = 'none';
    shockwave.style.zIndex = '9998';

    document.body.appendChild(shockwave);

    shockwave.animate([
        {
            transform: 'scale(0)',
            opacity: 1
        },
        {
            transform: 'scale(3)',
            opacity: 0
        }
    ], {
        duration: 800,
        easing: 'ease-out'
    });

    setTimeout(() => shockwave.remove(), 800);
}

function createConfetti() {
    const colors = ['#6b5b95', '#b8b2cc', '#8a7fb0'];
    const container = document.body;

    for (let i = 0; i < 80; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = '-20px';
        confetti.style.width = Math.random() * 12 + 4 + 'px';
        confetti.style.height = Math.random() * 12 + 4 + 'px';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : Math.random() * 50 + '%';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '9999';
        confetti.style.boxShadow = '0 2px 4px rgba(0,0,0,0.2)';

        container.appendChild(confetti);

        const duration = Math.random() * 4 + 3;
        const xMove = (Math.random() - 0.5) * 600;
        const rotation = Math.random() * 1440;

        confetti.animate([
            {
                transform: 'translateY(0) rotate(0deg) scale(1)',
                opacity: 1
            },
            {
                transform: `translateY(${window.innerHeight + 100}px) translateX(${xMove}px) rotate(${rotation}deg) scale(0.2)`,
                opacity: 0
            }
        ], {
            duration: duration * 1000,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });

        setTimeout(() => confetti.remove(), duration * 1000);
    }
}

// Gestion de la musique
function initMusic() {
    const bgMusic = document.getElementById('bgMusic');
    if (!bgMusic) return;

    // Essayer de jouer automatiquement (peut être bloqué par les navigateurs)
    bgMusic.volume = 0.3;
    bgMusic.play().catch(() => {
        // Silencieux si bloqué
    });
}


// Animation de révélation magique
function startMagicReveal() {
    if (isRevealing) return;
    isRevealing = true;

    const overlay = document.getElementById('revealOverlay');
    const mainContent = document.getElementById('mainContent');
    const initialButtons = document.querySelector('.initial-buttons');

    // Masquer les boutons initiaux
    initialButtons.style.opacity = '0';
    initialButtons.style.pointerEvents = 'none';

    // Activer l'overlay
    overlay.classList.add('active');

    // Créer l'animation de submersion
    createSubmergeAnimation();

    // Après l'animation, révéler le contenu
    setTimeout(() => {
        overlay.classList.remove('active');
        mainContent.style.display = 'block';
        mainContent.classList.add('revealing');

        // Démarrer les animations du contenu principal
        setTimeout(() => {
            initScrollAnimations();
            startMainAnimationLoop();
        }, 500);

    }, 4000); // Durée totale de l'animation
}

function createSubmergeAnimation() {
    const container = document.getElementById('submergeContainer');
    if (!container) return;

    // Créer des centaines de cœurs
    for (let i = 0; i < 150; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'submerge-item heart';
            heart.textContent = getRandomHeart();
            heart.style.left = Math.random() * 100 + '%';
            heart.style.fontSize = (Math.random() * 2 + 1) + 'rem';
            heart.style.animationDelay = Math.random() * 2 + 's';

            container.appendChild(heart);

            // Supprimer après l'animation
            setTimeout(() => heart.remove(), 3000);
        }, i * 10);
    }

    // Créer la BMW
    setTimeout(() => {
        const bmw = document.createElement('div');
        bmw.className = 'submerge-item bmw';
        bmw.textContent = '🚗';
        bmw.style.left = '20%';
        container.appendChild(bmw);
        setTimeout(() => bmw.remove(), 3000);
    }, 500);

    // Créer l'iPhone
    setTimeout(() => {
        const iphone = document.createElement('div');
        iphone.className = 'submerge-item iphone';
        iphone.textContent = '📱';
        iphone.style.left = '70%';
        container.appendChild(iphone);
        setTimeout(() => iphone.remove(), 3000);
    }, 1000);

    // Ajouter des effets sonores simulés (vibrations)
    createRevealEffects();
}

function createRevealEffects() {
    // Créer des ondes de choc
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const shockwave = document.createElement('div');
            shockwave.style.position = 'fixed';
            shockwave.style.left = '50%';
            shockwave.style.top = '50%';
            shockwave.style.width = '10px';
            shockwave.style.height = '10px';
            shockwave.style.border = '2px solid rgba(255,107,157,0.8)';
            shockwave.style.borderRadius = '50%';
            shockwave.style.transform = 'translate(-50%, -50%)';
            shockwave.style.pointerEvents = 'none';
            shockwave.style.zIndex = '3000';

            document.body.appendChild(shockwave);

            shockwave.animate([
                { width: '10px', height: '10px', opacity: 1 },
                { width: '500px', height: '500px', opacity: 0 }
            ], {
                duration: 1500,
                easing: 'ease-out'
            });

            setTimeout(() => shockwave.remove(), 1500);
        }, i * 300);
    }

    // Faire trembler l'écran légèrement
    document.body.style.animation = 'screenShake 0.5s ease-in-out';
    setTimeout(() => {
        document.body.style.animation = '';
    }, 500);
}

function toggleMusic() {
    const bgMusic = document.getElementById('bgMusic');
    if (!bgMusic) return;

    const button = event.target.closest('.music-button');
    const icon = button.querySelector('.music-icon');
    const text = button.querySelector('.music-text');

    if (isMusicPlaying) {
        bgMusic.pause();
        isMusicPlaying = false;
        icon.textContent = '🔇';
        text.textContent = 'Musique désactivée';
    } else {
        bgMusic.play().catch(e => {
            console.log('Erreur de lecture audio:', e);
            playFallbackMusic();
        });
        isMusicPlaying = true;
        icon.textContent = '🎵';
        text.textContent = 'Musique activée';
    }

    setTimeout(() => {
        text.textContent = 'Musique romantique';
    }, 2000);
}

function playFallbackMusic() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const notes = [261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88, 523.25];

        let noteIndex = 0;
        const playNote = () => {
            if (!isMusicPlaying) return;

            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);

            oscillator.frequency.setValueAtTime(notes[noteIndex % notes.length], audioContext.currentTime);
            oscillator.type = 'sine';

            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.8);

            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.8);

            noteIndex++;
            setTimeout(playNote, 800);
        };

        playNote();
    } catch (e) {
        console.log('Web Audio API non supportée');
    }
}

// Animations au scroll (uniquement après révélation)
function initScrollAnimations() {
    // Ne rien faire si le contenu n'est pas encore révélé
    if (!document.getElementById('mainContent').classList.contains('revealing')) return;

    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) rotate(0deg) scale(1)';
                }, index * 200);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.gallery-item, .timeline-item, .message-card, .final-message').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px) rotate(5deg) scale(0.9)';
        el.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        observer.observe(el);
    });
}

// Effet machine à écrire amélioré
function initTypewriterEffect() {
    const title = document.querySelector('.title');
    const originalText = title.textContent;
    title.textContent = '';

    let i = 0;
    const typeWriter = () => {
        if (i < originalText.length) {
            title.textContent += originalText.charAt(i);
            i++;

            // Effet de clignotement du curseur
            if (i % 3 === 0) {
                title.style.textShadow = '0 0 20px rgba(255,107,157,0.8)';
            } else {
                title.style.textShadow = '';
            }

            setTimeout(typeWriter, 120);
        } else {
            title.style.textShadow = '';
        }
    };

    setTimeout(typeWriter, 1000);
}

// Effets de survol dynamiques
document.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('quality')) {
        e.target.style.transform = 'translateX(15px) scale(1.05)';
        e.target.style.boxShadow = '0 5px 15px rgba(255,107,157,0.3)';
    }
});

document.addEventListener('mouseout', (e) => {
    if (e.target.classList.contains('quality')) {
        e.target.style.transform = 'translateX(0) scale(1)';
        e.target.style.boxShadow = '';
    }
});

// Effet de parallaxe au scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;

    document.querySelectorAll('.floating-hearts .heart').forEach((heart, index) => {
        const speed = (index % 4 + 1) * 0.2;
        heart.style.transform = `translateY(${rate * speed}px)`;
    });
});

// Effet de clic sur les éléments flottants
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('heart') && e.target.closest('.floating-hearts')) {
        const heart = e.target;
        heart.style.animation = 'heartbeat 0.4s ease';
        setTimeout(() => {
            heart.style.animation = '';
        }, 400);

        // Créer une explosion de particules
        for (let i = 0; i < 6; i++) {
            const particle = document.createElement('div');
            particle.innerHTML = '✨';
            particle.style.position = 'fixed';
            particle.style.left = e.clientX + 'px';
            particle.style.top = e.clientY + 'px';
            particle.style.fontSize = '14px';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '10000';
            particle.style.opacity = '1';

            document.body.appendChild(particle);

            const angle = (Math.PI * 2 * i) / 6;
            const distance = 40;
            particle.animate([
                { transform: 'translate(0, 0) scale(1)', opacity: 1 },
                { transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(0)`, opacity: 0 }
            ], {
                duration: 800,
                easing: 'ease-out'
            });

            setTimeout(() => particle.remove(), 800);
        }
    }
});

// Animation d'entrée de la page
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transform = 'scale(0.95)';
    document.body.style.transition = 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';

    setTimeout(() => {
        document.body.style.opacity = '1';
        document.body.style.transform = 'scale(1)';
    }, 200);
});

// Cleanup au déchargement
window.addEventListener('beforeunload', () => {
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
    }
});

// Styles CSS supplémentaires pour les animations
const additionalStyles = `
@keyframes excitedPulse {
    0%, 100% {
        transform: scale(1);
        box-shadow: 0 8px 25px rgba(255, 107, 157, 0.3);
    }
    50% {
        transform: scale(1.1);
        box-shadow: 0 8px 25px rgba(255, 107, 157, 0.8);
    }
}

@keyframes screenShake {
    0%, 100% { transform: translateX(0); }
    10%, 30%, 50%, 70%, 90% { transform: translateX(-2px); }
    20%, 40%, 60%, 80% { transform: translateX(2px); }
    }

    @keyframes heartbeat {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.3); }
    }

    @keyframes wave {
        0%, 100% {
            transform: translateX(-50%) translateY(0);
        }
        50% {
            transform: translateX(-50%) translateY(-10px);
        }
    }

    @keyframes float-particle {
        0%, 100% {
            transform: translateY(0px) translateX(0px) scale(1) rotate(0deg);
            opacity: 0.3;
        }
        25% {
            transform: translateY(-15px) translateX(8px) scale(1.2) rotate(90deg);
            opacity: 0.7;
        }
        50% {
            transform: translateY(-30px) translateX(-8px) scale(0.8) rotate(180deg);
            opacity: 0.5;
        }
        75% {
            transform: translateY(-15px) translateX(4px) scale(1.1) rotate(270deg);
            opacity: 0.8;
        }
    }

    .particle {
        animation: float-particle 6s infinite ease-in-out;
    }

    .animate-in {
        animation: fadeInUp 0.8s ease-out forwards;
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px) scale(0.9);
        }
        to {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);