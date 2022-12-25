const particle_L_Config = {
    "fullScreen": {
        "enable": true,
        "zIndex": 1
    },
    "style":{
        "position":"absolute"
    },
    "detectRetina": false,
    "fpsLimit": 120,
    "interactivity": {
        "events": {
            "onClick": {
                "enable": false,
                "mode": "push"
            },
            "onDiv": {
                "elementId": "repulse-div",
                "enable": false,
                "mode": "repulse"
            },
            "onHover": {
                "enable": true,
                "mode": "bubble",
                "parallax": {
                    "enable": false,
                    "force": 2,
                    "smooth": 10
                }
            },
            "resize": true
        },
        "modes": {
            "bubble": {
                "distance": 40,
                "duration": 2,
                "opacity": 8,
                "size": 6,
                "speed": 3
            },
            "connect": {
                "distance": 80,
                "lineLinked": {
                    "opacity": 0.5
                },
                "radius": 60
            },
            "grab": {
                "distance": 400,
                "lineLinked": {
                    "opacity": 1
                }
            },
            "push": {
                "quantity": 4
            },
            "remove": {
                "quantity": 2
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "slow": {
                "active": false,
                "radius": 0,
                "factor": 1
            }
        }
    },
    "particles": {
        "color": {
            "value": ["#f97d00", "#fff", "#34A853"]
        },
        "lineLinked": {
            "blink": false,
            "color": "random",
            "consent": false,
            "distance": 40,
            "enable": true,
            "opacity": 1,
            "width": 1
        },
        "move": {
            "attract": {
                "enable": false,
                "rotate": {
                    "x": 600,
                    "y": 1500
                }
            },
            "bounce": false,
            "direction": "none",
            "enable": true,
            "outMode": "bounce",
            "random": false,
            "speed": 1,
            "straight": false
        },
        "number": {
            "density": {
                "enable": false,
                "area": 2000
            },
            "limit": 0,
            "value": 200
        },
        "opacity": {
            "animation": {
                "enable": true,
                "minimumValue": 0.05,
                "speed": 2,
                "sync": false
            },
            "random": false,
            "value": 0.4
        },
        "shape": {
            "type": "circle"
        },
        "size": {
            "animation": {
                "enable": false,
                "minimumValue": 0.1,
                "speed": 40,
                "sync": false
            },
            "random": true,
            "value": 1
        }
    },
    "polygon": {
        "draw": {
            "enable": false,
            "lineColor": "rgba(255,255,255,0.2)",
            "lineWidth": 0.5
        },
        "enable": true,
        "move": {
            "radius": 10
        },
        "position": {
            "x": 30,
            "y": 10
        },
        "inline": {
            "arrangement": "equidistant"
        },
        "scale": 1,
        "type": "inline",
        "url": "https://particles.js.org/images/google.svg"
    }
}
export default particle_L_Config