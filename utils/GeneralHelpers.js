
export function GetVw(px){
    return `${Math.round((px / window.innerWidth) * 100)}`;
};

export function GetVh(px){
    return `${Math.round((px / window.innerHeight) * 100)}`;
};

export function GetResponsiveFontSize(basePx, minPx, maxPx) {
    const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    
    const baseRem = basePx / rootFontSize;
  
    const minRem = minPx / rootFontSize;
    const maxRem = maxPx / rootFontSize;
  
    const vwSize = (basePx / window.innerWidth) * 100;
  
    return `clamp(${minRem}rem, ${vwSize}vw, ${maxRem}rem)`;
  }

console.log(GetVw(15), GetVh(40), GetResponsiveFontSize(24, 14, 16));

