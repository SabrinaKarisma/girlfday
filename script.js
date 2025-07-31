        function xcfH() {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.innerHTML = '💜';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDelay = Math.random() * 2 + 's';
            heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
            
            document.getElementById('floatingHearts').appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 7000);
        }

        setInterval(xcfH, 1000);

        document.addEventListener('DOMContentLoaded', function() {
            const photoItems = document.querySelectorAll('.photo-item');
            
            photoItems.forEach(item => {
                item.addEventListener('touchstart', function() {
                    this.style.transform = 'scale(0.95)';
                });
                
                item.addEventListener('touchend', function() {
                    this.style.transform = '';
                });
            });

            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, observerOptions);

            photoItems.forEach(item => {
                item.style.opacity = '0';
                item.style.transform = 'translateY(30px)';
                item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(item);
            });

            const heartPhoto = document.querySelector('.heart-photo-container');
            if (heartPhoto) {
                heartPhoto.style.opacity = '0';
                heartPhoto.style.transform = 'translateY(50px)';
                heartPhoto.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                observer.observe(heartPhoto);
            }

            const loveMessage = document.querySelector('.love-message');
            if (loveMessage) {
                loveMessage.style.opacity = '0';
                loveMessage.style.transform = 'translateY(30px)';
                loveMessage.style.transition = 'opacity 1s ease 0.3s, transform 1s ease 0.3s';
                observer.observe(loveMessage);
            }
        });

        document.addEventListener('click', function(e) {
            ycS(e.clientX, e.clientY);
        });

        document.addEventListener('touchstart', function(e) {
            if (e.touches.length === 1) {
                ycS(e.touches[0].clientX, e.touches[0].clientY);
            }
        });

        function ycS(x, y) {
            const sparkle = document.createElement('div');
            sparkle.style.position = 'fixed';
            sparkle.style.left = x + 'px';
            sparkle.style.top = y + 'px';
            sparkle.style.width = '10px';
            sparkle.style.height = '10px';
            sparkle.style.background = '#ff69b4';
            sparkle.style.borderRadius = '50%';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.zIndex = '9999';
            sparkle.style.animation = 'sparkle 0.6s ease-out forwards';
            
            document.body.appendChild(sparkle);
            
            setTimeout(() => {
                sparkle.remove();
            }, 600);
        }

        const style = document.createElement('style');
        style.textContent = `
            @keyframes sparkle {
                0% { 
                    transform: scale(0) rotate(0deg); 
                    opacity: 1; 
                }
                50% { 
                    transform: scale(1.5) rotate(180deg); 
                    opacity: 0.8; 
                }
                100% { 
                    transform: scale(0) rotate(360deg); 
                    opacity: 0; 
                }
            }
        `;
        document.head.appendChild(style);

        document.getElementById('loveLetterBox').addEventListener('click', function() {
            document.getElementById('envelopeClosed').style.display = 'none';
            document.getElementById('envelopeOpen').style.display = 'block';
        });
        const purpleLoveStyle = document.createElement('style');
        purpleLoveStyle.textContent = `
        .falling-purple-loves {
            pointer-events: none;
            position: absolute;
            left: 0; top: 0; width: 100%; height: 100%;
            z-index: 10;
        }
        .purple-love {
            position: absolute;
            font-size: 22px;
            color: #a259e6;
            filter: drop-shadow(0 2px 6px #a259e6aa);
            opacity: 0.85;
            user-select: none;
            pointer-events: none;
            animation: fall-purple-love 4.5s linear forwards;
        }
        @keyframes fall-purple-love {
            0% {
                transform: translateY(-40px) rotate(-10deg) scale(0.8);
                opacity: 0.9;
            }
            80% {
                opacity: 0.85;
            }
            100% {
                transform: translateY(100vh) rotate(30deg) scale(1.1);
                opacity: 0.1;
            }
        }
        /* Love Explosion */
        #loveExplosion {
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(255,255,255,0.0);
            transition: background 0.3s;
        }
        .love-explosion-heart {
            font-size: 60vw;
            opacity: 1;
            animation: love-explosion-anim 1.5s cubic-bezier(0.4,1.4,0.6,1) forwards;
            filter: drop-shadow(0 0 40px #e75480cc);
            will-change: transform, opacity;
            pointer-events: none;
            user-select: none;
        }
        @keyframes love-explosion-anim {
            0% {
                transform: scale(0.2);
                opacity: 0.2;
            }
            30% {
                transform: scale(2.5);
                opacity: 1;
            }
            60% {
                transform: scale(1.0);
                opacity: 1;
            }
            80% {
                transform: scale(1.05);
                opacity: 0.9;
            }
            100% {
                transform: scale(1.1);
                opacity: 0;
            }
        }
        `;
        document.head.appendChild(purpleLoveStyle);

        function xcPL() {
            const love = document.createElement('span');
            love.className = 'purple-love';
            love.innerHTML = '💜';
            love.style.left = Math.random() * 95 + '%';
            const size = 12 + Math.random() * 18;
            love.style.fontSize = size + 'px';
            love.style.animationDelay = (Math.random() * 1.5) + 's';
            love.style.animationDuration = (3.5 + Math.random() * 2) + 's';
            love.style.opacity = 0.3 + Math.random() * 0.3;
            love.style.transform = `rotate(${Math.random()*40-20}deg)`;

            document.querySelector('.falling-purple-loves').appendChild(love);

            setTimeout(() => {
                love.remove();
            }, 6000);
        }

        setInterval(xcPL, 400);

        for(let i=0;i<7;i++) setTimeout(xcPL, i*350);

        document.getElementById('loveLetterBox').addEventListener('click', function() {
            const explosion = document.getElementById('loveExplosion');
            const heart = explosion.querySelector('.love-explosion-heart');
            explosion.style.display = 'flex';
            heart.style.animation = 'none';
            void heart.offsetWidth;
            heart.style.animation = '';
            setTimeout(() => {
                explosion.style.display = 'none';
            }, 1500);
        });