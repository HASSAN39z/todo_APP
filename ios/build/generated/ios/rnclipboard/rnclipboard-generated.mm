/**
 * This code was generated by [react-native-codegen](https://www.npmjs.com/package/react-native-codegen).
 *
 * Do not edit this file as changes may cause incorrect behavior and will be lost
 * once the code is regenerated.
 *
 * @generated by codegen project: GenerateModuleObjCpp
 *
 * We create an umbrella header (and corresponding implementation) here since
 * Cxx compilation in BUCK has a limitation: source-code producing genrule()s
 * must have a single output. More files => more genrule()s => slower builds.
 */

#import "rnclipboard.h"


namespace facebook::react {
  
    static facebook::jsi::Value __hostFunction_NativeClipboardModuleSpecJSI_getString(facebook::jsi::Runtime& rt, TurboModule &turboModule, const facebook::jsi::Value* args, size_t count) {
      return static_cast<ObjCTurboModule&>(turboModule).invokeObjCMethod(rt, PromiseKind, "getString", @selector(getString:reject:), args, count);
    }

    static facebook::jsi::Value __hostFunction_NativeClipboardModuleSpecJSI_getStrings(facebook::jsi::Runtime& rt, TurboModule &turboModule, const facebook::jsi::Value* args, size_t count) {
      return static_cast<ObjCTurboModule&>(turboModule).invokeObjCMethod(rt, PromiseKind, "getStrings", @selector(getStrings:reject:), args, count);
    }

    static facebook::jsi::Value __hostFunction_NativeClipboardModuleSpecJSI_getImagePNG(facebook::jsi::Runtime& rt, TurboModule &turboModule, const facebook::jsi::Value* args, size_t count) {
      return static_cast<ObjCTurboModule&>(turboModule).invokeObjCMethod(rt, PromiseKind, "getImagePNG", @selector(getImagePNG:reject:), args, count);
    }

    static facebook::jsi::Value __hostFunction_NativeClipboardModuleSpecJSI_getImageJPG(facebook::jsi::Runtime& rt, TurboModule &turboModule, const facebook::jsi::Value* args, size_t count) {
      return static_cast<ObjCTurboModule&>(turboModule).invokeObjCMethod(rt, PromiseKind, "getImageJPG", @selector(getImageJPG:reject:), args, count);
    }

    static facebook::jsi::Value __hostFunction_NativeClipboardModuleSpecJSI_setImage(facebook::jsi::Runtime& rt, TurboModule &turboModule, const facebook::jsi::Value* args, size_t count) {
      return static_cast<ObjCTurboModule&>(turboModule).invokeObjCMethod(rt, PromiseKind, "setImage", @selector(setImage:resolve:reject:), args, count);
    }

    static facebook::jsi::Value __hostFunction_NativeClipboardModuleSpecJSI_getImage(facebook::jsi::Runtime& rt, TurboModule &turboModule, const facebook::jsi::Value* args, size_t count) {
      return static_cast<ObjCTurboModule&>(turboModule).invokeObjCMethod(rt, PromiseKind, "getImage", @selector(getImage:reject:), args, count);
    }

    static facebook::jsi::Value __hostFunction_NativeClipboardModuleSpecJSI_setString(facebook::jsi::Runtime& rt, TurboModule &turboModule, const facebook::jsi::Value* args, size_t count) {
      return static_cast<ObjCTurboModule&>(turboModule).invokeObjCMethod(rt, VoidKind, "setString", @selector(setString:), args, count);
    }

    static facebook::jsi::Value __hostFunction_NativeClipboardModuleSpecJSI_setStrings(facebook::jsi::Runtime& rt, TurboModule &turboModule, const facebook::jsi::Value* args, size_t count) {
      return static_cast<ObjCTurboModule&>(turboModule).invokeObjCMethod(rt, VoidKind, "setStrings", @selector(setStrings:), args, count);
    }

    static facebook::jsi::Value __hostFunction_NativeClipboardModuleSpecJSI_hasString(facebook::jsi::Runtime& rt, TurboModule &turboModule, const facebook::jsi::Value* args, size_t count) {
      return static_cast<ObjCTurboModule&>(turboModule).invokeObjCMethod(rt, PromiseKind, "hasString", @selector(hasString:reject:), args, count);
    }

    static facebook::jsi::Value __hostFunction_NativeClipboardModuleSpecJSI_hasImage(facebook::jsi::Runtime& rt, TurboModule &turboModule, const facebook::jsi::Value* args, size_t count) {
      return static_cast<ObjCTurboModule&>(turboModule).invokeObjCMethod(rt, PromiseKind, "hasImage", @selector(hasImage:reject:), args, count);
    }

    static facebook::jsi::Value __hostFunction_NativeClipboardModuleSpecJSI_hasURL(facebook::jsi::Runtime& rt, TurboModule &turboModule, const facebook::jsi::Value* args, size_t count) {
      return static_cast<ObjCTurboModule&>(turboModule).invokeObjCMethod(rt, PromiseKind, "hasURL", @selector(hasURL:reject:), args, count);
    }

    static facebook::jsi::Value __hostFunction_NativeClipboardModuleSpecJSI_hasNumber(facebook::jsi::Runtime& rt, TurboModule &turboModule, const facebook::jsi::Value* args, size_t count) {
      return static_cast<ObjCTurboModule&>(turboModule).invokeObjCMethod(rt, PromiseKind, "hasNumber", @selector(hasNumber:reject:), args, count);
    }

    static facebook::jsi::Value __hostFunction_NativeClipboardModuleSpecJSI_hasWebURL(facebook::jsi::Runtime& rt, TurboModule &turboModule, const facebook::jsi::Value* args, size_t count) {
      return static_cast<ObjCTurboModule&>(turboModule).invokeObjCMethod(rt, PromiseKind, "hasWebURL", @selector(hasWebURL:reject:), args, count);
    }

    static facebook::jsi::Value __hostFunction_NativeClipboardModuleSpecJSI_setListener(facebook::jsi::Runtime& rt, TurboModule &turboModule, const facebook::jsi::Value* args, size_t count) {
      return static_cast<ObjCTurboModule&>(turboModule).invokeObjCMethod(rt, VoidKind, "setListener", @selector(setListener), args, count);
    }

    static facebook::jsi::Value __hostFunction_NativeClipboardModuleSpecJSI_removeListener(facebook::jsi::Runtime& rt, TurboModule &turboModule, const facebook::jsi::Value* args, size_t count) {
      return static_cast<ObjCTurboModule&>(turboModule).invokeObjCMethod(rt, VoidKind, "removeListener", @selector(removeListener), args, count);
    }

    static facebook::jsi::Value __hostFunction_NativeClipboardModuleSpecJSI_addListener(facebook::jsi::Runtime& rt, TurboModule &turboModule, const facebook::jsi::Value* args, size_t count) {
      return static_cast<ObjCTurboModule&>(turboModule).invokeObjCMethod(rt, VoidKind, "addListener", @selector(addListener:), args, count);
    }

    static facebook::jsi::Value __hostFunction_NativeClipboardModuleSpecJSI_removeListeners(facebook::jsi::Runtime& rt, TurboModule &turboModule, const facebook::jsi::Value* args, size_t count) {
      return static_cast<ObjCTurboModule&>(turboModule).invokeObjCMethod(rt, VoidKind, "removeListeners", @selector(removeListeners:), args, count);
    }

  NativeClipboardModuleSpecJSI::NativeClipboardModuleSpecJSI(const ObjCTurboModule::InitParams &params)
    : ObjCTurboModule(params) {
      
        methodMap_["getString"] = MethodMetadata {0, __hostFunction_NativeClipboardModuleSpecJSI_getString};
        
        
        methodMap_["getStrings"] = MethodMetadata {0, __hostFunction_NativeClipboardModuleSpecJSI_getStrings};
        
        
        methodMap_["getImagePNG"] = MethodMetadata {0, __hostFunction_NativeClipboardModuleSpecJSI_getImagePNG};
        
        
        methodMap_["getImageJPG"] = MethodMetadata {0, __hostFunction_NativeClipboardModuleSpecJSI_getImageJPG};
        
        
        methodMap_["setImage"] = MethodMetadata {1, __hostFunction_NativeClipboardModuleSpecJSI_setImage};
        
        
        methodMap_["getImage"] = MethodMetadata {0, __hostFunction_NativeClipboardModuleSpecJSI_getImage};
        
        
        methodMap_["setString"] = MethodMetadata {1, __hostFunction_NativeClipboardModuleSpecJSI_setString};
        
        
        methodMap_["setStrings"] = MethodMetadata {1, __hostFunction_NativeClipboardModuleSpecJSI_setStrings};
        
        
        methodMap_["hasString"] = MethodMetadata {0, __hostFunction_NativeClipboardModuleSpecJSI_hasString};
        
        
        methodMap_["hasImage"] = MethodMetadata {0, __hostFunction_NativeClipboardModuleSpecJSI_hasImage};
        
        
        methodMap_["hasURL"] = MethodMetadata {0, __hostFunction_NativeClipboardModuleSpecJSI_hasURL};
        
        
        methodMap_["hasNumber"] = MethodMetadata {0, __hostFunction_NativeClipboardModuleSpecJSI_hasNumber};
        
        
        methodMap_["hasWebURL"] = MethodMetadata {0, __hostFunction_NativeClipboardModuleSpecJSI_hasWebURL};
        
        
        methodMap_["setListener"] = MethodMetadata {0, __hostFunction_NativeClipboardModuleSpecJSI_setListener};
        
        
        methodMap_["removeListener"] = MethodMetadata {0, __hostFunction_NativeClipboardModuleSpecJSI_removeListener};
        
        
        methodMap_["addListener"] = MethodMetadata {1, __hostFunction_NativeClipboardModuleSpecJSI_addListener};
        
        
        methodMap_["removeListeners"] = MethodMetadata {1, __hostFunction_NativeClipboardModuleSpecJSI_removeListeners};
        
  }
} // namespace facebook::react
