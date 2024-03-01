document.addEventListener('alpine:init', () => {
    Alpine.store('userOptions', {
        printer: null,
        linear_rail: null,
        extruder: null,
        hotend: null,
        probe: null,
        display: null,

        setOrReset(key, value) {
            if (this[key] === value) {
                this[key] = null
            } else {
                this[key] = value
            }
        }

    })

    Alpine.data('parts_matrix', () => ({
        testies: [
            "test1", "test2", "test3", "test4"
        ],
        printers: {
            'voron_v01': {
                'name': "Voron V0.1",
                "linear_rails": {
                    'MGN7': {
                        "name": "MGN7",
                        "stl": "x_carriage_Mini_Stealth_MGN7.stl",
                        "notes:": null,
                        "materials": [
                            {
                                "name": "M3 6mm BHCS",
                                "qty": "4",
                            },
                            {
                                "name": "M3 Brass Insert",
                                "qty": "4",
                            }
                        ],
                        "variations": [
                            {
                                "name": "no_x_endstop",
                                "stl": "x_carriage_Mini_Stealth_MGN7_no_X-endstop.stl",
                                "notes:": null,
                                "materials": [
                                    {
                                        "name": "M3 6mm BHCS",
                                        "qty": "4",
                                    },
                                    {
                                        "name": "M3 Brass Insert",
                                        "qty": "4",
                                    }
                                ]
                            }
                        ]
                    },
                    'MGN9': {
                        "name": "MGN9",
                        "stl": "x_carriage_Mini_Stealth_MGN9.stl",
                        "variations": [
                            {
                                "name": "no_x_endstop",
                                "stl": "x_carriage_Mini_Stealth_MGN9_no_X-endstop.stl",
                                "notes:": null,
                                "materials": [
                                    {
                                        "name": "M3 6mm BHCS",
                                        "qty": "4",
                                    },
                                    {
                                        "name": "M3 Brass Insert",
                                        "qty": "4",
                                    }
                                ]
                            }
                        ]
                    },
                },
                'stls': []
            },
            'voron_v02': {
                'name': "Voron V0.2",
                'stls': []
            },
            'trident_v24': {
                'name': "Voron Trident / V2.4",
                'stls': []
            },
            'switchwire': {
                'name': "Voron Switchwire",
                'stls': []
            },
            'vorpal_180': {
                'name': "Vorpal 180",
                'stls': []
            },
            'micron': {
                'name': "Micron",
                'link': "",
                'stls': []
            },
        },
        linear_rails: {

        },
        extruders: {
            "orbiter_15": {
                "name": "Orbiter 1.5",
            },
            "orbiter_20": {
                "name": "Orbiter 2.0",
            },
            "galileo_sa": {
                "name": "Galileo SA",
            },
            "lgx_lite": {
                "name": "LGX Lite",
            },
            "hummingbird": {
                "name": "Hummingbird",
            },
            "vz_hex_cnc": {
                "name": "Voron V0 Hex CNC",
            },
            "mini_s": {
                "name": "Mini S",
            },
            "proto_x": {
                name: "Proto X",
            },
            "sherpa_micro": {
                name: "Sherpa Micro",
            }
        },
        hotends: {
            "dropeffect_xg": {
                name: "DropEffect XG",
            },
            "spider_pro": {
                name: "Spider Pro",
            },
            "bambu_x1": {
                name: "Bambu X1",
            },
            "mosquito": {
                name: "Mosquito",
            },
            "volcomosq": {
                name: "Volcomosq",
            },
            "revo_voron": {
                name: "Revo Voron",
            },
            "rapido": {
                name: "Rapido",
            },
            "rapido_uhf": {
                name: "Rapido UHF",
            },
            "dragon": {
                name: "Dragon",
            },
            "dragon_uhf": {
                name: "Dragon UHF",
            },
            "dragonfly_bmo": {
                name: "Dragonfly BMO",
            },
            "dragonfly_bms_6": {
                name: "Dragonfly BMS 6",
            },
            "dragonfly_bms_7": {
                name: "Dragonfly BMS 7",
            },
            "t_volcano_dragon": {
                name: "T Volcano Dragon",
            },
            "dragon_ace": {
                name: "Dragon Ace",
            },
            "chcb_v6dm": {
                name: "CHCB V6DM",
            },
            "tchc_td6s": {
                name: "TCHC TD6S",
            }

        },
        probes: {
            "zeroclick": {
                name: "ZeroClick",
            },
            "differential_ir": {
                name: "Differential IR",
            },
            "omron": {
                name: "Omron",
            },
            "klicky": {
                name: "Klicky",
            },
            "bl_touch": {
                name: "BL Touch",
            },
            "microprobe": {
                name: "MicroProbe",
            },
            "euclid": {
                name: "Euclid",
            },
            "beacon3d": {
                name: "Beacon3D",
            },
            "pinda": {
                name: "Pinda",
            },
            "mini_stealth_dab": {
                name: "Mini Stealth DAB",
            },
            "micron_compatible": {
                name: "Micron Compatible",
            },
            "boop_beta4_wired": {
                name: "Boop Beta4 Wired",
            },
            "boop_beta4_pcb": {
                name: "Boop Beta4 PCB",
            },

        },
        displays: {
            "knomi_1": {},
            "knomi 2": {},
            "mellow_fly_halo": {}
        },
        universal: {

        },
        optional: {

        }
    }))
})


