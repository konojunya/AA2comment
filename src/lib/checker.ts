import fileType from "./type/fileType";

class checker {

  public isValid(path: string, type: fileType): boolean {
    let p = path.split(".");
    let exp:RegExp;

    if(type == fileType.ImageType){ exp = /(png|git|jpeg|jpg)$/ }
    else if(type == fileType.html){ exp = /.*\.html$/ }

    return exp.test(p[p.length-1].toLowerCase());
  }

}

export default new checker;
