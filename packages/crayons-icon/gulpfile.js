const fs = require('fs').promises;
const path = require('path');

const generateIconsExportData = async () => {
  const iconAssetLibPath = './icons';
  const iconLibPath = './dist';

  const getIconsSVGData = async (svgFile) => {
    try {
      {
        const svgName = path.parse(svgFile).name;
        const svgFilePath = path.join(iconAssetLibPath, svgFile);
        const svgContent = await fs.readFile(svgFilePath);

        const svg_name =
          svgName.indexOf('-') > -1
            ? svgName.split('-').join('_')
            : svgName === 'new' || svgName === 'delete'
            ? svgName.concat('_icon')
            : svgName;

        const svg_string = svgContent.toString().split('"').join("'");
        const svg_export_data = `export const ${svg_name} = "${svg_string}";`;
        return svg_export_data;
      }
    } catch (ex) {
      console.error(ex);
      throw ex;
    }
  };
  try {
    let indexData = '';
    const allSvgFiles = await fs.readdir(path.join(iconAssetLibPath, ''));
    for (const svgFile of allSvgFiles) {
      indexData = indexData + (await getIconsSVGData(svgFile)) + '\n';
    }
    fs.mkdir(iconLibPath, { recursive: true }).catch(console.error);
    fs.writeFile(path.join(iconLibPath, 'index.js'), indexData);
    console.log(`Succesfully written @freshworks/crayons-icon/dist/index.js`);
  } catch (ex) {
    console.error(`Exception occured while building : ${ex}`);
  }
};

exports.default = generateIconsExportData;
