module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "plugin:react/recommended",
    "settings": {
        "react":{
            "version": "detect"
        }
    },
    "overrides": [
        {
            "files":["*.jsx", "*.js"]
        }
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {

    }
}
