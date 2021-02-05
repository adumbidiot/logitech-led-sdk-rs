var searchIndex = JSON.parse('{\
"logitech_led_sdk":{"doc":"","i":[[4,"DeviceType","logitech_led_sdk","",null,null],[13,"Keyboard","","",0,null],[13,"Mouse","","",0,null],[13,"Mousemat","","",0,null],[13,"Headset","","",0,null],[13,"Speaker","","",0,null],[4,"KeyName","","",null,null],[13,"ESC","","",1,null],[13,"F1","","",1,null],[13,"F2","","",1,null],[13,"F3","","",1,null],[13,"F4","","",1,null],[13,"F5","","",1,null],[13,"F6","","",1,null],[13,"F7","","",1,null],[13,"F8","","",1,null],[13,"F9","","",1,null],[13,"F10","","",1,null],[13,"F11","","",1,null],[13,"F12","","",1,null],[13,"PRINT_SCREEN","","",1,null],[13,"SCROLL_LOCK","","",1,null],[13,"PAUSE_BREAK","","",1,null],[13,"TILDE","","",1,null],[13,"ONE","","",1,null],[13,"TWO","","",1,null],[13,"THREE","","",1,null],[13,"FOUR","","",1,null],[13,"FIVE","","",1,null],[13,"SIX","","",1,null],[13,"SEVEN","","",1,null],[13,"EIGHT","","",1,null],[13,"NINE","","",1,null],[13,"ZERO","","",1,null],[13,"MINUS","","",1,null],[13,"EQUALS","","",1,null],[13,"BACKSPACE","","",1,null],[13,"INSERT","","",1,null],[13,"HOME","","",1,null],[13,"PAGE_UP","","",1,null],[13,"NUM_LOCK","","",1,null],[13,"NUM_SLASH","","",1,null],[13,"NUM_ASTERISK","","",1,null],[13,"NUM_MINUS","","",1,null],[13,"TAB","","",1,null],[13,"Q","","",1,null],[13,"W","","",1,null],[13,"E","","",1,null],[13,"R","","",1,null],[13,"T","","",1,null],[13,"Y","","",1,null],[13,"U","","",1,null],[13,"I","","",1,null],[13,"O","","",1,null],[13,"P","","",1,null],[13,"OPEN_BRACKET","","",1,null],[13,"CLOSE_BRACKET","","",1,null],[13,"BACKSLASH","","",1,null],[13,"KEYBOARD_DELETE","","",1,null],[13,"END","","",1,null],[13,"PAGE_DOWN","","",1,null],[13,"NUM_SEVEN","","",1,null],[13,"NUM_EIGHT","","",1,null],[13,"NUM_NINE","","",1,null],[13,"NUM_PLUS","","",1,null],[13,"CAPS_LOCK","","",1,null],[13,"A","","",1,null],[13,"S","","",1,null],[13,"D","","",1,null],[13,"F","","",1,null],[13,"G","","",1,null],[13,"H","","",1,null],[13,"J","","",1,null],[13,"K","","",1,null],[13,"L","","",1,null],[13,"SEMICOLON","","",1,null],[13,"APOSTROPHE","","",1,null],[13,"ENTER","","",1,null],[13,"NUM_FOUR","","",1,null],[13,"NUM_FIVE","","",1,null],[13,"NUM_SIX","","",1,null],[13,"LEFT_SHIFT","","",1,null],[13,"Z","","",1,null],[13,"X","","",1,null],[13,"C","","",1,null],[13,"V","","",1,null],[13,"B","","",1,null],[13,"N","","",1,null],[13,"M","","",1,null],[13,"COMMA","","",1,null],[13,"PERIOD","","",1,null],[13,"FORWARD_SLASH","","",1,null],[13,"RIGHT_SHIFT","","",1,null],[13,"ARROW_UP","","",1,null],[13,"NUM_ONE","","",1,null],[13,"NUM_TWO","","",1,null],[13,"NUM_THREE","","",1,null],[13,"NUM_ENTER","","",1,null],[13,"LEFT_CONTROL","","",1,null],[13,"LEFT_WINDOWS","","",1,null],[13,"LEFT_ALT","","",1,null],[13,"SPACE","","",1,null],[13,"RIGHT_ALT","","",1,null],[13,"RIGHT_WINDOWS","","",1,null],[13,"APPLICATION_SELECT","","",1,null],[13,"RIGHT_CONTROL","","",1,null],[13,"ARROW_LEFT","","",1,null],[13,"ARROW_DOWN","","",1,null],[13,"ARROW_RIGHT","","",1,null],[13,"NUM_ZERO","","",1,null],[13,"NUM_PERIOD","","",1,null],[13,"G_1","","",1,null],[13,"G_2","","",1,null],[13,"G_3","","",1,null],[13,"G_4","","",1,null],[13,"G_5","","",1,null],[13,"G_6","","",1,null],[13,"G_7","","",1,null],[13,"G_8","","",1,null],[13,"G_9","","",1,null],[13,"G_LOGO","","",1,null],[13,"G_BADGE","","",1,null],[3,"Color","","RGB Color",null,null],[12,"r","","Red",2,null],[12,"g","","Green",2,null],[12,"b","","Blue",2,null],[3,"Sdk","","Entry to Api. This serves as proof of initalization.",null,null],[4,"Target","","Color Targets",null,null],[13,"All","","",3,null],[13,"Monochrome","","",3,null],[13,"PerKeyRgb","","",3,null],[13,"Rgb","","",3,null],[11,"new","","Creates a new color",2,[[]]],[11,"new","","Create a new instance with no name. Returns None on failure.",4,[[],["option",4]]],[11,"new_with_name","","Create a new instance with a name. Returns None on failure…",4,[[],["option",4]]],[11,"get_version","","Returns sdk version. Returns None on failure.",4,[[],["option",4]]],[11,"set_target","","Selects the target channels. Returns true if successful",4,[[["target",4]]]],[11,"set_lighting","","Sets the lighting. Returns true if successful.",4,[[["color",3]]]],[11,"set_lighting_for_key_with_name","","Sets the lighting for a keyboard key by name",4,[[["color",3],["keyname",4]]]],[11,"set_lighting_for_key_with_scan_code","","Sets the lighting for a keyboard key by scan code",4,[[["color",3]]]],[11,"set_lighting_for_key_with_hid_code","","Sets the lighting for a keyboard key by HID code",4,[[["color",3]]]],[11,"set_lighting_for_target_zone","","Sets the lighting for a specific device\'s target zone",4,[[["color",3],["devicetype",4]]]],[11,"flash_lighting","","Returns None if the call fails or any of the time values…",4,[[["color",3],["duration",3]]]],[11,"flash_single_key","","Returns None if the call fails or any of the time values…",4,[[["keyname",4],["color",3],["duration",3]]]],[11,"stop_effects","","Stops all current LED effects",4,[[]]],[11,"stop_effects_on_key","","Stops all LED effects on one key",4,[[["keyname",4]]]],[11,"pulse_lighting","","Returns None if the call fails or any of the time values…",4,[[["color",3],["duration",3]]]],[11,"pulse_single_key","","Returns None if the call fails or any of the time values…",4,[[["color",3],["duration",3],["keyname",4]]]],[11,"save_lighting_for_key","","Saves the current lighting config for the given key",4,[[["keyname",4]]]],[11,"restore_lighting_for_key","","Saves the current lighting config for the given key",4,[[["keyname",4]]]],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_owned","","",0,[[]]],[11,"clone_into","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"to_owned","","",2,[[]]],[11,"clone_into","","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","","",4,[[]]],[11,"into","","",4,[[]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"to_owned","","",3,[[]]],[11,"clone_into","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"clone","","",1,[[],["logiled_keyname",4]]],[11,"clone","","",0,[[],["logiled_devicetype",4]]],[11,"fmt","","",1,[[["formatter",3]],[["result",4],["error",3]]]],[11,"fmt","","",0,[[["formatter",3]],[["result",4],["error",3]]]],[11,"eq","","",0,[[["logiled_devicetype",4]]]],[11,"eq","","",1,[[["logiled_keyname",4]]]],[11,"hash","","",1,[[]]],[11,"hash","","",0,[[]]],[11,"drop","","",4,[[]]],[11,"clone","","",2,[[],["color",3]]],[11,"clone","","",3,[[],["target",4]]],[11,"eq","","",2,[[["color",3]]]],[11,"ne","","",2,[[["color",3]]]],[11,"eq","","",3,[[["target",4]]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]],[11,"fmt","","",3,[[["formatter",3]],["result",6]]],[11,"hash","","",2,[[]]],[11,"hash","","",3,[[]]]],"p":[[4,"DeviceType"],[4,"KeyName"],[3,"Color"],[4,"Target"],[3,"Sdk"]]},\
"logitech_led_sdk_sys":{"doc":"","i":[[4,"LogiLed_KeyName","logitech_led_sdk_sys","",null,null],[13,"ESC","","",0,null],[13,"F1","","",0,null],[13,"F2","","",0,null],[13,"F3","","",0,null],[13,"F4","","",0,null],[13,"F5","","",0,null],[13,"F6","","",0,null],[13,"F7","","",0,null],[13,"F8","","",0,null],[13,"F9","","",0,null],[13,"F10","","",0,null],[13,"F11","","",0,null],[13,"F12","","",0,null],[13,"PRINT_SCREEN","","",0,null],[13,"SCROLL_LOCK","","",0,null],[13,"PAUSE_BREAK","","",0,null],[13,"TILDE","","",0,null],[13,"ONE","","",0,null],[13,"TWO","","",0,null],[13,"THREE","","",0,null],[13,"FOUR","","",0,null],[13,"FIVE","","",0,null],[13,"SIX","","",0,null],[13,"SEVEN","","",0,null],[13,"EIGHT","","",0,null],[13,"NINE","","",0,null],[13,"ZERO","","",0,null],[13,"MINUS","","",0,null],[13,"EQUALS","","",0,null],[13,"BACKSPACE","","",0,null],[13,"INSERT","","",0,null],[13,"HOME","","",0,null],[13,"PAGE_UP","","",0,null],[13,"NUM_LOCK","","",0,null],[13,"NUM_SLASH","","",0,null],[13,"NUM_ASTERISK","","",0,null],[13,"NUM_MINUS","","",0,null],[13,"TAB","","",0,null],[13,"Q","","",0,null],[13,"W","","",0,null],[13,"E","","",0,null],[13,"R","","",0,null],[13,"T","","",0,null],[13,"Y","","",0,null],[13,"U","","",0,null],[13,"I","","",0,null],[13,"O","","",0,null],[13,"P","","",0,null],[13,"OPEN_BRACKET","","",0,null],[13,"CLOSE_BRACKET","","",0,null],[13,"BACKSLASH","","",0,null],[13,"KEYBOARD_DELETE","","",0,null],[13,"END","","",0,null],[13,"PAGE_DOWN","","",0,null],[13,"NUM_SEVEN","","",0,null],[13,"NUM_EIGHT","","",0,null],[13,"NUM_NINE","","",0,null],[13,"NUM_PLUS","","",0,null],[13,"CAPS_LOCK","","",0,null],[13,"A","","",0,null],[13,"S","","",0,null],[13,"D","","",0,null],[13,"F","","",0,null],[13,"G","","",0,null],[13,"H","","",0,null],[13,"J","","",0,null],[13,"K","","",0,null],[13,"L","","",0,null],[13,"SEMICOLON","","",0,null],[13,"APOSTROPHE","","",0,null],[13,"ENTER","","",0,null],[13,"NUM_FOUR","","",0,null],[13,"NUM_FIVE","","",0,null],[13,"NUM_SIX","","",0,null],[13,"LEFT_SHIFT","","",0,null],[13,"Z","","",0,null],[13,"X","","",0,null],[13,"C","","",0,null],[13,"V","","",0,null],[13,"B","","",0,null],[13,"N","","",0,null],[13,"M","","",0,null],[13,"COMMA","","",0,null],[13,"PERIOD","","",0,null],[13,"FORWARD_SLASH","","",0,null],[13,"RIGHT_SHIFT","","",0,null],[13,"ARROW_UP","","",0,null],[13,"NUM_ONE","","",0,null],[13,"NUM_TWO","","",0,null],[13,"NUM_THREE","","",0,null],[13,"NUM_ENTER","","",0,null],[13,"LEFT_CONTROL","","",0,null],[13,"LEFT_WINDOWS","","",0,null],[13,"LEFT_ALT","","",0,null],[13,"SPACE","","",0,null],[13,"RIGHT_ALT","","",0,null],[13,"RIGHT_WINDOWS","","",0,null],[13,"APPLICATION_SELECT","","",0,null],[13,"RIGHT_CONTROL","","",0,null],[13,"ARROW_LEFT","","",0,null],[13,"ARROW_DOWN","","",0,null],[13,"ARROW_RIGHT","","",0,null],[13,"NUM_ZERO","","",0,null],[13,"NUM_PERIOD","","",0,null],[13,"G_1","","",0,null],[13,"G_2","","",0,null],[13,"G_3","","",0,null],[13,"G_4","","",0,null],[13,"G_5","","",0,null],[13,"G_6","","",0,null],[13,"G_7","","",0,null],[13,"G_8","","",0,null],[13,"G_9","","",0,null],[13,"G_LOGO","","",0,null],[13,"G_BADGE","","",0,null],[4,"LogiLed_DeviceType","","",null,null],[13,"Keyboard","","",1,null],[13,"Mouse","","",1,null],[13,"Mousemat","","",1,null],[13,"Headset","","",1,null],[13,"Speaker","","",1,null],[5,"LogiLedInit","","",null,null],[5,"LogiLedInitWithName","","",null,null],[5,"LogiLedGetSdkVersion","","",null,null],[5,"LogiLedGetConfigOptionNumber","","",null,null],[5,"LogiLedGetConfigOptionBool","","",null,null],[5,"LogiLedGetConfigOptionColor","","",null,null],[5,"LogiLedGetConfigOptionRect","","",null,null],[5,"LogiLedGetConfigOptionString","","",null,null],[5,"LogiLedGetConfigOptionKeyInput","","",null,null],[5,"LogiLedGetConfigOptionSelect","","",null,null],[5,"LogiLedGetConfigOptionRange","","",null,null],[5,"LogiLedSetConfigOptionLabel","","",null,null],[5,"LogiLedSetTargetDevice","","",null,null],[5,"LogiLedSaveCurrentLighting","","",null,null],[5,"LogiLedSetLighting","","",null,null],[5,"LogiLedRestoreLighting","","",null,null],[5,"LogiLedFlashLighting","","",null,null],[5,"LogiLedPulseLighting","","",null,null],[5,"LogiLedStopEffects","","",null,null],[5,"LogiLedSetLightingFromBitmap","","",null,null],[5,"LogiLedSetLightingForKeyWithScanCode","","",null,null],[5,"LogiLedSetLightingForKeyWithHidCode","","",null,null],[5,"LogiLedSetLightingForKeyWithQuartzCode","","",null,null],[5,"LogiLedSetLightingForKeyWithKeyName","","",null,null],[5,"LogiLedSaveLightingForKey","","",null,null],[5,"LogiLedRestoreLightingForKey","","",null,null],[5,"LogiLedExcludeKeysFromBitmap","","",null,null],[5,"LogiLedFlashSingleKey","","",null,null],[5,"LogiLedPulseSingleKey","","",null,null],[5,"LogiLedStopEffectsOnKey","","",null,null],[5,"LogiLedSetLightingForTargetZone","","",null,null],[5,"LogiLedShutdown","","",null,null],[17,"LOGI_LED_BITMAP_WIDTH","","",null,null],[17,"LOGI_LED_BITMAP_HEIGHT","","",null,null],[17,"LOGI_LED_BITMAP_BYTES_PER_KEY","","",null,null],[17,"LOGI_LED_BITMAP_SIZE","","",null,null],[17,"LOGI_LED_DURATION_INFINITE","","",null,null],[17,"LOGI_DEVICETYPE_MONOCHROME_ORD","","",null,null],[17,"LOGI_DEVICETYPE_RGB_ORD","","",null,null],[17,"LOGI_DEVICETYPE_PERKEY_RGB_ORD","","",null,null],[17,"LOGI_DEVICETYPE_MONOCHROME","","",null,null],[17,"LOGI_DEVICETYPE_RGB","","",null,null],[17,"LOGI_DEVICETYPE_PERKEY_RGB","","",null,null],[17,"LOGI_DEVICETYPE_ALL","","",null,null],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_owned","","",0,[[]]],[11,"clone_into","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"clone","","",0,[[],["logiled_keyname",4]]],[11,"clone","","",1,[[],["logiled_devicetype",4]]],[11,"eq","","",0,[[["logiled_keyname",4]]]],[11,"eq","","",1,[[["logiled_devicetype",4]]]],[11,"fmt","","",0,[[["formatter",3]],["result",6]]],[11,"fmt","","",1,[[["formatter",3]],["result",6]]],[11,"hash","","",0,[[]]],[11,"hash","","",1,[[]]]],"p":[[4,"LogiLed_KeyName"],[4,"LogiLed_DeviceType"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);