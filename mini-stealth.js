document.addEventListener("alpine:init", () => {
    Alpine.store("userOptions", {
        printer: null,
        extruder: null,
        hotend: null,
        probe: null,
        display: null,
        linear_rail: null,
        x_endstop: null,
        x_carriage: null,
        uhf: null,

        setOrReset(key, value) {
            // TODO: CHECK FOR REQUIREMENTS OF INTERFACE
            if (this[key] === value) {
                this[key] = null;
                if (key === "printer") {
                    this.linear_rail = null;
                    this.x_endstop = null;
                }
            } else {
                this[key] = value;
            }
        },
    });

    Alpine.data("interface", () => ({
        printers: {
            voron_v01: {
                name: "Voron V0.1",
                requirement: {
                    x_carriage: "voron",
                },
                variants: [
                    {
                        key: "linear_rail",
                        title: "Linear Rails",
                        description: "What size linear rails does your printer use?",
                        options: [
                            {
                                name: "MGN7",
                                value: "MGN7",
                            },
                            {
                                name: "MGN9",
                                value: "MGN9",
                            },
                        ],
                    },
                    {
                        key: "x_endstop",
                        title: "X Axis Endstop",
                        description: "Does your printer have an X axis endstop?",
                        options: [
                            {
                                name: "Yes",
                                value: "true",
                            },
                            {
                                name: "No",
                                value: "false",
                            },
                        ],
                    }
                ],
                supported: {
                    extruders: ["lgx_lite", "vz_hex_cnc", "hummingbird"],
                    probes: [],
                },
                stls: [],
            },
            voron_v02: {
                name: "Voron V0.2",
                requirement: {
                    x_carriage: "voron",
                },
                variants: [
                    {
                        key: "linear_rails",
                        title: "Linear Rails",
                        description: "What size linear rails does your printer use?",
                        options: [
                            {
                                name: "MGN7",
                                value: "MGN7",
                            },
                            {
                                name: "MGN9",
                                value: "MGN9",
                            },
                        ],
                    },
                    {
                        key: "x_endstop",
                        title: "X Axis Endstop",
                        description: "Does your printer have an X axis endstop?",
                        options: [
                            {
                                name: "Yes",
                                value: true,
                            },
                            {
                                name: "No",
                                value: false,
                            },
                        ],
                    }
                ],
                supported: {
                    extruders: ["lgx_lite", "vz_hex_cnc", "hummingbird"],
                    probes: [],
                },
                stls: [],
            },
            trident_v24: {
                name: "Voron Trident / V2.4",
                requirement: {
                    x_carriage: "x_carriage",
                },
                supported: {
                    extruders: ["lgx_lite", "vz_hex_cnc", "hummingbird"],
                    probes: [],
                },
                stls: [],
            },
            switchwire: {
                name: "Voron Switchwire",
                requirement: {
                    x_carriage: "switchwire_x_carriage",
                },
                supported: {
                    extruders: ["lgx_lite", "vz_hex_cnc", "hummingbird"],
                    probes: [],
                },
                stls: [],
            },
            vorpal_180: {
                name: "Vorpal 180",
                requirement: {
                    x_carriage: "x_carriage",
                },
                variants: [
                    {
                        key: "linear_rails",
                        title: "Linear Rails",
                        description: "What size linear rails does your printer use?",
                        options: [
                            {
                                name: "MGN9",
                                value: "MGN9",
                            },
                            {
                                name: "MGN12",
                                value: "MGN12",
                            },
                        ],
                    }
                ],
                supported: {
                    extruders: ["lgx_lite", "vz_hex_cnc", "hummingbird"],
                    probes: [],
                },
                stls: [],
            },
            micron: {
                name: "Micron",
                requirement: {
                    x_carriage: "micron",
                },
                supported: {
                    extruders: ["lgx_lite", "vz_hex_cnc", "hummingbird"],
                    probes: [],
                },
                stls: [],
            },
        },
        extruders: {
            orbiter_15: {
                name: "Orbiter 1.5",
            },
            orbiter_20: {
                name: "Orbiter 2.0",
                supported: {
                    hotends: [],
                },
                stls: [],
            },
            galileo_sa: {
                name: "Galileo SA",
                supported: {
                    hotends: [],
                },
                stls: [],
            },
            lgx_lite: {
                name: "LGX Lite",
                supported: {
                    hotends: [],
                },
                stls: [],
            },
            hummingbird: {
                name: "Hummingbird",
                supported: {
                    hotends: [],
                },
                stls: [],
            },
            vz_hex_cnc: {
                name: "Voron V0 Hex CNC",
                supported: {
                    hotends: [],
                },
                stls: [],
            },
            mini_s: {
                name: "Mini S",
                supported: {
                    hotends: [],
                },
                stls: [],
            },
            proto_x: {
                name: "Proto X",
                supported: {
                    hotends: [],
                },
                stls: [],
            },
            sherpa_micro: {
                name: "Sherpa Micro",
                supported: {
                    hotends: [],
                },
                stls: [],
            },
        },
        hotends: {
            dropeffect_xg: {
                name: "DropEffect XG",
            },
            spider_pro: {
                name: "Spider Pro",
            },
            bambu_x1: {
                name: "Bambu X1",
            },
            mosquito: {
                name: "Mosquito",
            },
            volcomosq: {
                name: "Volcomosq",
                manufacturer: "Nitram",
                requirement: {
                    uhf: true,
                },
            },
            revo_voron: {
                name: "Revo Voron",
            },
            rapido: {
                name: "Phaetus Rapido",
                manufacturer: "Phaetus",
            },
            rapido_uhf: {
                name: "Phaetus Rapido UHF",
                manufacturer: "Phaetus",
                requirement: {
                    uhf: true,
                },
            },
            dragon_st_hf: {
                name: "Phaetus Dragon ST/HF",
                manufacturer: "Phaetus",
            },
            dragon_uhf: {
                name: "Phaetus Dragon UHF",
                manufacturer: "Phaetus",
                requirement: {
                    uhf: true,
                },
            },
            dragonfly_bmo: {
                name: "Phaetus Dragonfly BMO",
                manufacturer: "Phaetus",
            },
            dragonfly_bms_6: {
                name: "Phaetus Dragonfly BMS6",
                manufacturer: "Phaetus",
            },
            dragonfly_bms_7: {
                name: "Phaetus Dragonfly BMS7",
                manufacturer: "Phaetus",
            },
            t_volcano_dragon: {
                name: "T Volcano Dragon",
                manufacturer: "Triangle Labs",
            },
            dragon_ace: {
                name: "Triangle Labs Dragon ACE",
                manufacturer: "Triangle Labs",
            },
            chcb_v6dm: {
                name: "Triangle Labs CHCB-V V6DM",
                manufacturer: "Triangle Labs",
            },
            tchc_td6s: {
                name: "Triangle Labs TCHC TD6S",
                manufacturer: "Triangle Labs",
            },
        },
        probes: {
            zeroclick: {
                name: "ZeroClick",
            },
            differential_ir: {
                name: "Differential IR",
            },
            omron: {
                name: "Omron",
            },
            klicky: {
                name: "Klicky",
            },
            bl_touch: {
                name: "BL Touch",
            },
            microprobe: {
                name: "MicroProbe",
            },
            euclid: {
                name: "Euclid",
            },
            beacon3d: {
                name: "Beacon3D",
            },
            pinda: {
                name: "Pinda",
            },
            mini_stealth_dab: {
                name: "Mini Stealth DAB",
            },
            micron_compatible: {
                name: "Micron Compatible",
            },
            boop_beta4_wired: {
                name: "Boop Beta4 Wired",
            },
            boop_beta4_pcb: {
                name: "Boop Beta4 PCB",
            },
        },
        displays: {
            knomi_1: {},
            "knomi 2": {},
            mellow_fly_halo: {},
        },
        universal: {},
        optional: {},
    }));

    Alpine.data("stls", () => [
        {
            dependencies: ["x_carriage", "MGN7"],
            category: "carriage",
            stl: "x_carriage_Mini_Stealth_MGN7.stl",
        },
        {
            dependencies: ["sherpa_micro", "differential_ir", "knomi_1", "uhf"],
            accent: true,
            category: "shroud",
            stl: "[a]_MiniStealth_Shroud_Sherpa_Micro_Diff_IR_Knomi1_UHF.stl",
        },
        {
            dependencies: ["sherpa_micro", "differential_ir", "knomi_1"],
            accent: true,
            category: "shroud",
            stl: "[a]_MiniStealth_Shroud_Sherpa_Micro_Diff_IR_Knomi1.stl",
        },
        {
            dependencies: ["sherpa_micro", "differential_ir", "knomi_2", "uhf"],
            accent: true,
            category: "shroud",
            stl: "[a]_MiniStealth_Shroud_Sherpa_Micro_Diff_IR_Knomi2_UHF.stl",
        },
        {
            dependencies: ["sherpa_micro", "differential_ir", "knomi_2"],
            accent: true,
            category: "shroud",
            stl: "[a]_MiniStealth_Shroud_Sherpa_Micro_Diff_IR_Knomi2.stl",
        },
        {
            dependencies: ["sherpa_micro", "differential_ir", "uhf"],
            accent: true,
            category: "shroud",
            stl: "[a]_MiniStealth_Shroud_Sherpa_Micro_Diff_IR_UHF.stl",
        },
        {
            dependencies: ["sherpa_micro", "differential_ir"],
            accent: true,
            category: "shroud",
            stl: "[a]_MiniStealth_Shroud_Sherpa_Micro_Diff_IR.stl",
        },
        {
            dependencies: ["sherpa_micro", "knomi_1", "uhf"],
            accent: true,
            category: "shroud",
            stl: "[a]_MiniStealth_Shroud_Sherpa_Micro_Knomi1_UHF.stl",
        },
        {
            dependencies: ["sherpa_micro", "knomi_1"],
            accent: true,
            category: "shroud",
            stl: "[a]_MiniStealth_Shroud_Sherpa_Micro_Knomi1.stl",
        },
        {
            dependencies: ["sherpa_micro", "knomi_2", "uhf"],
            accent: true,
            category: "shroud",
            stl: "[a]_MiniStealth_Shroud_Sherpa_Micro_Knomi2_UHF.stl",
        },
        {
            dependencies: ["sherpa_micro", "knomi_2"],
            accent: true,
            category: "shroud",
            stl: "[a]_MiniStealth_Shroud_Sherpa_Micro_Knomi2.stl",
        },
        {
            dependencies: ["sherpa_micro", "differential_ir", "knomi_1"],
            accent: true,
            category: "shroud",
            stl: "[a]_MiniStealth_Shroud_Sherpa_Micro_UHF.stl",
        },
        {
            dependencies: ["sherpa_micro", "zeroclick", "knomi_1", "uhf"],
            accent: true,
            category: "shroud",
            stl: "[a]_MiniStealth_Shroud_Sherpa_Micro_ZeroClick_Knomi1_UHF.stl",
        },
        {
            dependencies: ["sherpa_micro", "zeroclick", "knomi_1"],
            accent: true,
            category: "shroud",
            stl: "[a]_MiniStealth_Shroud_Sherpa_Micro_ZeroClick_Knomi1.stl",
        },
        {
            dependencies: ["sherpa_micro", "zeroclick", "knomi_2", "uhf"],
            accent: true,
            category: "shroud",
            stl: "[a]_MiniStealth_Shroud_Sherpa_Micro_ZeroClick_Knomi2_UHF.stl",
        },
        {
            dependencies: ["sherpa_micro", "zeroclick", "knomi_2"],
            accent: true,
            category: "shroud",
            stl: "[a]_MiniStealth_Shroud_Sherpa_Micro_ZeroClick_Knomi2.stl",
        },
        {
            dependencies: ["sherpa_micro", "zeroclick", "uhf"],
            accent: true,
            category: "shroud",
            stl: "[a]_MiniStealth_Shroud_Sherpa_Micro_ZeroClick_UHF.stl",
        },
        {
            dependencies: ["sherpa_micro", "zeroclick"],
            accent: true,
            category: "shroud",
            stl: "[a]_MiniStealth_Shroud_Sherpa_Micro_ZeroClick.stl",
        },
        {
            dependencies: ["sherpa_micro"],
            accent: true,
            category: "shroud",
            stl: "[a]_MiniStealth_Shroud_Sherpa_Micro.stl",
        },
    ]);
});
