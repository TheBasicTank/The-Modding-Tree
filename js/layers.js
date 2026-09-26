addLayer("p", {
    //Upgrades
    upgrades: {
        11: {
    title: "Irrational Number",
    description: "Double your number gain.",
    cost: new Decimal(3),
    },
        12: {
    title: "Transcendental Number",
    description: "number gain cubes",
    cost: new Decimal(7),
    unlocked() { return hasUpgrade('p', 11) }
    },
           13: {
    title: "Forever recurring digits",
    description: "Number gain multiplies itself 0.14/s",
    cost: new Decimal(22),
    unlocked() { return hasUpgrade('p', 12) }
    },
           14: {
    title: "39 digits percision",
    description: "Double pi gain",
    cost: new Decimal(39),
    unlocked() { return hasUpgrade('p', 13) }
    },
            15: {
    title: "Geometry",
    description: "Number gain multiplies itself 0.31/s as well",
    cost: new Decimal(50),
    unlocked() { return hasUpgrade('p', 13) },
    },
            21: {
    title: "Irrational numbers",
    description: "unlock the layer 'Irration numbers'",
    cost: new Decimal(120),
    unlocked() { return hasUpgrade('p', 15) },

    },
    },


    name: "Pi", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "π", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#90c4e7",
    requires: new Decimal(3.14), // Can be a function that takes requirement increases into account
    resource: "Pi", // Name of prestige currency
    baseResource: "Numbers", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('p', 14)) mult = new Decimal(2)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for Pi", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    tabFormat: {
    "Main": {
        content:[
            "main-display",
            "prestige-button",
            "blank",
            "upgrades",           
        ]
    },
},


})

addLayer("INs", {
    name: "Irrational Numbers", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "I", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#ff7a7a",
    requires: new Decimal(3.14), // Can be a function that takes requirement increases into account
    resource: "Irr", // Name of prestige currency
    baseResource: "Pi", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for Pi", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    
})
