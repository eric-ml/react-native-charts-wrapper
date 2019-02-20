//  Created by xudong wu on 24/02/2017.
//  Copyright © 2017 wuxudong. All rights reserved.
//

#import "React/RCTViewManager.h"
#import "RNChartManagerBridge.h"
#import "RNYAxisChartManagerBridge.h"
#import "RNBarLineChartManagerBridge.h"

@interface RCT_EXTERN_MODULE(RNLineChartManager, RCTViewManager)

EXPORT_BAR_LINE_CHART_BASE_PROPERTIES
RCT_EXTERN_METHOD(resetYAxisMinimum:(nonnull NSNumber *)node axisDependency:(nonnull NSString *)axisDependency)

@end
