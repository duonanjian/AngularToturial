// import { fabric } from 'fabric';
// import { IScadaControlDefinition } from 'scada-ui-core';
// import { ImageFormate, ListItem } from '../definitions';

// export function createPattern(
//   definition: IScadaControlDefinition,
//   imgSrc: string
// ) {
//   const FillFormate = definition.settings?.FillFormate;
//   console.log(definition.settings.ControlType);

//   return new Promise((res) => {
//     fabric.Image.fromURL(imgSrc, (oImg) => {
//       const calcScaleWidth =
//         definition.settings.ScaleWidth * (1 / definition.settings.ScaleX);
//       const calcScaleHeight =
//         definition.settings.ScaleHeight * (1 / definition.settings.ScaleY);
//       console.log(calcScaleWidth, calcScaleHeight, definition.settings);

//       // @ts-ignore
//       const widthProportion = calcScaleWidth / oImg?.width;
//       // @ts-ignore
//       const heightProportion = calcScaleHeight / oImg?.height;

//       switch (FillFormate) {
//         case ImageFormate.CrossWise:
//           oImg.scaleToWidth(calcScaleWidth);
//           break;
//         case ImageFormate.Longitudinal:
//           oImg.scaleToHeight(calcScaleHeight);
//           break;
//         default:
//           oImg.scaleX = widthProportion;
//           oImg.scaleY = heightProportion;
//       }

//       // @ts-ignore
//       const patternSourceCanvas = new fabric.StaticCanvas();
//       patternSourceCanvas.add(oImg);
//       patternSourceCanvas.renderAll();
//       const pattern = new fabric.Pattern({
//         // @ts-ignore
//         source: (function () {
//           // 设定静态画布的大小同等图片大小
//           patternSourceCanvas.setDimensions({
//             width: oImg.getScaledWidth(),
//             height: oImg.getScaledHeight(),
//           });
//           patternSourceCanvas.renderAll();
//           // 回传 htmlElement
//           return patternSourceCanvas.getElement();
//         })(),
//         repeat: 'no-repeat',
//       });
//       res(pattern);
//     });
//   });
// }
// export function createGradient(
//   color: any,
//   obj: any,
//   angle?: number,
//   horizontalRadial?: number,
//   verticalRadial?: number
// ) {
//   return new fabric.Gradient({
//     type: color.fillStyle, // linear or radial
//     gradientUnits: 'percentage', // pixels or percentage 像素 或者 百分比
//     // @ts-ignore
//     coords: angleTocoordinate(
//       color,
//       obj,
//       angle,
//       horizontalRadial,
//       verticalRadial
//     ),
//     colorStops: color.color.map((item: ListItem) => {
//       return {
//         offset: item.proportion / 100,
//         color: item.color,
//       };
//     }),
//   });
// }
// export function angleTocoordinate(
//   color: any,
//   obj: any,
//   angle: number,
//   horizontalRadial: number,
//   verticalRadial: number
// ) {
//   let angleCoords;
//   if (color.fillStyle === 'linear') {
//     const anglePI = angle * (Math.PI / 180);
//     angleCoords = {
//       x2: Math.round(50 + Math.sin(anglePI) * 50) * 0.01,
//       y1: Math.round(50 + Math.cos(anglePI) * 50) * 0.01,
//       x1: Math.round(50 + Math.sin(anglePI + Math.PI) * 50) * 0.01,
//       y2: Math.round(50 + Math.cos(anglePI + Math.PI) * 50) * 0.01,
//     };
//   } else {
//     angleCoords = {
//       r1: 0, // 该属性仅径向渐变可用，外圆半径
//       r2: 0.5, // 该属性仅径向渐变可用，外圆半径
//       // @ts-ignore
//       x1: horizontalRadial * 0.01, // 焦点的x坐标
//       // @ts-ignore
//       y1: verticalRadial * 0.01, // 焦点的y坐标
//       // @ts-ignore
//       x2: 0.5, // 中心点的x坐标
//       // @ts-ignore
//       y2: 0.5, // 中心点的y坐标
//     };
//   }
//   return angleCoords;
// }
