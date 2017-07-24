import checker from "./checker";
import fileType from "./type/fileType";
/**
 * aa2c
 * クラス本体
 */
class aa2c {
  private imagePath: string;
  private htmlPath: string;

  public setPath(imagePath: string, htmlPath: string){

    checker.isValid(imagePath,fileType.ImageType) ? this.imagePath = imagePath : console.error("error!");
    checker.isValid(htmlPath,fileType.html) ? this.htmlPath = htmlPath : console.error("error!");

  }

  public getImagePath(): string {
    return this.imagePath;
  }

  public getHtmlPath(): string {
    return this.htmlPath;
  }

}

export default new aa2c;
