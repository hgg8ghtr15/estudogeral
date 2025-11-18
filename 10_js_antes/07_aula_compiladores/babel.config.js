const presets = [
    [
        '@babel/preset-env',
        {
            targets:{
                "chrome": "58",
                "ie": "11"
            }
        }
    ]
]
module.exports = { presets }

//   ./node_modules/.bin/babel main.js --watch --out-dir dist