const particle_L_Config = {
    "fpsLimit": 120,
    "style":{
        "position": "absolute"
    },
    "emitters": {
        "position": {
            "x": 50,
            "y": 40
        },
        "size": {
            "width": 50,
            "height": 50,
            "mode": "precise"
        },
        "rate": {
            "delay": 0.25,
            "quantity": 4
        }
    },
    "particles": {
        "number": {
            "value": 0,
            "limit": 300
        },
        "color": {
            "value": ["#fa7921", "#fff", "#9bc53d"]
        },
        "shape": {
            "type": "circle"
        },
        "opacity": {
            "value": 1
        },
        "size": {
            "value": 3
        },
        "links": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 3,
            "direction": "none",
            "random": false,
            "straight": false,
            "outModes": {
                "default": "destroy"
            },
            "bounce": false,
            "path": {
                "enable": true,
                "delay": {
                    "value": 0.1
                },
                "options": {
                    "size": 5,
                    "draw": false,
                    "increment": 0.001
                },
                "generator": "perlinNoise"
            },
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "events": {
            "onHover": {
                "enable": false,
                "mode": "grab"
            },
            "onClick": {
                "enable": false,
                "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 200,
                "links": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8
            },
            "repulse": {
                "distance": 200
            },
            "push": {
                "quantity": 4
            },
            "remove": {
                "quantity": 2
            }
        }
    },
    "detectRetina": true
}
export default particle_L_Config