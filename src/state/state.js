import { proxy } from "valtio";

const state = proxy({ 
        skinColor: "#e6af78", 
        shirtColor: '#eff2fa'
});

export { state };
