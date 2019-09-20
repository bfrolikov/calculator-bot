/* eslint-disable brace-style */
/* eslint-disable no-else-return */
const coneArea = (terms, areaType) => {
  const r = Number(terms[2]);
  const l = Number(terms[3]);
  if (areaType === 1) { // full
    const S = r * (r + l);
    return `${S}π`;
  }
  else { // side
    const S = r * l;
    return `${S}π`;
  }
};
const cylinderArea = (terms, areaType) => {
  const r = Number(terms[2]);
  const h = Number(terms[3]);
  if (areaType === 1) { // full
    const S = 2 * r * (r + h);
    return `${S}π`;
  }
  else { // side
    const S = 2 * r * h;
    return `${S}π`;
  }
};
const truncatedConeArea = (terms, areaType) => {
  const r1 = Number(terms[2]);
  const r2 = Number(terms[3]);
  const l = Number(terms[4]);
  if (areaType === 1) { // full
    const S = (r1 + r2) * l + r1 * r1 + r2 * r2;
    return `${S}π`;
  }
  else { // side
    const S = (r1 + r2) * l;
    return `${S}π`;
  }
};

module.exports = { coneArea, cylinderArea, truncatedConeArea };
