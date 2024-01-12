declare class DEFAULT_TOKEN {}

declare class CONFIG {
  static fabulaUltimaOdyssey:any;
  static debug:any;
  static Combat:any;
  static Actor:any;
  static Item:any;
}

declare class game {
  static i18n:any;
  static fabulaUltimaOdyssey:any;
  static user:any;
  static macros:any;
}

declare class Hooks {
    static once(event:string, callback:any);
    static on(name:string, callback:any);
}

declare class ui {
    static notifications:any;
}

declare function renderTemplate(tmpStr:string, ctx:any):any;
declare function duplicate(p:any):any;
declare function mergeObject(a:any, b:any):any;
declare function mergeObject(a:any, b:any, c:_mergeObjectConfig ):any;

class _mergeObjectConfig {
    insertKeys = true;
    insertValues = true;
    overwrite = true;
    recurse = true;
    inplace = true;
    enforceTypes = false;
    performDeletions = false;
  }

  declare class Actors extends IRegisterable {
    static unregisterSheet(name:string, object:any);
    static registerSheet(name:string, object:any, types:any);
  }

  declare class Items extends IRegisterable {
    static unregisterSheet(name:string, object:any);
    static registerSheet(name:string, object:any);
  }