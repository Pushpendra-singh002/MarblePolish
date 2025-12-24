const products = {
    1: {
    title: "FICKERT 140/170 BRUSH DIAMOND, SILICON",
    image: "images/p1.jpg",
    description: "High-quality diamond and silicon brush for granite polishing. Suitable for lapatro finish.",
    features: [
        "Long-lasting material",
        "High polishing performance",
        "Strong abrasive quality"
    ],
    grits: ["#24", "36", "46", "60", "120", "240", "320", "500", "600", "800", "1000", "1200"],
    usage: "Used for Granite Lapatro Finishes in Auto and Manual Machines"
    },

    2: {
    title: "FICKERT BRUSHES DIAMOND, SILICON",
    image: "images/p2.jpg",
    description: "High-quality diamond and silicon fickert brushes used for antique and leather finishes.",
    features: [
        "Long-lasting material",
        "Strong abrasive quality",
        "High polishing and texturing performance"
    ],
    grits: ["#24", "36", "46", "60", "120", "240", "320", "500", "600", "800", "1000", "1200"],
    usage: "Used for Marble and Sand Stone for Antique and Leather Finishes"
    },

    3: {
    title: 'CHEMFERING-4" BRUSHES DIAMOND, SILICON',
    image: "images/p3.jpg", 
    description: "High-quality diamond and silicon chamfering brushes for edge and leather finishes.",
    features: [
        "Durable and long-lasting brush material",
        "Strong abrasive cutting and finishing power",
        "Perfect for chamfering and edge finishing"
    ],
    grits: ["#24", "36", "46", "60", "120", "240", "320", "500", "600", "800", "1000", "1200"],
    usage: "Used for Edge Finishes and also for cleaning stone and polishing leather finishes"
   },


    4:{
    title: 'BRUSH 8" DIAMOND , SILICON',
    image: "images/p4.jpg", 
    description: "High-quality 8-inch diamond and silicon brushes designed for leather, lapatro, and antique finishes.",
    features: [
        "Strong abrasive performance",
        "Durable materials for long lifespan",
        "Ideal for heavy-duty granite polishing"
    ],
    grits: ["#24", "36", "46", "60", "120", "240", "320", "500", "600", "800", "1000", "1200"],
    usage: "Used in Leather, Lapatro, and Antique Finishes for Granite only in auto polishing machines for granite and other hard stones"
    },


    5: {
    title: "FICKERT 140/170 MGO BOND / FICKERT 140/170 METAL DIAMOND",
    image: "images/p5.jpg", 
    description: "High-quality MGO Bond and Metal Diamond fickerts designed for grinding granite and hard stones.",
    
    variants: [
        {
            name: "FICKERT 140/170 MGO BOND",
            grits: ["#24", "36", "46", "60", "120", "220", "320"]
        },
        {
            name: "FICKERT 140/170 METAL DIAMOND",
            grits: ["#24", "36", "46", "60", "120", "220", "320"]
        }
    ],

    features: [
        "Heavy grinding capability",
        "Long-lasting bond strength",
        "Suitable for hard stone processing"
    ],

    usage: "Used in grinding granite and other hard stones in both auto and manual machines"
    },


    6: {
    title: "FICKERT 140/170 DIAMOND POLISHING",
    image: "images/p6.jpg", 
    description: "High-quality diamond fickert used for grinding and mirror polishing of marble and granite.",
    features: [
        "Strong grinding and polishing performance",
        "Durable diamond bonding",
        "Ideal for mirror polishing"
    ],
    grits: ["#24", "36", "46", "60", "120", "240", "320"],
    usage: "Used for grinding and mirror polishing for marble and granite"
    },


    7: {
    title: "FINAL POLISHING ABRASIVE FICKERT 140/170",
    image: "images/p7.jpg", 
    description: "High-performance final polishing abrasive used for achieving smooth and glossy finishes on hard stones.",
    features: [
        "Superior final polishing ability",
        "High durability for long use",
        "Suitable for hard stone finishing"
    ],
    usage: "Used for grinding and finishing hard stone in both Auto and Manual Machines"
    },


    8: {
    title: '8" POLISHING FOR GRANITE',
    image: "images/p8.jpg", 
    description: "High-quality 8-inch polishing abrasive designed specifically for granite finishing.",
    features: [
        "Provides smooth and glossy granite polish",
        "High durability and long life",
        "Suitable for professional granite finishing"
    ],
    grits: ["#400", "600", "800", "1500", "3000", "5000", "10000"],
    usage: "Used for granite polishing to achieve fine, glossy surface finishes"
    },


    9: {
    title: "FRANKFURT METALBOND DIAMOND",
    image: "images/p9.jpg", 
    description: "High-strength metal bond diamond abrasive designed for heavy grinding applications.",
    features: [
        "Superior grinding performance",
        "Strong metal bonding for long life",
        "Ideal for hard stone processing"
    ],
    grits: ["#24", "36", "46", "60", "120", "240", "320"],
    usage: "Used for grinding marble, granite, and hard stones"
    },


    10: {
    title: "FRANKFURT RESIN BOND DIAMOND",
    image: "images/p10.jpg", 
    description: "Premium resin bond diamond abrasive suitable for polishing marble and granite.",
    features: [
        "High polishing performance",
        "Smooth and glossy finishing",
        "Long-lasting resin bond technology"
    ],
    grits: ["#50", "100", "200", "300", "400", "600", "800", "1000", "1200", "1500", "2000", "3000", "5000", "10000"],
    usage: "Used for polishing marble and granite surfaces"
    },


    11: {
    title: 'CHEMFERING 4"',
    image: "images/p11.jpg", 
    description: "High-quality abrasive designed for edge polishing using a hand polishing machine.",
    features: [
        "Ideal for edge polishing",
        "Durable abrasive material",
        "Smooth finishing quality"
    ],
    usage: "Abrasive for edge polishing in hand polishing machines"
    },


    12: {
    title: "DIAMOND PADS",
    image: "images/p12.jpg", 
    description: "High-performance diamond pads designed for polishing marble, granite, and hard stones.",
    features: [
        "Excellent polishing capability",
        "Long-lasting diamond abrasive",
        "Smooth and glossy finish quality"
    ],
    grits: ["#50", "100", "200", "400", "600", "800", "1000", "1200", "1500", "2000", "3000", "5000", "10000"],
    usage: "Used for polishing marble, granite, and hard stone surfaces"
    },


    13: {
    title: "POLISHING POWDER",
    image: "images/p13.jpg", 
    description: "High-quality polishing powder for achieving smooth and glossy stone finishes.",
    features: [
        "Effective stone polishing",
        "Long-lasting performance",
        "Easy to use"
    ],
    usage: "Used for polishing marble, granite, and other stone surfaces"
    },


    14: {
    title: '8" BUFF',
    image: "images/p14.jpg", 
    description: "High-quality 8-inch buff designed for line polishing in both black and white stones.",
    features: [
        "Ideal for line polishing",
        "Durable and long-lasting material",
        "Smooth finishing performance"
    ],
    usage: "Used for line polishing in both black and white stones"
    },

};
