document.addEventListener('alpine:init', () => {
    Alpine.data('ministealth', () => ({
        testies: [
            "test1", "test2", "test3", "test4"
        ],
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
            "mosquito": {},
            "volcomosq": {},
            "revo_voron": {},
            "rapido": {},
            "rapido_uhf": {},
            "dragon": {},
            "dragon_uhf": {},
            "dragonfly_bmo": {},
            "dragonfly_bms_6": {},
            "dragonfly_bms_7": {},
            "t_volcano_dragon": {},
            "dragon_ace": {},
            "chcb_v6dm": {},
            "tchc_td6s": {}
        },
        probes: {
            "zeroclick": {
                name: "ZeroClick",
            },
            "differential_ir": {
                name: "Differential IR",
            },
            "omron": {},
            "klicky": {},
            "bl_touch": {},
            "microprobe": {},
            "euclid": {},
            "beacon3d": {},
            "pinda": {},
            "mini_stealth_dab": {},
            "micron_compatible": {},
            "boop_beta4_wired": {},
            "boop_beta4_pcb": {}
        },
        displays: {
            "knomi_1": {},
            "knomi 2": {},
            "mellow_fly_halo": {}
        }


    }))
})


const printers = [
    {
        "name": "voron_v01",
        "linear_rails": [
            {
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
            {
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
        ],
        "extruders": [
            {
                name: "orbiter_15",
                stl: "orbiter_15.stl",
            }
        ],
        "hotends": [],
        "probes": [],
        "display": [],
    }
];


const extruders = {
    "orbiter_15": {},
    "orbiter_20": {},
    "galileo_sa": {},
    "lgx_lite": {},
    "hummingbird": {},
    "vz_hex_cnc": {},
    "mini_s": {},
    "proto_x": {},
    "sherpa_micro": {

    }
}

const hotends = {
    "dropeffect_xg": {},
    "spider_pro": {},
    "bambu_x1": {},
    "mosquito": {},
    "volcomosq": {},
    "revo_voron": {},
    "rapido": {},
    "rapido_uhf": {},
    "dragon": {},
    "dragon_uhf": {},
    "dragonfly_bmo": {},
    "dragonfly_bms_6": {},
    "dragonfly_bms_7": {},
    "t_volcano_dragon": {},
    "dragon_ace": {},
    "chcb_v6dm": {},
    "tchc_td6s": {}
}

const probes = {
    "zeroclick": {},
    "differential_ir": {},
    "omron": {},
    "klicky": {},
    "bl_touch": {},
    "microprobe": {},
    "euclid": {},
    "beacon3d": {},
    "pinda": {},
    "mini_stealth_dab": {},
    "micron_compatible": {},
    "boop_beta4_wired": {},
    "boop_beta4_pcb": {}
}

const displays = {
    "knomi_1": {},
    "knomi 2": {},
    "mellow_fly_halo": {}
}
