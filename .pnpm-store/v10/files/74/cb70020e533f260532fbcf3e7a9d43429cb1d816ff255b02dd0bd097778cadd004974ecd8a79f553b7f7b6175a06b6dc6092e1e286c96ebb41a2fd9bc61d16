import { describe, expect, it } from "@rstest/core";
import * as __rspack_external_node_fs_5ea92f0c from "node:fs";
import * as __rspack_external_node_path_c5b9b54f from "node:path";
describe('useWindowSize', ()=>{
    it('should have debounce implementation with RESIZE_DEBOUNCE_MS constant', ()=>{
        const filePath = __rspack_external_node_path_c5b9b54f.join(__dirname, 'useWindowSize.ts');
        const fileContent = __rspack_external_node_fs_5ea92f0c.readFileSync(filePath, 'utf-8');
        expect(fileContent).toContain('const RESIZE_DEBOUNCE_MS = 150');
        expect(fileContent).toContain('setTimeout');
        expect(fileContent).toContain('RESIZE_DEBOUNCE_MS');
    });
    it('should clear timeout with conditional check', ()=>{
        const filePath = __rspack_external_node_path_c5b9b54f.join(__dirname, 'useWindowSize.ts');
        const fileContent = __rspack_external_node_fs_5ea92f0c.readFileSync(filePath, 'utf-8');
        expect(fileContent).toContain('if (timeoutId) clearTimeout(timeoutId)');
        expect(fileContent).not.toContain('clearTimeout(timeoutId!)');
    });
    it('should register and cleanup resize event listener', ()=>{
        const filePath = __rspack_external_node_path_c5b9b54f.join(__dirname, 'useWindowSize.ts');
        const fileContent = __rspack_external_node_fs_5ea92f0c.readFileSync(filePath, 'utf-8');
        expect(fileContent).toContain("addEventListener('resize'");
        expect(fileContent).toContain("removeEventListener('resize'");
    });
    it('should set initial size immediately', ()=>{
        const filePath = __rspack_external_node_path_c5b9b54f.join(__dirname, 'useWindowSize.ts');
        const fileContent = __rspack_external_node_fs_5ea92f0c.readFileSync(filePath, 'utf-8');
        const setStateMatch = fileContent.match(/setSize\(\{[^}]+\}\)/g);
        expect(setStateMatch).toBeTruthy();
        expect(setStateMatch?.length).toBeGreaterThanOrEqual(2);
    });
    it('should export useWindowSize function', async ()=>{
        const module = await import("./useWindowSize.js");
        expect(module.useWindowSize).toBeDefined();
        expect(typeof module.useWindowSize).toBe('function');
    });
});
