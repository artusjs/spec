import { BasicRunner } from './basic';
import type { BasicGlobalContext, BasicModuleScope, BasicRunnerFile, ModuleObject, RunnerRequirer } from './type';
export declare class CommonJsRunner extends BasicRunner {
    protected createGlobalContext(): BasicGlobalContext;
    protected createBaseModuleScope(): BasicModuleScope;
    protected createModuleScope(requireFn: RunnerRequirer, m: ModuleObject, file: BasicRunnerFile): BasicModuleScope;
    protected createRunner(): void;
    protected createMissRequirer(): RunnerRequirer;
    protected createCjsRequirer(): RunnerRequirer;
}
