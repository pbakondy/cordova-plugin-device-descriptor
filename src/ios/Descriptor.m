#include <sys/types.h>
#include <sys/sysctl.h>
#include "TargetConditionals.h"

#import "Descriptor.h"
#import <Cordova/CDV.h>


@implementation UIDevice (ModelVersion)

- (NSString*)modelVersion {
    size_t size;

    sysctlbyname("hw.machine", NULL, &size, NULL, 0);
    char* machine = malloc(size);
    sysctlbyname("hw.machine", machine, &size, NULL, 0);
    NSString* platform = [NSString stringWithUTF8String:machine];
    free(machine);

    return platform;
}

@end

@implementation Descriptor

- (void)getModel:(CDVInvokedUrlCommand*)command {

  UIDevice *device = [UIDevice currentDevice];
  NSString *modelVersion = [device modelVersion];

//  NSLog(@"ModelVersion: %@", modelVersion);

  CDVPluginResult *pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:modelVersion];

  [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

@end
