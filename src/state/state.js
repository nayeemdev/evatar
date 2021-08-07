import { proxy } from "valtio";

const state = proxy({ 
        skinColor: { 
            left: "#e6af78", 
            right: "#f0c087",
            topNeck: "#d29b6e",
            bottomNeck: "#e6af78",
        }, 
        shirtColor: {
            top: "#eff2fa",
            backCollarAndPocket: "#e4eaf6"
        }
});

export { state };
