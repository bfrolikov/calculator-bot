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
const truncatedPyramidArea = (terms, areaType) => {
  const a = Number(terms[2]);
  const b = Number(terms[3]);
  const h = Number(terms[4]);
  if (areaType === 1) { // full
    const S = a * a + b * b + 2 * (a + b) * h;
    return `${S}`;
  }
  else { // side
    const S = 2 * (a + b) * h;
    return `${S}`;
  }
};
const pyramidArea = (terms, areaType) => {
  const a = Number(terms[2]);
  const h = Number(terms[3]);
  const SSidePartial = 3 * a * h;
  let SSide = '';
  if (SSidePartial % 2 === 0)
    SSide = `${SSidePartial / 2}`;
  else
    SSide = `${SSidePartial}/2`;
  if (areaType === 1) { // full
    const SBottomPartial = a * a;
    let SBottom = '';
    if (SBottomPartial % 4 === 0)
      SBottom = `${SBottomPartial / 4}*sqrt(3)`;
    else
      SBottom = `${SBottomPartial}*sqrt(3)/4`;
    return `${SSide} + ${SBottom}`;
  }
  else { // side
    return SSide;
  }
};
const prismArea = (terms, areaType) => {
  const a = Number(terms[2]);
  const h = Number(terms[3]);
  if (areaType === 1) { // full
    const S = 4 * a * h + 2 * a * a;
    return `${S}`;
  }
  else { // side
    const S = 4 * a * h;
    return `${S}`;
  }
};

module.exports = {
  coneArea,
  cylinderArea,
  truncatedConeArea,
  truncatedPyramidArea,
  pyramidArea,
  prismArea
};